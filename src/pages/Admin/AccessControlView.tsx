import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const API = import.meta.env.VITE_API_URL || 'https://reg.technika2026.online';

interface PermissionConfig {
  targetKey: string;
  title: string;
  canViewParticipants: boolean;
  canViewContactInfo: boolean;
  canViewFinancials: boolean;
  canViewDocuments: boolean;
  canViewTeams: boolean;
  canViewAnalytics: boolean;
  canViewDeveloperHub: boolean;
  canVerifyPayments: boolean;
  canDeleteParticipants: boolean;
  canEditTeams: boolean;
  canExportCSV: boolean;
  canCheckInParticipants: boolean;
  assignedEvents: string[];
  updatedBy?: string;
  updatedAt?: string;
}

const DEFAULT_PERMS: Record<'faculty' | 'coordinator', PermissionConfig> = {
  faculty: {
    targetKey: 'faculty',
    title: 'Faculty Coordinator',
    canViewParticipants: true,
    canViewContactInfo: true,
    canViewFinancials: true,
    canViewDocuments: true,
    canViewTeams: true,
    canViewAnalytics: true,
    canViewDeveloperHub: false,
    canVerifyPayments: true,
    canDeleteParticipants: false,
    canEditTeams: true,
    canExportCSV: true,
    canCheckInParticipants: true,
    assignedEvents: [],
  },
  coordinator: {
    targetKey: 'coordinator',
    title: 'Student Coordinator',
    canViewParticipants: true,
    canViewContactInfo: true,
    canViewFinancials: false,
    canViewDocuments: false,
    canViewTeams: true,
    canViewAnalytics: false,
    canViewDeveloperHub: false,
    canVerifyPayments: false,
    canDeleteParticipants: false,
    canEditTeams: false,
    canExportCSV: false,
    canCheckInParticipants: true,
    assignedEvents: [],
  },
};

