import React, { useState, useEffect, useMemo } from 'react';
import {
  FileSpreadsheet,
  Download,
  Building2,
  GraduationCap,
  Trophy,
  CheckCircle2,
  Lock,
  Sparkles,
  Plus,
  Check
} from 'lucide-react';
import { getAdminIdentity, fetchAdminApi, getSharedUsersCache, setSharedUsersCache } from '../../utils/adminAuth';
import {
  generateParticipantCountXlsxBlob,
  generateInstituteWiseXlsxBlob,
  generateEventWiseXlsxBlob,
  downloadXlsxBlob
} from '../../utils/xlsxExportTemplates';
import type {
  InstituteSummaryItem,
  InstituteParticipantItem,
  EventParticipantItem
} from '../../utils/xlsxExportTemplates';

export const ExportCsvView: React.FC = () => {
  const { role, isAdeeb, isMamatha } = getAdminIdentity();

  const perms = (() => {
    try {
      const p = localStorage.getItem('adminPermissions');
      return p ? JSON.parse(p) : null;
    } catch {
      return null;
    }
  })();

  const canAccessExport = role === 'admin' || isAdeeb || isMamatha || Boolean(perms?.canExportCSV);

  const [users, setUsers] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [exporting, setExporting] = useState<boolean>(false);
  const [toast, setToast] = useState<{ message: string; type: 'success' | 'info' } | null>(null);

  // Section 1: Include ARKA JAIN University toggle (Default: false / Excluded)
  const [includeAju, setIncludeAju] = useState<boolean>(false);

  // Section 2: Selected Institute filter
  const [selectedInstitute, setSelectedInstitute] = useState<string>('all');

  // Section 3: Selected Event filter
  const [selectedEvent, setSelectedEvent] = useState<string>('all');

  const showToast = (message: string, type: 'success' | 'info' = 'success') => {
    setToast({ message, type });
    setTimeout(() => setToast(null), 3800);
  };

  useEffect(() => {
    if (!canAccessExport) return;

    // Check shared cache first for instantaneous tab switching without network wait
    const cached = getSharedUsersCache();
    if (cached && (cached.users || Array.isArray(cached))) {
      const list = cached.users || cached || [];
      if (Array.isArray(list) && list.length > 0) {
        setUsers(list);
        setLoading(false);
        return;
      }
    }

    const token = localStorage.getItem('adminToken') || localStorage.getItem('dashboardToken');
    setLoading(true);
    fetchAdminApi('/api/admin/users', {
      headers: { Authorization: `Bearer ${token}` }
    })
      .then(res => res.json())
      .then(data => {
        if (data.users && Array.isArray(data.users)) {
          setUsers(data.users);
          setSharedUsersCache(data);
        } else if (Array.isArray(data)) {
          setUsers(data);
          setSharedUsersCache({ users: data });
        }
      })
      .catch((err) => {
        console.error('Failed to load users for Excel export:', err);
      })
      .finally(() => setLoading(false));
  }, [canAccessExport]);

  // Normalization Helpers
  const normalizeInstitute = (u: any): string => {
    const raw = (u.institution || '').trim();
    if (raw === 'School Student') return 'SRI KRISHNA PUBLIC SCHOOL';
    return raw || 'Unknown / Not Specified';
  };

  const isAjuInstitute = (name: string): boolean => {
    const inst = (name || '').toLowerCase().trim();
    return inst.includes('arka') || inst.includes('jain') || inst === 'aju';
  };

  const isScreenshotUploaded = (u: any): boolean => {
    if (u.source !== 'google_form') {
      const url = u.paymentScreenshotUrl || u.noDuesSlipUrl;
      return Boolean(url && typeof url === 'string' && url.trim() && !url.includes('offline-receipt.png'));
    }
    const ssUrl = u.paymentScreenshotUrl;
    if (!ssUrl || typeof ssUrl !== 'string') return false;
    const clean = ssUrl.trim();
    if (
      !clean ||
      clean === 'N/A' ||
      clean === '-' ||
      clean === 'null' ||
      clean === 'undefined' ||
      clean.includes('offline-receipt.png')
    ) {
      return false;
    }
    return clean.startsWith('http://') || clean.startsWith('https://');
  };

  const isPaymentDone = (u: any): boolean => {
    const isExempt = u.isAjuExempt || (u.paymentUTR && u.paymentUTR.startsWith('NODUES-'));
    return Boolean(isExempt || isScreenshotUploaded(u));
  };

  const formatSource = (source?: string): string => {
    if (source === 'google_form') return 'Google Form';
    if (source === 'admin_import') return 'Admin Import';
    return 'Website';
  };

  const formatGender = (gender?: string): string => {
    if (!gender || !gender.trim()) return 'Not Specified';
    const g = gender.trim().toLowerCase();
    if (g === 'male' || g === 'm') return 'Male';
    if (g === 'female' || g === 'f') return 'Female';
    if (g === 'other' || g === 'o') return 'Other';
    return gender.trim();
  };

  const getFormattedDate = (): string => {
    const d = new Date();
    const day = String(d.getDate()).padStart(2, '0');
    const month = String(d.getMonth() + 1).padStart(2, '0');
    const year = d.getFullYear();
    return `${day}/${month}/${year}`;
  };

  // ── 1. Master Institute Headcount Computation ──
  const allInstituteStats = useMemo<InstituteSummaryItem[]>(() => {
    const map = new Map<string, number>();
    users.forEach(u => {
      const inst = normalizeInstitute(u);
      map.set(inst, (map.get(inst) || 0) + 1);
    });
    return Array.from(map.entries())
      .map(([name, count]) => ({ name, count }))
      .sort((a, b) => b.count - a.count || a.name.localeCompare(b.name));
  }, [users]);

  // Section 1: Active Institute List (Filtered by includeAju toggle)
  const section1Institutes = useMemo<InstituteSummaryItem[]>(() => {
    if (includeAju) return allInstituteStats;
    return allInstituteStats.filter(i => !isAjuInstitute(i.name));
  }, [allInstituteStats, includeAju]);

  // Total participants in Section 1 active view
  const section1TotalParticipants = useMemo(() => {
    return section1Institutes.reduce((sum, item) => sum + item.count, 0);
  }, [section1Institutes]);

  // ARKA JAIN University specific count
  const ajuParticipantCount = useMemo(() => {
    const ajuItem = allInstituteStats.find(i => isAjuInstitute(i.name));
    if (ajuItem) return ajuItem.count;
    return users.filter(u => isAjuInstitute(normalizeInstitute(u))).length;
  }, [allInstituteStats, users]);

  // ── 2. Institute Filter Matches ──
  const section2Users = useMemo(() => {
    if (selectedInstitute === 'all') return users;
    return users.filter(u => normalizeInstitute(u) === selectedInstitute);
  }, [users, selectedInstitute]);

  // ── 3. Event List & Matches ──
  const eventStats = useMemo(() => {
    const map = new Map<string, number>();
    users.forEach(u => {
      const evs = (u.registeredEvents || [])
        .map((r: any) => r.event?.name || r.name || r.eventId)
        .filter(Boolean);
      evs.forEach((ev: string) => {
        const clean = ev.trim();
        map.set(clean, (map.get(clean) || 0) + 1);
      });
    });
    return Array.from(map.entries())
      .map(([name, count]) => ({ name, count }))
      .sort((a, b) => b.count - a.count || a.name.localeCompare(b.name));
  }, [users]);

  const section3Users = useMemo(() => {
    if (selectedEvent === 'all') return users;
    return users.filter(u => {
      const evs = (u.registeredEvents || [])
        .map((r: any) => r.event?.name || r.name || r.eventId)
        .filter(Boolean);
      return evs.some((ev: string) => ev.trim() === selectedEvent);
    });
  }, [users, selectedEvent]);

  // ── Data Transformation Helpers for Excel ──
  const mapInstituteParticipants = (list: any[]): InstituteParticipantItem[] => {
    return list.map(u => ({
      regId: u.registrationId || '',
      name: u.name || '',
      paymentStatus: isPaymentDone(u) ? 'Payment Done' : 'Payment Not Done',
      course: u.course || 'N/A',
      semester: u.semester || 'N/A',
      source: formatSource(u.source)
    }));
  };

  const mapEventParticipants = (list: any[]): EventParticipantItem[] => {
    return list.map(u => ({
      regId: u.registrationId || '',
      name: u.name || '',
      gender: formatGender(u.gender),
      contact: u.whatsapp || u.phone || '',
      institute: normalizeInstitute(u),
      course: u.course || 'N/A',
      semester: u.semester || 'N/A',
      source: formatSource(u.source)
    }));
  };

  // ── Section 1 Handler: Participant Count Export (Single Sheet) ──
  const handleExportParticipantCountXlsx = async () => {
    if (section1Institutes.length === 0) {
      showToast('No institution data available to export.', 'info');
      return;
    }
    setExporting(true);
    try {
      const exportDate = getFormattedDate();
      const today = new Date().toISOString().split('T')[0];
      const filename = includeAju
        ? `technika_all_institutes_count_${today}.xlsx`
        : `technika_external_institutes_count_${today}.xlsx`;

      const blob = await generateParticipantCountXlsxBlob({
        exportDate,
        institutes: section1Institutes,
        includeAju
      });

      downloadXlsxBlob(filename, blob);
      showToast(`✓ Exported ${section1Institutes.length} institutions to ${filename}`);
    } catch (err) {
      console.error('Failed to export participant count:', err);
      showToast('Error generating Excel file.', 'info');
    } finally {
      setExporting(false);
    }
  };

  // ── Section 2 Handler: Institute Wise Data Export (Single Sheet) ──
  const handleExportInstituteWiseXlsx = async () => {
    if (section2Users.length === 0) {
      showToast('No participants match the selected institution filter.', 'info');
      return;
    }
    setExporting(true);
    try {
      const exportDate = getFormattedDate();
      const instTitle = selectedInstitute === 'all' ? 'ALL INSTITUTIONS' : selectedInstitute;
      const cleanInstName = selectedInstitute === 'all'
        ? 'all_institutes'
        : selectedInstitute.replace(/[^a-zA-Z0-9_-]/g, '_').substring(0, 30);
      const today = new Date().toISOString().split('T')[0];
      const filename = `technika_institute_${cleanInstName}_${today}.xlsx`;

      const blob = await generateInstituteWiseXlsxBlob({
        instituteName: instTitle,
        exportDate,
        participants: mapInstituteParticipants(section2Users)
      });

      downloadXlsxBlob(filename, blob);
      showToast(`✓ Exported ${section2Users.length} student records for ${instTitle} to ${filename}`);
    } catch (err) {
      console.error('Failed to export institute-wise Excel:', err);
      showToast('Error generating Excel file.', 'info');
    } finally {
      setExporting(false);
    }
  };

  // ── Section 3 Handler: Event Wise Data Export (Single Sheet) ──
  const handleExportEventWiseXlsx = async () => {
    if (section3Users.length === 0) {
      showToast('No participants match the selected event filter.', 'info');
      return;
    }
    setExporting(true);
    try {
      const exportDate = getFormattedDate();
      const eventTitle = selectedEvent === 'all' ? 'ALL EVENTS' : selectedEvent;
      const cleanEventName = selectedEvent === 'all'
        ? 'all_events'
        : selectedEvent.replace(/[^a-zA-Z0-9_-]/g, '_').substring(0, 30);
      const today = new Date().toISOString().split('T')[0];
      const filename = `technika_event_${cleanEventName}_${today}.xlsx`;

      const blob = await generateEventWiseXlsxBlob({
        eventName: eventTitle,
        exportDate,
        participants: mapEventParticipants(section3Users)
      });

      downloadXlsxBlob(filename, blob);
      showToast(`✓ Exported ${section3Users.length} complete records for ${eventTitle} to ${filename}`);
    } catch (err) {
      console.error('Failed to export event-wise Excel:', err);
      showToast('Error generating Excel file.', 'info');
    } finally {
      setExporting(false);
    }
  };

  // Access Guard: Under Admin Access Controls
  if (!canAccessExport) {
    return (
      <div className="clay-export-restricted-page">
        <div className="clay-export-restricted-box">
          <div className="clay-restricted-orb">
            <Lock size={32} className="text-red-500" />
          </div>
          <h2 className="clay-restricted-title">Access Restricted</h2>
          <p className="clay-restricted-desc">
            The <strong>Export Excel</strong> module is protected under Access Control. You do not currently have administrative permission to generate or download dataset exports. Please contact <strong>Adeeb Razi</strong> or an administrator to request export authorization.
          </p>
          <button 
            type="button"
            onClick={() => { window.location.href = '/admin/participants'; }}
            className="clay-restricted-btn"
          >
            ← Return to Participants Directory
          </button>
        </div>

        <style>{`
          .clay-export-restricted-page {
            display: flex;
            align-items: center;
            justify-content: center;
            min-height: calc(100vh - 120px);
            padding: 24px;
            font-family: 'Space Grotesk', sans-serif;
          }
          .clay-export-restricted-box {
            background: #ffffff;
            border-radius: 28px;
            padding: 44px 36px;
            max-width: 520px;
            text-align: center;
            border: 2px solid rgba(255, 255, 255, 0.9);
            box-shadow: 12px 16px 36px rgba(162, 178, 201, 0.35),
              -8px -8px 24px rgba(255, 255, 255, 0.95);
          }
          .clay-restricted-orb {
            width: 72px;
            height: 72px;
            border-radius: 50%;
            background: #fef2f2;
            border: 2px solid #fee2e2;
            display: flex;
            align-items: center;
            justify-content: center;
            margin: 0 auto 20px auto;
            box-shadow: 6px 8px 18px rgba(239, 68, 68, 0.15),
              inset 2px 2px 4px rgba(255, 255, 255, 0.9);
          }
          .clay-restricted-title {
            font-size: 1.4rem;
            font-weight: 800;
            color: #1e293b;
            margin-bottom: 10px;
          }
          .clay-restricted-desc {
            font-size: 0.92rem;
            color: #64748b;
            line-height: 1.6;
            margin-bottom: 24px;
          }
          .clay-restricted-btn {
            padding: 12px 26px;
            border-radius: 14px;
            background: linear-gradient(135deg, #2563eb 0%, #1d4ed8 100%);
            color: #ffffff;
            font-weight: 700;
            font-size: 0.9rem;
            border: none;
            cursor: pointer;
            box-shadow: 4px 6px 16px rgba(37, 99, 235, 0.3);
            transition: transform 0.15s ease, box-shadow 0.15s ease;
          }
          .clay-restricted-btn:hover {
            transform: translateY(-2px);
            box-shadow: 6px 10px 20px rgba(37, 99, 235, 0.4);
          }
        `}</style>
      </div>
    );
  }

  return (
    <div className="clay-export-view">
      {/* ── Toast Notification ── */}
      {toast && (
        <div className={`clay-toast ${toast.type}`}>
          <CheckCircle2 size={18} />
          <span>{toast.message}</span>
        </div>
      )}

      {/* ── Page Header ── */}
      <div className="clay-page-header">
        <div className="clay-page-header-info">
          <div className="clay-header-tag">
            <Sparkles size={14} className="text-emerald-500 animate-pulse" />
            <span>TECHNIKA 6.0 OFFICIAL EXCEL CENTER (.XLSX)</span>
          </div>
          <h1 className="clay-page-title flex items-center gap-2.5">
            <FileSpreadsheet size={28} className="text-emerald-600" />
            <span>Export Excel Center</span>
          </h1>
        </div>

        <div className="clay-header-actions">
          <div className="clay-access-pill">
            <span className="clay-access-dot" />
            <span>Admin Control Active</span>
          </div>
        </div>
      </div>

      {/* ── 1. ALL INSTITUTE NAMES & PARTICIPANT COUNTS ── */}
      <div className="clay-card clay-export-section">
        <div className="clay-section-top">
          <div className="clay-section-icon" style={{ background: '#eff6ff', color: '#2563eb' }}>
            <Building2 size={24} />
          </div>
          <div className="clay-section-text">
            <h2 className="clay-section-title" style={{ color: '#2563eb' }}>All Institute Names &amp; Participant Counts</h2>
            <p className="clay-section-desc">
              Generates <strong>PARTICIPANT COUNT</strong> sheet with official university banner, Avinya logo, and black grid borders.
            </p>
          </div>
        </div>

        {/* Section 1 ARKA JAIN University Small Toggle Button */}
        <div style={{ margin: '2px 0 6px 0' }}>
          <button
            type="button"
            onClick={() => {
              const next = !includeAju;
              setIncludeAju(next);
              showToast(
                next
                  ? `✓ ARKA JAIN University (${ajuParticipantCount}) included`
                  : `✓ ARKA JAIN University excluded`
              );
            }}
            className={`clay-mini-aju-btn ${includeAju ? 'active' : ''}`}
            title={includeAju ? 'Click to exclude ARKA JAIN University' : 'Click to include ARKA JAIN University'}
          >
            {includeAju ? (
              <>
                <Check size={14} strokeWidth={2.5} />
                <span>ARKA JAIN Included ({ajuParticipantCount})</span>
              </>
            ) : (
              <>
                <Plus size={14} strokeWidth={2.5} />
                <span>Include ARKA JAIN (+{ajuParticipantCount})</span>
              </>
            )}
          </button>
        </div>

        {/* Section 1 Meta & Summary */}
        <div className="clay-section-meta-row">
          <div className="clay-meta-chip">
            <span className="clay-meta-chip-num">{loading ? '...' : section1Institutes.length}</span>
            <span className="clay-meta-chip-label">
              {includeAju ? 'Total Institutions' : 'External Institutions'}
            </span>
          </div>
          <div className="clay-meta-chip">
            <span className="clay-meta-chip-num">{loading ? '...' : section1TotalParticipants}</span>
            <span className="clay-meta-chip-label">
              {includeAju ? 'Total Participants' : 'External Participants'}
            </span>
          </div>
          <div className="clay-meta-preview">
            <span className="clay-preview-label">Top {includeAju ? 'Institutions' : 'External Colleges'}:</span>
            {section1Institutes.slice(0, 3).map((inst, idx) => (
              <span key={idx} className="clay-preview-pill">
                {inst.name.length > 28 ? `${inst.name.substring(0, 26)}...` : inst.name} <strong>({inst.count})</strong>
              </span>
            ))}
          </div>
        </div>

        {/* Section 1 Action */}
        <div className="clay-section-action-row">
          <button
            type="button"
            onClick={handleExportParticipantCountXlsx}
            disabled={loading || exporting || section1Institutes.length === 0}
            className="clay-action-btn primary"
          >
            <Download size={18} />
            <span>
              {includeAju
                ? 'Export All Institutes (.xlsx)'
                : 'Export External Institutes (.xlsx)'}
            </span>
          </button>
          <span className="clay-action-hint">
            Generates a clean spreadsheet with <strong>Institute Name</strong> and <strong>Participant Count</strong>.
          </span>
        </div>
      </div>

      {/* ── 2. INSTITUTE-WISE PARTICIPANT EXPORT ── */}
      <div className="clay-card clay-export-section">
        <div className="clay-section-top">
          <div className="clay-section-icon" style={{ background: '#f5f3ff', color: '#7c3aed' }}>
            <GraduationCap size={24} />
          </div>
          <div className="clay-section-text">
            <h2 className="clay-section-title" style={{ color: '#7c3aed' }}>Institute-Wise Participant Export</h2>
            <p className="clay-section-desc">
              Generates <strong>Institute Wise Data</strong> sheet with official headers, institution title, payment status, and course details.
            </p>
          </div>
        </div>

        {/* Section 2 Controls */}
        <div className="clay-filter-box">
          <div className="clay-filter-row">
            <div className="clay-filter-field flex-1">
              <label className="clay-field-label">Select Institution to Export:</label>
              <div className="clay-select-wrapper">
                <select
                  value={selectedInstitute}
                  onChange={(e) => setSelectedInstitute(e.target.value)}
                  className="clay-select"
                >
                  <option value="all">🌐 All Institutions ({users.length} participants)</option>
                  {allInstituteStats.map((inst, idx) => (
                    <option key={idx} value={inst.name}>
                      {inst.name} ({inst.count} {inst.count === 1 ? 'participant' : 'participants'})
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>

          <div className="clay-filter-summary">
            <span className="clay-filter-badge">
              {selectedInstitute === 'all' ? 'All Institutions Selected' : selectedInstitute}
            </span>
            <span className="clay-filter-count">
              Matched: <strong>{section2Users.length}</strong> participants
            </span>
          </div>
        </div>

        {/* Section 2 Action */}
        <div className="clay-section-action-row">
          <button
            type="button"
            onClick={handleExportInstituteWiseXlsx}
            disabled={loading || exporting || section2Users.length === 0}
            className="clay-action-btn purple"
          >
            <Download size={18} />
            <span>Export Institute Wise Data (.xlsx)</span>
          </button>
          <span className="clay-action-hint">
            Generates a detailed spreadsheet with <strong>Registration ID</strong>, <strong>Name</strong>, <strong>Payment Status</strong>, and <strong>Semester</strong>.
          </span>
        </div>
      </div>

      {/* ── 3. EVENT-WISE PARTICIPANT EXPORT (COMPLETE DETAILS) ── */}
      <div className="clay-card clay-export-section">
        <div className="clay-section-top">
          <div className="clay-section-icon" style={{ background: '#ecfdf5', color: '#059669' }}>
            <Trophy size={24} />
          </div>
          <div className="clay-section-text">
            <h2 className="clay-section-title" style={{ color: '#059669' }}>Event-Wise Participant Export (Complete Details)</h2>
            <p className="clay-section-desc">
              Generates <strong>Event Wise Data</strong> sheet with event title, full participant records, gender, and contact details.
            </p>
          </div>
        </div>

        {/* Section 3 Controls */}
        <div className="clay-filter-box">
          <div className="clay-filter-row">
            <div className="clay-filter-field flex-1">
              <label className="clay-field-label">Select Event to Export:</label>
              <div className="clay-select-wrapper">
                <select
                  value={selectedEvent}
                  onChange={(e) => setSelectedEvent(e.target.value)}
                  className="clay-select"
                >
                  <option value="all">🏆 All Events (Full Database: {users.length} participants)</option>
                  {eventStats.map((ev, idx) => (
                    <option key={idx} value={ev.name}>
                      {ev.name} ({ev.count} {ev.count === 1 ? 'registration' : 'registrations'})
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>

          <div className="clay-filter-summary">
            <span className="clay-filter-badge green">
              {selectedEvent === 'all' ? 'All Events Selected' : selectedEvent}
            </span>
            <span className="clay-filter-count">
              Matched: <strong>{section3Users.length}</strong> participants
            </span>
          </div>
        </div>

        {/* Section 3 Action */}
        <div className="clay-section-action-row">
          <button
            type="button"
            onClick={handleExportEventWiseXlsx}
            disabled={loading || exporting || section3Users.length === 0}
            className="clay-action-btn emerald"
          >
            <Download size={18} />
            <span>Export Event Wise Data (.xlsx)</span>
          </button>
          <span className="clay-action-hint">
            Generates a comprehensive event registration spreadsheet with <strong>Contact</strong>, <strong>Gender</strong>, and <strong>College</strong>.
          </span>
        </div>
      </div>

      {/* ── Claymorphism Styles ── */}
      <style>{`
        .clay-export-view {
          padding: 28px 36px 60px 36px;
          display: flex;
          flex-direction: column;
          gap: 26px;
          font-family: 'Space Grotesk', sans-serif;
          max-width: 1400px;
          margin: 0 auto;
          position: relative;
        }

        /* ── Toast ── */
        .clay-toast {
          position: fixed;
          top: 24px;
          right: 28px;
          z-index: 9999;
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 14px 22px;
          border-radius: 16px;
          background: #ffffff;
          box-shadow: 0 12px 36px rgba(15, 23, 42, 0.18), 0 2px 8px rgba(15, 23, 42, 0.08);
          border: 1.5px solid #e2e8f0;
          font-weight: 700;
          font-size: 0.92rem;
          color: #0f172a;
          animation: slideInToast 0.25s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .clay-toast.success {
          border-left: 5px solid #10b981;
          color: #065f46;
        }
        .clay-toast.info {
          border-left: 5px solid #3b82f6;
          color: #1e40af;
        }

        @keyframes slideInToast {
          from {
            opacity: 0;
            transform: translateY(-12px) scale(0.96);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }

        /* ── Header ── */
        .clay-page-header {
          display: flex;
          align-items: flex-start;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 18px;
          padding-bottom: 6px;
        }
        .clay-header-tag {
          display: inline-flex;
          align-items: center;
          gap: 7px;
          background: #ecfdf5;
          border: 1px solid #d1fae5;
          color: #059669;
          padding: 5px 12px;
          border-radius: 999px;
          font-size: 0.72rem;
          font-weight: 800;
          letter-spacing: 0.05em;
          margin-bottom: 10px;
        }
        .clay-page-title {
          font-size: 1.95rem;
          font-weight: 900;
          color: #0f172a;
          letter-spacing: -0.02em;
          margin: 0;
        }
        .clay-page-subtitle {
          font-size: 0.94rem;
          color: #64748b;
          margin-top: 6px;
          max-width: 780px;
          line-height: 1.5;
        }

        .clay-header-actions {
          display: flex;
          align-items: center;
          gap: 12px;
          flex-wrap: wrap;
        }
        .clay-master-export-btn {
          display: inline-flex;
          align-items: center;
          gap: 12px;
          padding: 10px 20px;
          border-radius: 16px;
          background: linear-gradient(135deg, #059669 0%, #047857 100%);
          color: #ffffff;
          border: none;
          cursor: pointer;
          box-shadow: 0 6px 18px rgba(5, 150, 105, 0.35);
          transition: transform 0.15s ease, box-shadow 0.15s ease;
        }
        .clay-master-export-btn:hover:not(:disabled) {
          transform: translateY(-2px);
          box-shadow: 0 10px 24px rgba(5, 150, 105, 0.45);
        }
        .clay-master-export-btn:disabled {
          opacity: 0.6;
          cursor: not-allowed;
        }

        .clay-access-pill {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 7px 15px;
          border-radius: 999px;
          background: #ffffff;
          border: 1.5px solid #e2e8f0;
          font-size: 0.78rem;
          font-weight: 700;
          color: #0f172a;
          box-shadow: 0 2px 6px rgba(15, 23, 42, 0.04);
        }
        .clay-access-dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: #10b981;
          box-shadow: 0 0 0 3px rgba(16, 185, 129, 0.2);
        }

        /* ── 3 Sheets Overview Card ── */
        .clay-sheets-overview-card {
          display: flex;
          align-items: center;
          gap: 16px;
          padding: 16px 22px;
          border-radius: 20px;
          background: linear-gradient(135deg, #f0fdf4 0%, #ecfdf5 100%);
          border: 1.5px solid #bbf7d0;
          box-shadow: 0 4px 16px rgba(16, 185, 129, 0.08);
        }
        .clay-overview-icon {
          width: 44px;
          height: 44px;
          border-radius: 12px;
          background: #ffffff;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          box-shadow: 0 2px 6px rgba(5, 150, 105, 0.15);
        }
        .clay-overview-title {
          font-size: 0.95rem;
          font-weight: 800;
          color: #065f46;
          margin-bottom: 3px;
        }
        .clay-overview-desc {
          font-size: 0.86rem;
          color: #047857;
          line-height: 1.45;
        }

        /* ── Card Container ── */
        .clay-card {
          background: #ffffff;
          border-radius: 26px;
          padding: 30px 32px;
          border: 1.5px solid #edf2f7;
          box-shadow: 0 10px 28px rgba(148, 163, 184, 0.14),
            -4px -4px 16px rgba(255, 255, 255, 0.9);
          display: flex;
          flex-direction: column;
          gap: 20px;
          position: relative;
        }

        /* ── Section Top ── */
        .clay-section-top {
          display: flex;
          align-items: flex-start;
          gap: 18px;
        }
        .clay-section-icon {
          width: 52px;
          height: 52px;
          border-radius: 16px;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          box-shadow: inset 1px 1px 3px rgba(255, 255, 255, 0.9),
            0 4px 12px rgba(15, 23, 42, 0.08);
        }
        .clay-sheet-tag {
          display: inline-block;
          font-size: 0.7rem;
          font-weight: 800;
          letter-spacing: 0.05em;
          color: #2563eb;
          background: #eff6ff;
          padding: 3px 9px;
          border-radius: 6px;
          margin-bottom: 6px;
        }
        .clay-sheet-tag.purple {
          color: #7c3aed;
          background: #f5f3ff;
        }
        .clay-sheet-tag.green {
          color: #059669;
          background: #ecfdf5;
        }
        .clay-section-title {
          font-size: 1.3rem;
          font-weight: 800;
          color: #1e293b;
          margin-bottom: 4px;
        }
        .clay-section-desc {
          font-size: 0.88rem;
          color: #64748b;
          line-height: 1.5;
        }

        /* ── ARKA JAIN Mini Button ── */
        .clay-mini-aju-btn {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          padding: 6px 14px;
          border-radius: 9999px;
          font-size: 0.82rem;
          font-weight: 700;
          cursor: pointer;
          border: 1.5px solid #cbd5e1;
          background: #ffffff;
          color: #475569;
          font-family: 'Space Grotesk', sans-serif;
          transition: all 0.15s ease;
          box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);
        }
        .clay-mini-aju-btn:hover {
          background: #f8fafc;
          border-color: #94a3b8;
          color: #1e293b;
        }
        .clay-mini-aju-btn.active {
          background: #eff6ff;
          border-color: #3b82f6;
          color: #1d4ed8;
          font-weight: 800;
          box-shadow: 0 2px 8px rgba(59, 130, 246, 0.2);
        }

        /* ── Meta Row ── */
        .clay-section-meta-row {
          display: flex;
          align-items: center;
          gap: 16px;
          flex-wrap: wrap;
        }
        .clay-meta-chip {
          display: flex;
          flex-direction: column;
          padding: 10px 18px;
          border-radius: 16px;
          background: #f8fafc;
          border: 1.5px solid #e2e8f0;
          min-width: 140px;
        }
        .clay-meta-chip-num {
          font-size: 1.45rem;
          font-weight: 900;
          color: #0f172a;
          line-height: 1.1;
        }
        .clay-meta-chip-label {
          font-size: 0.72rem;
          font-weight: 700;
          color: #64748b;
          text-transform: uppercase;
          letter-spacing: 0.04em;
          margin-top: 4px;
        }
        .clay-meta-preview {
          display: flex;
          align-items: center;
          gap: 8px;
          flex-wrap: wrap;
          padding: 8px 12px;
          border-radius: 14px;
          background: #f8fafc;
          flex: 1;
        }
        .clay-preview-label {
          font-size: 0.78rem;
          font-weight: 700;
          color: #64748b;
        }
        .clay-preview-pill {
          font-size: 0.78rem;
          padding: 4px 10px;
          border-radius: 8px;
          background: #ffffff;
          border: 1px solid #e2e8f0;
          color: #334155;
        }

        /* ── Filter Box ── */
        .clay-filter-box {
          display: flex;
          flex-direction: column;
          gap: 12px;
          background: #f8fafc;
          border: 1.5px solid #e2e8f0;
          padding: 16px 20px;
          border-radius: 20px;
        }
        .clay-filter-row {
          display: flex;
          align-items: flex-end;
          gap: 14px;
          flex-wrap: wrap;
        }
        .clay-filter-field {
          display: flex;
          flex-direction: column;
          gap: 6px;
        }
        .clay-field-label {
          font-size: 0.78rem;
          font-weight: 800;
          color: #475569;
          text-transform: uppercase;
          letter-spacing: 0.03em;
        }
        .clay-select-wrapper {
          position: relative;
        }
        .clay-select {
          width: 100%;
          padding: 11px 16px;
          border-radius: 12px;
          border: 1.5px solid #cbd5e1;
          background: #ffffff;
          font-size: 0.9rem;
          font-weight: 700;
          color: #0f172a;
          cursor: pointer;
          font-family: 'Space Grotesk', sans-serif;
          outline: none;
          transition: border-color 0.15s ease;
        }
        .clay-select:focus {
          border-color: #2563eb;
        }
        .clay-input-wrapper {
          position: relative;
          display: flex;
          align-items: center;
        }
        .clay-input-icon {
          position: absolute;
          left: 12px;
          color: #94a3b8;
          pointer-events: none;
        }
        .clay-text-input {
          padding: 11px 14px 11px 36px;
          border-radius: 12px;
          border: 1.5px solid #cbd5e1;
          background: #ffffff;
          font-size: 0.88rem;
          font-weight: 600;
          color: #0f172a;
          outline: none;
          min-width: 240px;
          font-family: 'Space Grotesk', sans-serif;
          transition: border-color 0.15s ease;
        }
        .clay-text-input:focus {
          border-color: #2563eb;
        }
        .clay-filter-summary {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding-top: 4px;
          font-size: 0.82rem;
          color: #64748b;
        }
        .clay-filter-badge {
          display: inline-block;
          padding: 3px 10px;
          border-radius: 8px;
          background: #eff6ff;
          color: #2563eb;
          font-weight: 700;
          border: 1px solid #bfdbfe;
        }
        .clay-filter-badge.green {
          background: #ecfdf5;
          color: #059669;
          border-color: #a7f3d0;
        }
        .clay-filter-count strong {
          color: #0f172a;
        }

        /* ── Action Row ── */
        .clay-section-action-row {
          display: flex;
          align-items: center;
          gap: 16px;
          flex-wrap: wrap;
          padding-top: 4px;
        }
        .clay-action-btn {
          display: inline-flex;
          align-items: center;
          gap: 9px;
          padding: 13px 26px;
          border-radius: 14px;
          font-size: 0.92rem;
          font-weight: 800;
          letter-spacing: 0.01em;
          border: none;
          cursor: pointer;
          font-family: 'Space Grotesk', sans-serif;
          transition: transform 0.15s ease, box-shadow 0.15s ease;
          color: #ffffff;
        }
        .clay-action-btn:hover:not(:disabled) {
          transform: translateY(-2px);
        }
        .clay-action-btn:disabled {
          opacity: 0.55;
          cursor: not-allowed;
          transform: none;
        }
        .clay-action-btn.primary {
          background: linear-gradient(135deg, #2563eb 0%, #1d4ed8 100%);
          box-shadow: 4px 6px 16px rgba(37, 99, 235, 0.35);
        }
        .clay-action-btn.purple {
          background: linear-gradient(135deg, #7c3aed 0%, #6d28d9 100%);
          box-shadow: 4px 6px 16px rgba(124, 58, 237, 0.35);
        }
        .clay-action-btn.emerald {
          background: linear-gradient(135deg, #059669 0%, #047857 100%);
          box-shadow: 4px 6px 16px rgba(5, 150, 105, 0.35);
        }
        .clay-action-hint {
          font-size: 0.85rem;
          color: #64748b;
          line-height: 1.4;
        }
        .clay-action-hint strong {
          color: #334155;
        }

        @media (max-width: 768px) {
          .clay-export-view {
            padding: 12px 0 40px 0;
            width: 100%;
          }
          .clay-card {
            padding: 18px 14px;
            border-radius: 18px;
          }
          .clay-page-title {
            font-size: 1.35rem;
          }
          .clay-section-action-row {
            flex-direction: column;
            align-items: stretch;
            gap: 10px;
          }
          .clay-select {
            width: 100% !important;
          }
          .clay-filter-row {
            flex-direction: column;
            align-items: stretch;
          }
          .clay-filter-field {
            width: 100%;
          }
          .clay-meta-chip {
            width: 100%;
            min-width: unset;
          }
          .clay-text-input {
            min-width: 100%;
          }
          .clay-action-btn {
            width: 100%;
            justify-content: center;
          }
          .clay-action-hint {
            text-align: center;
          }
        }
      `}</style>
    </div>
  );
};