export const AccessControlView: React.FC = () => {
  const navigate = useNavigate();
  const currentRole = localStorage.getItem('adminRole');

  // Strict Administrator access check
  if (currentRole !== 'admin') {
    return (
      <div className="clay-access-denied">
        <div className="clay-denied-card">
          <span className="clay-denied-icon">🔒</span>
          <h2>Access Restricted to Administrators</h2>
          <p>Only Root Administrators can assign role permissions and configure coordinator clearances.</p>
          <button onClick={() => navigate('/admin')} className="clay-denied-btn">
            Return to Profile
          </button>
        </div>
      </div>
    );
  }

  const [activeTab, setActiveTab] = useState<'faculty' | 'coordinator'>('faculty');
  const [facultyPerms, setFacultyPerms] = useState<PermissionConfig>(DEFAULT_PERMS.faculty);
  const [coordinatorPerms, setCoordinatorPerms] = useState<PermissionConfig>(DEFAULT_PERMS.coordinator);
  const [staffList, setStaffList] = useState<{ faculty: any[]; coordinators: any[] }>({ faculty: [], coordinators: [] });
  const [loading, setLoading] = useState<boolean>(true);
  const [saving, setSaving] = useState<boolean>(false);
  const [saveToast, setSaveToast] = useState<{ message: string; type: 'success' | 'error' } | null>(null);

  // Fetch permissions matrix from backend
  useEffect(() => {
    const fetchPermissions = async () => {
      try {
        const token = localStorage.getItem('adminToken');
        const res = await fetch(`${API}/api/admin/permissions`, {
          headers: { Authorization: `Bearer ${token}` },
        });

        if (res.ok) {
          const data = await res.json();
          if (data.faculty) setFacultyPerms(data.faculty);
          if (data.coordinator) setCoordinatorPerms(data.coordinator);
          if (data.staffList) setStaffList(data.staffList);
        }
      } catch (err) {
        console.warn('Could not fetch remote permissions, using local defaults', err);
      } finally {
        setLoading(false);
      }
    };

    fetchPermissions();
  }, []);

  const activePerms = activeTab === 'faculty' ? facultyPerms : coordinatorPerms;
  const setActivePerms = activeTab === 'faculty' ? setFacultyPerms : setCoordinatorPerms;

  const handleToggle = (key: keyof PermissionConfig) => {
    setActivePerms((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  const handleSave = async () => {
    setSaving(true);
    try {
      const token = localStorage.getItem('adminToken');
      const res = await fetch(`${API}/api/admin/permissions`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(activePerms),
      });

      const data = await res.json();
      if (res.ok) {
        setSaveToast({ message: data.message || `Permissions saved for ${activePerms.title}`, type: 'success' });
        setTimeout(() => setSaveToast(null), 3000);
      } else {
        setSaveToast({ message: data.message || 'Failed to save permissions', type: 'error' });
      }
    } catch (err) {
      setSaveToast({ message: 'Network error while updating access controls', type: 'error' });
    } finally {
      setSaving(false);
    }
  };

  const handleResetDefaults = () => {
    if (window.confirm(`Reset ${activePerms.title} permissions back to standard recommended defaults?`)) {
      setActivePerms(DEFAULT_PERMS[activeTab]);
    }
  };

  return (
    <div className="clay-access-page">
      {/* ── Top Header ── */}
      <div className="clay-access-header">
        <div className="clay-header-left">
          <div className="clay-header-emblem">🛡️</div>
          <div>
            <h1 className="clay-page-title">ACCESS CONTROL &amp; PERMISSIONS</h1>
            <p className="clay-page-subtitle">
              Administrator authority: configure what Faculty and Student Coordinators can see and edit.
            </p>
          </div>
        </div>
        <div className="clay-admin-tag">
          <span className="clay-dot-live" />
          <span>{loading ? 'SYNCING MATRIX...' : 'ROOT ADMIN CLEARANCE'}</span>
        </div>
      </div>

      {/* ── Save Notification Toast ── */}
      {saveToast && (
        <div className={`clay-toast ${saveToast.type}`}>
          <span>{saveToast.type === 'success' ? '✓' : '⚠️'}</span>
          <span>{saveToast.message}</span>
        </div>
      )}

      {/* ── Role Tab Selector ── */}
      <div className="clay-role-tabs-bar">
        <button
          className={`clay-role-tab ${activeTab === 'faculty' ? 'active faculty' : ''}`}
          onClick={() => setActiveTab('faculty')}
        >
          <span className="tab-icon">🎓</span>
          <div className="tab-text">
            <span className="tab-title">Faculty Coordinators</span>
            <span className="tab-sub">Professors, Convenors &amp; Event Leads ({staffList.faculty.length || 9} staff)</span>
          </div>
        </button>

        <button
          className={`clay-role-tab ${activeTab === 'coordinator' ? 'active coordinator' : ''}`}
          onClick={() => setActiveTab('coordinator')}
        >
          <span className="tab-icon">⚡</span>
          <div className="tab-text">
            <span className="tab-title">Student Coordinators</span>
            <span className="tab-sub">On-ground volunteers &amp; desk organizers ({staffList.coordinators.length || 13} staff)</span>
          </div>
        </button>
      </div>

      {/* ── Main Permissions Panel ── */}
      <div className="clay-permissions-container">
        
        {/* Section 1: WHAT THEY CAN SEE (View Access) */}
        <div className="clay-panel-card">
          <div className="clay-panel-head">
            <div className="head-icon eye-blue">👁️</div>
            <div>
              <h2 className="clay-panel-title">WHAT THEY CAN SEE (READ ACCESS)</h2>
              <p className="clay-panel-desc">Controls data visibility across the Participants, Teams, and Analytics views.</p>
            </div>
          </div>

          <div className="clay-toggles-grid">
            {/* View Participants */}
            <div className="clay-toggle-card">
              <div className="toggle-info">
                <span className="toggle-title">View Participant Directory</span>
                <span className="toggle-desc">Access registered student names, college/institution, and enrolled events.</span>
              </div>
              <label className="clay-switch">
                <input
                  type="checkbox"
                  checked={activePerms.canViewParticipants}
                  onChange={() => handleToggle('canViewParticipants')}
                />
                <span className="clay-slider" />
              </label>
            </div>

            {/* View Contact Info */}
            <div className="clay-toggle-card">
              <div className="toggle-info">
                <span className="toggle-title">View Contact Information</span>
                <span className="toggle-desc">Show participant Gmail addresses and WhatsApp phone numbers in directories.</span>
              </div>
              <label className="clay-switch">
                <input
                  type="checkbox"
                  checked={activePerms.canViewContactInfo}
                  onChange={() => handleToggle('canViewContactInfo')}
                />
                <span className="clay-slider" />
              </label>
            </div>

            {/* View Financials */}
            <div className="clay-toggle-card">
              <div className="toggle-info">
                <span className="toggle-title">View Financial &amp; Payment Data</span>
                <span className="toggle-desc">Inspect 12-digit UPI UTR numbers, fee transaction amounts, and exemption records.</span>
              </div>
              <label className="clay-switch">
                <input
                  type="checkbox"
                  checked={activePerms.canViewFinancials}
                  onChange={() => handleToggle('canViewFinancials')}
                />
                <span className="clay-slider" />
              </label>
            </div>

            {/* View Documents */}
            <div className="clay-toggle-card">
              <div className="toggle-info">
                <span className="toggle-title">View Verification Documents</span>
                <span className="toggle-desc">Access side-by-side viewer for UPI payment screenshots, ₹600 No-Dues slips &amp; College IDs.</span>
              </div>
              <label className="clay-switch">
                <input
                  type="checkbox"
                  checked={activePerms.canViewDocuments}
                  onChange={() => handleToggle('canViewDocuments')}
                />
                <span className="clay-slider" />
              </label>
            </div>

            {/* View Teams */}
            <div className="clay-toggle-card">
              <div className="toggle-info">
                <span className="toggle-title">View Formed Teams &amp; Rosters</span>
                <span className="toggle-desc">Inspect team join codes, member lists, and leader contact numbers.</span>
              </div>
              <label className="clay-switch">
                <input
                  type="checkbox"
                  checked={activePerms.canViewTeams}
                  onChange={() => handleToggle('canViewTeams')}
                />
                <span className="clay-slider" />
              </label>
            </div>

            {/* View Analytics */}
            <div className="clay-toggle-card">
              <div className="toggle-info">
                <span className="toggle-title">View Festival Analytics</span>
                <span className="toggle-desc">Access live dashboard revenue summaries, gender ratios, and departmental charts.</span>
              </div>
              <label className="clay-switch">
                <input
                  type="checkbox"
                  checked={activePerms.canViewAnalytics}
                  onChange={() => handleToggle('canViewAnalytics')}
                />
                <span className="clay-slider" />
              </label>
            </div>

            {/* View Developer Hub */}
            <div className="clay-toggle-card">
              <div className="toggle-info">
                <span className="toggle-title">View Developer Telemetry Hub</span>
                <span className="toggle-desc">Inspect Cloudinary storage meters, Vercel CDN logs, and pipeline latency probes.</span>
              </div>
              <label className="clay-switch">
                <input
                  type="checkbox"
                  checked={activePerms.canViewDeveloperHub}
                  onChange={() => handleToggle('canViewDeveloperHub')}
                />
                <span className="clay-slider" />
              </label>
            </div>
          </div>
        </div>

        {/* Section 2: WHAT THEY CAN EDIT (Action / Write Access) */}
        <div className="clay-panel-card">
          <div className="clay-panel-head">
            <div className="head-icon edit-amber">✍️</div>
            <div>
              <h2 className="clay-panel-title">WHAT THEY CAN EDIT (WRITE &amp; ACTION ACCESS)</h2>
              <p className="clay-panel-desc">Controls verification powers, record deletion, team modifications, and data export.</p>
            </div>
          </div>

          <div className="clay-toggles-grid">
            {/* Verify & Approve */}
            <div className="clay-toggle-card">
              <div className="toggle-info">
                <span className="toggle-title">Verify &amp; Approve Payments</span>
                <span className="toggle-desc">Authorize this role to review payment slips and approve participant verification tickets.</span>
              </div>
              <label className="clay-switch">
                <input
                  type="checkbox"
                  checked={activePerms.canVerifyPayments}
                  onChange={() => handleToggle('canVerifyPayments')}
                />
                <span className="clay-slider" />
              </label>
            </div>

            {/* Delete / Cancel Registrations */}
            <div className="clay-toggle-card alert-danger">
              <div className="toggle-info">
                <span className="toggle-title text-danger">Delete / Cancel Registrations</span>
                <span className="toggle-desc">Permanently cancel student registrations or purge invalid submissions from database.</span>
              </div>
              <label className="clay-switch danger">
                <input
                  type="checkbox"
                  checked={activePerms.canDeleteParticipants}
                  onChange={() => handleToggle('canDeleteParticipants')}
                />
                <span className="clay-slider" />
              </label>
            </div>

            {/* Edit / Manage Teams */}
            <div className="clay-toggle-card">
              <div className="toggle-info">
                <span className="toggle-title">Edit Team Rosters &amp; Names</span>
                <span className="toggle-desc">Modify team titles, manually add missing members, or dissolve incomplete rosters.</span>
              </div>
              <label className="clay-switch">
                <input
                  type="checkbox"
                  checked={activePerms.canEditTeams}
                  onChange={() => handleToggle('canEditTeams')}
                />
                <span className="clay-slider" />
              </label>
            </div>

            {/* Export CSV */}
            <div className="clay-toggle-card">
              <div className="toggle-info">
                <span className="toggle-title">Export Registration CSVs</span>
                <span className="toggle-desc">Download complete spreadsheets and attendance manifests for offline event desks.</span>
              </div>
              <label className="clay-switch">
                <input
                  type="checkbox"
                  checked={activePerms.canExportCSV}
                  onChange={() => handleToggle('canExportCSV')}
                />
                <span className="clay-slider" />
              </label>
            </div>

            {/* On-ground Check-in */}
            <div className="clay-toggle-card">
              <div className="toggle-info">
                <span className="toggle-title">On-Ground Event Desk Check-in</span>
                <span className="toggle-desc">Mark participant physical presence and verify QR badges at stage venue entrances.</span>
              </div>
              <label className="clay-switch">
                <input
                  type="checkbox"
                  checked={activePerms.canCheckInParticipants}
                  onChange={() => handleToggle('canCheckInParticipants')}
                />
                <span className="clay-slider" />
              </label>
            </div>
          </div>
        </div>

        {/* Section 3: Staff Members Covered */}
        <div className="clay-panel-card">
          <div className="clay-panel-head">
            <div className="head-icon staff-purple">👥</div>
            <div>
              <h2 className="clay-panel-title">ACTIVE STAFF ASSIGNED TO THIS ROLE ({activeTab === 'faculty' ? staffList.faculty.length : staffList.coordinators.length})</h2>
              <p className="clay-panel-desc">All accounts in this category inherit these configured permissions upon login.</p>
            </div>
          </div>

          <div className="clay-staff-chips-row">
            {(activeTab === 'faculty' ? staffList.faculty : staffList.coordinators).map((staff, idx) => (
              <div key={idx} className="clay-staff-chip">
                <span className="chip-avatar">{staff.name?.charAt(0) || 'S'}</span>
                <div className="chip-meta">
                  <span className="chip-name">{staff.name}</span>
                  <span className="chip-email">{staff.email}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Action Bar */}
        <div className="clay-action-strip">
          <button
            onClick={handleResetDefaults}
            className="clay-reset-btn"
            disabled={saving}
          >
            ↺ Reset to Recommended Defaults
          </button>

          <button
            onClick={handleSave}
            className="clay-save-btn"
            disabled={saving}
          >
            {saving ? 'Saving Privileges...' : `✓ Save Access Privileges for ${activePerms.title}`}
          </button>
        </div>

      </div>

      {/* ── Component Styles ── */}
      <style>{`
        .clay-access-page {
          max-width: 1250px;
          margin: 0 auto;
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
          font-family: 'Space Grotesk', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
          color: #1e293b;
        }

        /* ── Header ── */
        .clay-access-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 12px;
          background: #f4f8fd;
          padding: 1.2rem 1.6rem;
          border-radius: 20px;
          border: 2px solid rgba(255, 255, 255, 0.9);
          box-shadow:
            6px 8px 20px rgba(162, 178, 201, 0.2),
            -5px -5px 14px rgba(255, 255, 255, 0.8),
            inset 2px 2px 4px rgba(255, 255, 255, 0.8),
            inset -2px -2px 4px rgba(162, 178, 201, 0.15);
        }

        .clay-header-left {
          display: flex;
          align-items: center;
          gap: 14px;
        }

        .clay-header-emblem {
          width: 48px;
          height: 48px;
          border-radius: 16px;
          background: linear-gradient(135deg, #2563eb 0%, #1d4ed8 100%);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.4rem;
          color: #ffffff;
          border: 2px solid #ffffff;
          box-shadow:
            4px 6px 14px rgba(37, 99, 235, 0.35),
            inset 2px 2px 4px rgba(255, 255, 255, 0.5),
            inset -2px -2px 4px rgba(15, 23, 42, 0.25);
        }

        .clay-page-title {
          font-size: 1.35rem;
          font-weight: 900;
          color: #0f172a;
          margin: 0;
          letter-spacing: -0.01em;
        }

        .clay-page-subtitle {
          font-size: 0.78rem;
          color: #64748b;
          margin: 2px 0 0 0;
          font-weight: 500;
        }

        .clay-admin-tag {
          display: flex;
          align-items: center;
          gap: 8px;
          background: #dbeafe;
          color: #1e40af;
          font-size: 0.72rem;
          font-weight: 900;
          padding: 6px 14px;
          border-radius: 12px;
          border: 1.5px solid rgba(255, 255, 255, 0.9);
          box-shadow: 2px 3px 8px rgba(37, 99, 235, 0.12);
        }

        .clay-dot-live {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: #2563eb;
          box-shadow: 0 0 8px #2563eb;
        }

        /* ── Role Tab Selector ── */
        .clay-role-tabs-bar {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1rem;
        }

        @media (max-width: 768px) {
          .clay-role-tabs-bar {
            grid-template-columns: 1fr;
          }
        }

        .clay-role-tab {
          display: flex;
          align-items: center;
          gap: 14px;
          background: #ffffff;
          padding: 1rem 1.4rem;
          border-radius: 18px;
          border: 2px solid rgba(255, 255, 255, 0.9);
          cursor: pointer;
          transition: all 0.25s cubic-bezier(0.34, 1.56, 0.64, 1);
          box-shadow:
            4px 6px 14px rgba(162, 178, 201, 0.18),
            -4px -4px 10px rgba(255, 255, 255, 0.8),
            inset 1px 1px 2px rgba(255, 255, 255, 0.8);
          text-align: left;
        }

        .clay-role-tab:hover {
          transform: translateY(-2px);
          box-shadow: 6px 8px 18px rgba(162, 178, 201, 0.25);
        }

        .clay-role-tab.active.faculty {
          border-color: #8b5cf6;
          background: #fbf9ff;
          box-shadow:
            6px 8px 20px rgba(139, 92, 246, 0.2),
            inset 2px 2px 4px rgba(255, 255, 255, 0.9),
            inset -2px -2px 4px rgba(139, 92, 246, 0.1);
        }

        .clay-role-tab.active.coordinator {
          border-color: #059669;
          background: #f6fdfa;
          box-shadow:
            6px 8px 20px rgba(5, 150, 105, 0.2),
            inset 2px 2px 4px rgba(255, 255, 255, 0.9),
            inset -2px -2px 4px rgba(5, 150, 105, 0.1);
        }

        .tab-icon {
          font-size: 1.8rem;
          flex-shrink: 0;
        }

        .tab-text {
          display: flex;
          flex-direction: column;
          gap: 2px;
        }

        .tab-title {
          font-size: 1.05rem;
          font-weight: 800;
          color: #0f172a;
        }

        .tab-sub {
          font-size: 0.72rem;
          color: #64748b;
          font-weight: 500;
        }

        /* ── Panels ── */
        .clay-permissions-container {
          display: flex;
          flex-direction: column;
          gap: 1.4rem;
        }

        .clay-panel-card {
          background: #f4f8fd;
          border-radius: 20px;
          border: 2px solid rgba(255, 255, 255, 0.9);
          box-shadow:
            6px 8px 20px rgba(162, 178, 201, 0.22),
            -5px -5px 14px rgba(255, 255, 255, 0.8),
            inset 2px 2px 4px rgba(255, 255, 255, 0.8),
            inset -2px -2px 4px rgba(162, 178, 201, 0.15);
          padding: 1.4rem;
          display: flex;
          flex-direction: column;
          gap: 1.2rem;
        }

        .clay-panel-head {
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .head-icon {
          width: 40px;
          height: 40px;
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.25rem;
          border: 2px solid #ffffff;
          flex-shrink: 0;
        }

        .eye-blue {
          background: #dbeafe;
          box-shadow: 2px 4px 10px rgba(37, 99, 235, 0.2);
        }

        .edit-amber {
          background: #fef3c7;
          box-shadow: 2px 4px 10px rgba(217, 119, 6, 0.2);
        }

        .staff-purple {
          background: #ede9fe;
          box-shadow: 2px 4px 10px rgba(109, 40, 217, 0.2);
        }

        .clay-panel-title {
          font-size: 0.95rem;
          font-weight: 900;
          color: #0f172a;
          margin: 0;
          letter-spacing: 0.02em;
        }

        .clay-panel-desc {
          font-size: 0.74rem;
          color: #64748b;
          margin: 2px 0 0 0;
          font-weight: 500;
        }

        /* ── Toggle Cards Grid ── */
        .clay-toggles-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(360px, 1fr));
          gap: 1rem;
        }

        @media (max-width: 768px) {
          .clay-toggles-grid {
            grid-template-columns: 1fr;
          }
        }

        .clay-toggle-card {
          background: #ffffff;
          padding: 1rem 1.2rem;
          border-radius: 16px;
          border: 1.5px solid rgba(255, 255, 255, 0.9);
          box-shadow:
            3px 5px 12px rgba(162, 178, 201, 0.15),
            inset 1px 1px 2px rgba(255, 255, 255, 0.8);
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 12px;
          transition: all 0.2s;
        }

        .clay-toggle-card.alert-danger {
          background: #fff8f8;
          border-color: rgba(239, 68, 68, 0.2);
        }

        .toggle-info {
          display: flex;
          flex-direction: column;
          gap: 2px;
          flex: 1;
        }

        .toggle-title {
          font-size: 0.85rem;
          font-weight: 800;
          color: #0f172a;
        }

        .toggle-title.text-danger {
          color: #b91c1c;
        }

        .toggle-desc {
          font-size: 0.7rem;
          color: #64748b;
          line-height: 1.35;
          font-weight: 500;
        }

        /* ── Switch Slider ── */
        .clay-switch {
          position: relative;
          display: inline-block;
          width: 48px;
          height: 26px;
          flex-shrink: 0;
        }

        .clay-switch input {
          opacity: 0;
          width: 0;
          height: 0;
        }

        .clay-slider {
          position: absolute;
          cursor: pointer;
          top: 0; left: 0; right: 0; bottom: 0;
          background-color: #cbd5e1;
          transition: 0.25s cubic-bezier(0.34, 1.56, 0.64, 1);
          border-radius: 30px;
          box-shadow: inset 1px 1px 3px rgba(0,0,0,0.2);
        }

        .clay-slider:before {
          position: absolute;
          content: "";
          height: 20px;
          width: 20px;
          left: 3px;
          bottom: 3px;
          background-color: #ffffff;
          transition: 0.25s cubic-bezier(0.34, 1.56, 0.64, 1);
          border-radius: 50%;
          box-shadow: 1px 2px 4px rgba(0,0,0,0.25);
        }

        input:checked + .clay-slider {
          background-color: #2563eb;
        }

        .clay-switch.danger input:checked + .clay-slider {
          background-color: #ef4444;
        }

        input:checked + .clay-slider:before {
          transform: translateX(22px);
        }

        /* ── Staff Chips ── */
        .clay-staff-chips-row {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
        }

        .clay-staff-chip {
          display: flex;
          align-items: center;
          gap: 8px;
          background: #ffffff;
          padding: 6px 12px;
          border-radius: 12px;
          border: 1px solid rgba(255, 255, 255, 0.8);
          box-shadow: 2px 3px 6px rgba(162, 178, 201, 0.12);
        }

        .chip-avatar {
          width: 24px;
          height: 24px;
          border-radius: 50%;
          background: #ede9fe;
          color: #6d28d9;
          font-size: 0.72rem;
          font-weight: 800;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .chip-meta {
          display: flex;
          flex-direction: column;
          gap: 1px;
        }

        .chip-name {
          font-size: 0.76rem;
          font-weight: 800;
          color: #0f172a;
        }

        .chip-email {
          font-size: 0.65rem;
          color: #64748b;
        }

        /* ── Action Bar ── */
        .clay-action-strip {
          display: flex;
          justify-content: flex-end;
          align-items: center;
          gap: 12px;
          flex-wrap: wrap;
          padding-top: 6px;
        }

        .clay-reset-btn {
          background: #ffffff;
          border: 2px solid #e2e8f0;
          color: #64748b;
          font-weight: 800;
          font-size: 0.82rem;
          padding: 0.85rem 1.4rem;
          border-radius: 14px;
          cursor: pointer;
          transition: all 0.2s;
        }

        .clay-reset-btn:hover {
          background: #f8fafc;
          color: #0f172a;
          border-color: #cbd5e1;
        }

        .clay-save-btn {
          background: linear-gradient(135deg, #2563eb 0%, #1d4ed8 100%);
          color: #ffffff;
          font-weight: 900;
          font-size: 0.88rem;
          padding: 0.85rem 1.8rem;
          border-radius: 14px;
          border: 2px solid #ffffff;
          cursor: pointer;
          box-shadow:
            4px 6px 16px rgba(37, 99, 235, 0.35),
            inset 1px 1px 2px rgba(255, 255, 255, 0.5);
          transition: all 0.25s cubic-bezier(0.34, 1.56, 0.64, 1);
        }

        .clay-save-btn:hover:not(:disabled) {
          transform: translateY(-2px);
          box-shadow: 6px 9px 20px rgba(37, 99, 235, 0.45);
        }

        .clay-save-btn:disabled {
          opacity: 0.6;
          cursor: not-allowed;
        }

        /* ── Toast ── */
        .clay-toast {
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 10px 16px;
          border-radius: 12px;
          font-size: 0.82rem;
          font-weight: 800;
          box-shadow: 0 4px 12px rgba(0,0,0,0.1);
        }

        .clay-toast.success {
          background: #dcfce7;
          color: #15803d;
          border: 1.5px solid #86efac;
        }

        .clay-toast.error {
          background: #fee2e2;
          color: #b91c1c;
          border: 1.5px solid #fca5a5;
        }

        /* ── Denied State ── */
        .clay-access-denied {
          min-height: 60vh;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 2rem;
        }

        .clay-denied-card {
          background: #ffffff;
          padding: 2.5rem;
          border-radius: 24px;
          text-align: center;
          max-width: 480px;
          border: 2px solid #fee2e2;
          box-shadow: 0 10px 30px rgba(239, 68, 68, 0.15);
        }

        .clay-denied-icon { font-size: 3rem; }
        .clay-denied-btn {
          margin-top: 1rem;
          padding: 0.75rem 1.4rem;
          background: #2563eb;
          color: #ffffff;
          border: none;
          border-radius: 12px;
          font-weight: 800;
          cursor: pointer;
        }
      `}</style>
    </div>
  );
};
