import React, { useEffect, useState } from 'react';
import { Mail, QrCode, CheckCircle2, Clock, Send, AlertCircle, RefreshCw, ShieldCheck } from 'lucide-react';
import { API_BASE_URL as API } from '../../utils/adminAuth';

export const UsersView: React.FC = () => {
  const role = localStorage.getItem('adminRole');
  
  const [users, setUsers] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [searchQuery, setSearchQuery] = useState('');
  const [filterEvent, setFilterEvent] = useState('all');
  const [filterSource, setFilterSource] = useState('all');
  const [filterPayment, setFilterPayment] = useState('all');
  const [_accessLevel, setAccessLevel] = useState<'full' | 'limited'>('limited');
  const [perms, setPerms] = useState<any>(() => {
    try {
      const stored = localStorage.getItem('adminPermissions');
      return stored ? JSON.parse(stored) : null;
    } catch {
      return null;
    }
  });
  const [expandedEvents, setExpandedEvents] = useState<Record<string, boolean>>({});

  // Email sending state & modals
  const [emailModalUser, setEmailModalUser] = useState<any | null>(null);
  const [sendingEmailType, setSendingEmailType] = useState<'confirmation' | 'qr' | null>(null);
  const [emailToast, setEmailToast] = useState<{ type: 'success' | 'error'; message: string } | null>(null);

  const toggleExpandEvents = (userId: string) => {
    setExpandedEvents(prev => ({
      ...prev,
      [userId]: !prev[userId]
    }));
  };

  const isScreenshotUploaded = (user: any): boolean => {
    // If registered through website
    if (user.source !== 'google_form') {
      const url = user.paymentScreenshotUrl || user.noDuesSlipUrl;
      return Boolean(url && typeof url === 'string' && url.trim() && !url.includes('offline-receipt.png'));
    }

    // If registered through Google Form
    const ssUrl = user.paymentScreenshotUrl;
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


  
  // Modal State & Multi-Document Viewer
  interface UserDocument {
    id: string;
    title: string;
    subtitle: string;
    url: string;
    badge: string;
    type: 'slip' | 'idcard' | 'payment' | 'other';
    icon: string;
  }

  const [activeDocModal, setActiveDocModal] = useState<{
    user: any;
    docs: UserDocument[];
    activeIdx: number;
    viewMode: 'tabs' | 'side-by-side';
  } | null>(null);

  const [imgLoadErrors, setImgLoadErrors] = useState<Record<string, boolean>>({});

  const getUserDocuments = (user: any): UserDocument[] => {
    const docs: UserDocument[] = [];
    const addedUrls = new Set<string>();

    // 1. No-Dues Manual Payment Slip (AJU Exempt Students)
    if (user.noDuesSlipUrl && typeof user.noDuesSlipUrl === 'string' && user.noDuesSlipUrl.trim()) {
      docs.push({
        id: 'nodues',
        title: '₹600 No-Dues Manual Slip',
        subtitle: 'Official Departmental Clearance Receipt',
        url: user.noDuesSlipUrl.trim(),
        badge: 'No-Dues Slip',
        type: 'slip',
        icon: '📄'
      });
      addedUrls.add(user.noDuesSlipUrl.trim());
    }

    // 2. College Student ID Card
    if (user.collegeIdCardUrl && typeof user.collegeIdCardUrl === 'string' && user.collegeIdCardUrl.trim()) {
      docs.push({
        id: 'idcard',
        title: 'College ID Card',
        subtitle: `${user.institution || 'College'} · ${user.course || 'Student'} verification`,
        url: user.collegeIdCardUrl.trim(),
        badge: 'College ID',
        type: 'idcard',
        icon: '🪪'
      });
      addedUrls.add(user.collegeIdCardUrl.trim());
    }

    // 3. Online UPI Payment Screenshot (or fallback payment screenshot)
    if (isScreenshotUploaded(user) && user.paymentScreenshotUrl && typeof user.paymentScreenshotUrl === 'string' && user.paymentScreenshotUrl.trim()) {
      const trimmed = user.paymentScreenshotUrl.trim();
      if (!addedUrls.has(trimmed)) {
        const isExempt = user.isAjuExempt || (user.paymentUTR && user.paymentUTR.startsWith('NODUES-'));
        docs.push({
          id: 'payment',
          title: isExempt ? 'Fee Receipt / Verification Slip' : 'Payment Screenshot',
          subtitle: `UTR: ${user.utrEnteredManually || user.paymentUTR || 'N/A'}`,
          url: trimmed,
          badge: isExempt ? 'Receipt' : 'Payment SS',
          type: 'payment',
          icon: '📸'
        });
        addedUrls.add(trimmed);
      }
    }

    return docs;
  };

  const openDocViewer = (user: any, initialIndex = 0) => {
    if (!canViewDocuments) return;
    const docs = getUserDocuments(user);
    if (docs.length === 0) return;
    setImgLoadErrors({});
    setActiveDocModal({
      user,
      docs,
      activeIdx: Math.min(initialIndex, docs.length - 1),
      viewMode: 'tabs'
    });
  };

  const getFullImageUrl = (url?: string) => {
    if (!url) return '';
    if (url.includes('drive.google.com')) {
      const idMatch = url.match(/[?&]id=([a-zA-Z0-9_-]+)/) || url.match(/\/file\/d\/([a-zA-Z0-9_-]+)/);
      if (idMatch && idMatch[1]) {
        return `${API}/api/admin/drive-proxy?id=${idMatch[1]}`;
      }
    }
    if (url.startsWith('http://') || url.startsWith('https://') || url.startsWith('data:')) return url;
    return `${API}${url.startsWith('/') ? '' : '/'}${url}`;
  };

  const getOriginalFileUrl = (url?: string) => {
    if (!url) return '';
    if (url.includes('drive.google.com')) {
      const idMatch = url.match(/[?&]id=([a-zA-Z0-9_-]+)/) || url.match(/\/file\/d\/([a-zA-Z0-9_-]+)/);
      if (idMatch && idMatch[1]) {
        return `https://drive.google.com/file/d/${idMatch[1]}/view`;
      }
    }
    return getFullImageUrl(url);
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const token = localStorage.getItem('adminToken');
      if (!token) {
        setError('No active session found. Please log in.');
        return;
      }
      const res = await fetch(`${API}/api/admin/users`, {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });
      if (res.ok) {
        const data = await res.json();
        setUsers(data.users || data);
        if (data.permissions) {
          setPerms(data.permissions);
          localStorage.setItem('adminPermissions', JSON.stringify(data.permissions));
        }
        setAccessLevel(data.accessLevel || (role === 'admin' ? 'full' : 'limited'));
        setError('');
      } else {
        if (res.status === 401) {
          localStorage.removeItem('adminToken');
          localStorage.removeItem('adminRole');
          localStorage.removeItem('adminName');
          localStorage.removeItem('adminDesignation');
          setError('Session expired. Please log in again.');
        } else if (res.status === 403) {
          const errData = await res.json().catch(() => ({}));
          setError(errData.message || 'Access restricted. You do not have permission to view registered participants.');
        } else {
          const errData = await res.json().catch(() => ({}));
          setError(errData.message || 'Failed to fetch users');
        }
      }
    } catch {
      setError('Network error. Unable to connect to backend server.');
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id: string, name: string) => {
    if (!window.confirm(`Are you sure you want to completely delete ${name}'s registration? This cannot be undone.`)) {
      return;
    }
    
    try {
      const res = await fetch(`${API}/api/admin/users/${id}`, {
        method: 'DELETE',
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('adminToken')}`
        }
      });
      if (res.ok) {
        setUsers(users.filter(u => u._id !== id));
      } else {
        alert('Failed to delete user');
      }
    } catch (err) {
      alert('Network error');
    }
  };

  const handleSendEmail = async (targetUser: any, type: 'confirmation' | 'qr') => {
    if (!targetUser || !targetUser.email) {
      setEmailToast({ type: 'error', message: 'No registered email found for this participant' });
      return;
    }
    setSendingEmailType(type);
    setEmailToast(null);

    try {
      const token = localStorage.getItem('adminToken');
      const res = await fetch(`${API}/api/admin/send-email`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({
          userId: targetUser._id || targetUser.registrationId,
          type
        })
      });

      const data = await res.json();
      if (!res.ok) {
        throw new Error(data.message || 'Failed to send email');
      }

      setEmailToast({ type: 'success', message: data.message || 'Email sent successfully!' });

      const updatedFields = type === 'confirmation' ? {
        confirmationEmailSent: true,
        confirmationEmailSentAt: new Date().toISOString(),
        confirmationEmailSentBy: data.user?.confirmationEmailSentBy || 'You'
      } : {
        qrEmailSent: true,
        qrEmailSentAt: new Date().toISOString(),
        qrEmailSentBy: data.user?.qrEmailSentBy || 'You'
      };

      setUsers(prev => prev.map(u => {
        if (u._id === targetUser._id || u.registrationId === targetUser.registrationId) {
          return { ...u, ...updatedFields };
        }
        return u;
      }));

      if (activeDocModal && (activeDocModal.user._id === targetUser._id || activeDocModal.user.registrationId === targetUser.registrationId)) {
        setActiveDocModal(prev => prev ? {
          ...prev,
          user: { ...prev.user, ...updatedFields }
        } : null);
      }

      if (emailModalUser && (emailModalUser._id === targetUser._id || emailModalUser.registrationId === targetUser.registrationId)) {
        setEmailModalUser((prev: any) => prev ? {
          ...prev,
          ...updatedFields
        } : null);
      }
    } catch (err: any) {
      setEmailToast({ type: 'error', message: err.message || 'Network error occurred while sending email' });
    } finally {
      setSendingEmailType(null);
    }
  };

  // Get unique event names for filter
  const allEventNames = Array.from(new Set(
    users.flatMap(u => u.registeredEvents?.map((r: any) => r.event?.name) || []).filter(Boolean)
  ));

  // Filtered users
  const filteredUsers = users.filter(user => {
    const q = searchQuery.toLowerCase();
    const matchesSearch = !q || 
      user.name?.toLowerCase().includes(q) || 
      user.email?.toLowerCase().includes(q) ||
      user.registrationId?.toLowerCase().includes(q) ||
      user.institution?.toLowerCase().includes(q) ||
      user.whatsapp?.includes(q);
    
    const matchesEvent = filterEvent === 'all' || 
      user.registeredEvents?.some((r: any) => r.event?.name === filterEvent);
    
    const userSrc = user.source || 'website';
    const matchesSource = filterSource === 'all' || userSrc === filterSource;

    const isExempt = user.isAjuExempt || (user.paymentUTR && user.paymentUTR.startsWith('NODUES-'));
    const isGForm = user.source === 'google_form';
    const hasSS = isScreenshotUploaded(user);

    let matchesPayment = true;
    if (filterPayment === 'portal_image') {
      matchesPayment = !isGForm && hasSS;
    } else if (filterPayment === 'form_image') {
      matchesPayment = isGForm && hasSS;
    } else if (filterPayment === 'form_no_image') {
      matchesPayment = isGForm && !hasSS;
    } else if (filterPayment === 'has_screenshot') {
      matchesPayment = hasSS;
    } else if (filterPayment === 'no_screenshot') {
      matchesPayment = !hasSS;
    } else if (filterPayment === 'aju_exempt') {
      matchesPayment = isExempt;
    } else if (filterPayment === 'online_paid') {
      matchesPayment = !isExempt;
    }

    return matchesSearch && matchesEvent && matchesSource && matchesPayment;
  });

  const sortedUsers = [...filteredUsers];

  const isAdmin = role === 'admin';
  const canViewParticipants = isAdmin || perms?.canViewParticipants !== false;
  const canViewContact = isAdmin || Boolean(perms?.canViewContactInfo);
  const canViewFinancials = isAdmin || Boolean(perms?.canViewFinancials);
  const canViewDocuments = isAdmin || Boolean(perms?.canViewDocuments);
  const canExportCSV = isAdmin || Boolean(perms?.canExportCSV);
  const canDelete = isAdmin;
  const canSendEmail = isAdmin || canViewContact;

  const handleExportCSV = () => {
    if (!canExportCSV || filteredUsers.length === 0) return;

    const headers = ['Registration ID', 'Name', 'Institution', 'Course', 'Semester', 'Source', 'Events'];
    if (canViewContact) {
      headers.push('Email', 'WhatsApp');
    }
    if (canViewFinancials) {
      headers.push('Payment Type', 'UTR', 'Clearance Status');
    }

    const rows = filteredUsers.map(user => {
      const isExempt = user.isAjuExempt || (user.paymentUTR && user.paymentUTR.startsWith('NODUES-'));
      const eventsStr = (user.registeredEvents || []).map((r: any) => r.event?.name || r.eventId).filter(Boolean).join('; ');

      const row = [
        `"${user.registrationId || ''}"`,
        `"${(user.name || '').replace(/"/g, '""')}"`,
        `"${(user.institution || '').replace(/"/g, '""')}"`,
        `"${(user.course || '').replace(/"/g, '""')}"`,
        `"${(user.semester || '').replace(/"/g, '""')}"`,
        `"${user.source || 'website'}"`,
        `"${eventsStr.replace(/"/g, '""')}"`
      ];

      if (canViewContact) {
        row.push(
          `"${(user.email || '').replace(/"/g, '""')}"`,
          `"${(user.whatsapp || '').replace(/"/g, '""')}"`
        );
      }

      if (canViewFinancials) {
        row.push(
          `"${isExempt ? 'AJU Exempt' : 'Online Paid'}"`,
          `"${(user.utrEnteredManually || user.paymentUTR || '').replace(/"/g, '""')}"`,
          `"${user.paymentStatus || (isExempt ? 'Exempt' : 'Paid')}"`
        );
      }

      return row.join(',');
    });

    const csvContent = [headers.join(','), ...rows].join('\r\n');
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', `technika_participants_${new Date().toISOString().split('T')[0]}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  if (loading) {
    return (
      <div className="clay-loading-state">
        <div className="clay-loader-orb">
          <span className="clay-loader-icon">⏳</span>
        </div>
        <span className="clay-loader-text">Loading participants...</span>
        <style>{`
          .clay-loading-state {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            gap: 16px;
            padding: 80px 20px;
            font-family: 'Space Grotesk', sans-serif;
          }
          .clay-loader-orb {
            width: 64px;
            height: 64px;
            border-radius: 50%;
            background: linear-gradient(135deg, #a5b4fc 0%, #818cf8 100%);
            border: 3px solid #ffffff;
            display: flex;
            align-items: center;
            justify-content: center;
            box-shadow:
              8px 10px 22px rgba(99, 102, 241, 0.35),
              inset 4px 4px 8px rgba(255, 255, 255, 0.5),
              inset -4px -4px 8px rgba(55, 48, 163, 0.3);
            animation: pulseOrb 1.5s ease-in-out infinite;
          }
          .clay-loader-icon { font-size: 1.6rem; }
          .clay-loader-text {
            font-weight: 700;
            color: #475569;
            font-size: 0.95rem;
          }
          @keyframes pulseOrb {
            0%, 100% { transform: scale(1); }
            50% { transform: scale(1.08); }
          }
        `}</style>
      </div>
    );
  }

  if (error) {
    return (
      <div className="clay-error-state">
        <div className="clay-error-orb">⚠️</div>
        <span style={{ fontSize: '1.05rem', fontWeight: 700, color: '#dc2626' }}>{error}</span>
        <div style={{ display: 'flex', gap: '12px', marginTop: '14px' }}>
          <button 
            onClick={() => { setError(''); setLoading(true); fetchUsers(); }}
            style={{
              padding: '10px 18px',
              borderRadius: '12px',
              border: '2px solid rgba(255, 255, 255, 0.8)',
              background: '#ffffff',
              color: '#1e293b',
              fontWeight: 700,
              cursor: 'pointer',
              boxShadow: '3px 4px 10px rgba(162, 178, 201, 0.25)',
              fontFamily: "'Space Grotesk', sans-serif"
            }}
          >
            🔄 Try Again
          </button>
          <button 
            onClick={() => {
              localStorage.removeItem('adminToken');
              localStorage.removeItem('adminRole');
              localStorage.removeItem('adminName');
              localStorage.removeItem('adminDesignation');
              window.location.href = '/admin/login';
            }}
            style={{
              padding: '10px 18px',
              borderRadius: '12px',
              border: 'none',
              background: 'linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%)',
              color: '#ffffff',
              fontWeight: 700,
              cursor: 'pointer',
              boxShadow: '4px 6px 14px rgba(37, 99, 235, 0.35)',
              fontFamily: "'Space Grotesk', sans-serif"
            }}
          >
            🔐 Log In Again
          </button>
        </div>
        <style>{`
          .clay-error-state {
            display: flex; flex-direction: column; align-items: center; gap: 12px;
            padding: 60px; font-family: 'Space Grotesk', sans-serif;
          }
          .clay-error-orb {
            width: 56px; height: 56px; border-radius: 50%;
            background: #fee2e2; display: flex; align-items: center; justify-content: center;
            font-size: 1.4rem; border: 2px solid rgba(239, 68, 68, 0.2);
            box-shadow: 4px 6px 14px rgba(239, 68, 68, 0.15),
              inset 2px 2px 4px rgba(255, 255, 255, 0.8),
              inset -2px -2px 4px rgba(239, 68, 68, 0.12);
          }
        `}</style>
      </div>
    );
  }

  if (!canViewParticipants) {
    return (
      <div className="clay-error-state">
        <div className="clay-error-orb">🔒</div>
        <span style={{ fontSize: '1.05rem', fontWeight: 700, color: '#dc2626' }}>Access Restricted</span>
        <p style={{ maxWidth: '420px', textAlign: 'center', color: '#64748b', fontSize: '0.9rem', lineHeight: '1.5', margin: '4px 0 14px 0' }}>
          You do not have permission to view registered participants. Please contact <strong>Adeeb Razi</strong> (Administration) to request directory access.
        </p>
        <button 
          onClick={() => { setError(''); setLoading(true); fetchUsers(); }}
          style={{
            padding: '10px 18px',
            borderRadius: '12px',
            border: '2px solid rgba(255, 255, 255, 0.8)',
            background: '#ffffff',
            color: '#1e293b',
            fontWeight: 700,
            cursor: 'pointer',
            boxShadow: '3px 4px 10px rgba(162, 178, 201, 0.25)',
            fontFamily: "'Space Grotesk', sans-serif"
          }}
        >
          🔄 Refresh Permissions
        </button>
      </div>
    );
  }

  return (
    <div className="clay-users-page">
      {/* ── Page Header ── */}
      <div className="clay-page-header">
        <div className="clay-header-left">
          <div className="clay-header-emblem">👤</div>
          <div>
            <h2 className="clay-page-title">REGISTERED PARTICIPANTS</h2>
            <p className="clay-page-subtitle">All registrations across Technika 6.0 events</p>
          </div>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          {canExportCSV && (
            <button
              onClick={handleExportCSV}
              className="clay-export-csv-btn"
              title="Export filtered participant records to CSV"
            >
              📥 Export CSV
            </button>
          )}
          <div className="clay-count-badge">
            <span className="clay-count-num">{filteredUsers.length}</span>
            <span className="clay-count-label">{filteredUsers.length === users.length ? 'Total' : `of ${users.length}`}</span>
          </div>
        </div>
      </div>

      {/* ── Search & Filter Bar ── */}
      <div className="clay-toolbar">
        <div className="clay-search-box">
          <span className="clay-search-icon">🔍</span>
          <input
            type="text"
            placeholder="Search by name, email, ID, institution..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="clay-search-input"
          />
          {searchQuery && (
            <button className="clay-search-clear" onClick={() => setSearchQuery('')}>✕</button>
          )}
        </div>
        <div className="clay-filter-box">
          <span className="clay-filter-icon">📋</span>
          <select 
            value={filterEvent} 
            onChange={(e) => setFilterEvent(e.target.value)}
            className="clay-filter-select"
          >
            <option value="all">All Events</option>
            {allEventNames.map(name => (
              <option key={name} value={name}>{name}</option>
            ))}
          </select>
        </div>
        <div className="clay-filter-box">
          <span className="clay-filter-icon">🏷️</span>
          <select 
            value={filterSource} 
            onChange={(e) => setFilterSource(e.target.value)}
            className="clay-filter-select"
          >
            <option value="all">All Sources</option>
            <option value="website">🌐 Website Portal</option>
            <option value="google_form">📝 Google Form</option>
            <option value="admin_import">📂 School Import</option>
          </select>
        </div>
        {canViewFinancials && (
          <div className="clay-filter-box">
            <span className="clay-filter-icon">💳</span>
            <select 
              value={filterPayment} 
              onChange={(e) => setFilterPayment(e.target.value)}
              className="clay-filter-select"
              title="Filter by clearance and screenshot submission type"
            >
              <option value="all">All Clearances</option>
              <option value="portal_image">📸 Uploaded Screenshot (Website)</option>
              <option value="form_image">📁 Uploaded Screenshot (Form)</option>
              <option value="form_no_image">⚠️ Missing Screenshot (Form)</option>
              <option value="aju_exempt">🎓 AJU Exempt (No-Dues Slip)</option>
              <option value="online_paid">💳 Online Paid (UPI/UTR)</option>
            </select>
          </div>
        )}
      </div>

      {/* ── Data Table ── */}
      <div className="clay-table-card">
        <div className="clay-mobile-swipe-hint">
          <span>👉 Swipe table sideways to inspect documents & verification actions</span>
        </div>
        <div className="clay-table-wrapper">
          <table className="clay-table">
            <thead>
              <tr>
                <th>ID</th>
                <th>{canViewContact ? 'Name & Contact' : 'Name'}</th>
                <th>Institution</th>
                <th>Registered Events</th>
                {canViewFinancials && <th>Payment Status</th>}
                {(canSendEmail || canDelete) && <th>Actions</th>}
              </tr>
            </thead>
            <tbody>
              {sortedUsers.length === 0 ? (
                <tr>
                  <td colSpan={4 + (canViewFinancials ? 1 : 0) + ((canSendEmail || canDelete) ? 1 : 0)} style={{ textAlign: 'center', padding: '40px', color: '#94a3b8' }}>
                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
                      <span style={{ fontSize: '2rem' }}>📭</span>
                      <span style={{ fontWeight: 700 }}>No participants found</span>
                      <span style={{ fontSize: '0.8rem' }}>Try adjusting your search or filter</span>
                    </div>
                  </td>
                </tr>
              ) : (
                sortedUsers.map((user, idx) => (
                  <tr key={user._id} className={idx % 2 === 0 ? 'row-even' : 'row-odd'}>
                    <td>
                      <span className="clay-id-badge">{user.registrationId}</span>
                    </td>
                    <td>
                      <div className="clay-user-cell">
                        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap' }}>
                          <span className="clay-user-name">{user.name}</span>
                          {user.source === 'google_form' ? (
                            <span className="source-pill source-gform" title="Registered via Google Form">📝 Google Form</span>
                          ) : user.source === 'admin_import' ? (
                            <span className="source-pill source-import" title="Registered via School Batch Import">📂 School Import</span>
                          ) : (
                            <span className="source-pill source-web" title="Registered via Website Portal">🌐 Website</span>
                          )}
                        </div>
                        {canViewContact ? (
                          <>
                            {user.email && <div className="clay-user-email">✉️ {user.email}</div>}
                            {user.whatsapp && <div className="clay-user-phone">📞 {user.whatsapp}</div>}
                          </>
                        ) : (
                          <div className="clay-user-contact-masked" title="Contact details protected by access control policy">
                            <span>🔒 Contact hidden</span>
                          </div>
                        )}
                      </div>
                    </td>
                    <td>
                      <div className="clay-inst-cell">
                        <div className="clay-inst-name">{user.institution}</div>
                        {(user.course || user.semester) && (
                          <div className="clay-inst-course">
                            {user.course || ''}{user.course && user.semester ? ' · ' : ''}{user.semester ? `Sem ${user.semester}` : ''}
                          </div>
                        )}
                      </div>
                    </td>
                    <td>
                      {user.registeredEvents?.length > 0 ? (
                        (() => {
                          let displayEvents = [...user.registeredEvents];
                          if (filterEvent !== 'all') {
                            const matchedIdx = displayEvents.findIndex((r: any) => r.event?.name === filterEvent);
                            if (matchedIdx > 0) {
                              const [matched] = displayEvents.splice(matchedIdx, 1);
                              displayEvents.unshift(matched);
                            }
                          }

                          const isExpanded = Boolean(expandedEvents[user._id]);
                          const firstEvent = displayEvents[0];
                          const remainingCount = displayEvents.length - 1;

                          if (displayEvents.length === 1) {
                            return (
                              <div className="clay-events-list">
                                <span className="clay-event-chip">
                                  {firstEvent.event?.name || firstEvent.eventId || 'Unknown'}
                                </span>
                              </div>
                            );
                          }

                          if (!isExpanded) {
                            return (
                              <div className="clay-events-list">
                                <span className="clay-event-chip">
                                  {firstEvent.event?.name || firstEvent.eventId || 'Unknown'}
                                </span>
                                <button
                                  type="button"
                                  onClick={(e) => {
                                    e.stopPropagation();
                                    toggleExpandEvents(user._id);
                                  }}
                                  className="clay-event-more-btn"
                                  title={`Click to view all ${displayEvents.length} registered events`}
                                >
                                  +{remainingCount}
                                </button>
                              </div>
                            );
                          }

                          return (
                            <div className="clay-events-list expanded">
                              {displayEvents.map((r: any) => (
                                <span key={r._id || r.eventId} className="clay-event-chip">
                                  {r.event?.name || r.eventId || 'Unknown'}
                                </span>
                              ))}
                              <button
                                type="button"
                                onClick={(e) => {
                                  e.stopPropagation();
                                  toggleExpandEvents(user._id);
                                }}
                                className="clay-event-less-btn"
                                title="Collapse events list"
                              >
                                Collapse ▴
                              </button>
                            </div>
                          );
                        })()
                      ) : (
                        <span className="clay-no-events">No events</span>
                      )}
                    </td>
                    {canViewFinancials && (
                      <td>
                        {(() => {
                          const isExempt = user.isAjuExempt || (user.paymentUTR && user.paymentUTR.startsWith('NODUES-'));
                          const clearanceBadge = isExempt ? (
                            <div style={{ marginBottom: '5px' }}>
                              <span style={{ background: '#fef3c7', color: '#92400e', fontSize: '0.68rem', fontWeight: 800, padding: '2px 8px', borderRadius: '6px', border: '1px solid #fde68a', display: 'inline-block' }}>
                                🎓 AJU Exempt (No-Dues)
                              </span>
                            </div>
                          ) : (
                            <div style={{ marginBottom: '5px' }}>
                              <span style={{ background: '#ecfdf5', color: '#065f46', fontSize: '0.68rem', fontWeight: 800, padding: '2px 8px', borderRadius: '6px', border: '1px solid #a7f3d0', display: 'inline-block' }}>
                                💳 Online Paid (₹{user.expectedAmount || 100})
                              </span>
                            </div>
                          );

                          const hasSS = isScreenshotUploaded(user);
                          const docs = getUserDocuments(user);

                          if (!hasSS || docs.length === 0) {
                            return (
                              <div>
                                {clearanceBadge}
                                <span className="clay-no-ss-badge" title="No payment screenshot uploaded">
                                  No SS Uploaded
                                </span>
                                <div className="clay-utr-info">
                                  <div><strong>UTR:</strong> {user.utrEnteredManually || user.paymentUTR || 'N/A'}</div>
                                  <div><strong>Fetched:</strong> {user.utrFetchedFromScreenshot || 'PENDING'}</div>
                                </div>
                              </div>
                            );
                          }

                          return (
                            <div className="clay-ss-cell-wrap">
                              {clearanceBadge}
                              {canViewDocuments ? (
                                <button
                                  onClick={() => openDocViewer(user, 0)}
                                  className="clay-view-ss-btn"
                                  title="Click to view payment screenshot"
                                >
                                  <span>📸 View SS</span>
                                </button>
                              ) : (
                                <span className="clay-ss-restricted-badge" title="Document view restricted">
                                  📁 SS Uploaded
                                </span>
                              )}
                              <div className="clay-utr-info">
                                <div><strong>UTR:</strong> {user.utrEnteredManually || user.paymentUTR || 'N/A'}</div>
                                <div><strong>Fetched:</strong> {user.utrFetchedFromScreenshot || 'PENDING'}</div>
                              </div>
                            </div>
                          );
                        })()}
                      </td>
                    )}
                    {(canSendEmail || canDelete) && (
                      <td>
                        <div className="clay-actions-cell-wrap">
                          {/* Send Email Action Button */}
                          {canSendEmail && (
                            <button
                              type="button"
                              onClick={() => setEmailModalUser(user)}
                              className="clay-send-email-btn"
                              title="Send confirmation email or entry QR pass"
                            >
                              <Mail size={12} />
                              <span>Send Email</span>
                            </button>
                          )}

                          {/* Email Status Indicators */}
                          <div className="clay-email-status-pills">
                            {user.confirmationEmailSent ? (
                              <span
                                className="clay-email-pill pill-sent"
                                title={`Confirmation sent: ${new Date(user.confirmationEmailSentAt).toLocaleString()}${user.confirmationEmailSentBy ? ` by ${user.confirmationEmailSentBy}` : ''}`}
                              >
                                <CheckCircle2 size={10} /> Confirmed
                              </span>
                            ) : (
                              <span className="clay-email-pill pill-pending" title="Confirmation email not sent yet">
                                <Clock size={10} /> Confirm Pending
                              </span>
                            )}
                          </div>

                          {/* Delete/Cancel Button for Admins */}
                          {canDelete && (
                            <button
                              onClick={() => handleDelete(user._id, user.name)}
                              className="clay-delete-btn"
                              title="Cancel and delete this registration"
                            >
                              🗑️ Cancel
                            </button>
                          )}
                        </div>
                      </td>
                    )}
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* ── Multi-Screenshot & Verification Documents Modal ── */}
      {activeDocModal && (
        <div className="clay-modal-overlay" onClick={() => setActiveDocModal(null)}>
          <div className="clay-modal-card clay-doc-modal-card" onClick={(e) => e.stopPropagation()}>
            {/* Modal Header */}
            <div className="clay-modal-header">
              <div className="clay-modal-title-group">
                <div className="clay-modal-title">
                  📸 Verification Documents
                  <span className="clay-modal-user-chip">{activeDocModal.user.name}</span>
                </div>
                <div className="clay-modal-sub">
                  Reg ID: <strong style={{ color: '#2563eb' }}>{activeDocModal.user.registrationId}</strong>
                  &nbsp;·&nbsp;
                  {activeDocModal.user.institution}
                  {activeDocModal.user.course && ` · ${activeDocModal.user.course}`}
                </div>
              </div>

              <div className="clay-modal-actions-top">
                {activeDocModal.docs.length > 1 && (
                  <div className="clay-viewmode-toggle">
                    <button
                      className={`clay-viewmode-btn ${activeDocModal.viewMode === 'tabs' ? 'active' : ''}`}
                      onClick={() => setActiveDocModal({ ...activeDocModal, viewMode: 'tabs' })}
                      title="Single document focus view with tab selection"
                    >
                      Single View
                    </button>
                    <button
                      className={`clay-viewmode-btn ${activeDocModal.viewMode === 'side-by-side' ? 'active' : ''}`}
                      onClick={() => setActiveDocModal({ ...activeDocModal, viewMode: 'side-by-side' })}
                      title="View both screenshots side-by-side simultaneously"
                    >
                      ⊞ Side-by-Side (Both)
                    </button>
                  </div>
                )}
                <button 
                  className="clay-modal-close" 
                  onClick={() => setActiveDocModal(null)}
                  title="Close (Esc)"
                >
                  ✕
                </button>
              </div>
            </div>

            {/* Document Tabs Bar (when multiple documents) */}
            {activeDocModal.docs.length > 1 && (
              <div className="clay-doc-tabs-bar">
                {activeDocModal.docs.map((doc, idx) => (
                  <button
                    key={doc.id}
                    className={`clay-doc-tab-btn ${activeDocModal.activeIdx === idx && activeDocModal.viewMode === 'tabs' ? 'active' : ''}`}
                    onClick={() => setActiveDocModal({ ...activeDocModal, activeIdx: idx, viewMode: 'tabs' })}
                  >
                    <span className="clay-doc-tab-icon">{doc.icon}</span>
                    <span className="clay-doc-tab-title">{doc.title}</span>
                    <span className="clay-doc-tab-pill">{idx + 1} of {activeDocModal.docs.length}</span>
                  </button>
                ))}
              </div>
            )}

            {/* Modal Body */}
            <div className="clay-modal-body clay-doc-modal-body">
              {activeDocModal.viewMode === 'side-by-side' && activeDocModal.docs.length > 1 ? (
                /* Side-by-Side Dual View */
                <div className="clay-side-by-side-grid">
                  {activeDocModal.docs.map((doc) => (
                    <div key={doc.id} className="clay-side-card">
                      <div className="clay-side-card-head">
                        <div className="clay-side-head-left">
                          <span className="clay-side-doc-icon">{doc.icon}</span>
                          <div>
                            <div className="clay-side-title">{doc.title}</div>
                            <div className="clay-side-sub">{doc.subtitle}</div>
                          </div>
                        </div>
                        <a
                          href={getOriginalFileUrl(doc.url)}
                          target="_blank"
                          rel="noreferrer"
                          className="clay-open-full-btn"
                          title="Open original in Google Drive or full resolution"
                        >
                          Open Original ↗
                        </a>
                      </div>
                      <div className="clay-side-img-box">
                        {imgLoadErrors[doc.url] ? (
                          <div className="clay-drive-access-notice compact">
                            <div className="clay-drive-notice-icon">🔒</div>
                            <div className="clay-drive-notice-title">Drive Permission Required</div>
                            <p className="clay-drive-notice-desc">Folder is Restricted on Drive.</p>
                            <div style={{ display: 'flex', gap: '6px', justifyContent: 'center', flexWrap: 'wrap' }}>
                              <button
                                type="button"
                                onClick={() => setImgLoadErrors({})}
                                className="clay-drive-retry-btn"
                                style={{ padding: '5px 12px', fontSize: '0.75rem' }}
                              >
                                🔄 Retry
                              </button>
                              <a
                                href={getOriginalFileUrl(doc.url)}
                                target="_blank"
                                rel="noreferrer"
                                className="clay-drive-open-btn"
                                style={{ padding: '5px 12px', fontSize: '0.75rem' }}
                              >
                                Open in Drive ↗
                              </a>
                            </div>
                          </div>
                        ) : (
                          <img
                            src={getFullImageUrl(doc.url)}
                            alt={doc.title}
                            className="clay-modal-img"
                            loading="lazy"
                            referrerPolicy="no-referrer"
                            onError={() => setImgLoadErrors(prev => ({ ...prev, [doc.url]: true }))}
                          />
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                /* Single Document Focus View */
                (() => {
                  const currentDoc = activeDocModal.docs[activeDocModal.activeIdx] || activeDocModal.docs[0];
                  return (
                    <div className="clay-single-doc-container">
                      <div className="clay-single-doc-head">
                        <div className="clay-single-head-info">
                          <span className="clay-single-icon">{currentDoc.icon}</span>
                          <div>
                            <div className="clay-single-doc-title">{currentDoc.title}</div>
                            <div className="clay-single-doc-sub">{currentDoc.subtitle}</div>
                          </div>
                        </div>

                        <div className="clay-single-head-right">
                          {activeDocModal.docs.length > 1 && (
                            <div className="clay-nav-arrows">
                              <button
                                className="clay-nav-arrow-btn"
                                disabled={activeDocModal.activeIdx === 0}
                                onClick={() => setActiveDocModal({
                                  ...activeDocModal,
                                  activeIdx: Math.max(0, activeDocModal.activeIdx - 1)
                                })}
                                title="Previous document"
                              >
                                ← Prev
                              </button>
                              <span className="clay-nav-page-num">
                                {activeDocModal.activeIdx + 1} / {activeDocModal.docs.length}
                              </span>
                              <button
                                className="clay-nav-arrow-btn"
                                disabled={activeDocModal.activeIdx === activeDocModal.docs.length - 1}
                                onClick={() => setActiveDocModal({
                                  ...activeDocModal,
                                  activeIdx: Math.min(activeDocModal.docs.length - 1, activeDocModal.activeIdx + 1)
                                })}
                                title="Next document"
                              >
                                Next →
                              </button>
                            </div>
                          )}
                          <a
                            href={getOriginalFileUrl(currentDoc.url)}
                            target="_blank"
                            rel="noreferrer"
                            className="clay-open-full-btn"
                            title="Open original high-res image or in Google Drive"
                          >
                            Open Original ↗
                          </a>
                        </div>
                      </div>

                      <div className="clay-single-img-wrap">
                        {imgLoadErrors[currentDoc.url] ? (
                          <div className="clay-drive-access-notice">
                            <div className="clay-drive-notice-icon">🔒</div>
                            <div className="clay-drive-notice-title">Google Drive Access Required</div>
                            <p className="clay-drive-notice-desc">
                              This screenshot is stored in your Google Form responses folder on Google Drive. Because the folder permissions are currently <strong>Restricted</strong>, Google blocks third-party previews.
                            </p>
                            <div className="clay-drive-notice-actions" style={{ display: 'flex', gap: '10px', justifyContent: 'center', flexWrap: 'wrap', marginBottom: '1.25rem' }}>
                              <button
                                type="button"
                                onClick={() => setImgLoadErrors({})}
                                className="clay-drive-retry-btn"
                              >
                                🔄 Reload Preview
                              </button>
                              <a
                                href={getOriginalFileUrl(currentDoc.url)}
                                target="_blank"
                                rel="noreferrer"
                                className="clay-drive-open-btn"
                              >
                                ↗ Open File in Google Drive
                              </a>
                            </div>
                            <div className="clay-drive-guide-card">
                              <div className="clay-guide-head">💡 How to enable instant previews for all coordinators:</div>
                              <ol className="clay-guide-steps">
                                <li>Open Google Drive using the account that created the Google Form.</li>
                                <li>Locate the <strong>(File responses)</strong> folder for this form.</li>
                                <li>Right click &rarr; <strong>Share</strong> &rarr; change General access to <strong>"Anyone with the link (Viewer)"</strong>.</li>
                              </ol>
                            </div>
                          </div>
                        ) : (
                          <img
                            src={getFullImageUrl(currentDoc.url)}
                            alt={currentDoc.title}
                            className="clay-modal-img"
                            referrerPolicy="no-referrer"
                            onError={() => setImgLoadErrors(prev => ({ ...prev, [currentDoc.url]: true }))}
                          />
                        )}
                      </div>
                    </div>
                  );
                })()
              )}
            </div>

            {/* Modal Footer with Verification Metadata */}
            <div className="clay-modal-footer">
              <div className="clay-doc-meta-item">
                <span className="meta-label">Entered UTR:</span>
                <span className="meta-val">{activeDocModal.user.utrEnteredManually || activeDocModal.user.paymentUTR || 'N/A'}</span>
              </div>
              <div className="clay-doc-meta-item">
                <span className="meta-label">Fetched UTR:</span>
                <span className="meta-val">{activeDocModal.user.utrFetchedFromScreenshot || 'PENDING'}</span>
              </div>
              <div className="clay-doc-meta-item">
                <span className="meta-label">Status:</span>
                <span className={`meta-badge status-${(activeDocModal.user.verificationStatus || '').toLowerCase()}`}>
                  {activeDocModal.user.verificationStatus || 'UNKNOWN'}
                </span>
              </div>
              {activeDocModal.user.isAjuExempt && (
                <div className="clay-doc-meta-item">
                  <span className="meta-badge badge-exempt">⚡ AJU Exempt (No-Dues)</span>
                </div>
              )}

              {/* Coordinator 1-Click Verification Email Actions */}
              <div className="clay-modal-footer-email-actions">
                <button
                  type="button"
                  disabled={sendingEmailType !== null}
                  onClick={() => handleSendEmail(activeDocModal.user, 'confirmation')}
                  className={`clay-footer-action-btn ${activeDocModal.user.confirmationEmailSent ? 'btn-success' : 'btn-primary'}`}
                  title="Verify screenshot and send confirmation email with registered events list"
                >
                  {sendingEmailType === 'confirmation' ? (
                    <span className="btn-loading"><RefreshCw size={13} className="spin" /> Sending...</span>
                  ) : activeDocModal.user.confirmationEmailSent ? (
                    <span><CheckCircle2 size={13} /> Confirmed (Resend)</span>
                  ) : (
                    <span><Send size={13} /> Verify & Send Confirmation</span>
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ── Send Email Dialog Modal ── */}
      {emailModalUser && (
        <div className="clay-modal-overlay" onClick={() => setEmailModalUser(null)}>
          <div className="clay-modal-card clay-email-dialog-card" onClick={(e) => e.stopPropagation()}>
            {/* Modal Header */}
            <div className="clay-modal-header">
              <div className="clay-modal-title-group">
                <div className="clay-modal-title">
                  <Mail size={20} color="#2563eb" />
                  <span>Send Email to Participant</span>
                  <span className="clay-modal-user-chip">{emailModalUser.name}</span>
                </div>
                <div className="clay-modal-sub">
                  Reg ID: <strong style={{ color: '#2563eb' }}>{emailModalUser.registrationId}</strong>
                  &nbsp;·&nbsp;
                  {emailModalUser.email}
                  &nbsp;·&nbsp;
                  {emailModalUser.institution}
                </div>
              </div>
              <button 
                className="clay-modal-close" 
                onClick={() => setEmailModalUser(null)}
                title="Close"
              >
                ✕
              </button>
            </div>

            {/* Modal Content */}
            <div className="clay-email-dialog-body">
              {/* Registered Events Summary Box */}
              <div className="clay-email-events-recap">
                <div className="clay-events-recap-head">
                  <span>Registered Events ({emailModalUser.registeredEvents?.length || 0}):</span>
                  {emailModalUser.isAjuExempt ? (
                    <span className="recap-exempt-badge">🎓 AJU Exempt (No-Dues)</span>
                  ) : (
                    <span className="recap-paid-badge">💳 Paid (₹{emailModalUser.expectedAmount || 100})</span>
                  )}
                </div>
                <div className="clay-events-recap-chips">
                  {emailModalUser.registeredEvents?.length > 0 ? (
                    emailModalUser.registeredEvents.map((r: any, idx: number) => (
                      <span key={idx} className="recap-chip">
                        {r.event?.name || r.eventId || 'Unknown Event'}
                      </span>
                    ))
                  ) : (
                    <span style={{ fontSize: '0.8rem', color: '#94a3b8' }}>No registered events</span>
                  )}
                </div>
              </div>

              {/* Two Email Types Selection Cards */}
              <div className="clay-email-types-grid">
                {/* 1. Registration & Events Confirmation Email */}
                <div className="clay-email-type-card">
                  <div className="email-type-header">
                    <div className="email-type-icon-box type-confirm">
                      <ShieldCheck size={22} color="#047857" />
                    </div>
                    <div className="email-type-info">
                      <div className="email-type-title">1. Registration Confirmation Email</div>
                      <div className="email-type-subtitle">For faculty coordinators after checking Payment SS</div>
                    </div>
                  </div>

                  <p className="email-type-desc">
                    Confirms that registration has been verified and lists <strong>all {emailModalUser.registeredEvents?.length || 0} registered events</strong>, schedule highlights, rules, and desk instructions.
                  </p>

                  <div className="email-type-status-row">
                    <span className="status-label">Status:</span>
                    {emailModalUser.confirmationEmailSent ? (
                      <span className="status-val sent">
                        <CheckCircle2 size={13} /> Sent on {new Date(emailModalUser.confirmationEmailSentAt).toLocaleDateString()}
                        {emailModalUser.confirmationEmailSentBy && ` by ${emailModalUser.confirmationEmailSentBy}`}
                      </span>
                    ) : (
                      <span className="status-val pending">
                        <Clock size={13} /> Not sent yet
                      </span>
                    )}
                  </div>

                  <button
                    type="button"
                    disabled={sendingEmailType !== null}
                    onClick={() => handleSendEmail(emailModalUser, 'confirmation')}
                    className="clay-email-send-action-btn btn-send-confirm"
                  >
                    {sendingEmailType === 'confirmation' ? (
                      <span className="btn-loading"><RefreshCw size={14} className="spin" /> Sending Confirmation...</span>
                    ) : emailModalUser.confirmationEmailSent ? (
                      <span><RefreshCw size={14} /> Resend Confirmation Email</span>
                    ) : (
                      <span><Send size={14} /> Send Confirmation Email</span>
                    )}
                  </button>
                </div>

                {/* 2. Official Technika 6.0 QR Pass Email (Coming Soon) */}
                <div className="clay-email-type-card disabled-card">
                  <div className="email-type-header">
                    <div className="email-type-icon-box type-qr" style={{ opacity: 0.6 }}>
                      <QrCode size={22} color="#64748b" />
                    </div>
                    <div className="email-type-info">
                      <div className="email-type-title" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                        <span>2. Entry QR Pass Email</span>
                        <span style={{ fontSize: '0.65rem', background: '#f1f5f9', color: '#64748b', padding: '2px 8px', borderRadius: '6px', border: '1px solid #cbd5e1' }}>
                          Coming Soon
                        </span>
                      </div>
                      <div className="email-type-subtitle">Official Campus Entry & Security Check-In</div>
                    </div>
                  </div>

                  <p className="email-type-desc" style={{ color: '#94a3b8' }}>
                    Digital entry QR pass system will be activated closer to the fest dates for campus entry gate scanning.
                  </p>

                  <div className="email-type-status-row">
                    <span className="status-label">Availability:</span>
                    <span className="status-val pending">
                      <Clock size={13} /> Activating Soon
                    </span>
                  </div>

                  <button
                    type="button"
                    disabled={true}
                    className="clay-email-send-action-btn"
                    style={{ background: '#e2e8f0', color: '#94a3b8', border: '1px solid #cbd5e1', cursor: 'not-allowed' }}
                  >
                    <span>🔒 QR Pass Coming Soon</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ── Toast Notification ── */}
      {emailToast && (
        <div className={`clay-email-floating-toast toast-${emailToast.type}`}>
          <div className="toast-icon">
            {emailToast.type === 'success' ? <CheckCircle2 size={18} /> : <AlertCircle size={18} />}
          </div>
          <div className="toast-msg">{emailToast.message}</div>
          <button 
            type="button" 
            onClick={() => setEmailToast(null)} 
            className="toast-close"
          >
            ✕
          </button>
        </div>
      )}

      {/* ── Claymorphism Styles ── */}
      <style>{`
        /* Source Badges */
        .source-pill {
          font-size: 0.65rem;
          font-weight: 800;
          padding: 2px 8px;
          border-radius: 999px;
          display: inline-flex;
          align-items: center;
          gap: 4px;
        }
        .source-web {
          background: #eff6ff;
          color: #1d4ed8;
          border: 1px solid #bfdbfe;
        }
        .source-gform {
          background: #ecfdf5;
          color: #047857;
          border: 1px solid #a7f3d0;
        }
        .source-import {
          background: #faf5ff;
          color: #7e22ce;
          border: 1px solid #e9d5ff;
        }

        .clay-users-page {
          font-family: 'Space Grotesk', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
          display: flex;
          flex-direction: column;
          gap: 1.2rem;
        }

        /* ── Page Header ── */
        .clay-page-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 12px;
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
          background: linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.4rem;
          border: 2.5px solid #ffffff;
          flex-shrink: 0;
          box-shadow:
            6px 8px 18px rgba(37, 99, 235, 0.3),
            inset 3px 3px 6px rgba(255, 255, 255, 0.5),
            inset -3px -3px 6px rgba(15, 23, 42, 0.3);
        }

        .clay-page-title {
          font-size: 1.5rem;
          font-weight: 900;
          color: #0f172a;
          margin: 0;
          letter-spacing: -0.02em;
        }

        .clay-page-subtitle {
          font-size: 0.78rem;
          color: #64748b;
          margin: 2px 0 0 0;
          font-weight: 500;
        }

        .clay-count-badge {
          display: flex;
          align-items: baseline;
          gap: 6px;
          background: #f4f8fd;
          padding: 8px 16px;
          border-radius: 16px;
          border: 2px solid rgba(255, 255, 255, 0.9);
          box-shadow:
            6px 8px 18px rgba(162, 178, 201, 0.22),
            -5px -5px 14px rgba(255, 255, 255, 0.8),
            inset 2px 2px 4px rgba(255, 255, 255, 0.8),
            inset -2px -2px 4px rgba(162, 178, 201, 0.18);
        }

        .clay-count-num {
          font-size: 1.5rem;
          font-weight: 900;
          color: #2563eb;
        }

        .clay-count-label {
          font-size: 0.72rem;
          font-weight: 700;
          color: #94a3b8;
          text-transform: uppercase;
        }

        /* ── Toolbar ── */
        .clay-toolbar {
          display: flex;
          gap: 0.75rem;
          flex-wrap: wrap;
        }

        .clay-search-box {
          flex: 1;
          min-width: 250px;
          display: flex;
          align-items: center;
          gap: 8px;
          background: #e2eaf4;
          border-radius: 16px;
          padding: 6px 14px;
          border: 2px solid transparent;
          box-shadow:
            inset 3px 3px 6px rgba(162, 178, 201, 0.45),
            inset -3px -3px 6px rgba(255, 255, 255, 0.9);
          transition: all 0.2s;
        }

        .clay-search-box:focus-within {
          border-color: #3b82f6;
          background: #ffffff;
          box-shadow:
            0 0 0 3px rgba(59, 130, 246, 0.15),
            inset 2px 2px 4px rgba(162, 178, 201, 0.2),
            inset -2px -2px 4px rgba(255, 255, 255, 0.9);
        }

        .clay-search-icon { font-size: 0.9rem; flex-shrink: 0; }

        .clay-search-input {
          flex: 1;
          border: none;
          background: transparent;
          outline: none;
          font-family: inherit;
          font-size: 0.85rem;
          font-weight: 600;
          color: #1e293b;
        }

        .clay-search-input::placeholder { color: #94a3b8; font-weight: 500; }

        .clay-search-clear {
          width: 22px; height: 22px; border-radius: 50%;
          border: none; background: rgba(100, 116, 139, 0.12);
          color: #64748b; cursor: pointer; font-size: 0.7rem;
          display: flex; align-items: center; justify-content: center;
          transition: all 0.15s;
        }
        .clay-search-clear:hover { background: rgba(100, 116, 139, 0.2); }

        .clay-filter-box {
          display: flex;
          align-items: center;
          gap: 8px;
          background: #e2eaf4;
          border-radius: 16px;
          padding: 6px 14px;
          border: 2px solid transparent;
          box-shadow:
            inset 3px 3px 6px rgba(162, 178, 201, 0.45),
            inset -3px -3px 6px rgba(255, 255, 255, 0.9);
          transition: all 0.2s;
        }

        .clay-filter-box:focus-within {
          border-color: #3b82f6;
          background: #ffffff;
        }

        .clay-filter-icon { font-size: 0.9rem; }

        .clay-filter-select {
          border: none;
          background: transparent;
          outline: none;
          font-family: inherit;
          font-size: 0.82rem;
          font-weight: 600;
          color: #1e293b;
          cursor: pointer;
          padding-right: 8px;
        }

        /* ── Data Table Card ── */
        .clay-table-card {
          background: #eef3f9;
          border-radius: 22px;
          border: 2.5px solid rgba(255, 255, 255, 0.9);
          box-shadow:
            12px 16px 36px rgba(162, 178, 201, 0.35),
            -10px -10px 28px rgba(255, 255, 255, 0.85),
            inset 3px 3px 8px rgba(255, 255, 255, 0.85),
            inset -3px -3px 8px rgba(162, 178, 201, 0.15);
          overflow: hidden;
        }

        /* ── Mobile Swipe Hint ── */
        .clay-mobile-swipe-hint {
          display: none;
        }

        .clay-table-wrapper {
          overflow-x: auto;
          -webkit-overflow-scrolling: touch;
          width: 100%;
        }

        .clay-table {
          width: 100%;
          min-width: 860px;
          border-collapse: collapse;
          text-align: left;
        }

        .clay-table thead tr {
          background: #f4f8fd;
          border-bottom: 2px solid rgba(255, 255, 255, 0.7);
        }

        .clay-table th {
          padding: 0.9rem 1rem;
          font-size: 0.72rem;
          font-weight: 800;
          color: #2563eb;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          white-space: nowrap;
        }

        .clay-table td {
          padding: 0.85rem 1rem;
          font-size: 0.85rem;
          color: #334155;
          vertical-align: top;
        }

        .clay-table tbody tr {
          border-bottom: 1.5px solid rgba(226, 234, 244, 0.8);
          transition: all 0.2s;
        }

        .clay-table tbody tr:hover {
          background: rgba(244, 248, 253, 0.7);
        }

        .clay-table tbody tr.row-even {
          background: rgba(255, 255, 255, 0.25);
        }

        .clay-table tbody tr.row-odd {
          background: transparent;
        }

        .clay-table tbody tr:last-child {
          border-bottom: none;
        }

        /* ── Table Cell Styles ── */
        .clay-id-badge {
          display: inline-block;
          font-size: 0.75rem;
          font-weight: 800;
          color: #2563eb;
          background: #dbeafe;
          padding: 3px 10px;
          border-radius: 8px;
          font-family: 'Space Mono', monospace, 'Space Grotesk', sans-serif;
          box-shadow:
            inset 1.5px 1.5px 3px rgba(255, 255, 255, 0.8),
            inset -1.5px -1.5px 3px rgba(37, 99, 235, 0.12),
            2px 2px 5px rgba(37, 99, 235, 0.08);
        }

        .clay-user-contact-masked {
          font-size: 0.72rem;
          color: #94a3b8;
          font-weight: 600;
          display: inline-flex;
          align-items: center;
          gap: 4px;
          margin-top: 2px;
          background: #f1f5f9;
          padding: 2px 6px;
          border-radius: 4px;
          border: 1px dashed #cbd5e1;
          width: fit-content;
        }
        .clay-export-csv-btn {
          display: flex;
          align-items: center;
          gap: 6px;
          padding: 8px 14px;
          background: #ffffff;
          border: 1.5px solid #cbd5e1;
          border-radius: 12px;
          color: #0f172a;
          font-weight: 700;
          font-size: 0.85rem;
          cursor: pointer;
          transition: all 0.2s ease;
          box-shadow: 2px 3px 8px rgba(148, 163, 184, 0.15);
        }
        .clay-export-csv-btn:hover {
          background: #f8fafc;
          border-color: #3b82f6;
          color: #2563eb;
          transform: translateY(-1px);
        }
        .clay-ss-restricted-badge {
          font-size: 0.7rem;
          color: #64748b;
          background: #f8fafc;
          border: 1px solid #e2e8f0;
          padding: 3px 8px;
          border-radius: 6px;
          display: inline-block;
        }
        .clay-user-cell { display: flex; flex-direction: column; gap: 2px; }
        .clay-user-name { font-weight: 800; font-size: 0.88rem; color: #0f172a; }
        .clay-user-email { font-size: 0.78rem; color: #64748b; }
        .clay-user-phone { font-size: 0.75rem; color: #94a3b8; margin-top: 1px; }

        .clay-inst-cell { display: flex; flex-direction: column; gap: 2px; }
        .clay-inst-name { font-weight: 700; font-size: 0.82rem; color: #1e293b; }
        .clay-inst-course { font-size: 0.75rem; color: #94a3b8; }

        .clay-events-list {
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          gap: 5px;
        }

        .clay-event-chip {
          display: inline-block;
          font-size: 0.7rem;
          font-weight: 700;
          padding: 3px 9px;
          border-radius: 8px;
          background: #ede9fe;
          color: #6d28d9;
          border: 1.5px solid rgba(255, 255, 255, 0.8);
          box-shadow:
            inset 1px 1px 2px rgba(255, 255, 255, 0.8),
            inset -1px -1px 2px rgba(109, 40, 217, 0.08),
            2px 2px 5px rgba(109, 40, 217, 0.06);
        }

        .clay-event-more-btn {
          display: inline-flex;
          align-items: center;
          gap: 3px;
          font-size: 0.72rem;
          font-weight: 800;
          padding: 3px 8px;
          border-radius: 8px;
          background: #ede9fe;
          color: #6d28d9;
          border: 1.5px solid rgba(109, 40, 217, 0.25);
          box-shadow:
            inset 1px 1px 2px rgba(255, 255, 255, 0.9),
            2px 2px 5px rgba(109, 40, 217, 0.12);
          cursor: pointer;
          transition: all 0.15s ease;
          font-family: inherit;
        }

        .clay-event-more-btn:hover {
          background: #ddd6fe;
          color: #5b21b6;
          border-color: rgba(109, 40, 217, 0.45);
          transform: translateY(-1px);
          box-shadow:
            inset 1px 1px 2px rgba(255, 255, 255, 0.9),
            2px 4px 8px rgba(109, 40, 217, 0.2);
        }

        .clay-event-less-btn {
          display: inline-flex;
          align-items: center;
          gap: 3px;
          font-size: 0.68rem;
          font-weight: 800;
          padding: 2px 8px;
          border-radius: 8px;
          background: #f1f5f9;
          color: #64748b;
          border: 1px solid #cbd5e1;
          cursor: pointer;
          transition: all 0.15s ease;
          font-family: inherit;
        }

        .clay-event-less-btn:hover {
          background: #e2e8f0;
          color: #334155;
        }

        .clay-no-ss-badge {
          display: inline-flex;
          align-items: center;
          gap: 4px;
          font-size: 0.7rem;
          font-weight: 800;
          padding: 3px 9px;
          border-radius: 8px;
          background: #fef2f2;
          color: #dc2626;
          border: 1.5px solid #fecaca;
          box-shadow: 2px 2px 5px rgba(220, 38, 38, 0.08);
          margin-bottom: 4px;
        }

        .clay-no-events {
          font-size: 0.78rem;
          color: #94a3b8;
          font-style: italic;
        }

        .clay-view-ss-btn {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          padding: 6px 13px;
          border-radius: 11px;
          border: 2px solid rgba(255, 255, 255, 0.9);
          background: #dbeafe;
          color: #2563eb;
          font-weight: 800;
          font-size: 0.72rem;
          cursor: pointer;
          text-transform: uppercase;
          margin-bottom: 5px;
          box-shadow:
            3px 4px 10px rgba(37, 99, 235, 0.14),
            inset 2px 2px 4px rgba(255, 255, 255, 0.85),
            inset -2px -2px 4px rgba(37, 99, 235, 0.1);
          transition: all 0.2s cubic-bezier(0.34, 1.56, 0.64, 1);
        }

        .clay-view-ss-btn:hover {
          transform: translateY(-1px);
          box-shadow:
            4px 6px 14px rgba(37, 99, 235, 0.2),
            inset 2px 2px 4px rgba(255, 255, 255, 0.9),
            inset -2px -2px 4px rgba(37, 99, 235, 0.14);
        }

        .clay-multi-ss-cell {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          gap: 4px;
        }

        .clay-multi-ss-main-btn {
          background: linear-gradient(135deg, #dbeafe 0%, #ede9fe 100%);
          color: #1d4ed8;
          border-color: rgba(255, 255, 255, 0.95);
        }

        .clay-ss-count-chip {
          background: #2563eb;
          color: #ffffff;
          font-size: 0.62rem;
          font-weight: 900;
          padding: 1px 6px;
          border-radius: 9999px;
          letter-spacing: 0.02em;
          box-shadow: 0 1px 3px rgba(37, 99, 235, 0.3);
        }

        .clay-ss-quick-tags {
          display: flex;
          align-items: center;
          gap: 5px;
          margin-bottom: 4px;
        }

        .clay-ss-mini-tag {
          display: inline-flex;
          align-items: center;
          gap: 3px;
          padding: 2px 7px;
          font-size: 0.65rem;
          font-weight: 800;
          border-radius: 7px;
          border: 1px solid rgba(255, 255, 255, 0.8);
          cursor: pointer;
          transition: all 0.15s ease;
          box-shadow:
            1.5px 2px 4px rgba(162, 178, 201, 0.25),
            inset 1px 1px 2px rgba(255, 255, 255, 0.8);
        }

        .clay-ss-mini-tag:hover {
          transform: translateY(-1px);
        }

        .clay-ss-mini-tag.tag-slip {
          background: #fef3c7;
          color: #b45309;
          border-color: #fde68a;
        }

        .clay-ss-mini-tag.tag-idcard {
          background: #ecfdf5;
          color: #047857;
          border-color: #a7f3d0;
        }

        .clay-ss-mini-tag.tag-payment {
          background: #eff6ff;
          color: #1d4ed8;
          border-color: #bfdbfe;
        }

        .clay-utr-info {
          font-size: 0.7rem;
          color: #64748b;
          display: flex;
          flex-direction: column;
          gap: 1px;
        }

        .clay-delete-btn {
          display: inline-flex;
          align-items: center;
          gap: 4px;
          padding: 5px 12px;
          border-radius: 10px;
          border: 2px solid rgba(239, 68, 68, 0.15);
          background: #fee2e2;
          color: #dc2626;
          font-weight: 700;
          font-size: 0.72rem;
          cursor: pointer;
          text-transform: uppercase;
          box-shadow:
            3px 4px 10px rgba(239, 68, 68, 0.1),
            inset 2px 2px 4px rgba(255, 255, 255, 0.8),
            inset -2px -2px 4px rgba(239, 68, 68, 0.08);
          transition: all 0.2s cubic-bezier(0.34, 1.56, 0.64, 1);
        }

        .clay-delete-btn:hover {
          transform: translateY(-1px);
          background: #fecaca;
          box-shadow:
            4px 6px 14px rgba(239, 68, 68, 0.15),
            inset 2px 2px 4px rgba(255, 255, 255, 0.8),
            inset -2px -2px 4px rgba(239, 68, 68, 0.12);
        }

        /* ── Multi-Screenshot Modal ── */
        .clay-modal-overlay {
          position: fixed;
          top: 0; left: 0; right: 0; bottom: 0;
          background: rgba(15, 23, 42, 0.65);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 999999;
          padding: 20px;
        }

        .clay-modal-card {
          background: #eef3f9;
          border-radius: 24px;
          border: 2.5px solid rgba(255, 255, 255, 0.9);
          box-shadow:
            20px 24px 50px rgba(162, 178, 201, 0.45),
            -16px -16px 40px rgba(255, 255, 255, 0.9),
            inset 3px 3px 8px rgba(255, 255, 255, 0.85),
            inset -3px -3px 8px rgba(162, 178, 201, 0.2);
          max-width: 90vw;
          max-height: 90vh;
          display: flex;
          flex-direction: column;
          overflow: hidden;
        }

        .clay-doc-modal-card {
          width: 96vw;
          max-width: 1040px;
          max-height: 94vh;
        }

        .clay-modal-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 1.1rem 1.4rem;
          border-bottom: 2px solid rgba(255, 255, 255, 0.8);
          background: rgba(255, 255, 255, 0.4);
          gap: 16px;
        }

        .clay-modal-title-group {
          display: flex;
          flex-direction: column;
          gap: 3px;
        }

        .clay-modal-title {
          font-weight: 800;
          font-size: 1.05rem;
          color: #0f172a;
          display: flex;
          align-items: center;
          gap: 8px;
          flex-wrap: wrap;
        }

        .clay-modal-user-chip {
          background: #dbeafe;
          color: #1d4ed8;
          padding: 2px 10px;
          border-radius: 9999px;
          font-size: 0.8rem;
          font-weight: 700;
          border: 1px solid rgba(37, 99, 235, 0.2);
        }

        .clay-modal-sub {
          font-size: 0.78rem;
          color: #64748b;
          font-weight: 600;
        }

        .clay-modal-actions-top {
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .clay-viewmode-toggle {
          display: flex;
          background: #e2eaf4;
          padding: 3px;
          border-radius: 12px;
          border: 1.5px solid rgba(255, 255, 255, 0.9);
          box-shadow: inset 1px 1px 3px rgba(162, 178, 201, 0.3);
        }

        .clay-viewmode-btn {
          border: none;
          background: transparent;
          color: #64748b;
          font-size: 0.72rem;
          font-weight: 700;
          padding: 5px 12px;
          border-radius: 9px;
          cursor: pointer;
          transition: all 0.15s ease;
        }

        .clay-viewmode-btn.active {
          background: #ffffff;
          color: #0f172a;
          box-shadow: 0 2px 6px rgba(0, 0, 0, 0.08);
        }

        .clay-modal-close {
          width: 34px; height: 34px; border-radius: 50%;
          border: 2px solid rgba(255, 255, 255, 0.8);
          background: #e2eaf4;
          color: #64748b; font-size: 0.85rem; font-weight: 900;
          cursor: pointer;
          display: flex; align-items: center; justify-content: center;
          box-shadow:
            inset 2px 2px 4px rgba(255, 255, 255, 0.8),
            inset -2px -2px 4px rgba(162, 178, 201, 0.3),
            3px 3px 8px rgba(162, 178, 201, 0.2);
          transition: all 0.2s;
          flex-shrink: 0;
        }

        .clay-modal-close:hover {
          background: #fee2e2;
          color: #dc2626;
          transform: scale(1.05);
        }

        /* Tabs Bar */
        .clay-doc-tabs-bar {
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 10px 1.4rem;
          background: rgba(255, 255, 255, 0.6);
          border-bottom: 1.5px solid rgba(255, 255, 255, 0.8);
          overflow-x: auto;
        }

        .clay-doc-tab-btn {
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 7px 14px;
          border-radius: 12px;
          border: 1.5px solid #e2e8f0;
          background: #f8fafc;
          color: #475569;
          font-weight: 700;
          font-size: 0.78rem;
          cursor: pointer;
          transition: all 0.2s;
          white-space: nowrap;
        }

        .clay-doc-tab-btn:hover {
          background: #ffffff;
          color: #0f172a;
        }

        .clay-doc-tab-btn.active {
          background: #ffffff;
          border-color: #2563eb;
          color: #2563eb;
          box-shadow:
            3px 4px 12px rgba(37, 99, 235, 0.12),
            inset 1px 1px 2px rgba(255, 255, 255, 0.9);
        }

        .clay-doc-tab-pill {
          background: #e2e8f0;
          color: #64748b;
          font-size: 0.65rem;
          padding: 1px 6px;
          border-radius: 9999px;
          font-weight: 800;
        }

        .clay-doc-tab-btn.active .clay-doc-tab-pill {
          background: #dbeafe;
          color: #1d4ed8;
        }

        /* Modal Body */
        .clay-doc-modal-body {
          padding: 1.25rem 1.4rem;
          overflow-y: auto;
          flex-grow: 1;
        }

        /* Side-by-Side Dual View */
        .clay-side-by-side-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
          gap: 20px;
        }

        .clay-side-card {
          background: #ffffff;
          border-radius: 18px;
          border: 2px solid rgba(255, 255, 255, 0.9);
          padding: 14px;
          display: flex;
          flex-direction: column;
          box-shadow:
            6px 8px 20px rgba(162, 178, 201, 0.2),
            inset 2px 2px 4px rgba(255, 255, 255, 0.9);
        }

        .clay-side-card-head {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 12px;
          gap: 10px;
        }

        .clay-side-head-left {
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .clay-side-doc-icon {
          font-size: 1.3rem;
        }

        .clay-side-title {
          font-size: 0.85rem;
          font-weight: 800;
          color: #0f172a;
        }

        .clay-side-sub {
          font-size: 0.72rem;
          color: #64748b;
        }

        .clay-side-img-box {
          width: 100%;
          min-height: 280px;
          max-height: 55vh;
          background: #f1f5f9;
          border-radius: 12px;
          overflow: hidden;
          display: flex;
          align-items: center;
          justify-content: center;
          border: 1px solid #e2e8f0;
        }

        .clay-side-img-box img {
          width: 100%;
          height: 100%;
          max-height: 55vh;
          object-fit: contain;
        }

        /* Single Document View */
        .clay-single-doc-container {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .clay-single-doc-head {
          display: flex;
          align-items: center;
          justify-content: space-between;
          background: #ffffff;
          padding: 12px 16px;
          border-radius: 16px;
          border: 1.5px solid rgba(255, 255, 255, 0.9);
          box-shadow: 2px 4px 10px rgba(162, 178, 201, 0.15);
        }

        .clay-single-head-info {
          display: flex;
          align-items: center;
          gap: 10px;
        }

        .clay-single-icon {
          font-size: 1.5rem;
        }

        .clay-single-doc-title {
          font-size: 0.95rem;
          font-weight: 800;
          color: #0f172a;
        }

        .clay-single-doc-sub {
          font-size: 0.75rem;
          color: #64748b;
        }

        .clay-single-head-right {
          display: flex;
          align-items: center;
          gap: 14px;
        }

        .clay-nav-arrows {
          display: flex;
          align-items: center;
          gap: 6px;
          background: #f1f5f9;
          padding: 3px 6px;
          border-radius: 10px;
        }

        .clay-nav-arrow-btn {
          border: none;
          background: #ffffff;
          padding: 4px 10px;
          border-radius: 7px;
          font-size: 0.72rem;
          font-weight: 800;
          color: #2563eb;
          cursor: pointer;
          box-shadow: 0 1px 3px rgba(0, 0, 0, 0.08);
          transition: all 0.15s ease;
        }

        .clay-nav-arrow-btn:disabled {
          opacity: 0.4;
          cursor: not-allowed;
          color: #94a3b8;
        }

        .clay-nav-page-num {
          font-size: 0.72rem;
          font-weight: 800;
          color: #475569;
          padding: 0 4px;
        }

        .clay-open-full-btn {
          display: inline-flex;
          align-items: center;
          gap: 4px;
          font-size: 0.74rem;
          font-weight: 800;
          color: #2563eb;
          text-decoration: none;
          padding: 5px 11px;
          border-radius: 9px;
          background: #eff6ff;
          border: 1px solid #bfdbfe;
          transition: all 0.15s ease;
        }

        .clay-open-full-btn:hover {
          background: #dbeafe;
          transform: translateY(-1px);
        }

        .clay-single-img-wrap {
          width: 100%;
          min-height: 380px;
          max-height: 65vh;
          background: #f8fafc;
          border-radius: 16px;
          border: 2px solid #ffffff;
          box-shadow:
            inset 2px 2px 6px rgba(162, 178, 201, 0.2),
            5px 6px 16px rgba(162, 178, 201, 0.15);
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
          padding: 8px;
        }

        .clay-modal-img {
          max-width: 100%;
          max-height: 65vh;
          object-fit: contain;
          border-radius: 10px;
        }

        /* Google Drive Access Notice Styling */
        .clay-drive-access-notice {
          padding: 2rem 1.5rem;
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          max-width: 520px;
          margin: auto;
        }

        .clay-drive-access-notice.compact {
          padding: 1.2rem 1rem;
        }

        .clay-drive-notice-icon {
          font-size: 2.2rem;
          margin-bottom: 0.6rem;
        }

        .clay-drive-notice-title {
          font-size: 1.1rem;
          font-weight: 800;
          color: #1e293b;
          margin-bottom: 0.4rem;
        }

        .clay-drive-notice-desc {
          font-size: 0.82rem;
          color: #64748b;
          line-height: 1.5;
          margin-bottom: 1.2rem;
        }

        .clay-drive-notice-actions {
          margin-bottom: 1.2rem;
        }

        .clay-drive-retry-btn {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          padding: 8px 18px;
          border-radius: 12px;
          background: #10b981;
          color: #ffffff;
          font-size: 0.82rem;
          font-weight: 700;
          border: none;
          cursor: pointer;
          box-shadow: 0 4px 12px rgba(16, 185, 129, 0.3);
          transition: all 0.2s;
        }

        .clay-drive-retry-btn:hover {
          background: #059669;
          transform: translateY(-1px);
        }

        .clay-drive-open-btn {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          padding: 8px 18px;
          border-radius: 12px;
          background: #2563eb;
          color: #ffffff;
          font-size: 0.82rem;
          font-weight: 700;
          text-decoration: none;
          box-shadow: 0 4px 12px rgba(37, 99, 235, 0.3);
          transition: all 0.2s;
        }

        .clay-drive-open-btn:hover {
          background: #1d4ed8;
          transform: translateY(-1px);
        }

        .clay-drive-guide-card {
          background: #ffffff;
          border: 1.5px solid #e2e8f0;
          border-radius: 12px;
          padding: 0.9rem 1.1rem;
          text-align: left;
          width: 100%;
          box-shadow: 0 4px 12px rgba(0,0,0,0.04);
        }

        .clay-guide-head {
          font-size: 0.78rem;
          font-weight: 800;
          color: #0f172a;
          margin-bottom: 0.4rem;
        }

        .clay-guide-steps {
          margin: 0;
          padding-left: 1.2rem;
          font-size: 0.75rem;
          color: #475569;
          line-height: 1.55;
        }

        .clay-guide-steps li {
          margin-bottom: 0.2rem;
        }

        /* Modal Footer */
        .clay-modal-footer {
          display: flex;
          align-items: center;
          gap: 20px;
          padding: 0.9rem 1.4rem;
          background: rgba(255, 255, 255, 0.6);
          border-top: 1.5px solid rgba(255, 255, 255, 0.8);
          flex-wrap: wrap;
        }

        .clay-doc-meta-item {
          display: flex;
          align-items: center;
          gap: 6px;
          font-size: 0.74rem;
        }

        .meta-label {
          color: #64748b;
          font-weight: 700;
        }

        .meta-val {
          color: #0f172a;
          font-weight: 800;
          font-family: monospace;
          background: #ffffff;
          padding: 2px 6px;
          border-radius: 5px;
          border: 1px solid #e2e8f0;
        }

        .meta-badge {
          padding: 2px 8px;
          border-radius: 9999px;
          font-size: 0.68rem;
          font-weight: 800;
          text-transform: uppercase;
        }

        .meta-badge.status-success {
          background: #dcfce7;
          color: #15803d;
          border: 1px solid #86efac;
        }

        .meta-badge.status-pending {
          background: #fef9c3;
          color: #a16207;
          border: 1px solid #fde047;
        }

        .meta-badge.status-failed {
          background: #fee2e2;
          color: #b91c1c;
          border: 1px solid #fca5a5;
        }

        .meta-badge.badge-exempt {
          background: #fdf4ff;
          color: #9333ea;
          border: 1px solid #e9d5ff;
        }

        /* ── Clearance Source Tag ── */
        .clay-clearance-src-tag {
          font-size: 0.65rem;
          font-weight: 800;
          padding: 2px 8px;
          border-radius: 6px;
          display: inline-flex;
          align-items: center;
          gap: 4px;
        }
        .clay-clearance-src-tag.tag-cloudinary {
          background: #e0f2fe;
          color: #0369a1;
          border: 1px solid #bae6fd;
        }
        .clay-clearance-src-tag.tag-gform-img {
          background: #f0fdf4;
          color: #15803d;
          border: 1px solid #bbf7d0;
        }
        .clay-clearance-src-tag.tag-gform-none {
          background: #fffbeb;
          color: #b45309;
          border: 1px solid #fde68a;
        }

        /* ── Actions Column & Send Email Button ── */
        .clay-actions-cell-wrap {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          gap: 6px;
        }

        .clay-send-email-btn {
          display: inline-flex;
          align-items: center;
          gap: 5px;
          padding: 5px 11px;
          border-radius: 9px;
          border: 1.5px solid rgba(255, 255, 255, 0.9);
          background: linear-gradient(135deg, #3b82f6 0%, #2563eb 100%);
          color: #ffffff;
          font-size: 0.72rem;
          font-weight: 800;
          cursor: pointer;
          font-family: inherit;
          box-shadow:
            2px 4px 10px rgba(37, 99, 235, 0.25),
            inset 1.5px 1.5px 3px rgba(255, 255, 255, 0.4),
            inset -1.5px -1.5px 3px rgba(0, 0, 0, 0.2);
          transition: all 0.2s cubic-bezier(0.34, 1.56, 0.64, 1);
        }

        .clay-send-email-btn:hover {
          transform: translateY(-1px);
          box-shadow:
            3px 6px 14px rgba(37, 99, 235, 0.35),
            inset 1.5px 1.5px 3px rgba(255, 255, 255, 0.5);
        }

        .clay-email-status-pills {
          display: flex;
          flex-direction: column;
          gap: 3px;
        }

        .clay-email-pill {
          display: inline-flex;
          align-items: center;
          gap: 4px;
          font-size: 0.64rem;
          font-weight: 800;
          padding: 2px 7px;
          border-radius: 6px;
          white-space: nowrap;
        }
        .clay-email-pill.pill-sent {
          background: #ecfdf5;
          color: #047857;
          border: 1px solid #a7f3d0;
        }
        .clay-email-pill.pill-pending {
          background: #f8fafc;
          color: #94a3b8;
          border: 1px dashed #cbd5e1;
        }
        .clay-email-pill.pill-qr-sent {
          background: #eef2ff;
          color: #4338ca;
          border: 1px solid #c7d2fe;
        }

        /* ── Modal Footer Email Actions ── */
        .clay-modal-footer-email-actions {
          margin-left: auto;
          display: flex;
          align-items: center;
          gap: 8px;
          flex-wrap: wrap;
        }

        .clay-footer-action-btn {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          padding: 6px 13px;
          border-radius: 10px;
          border: 1.5px solid rgba(255, 255, 255, 0.85);
          font-size: 0.72rem;
          font-weight: 800;
          cursor: pointer;
          font-family: inherit;
          transition: all 0.18s ease;
        }

        .clay-footer-action-btn:disabled {
          opacity: 0.6;
          cursor: not-allowed;
        }

        .clay-footer-action-btn.btn-primary {
          background: linear-gradient(135deg, #2563eb 0%, #1d4ed8 100%);
          color: #ffffff;
          box-shadow: 2px 4px 10px rgba(37, 99, 235, 0.25);
        }
        .clay-footer-action-btn.btn-accent {
          background: linear-gradient(135deg, #7c3aed 0%, #6d28d9 100%);
          color: #ffffff;
          box-shadow: 2px 4px 10px rgba(124, 58, 237, 0.25);
        }
        .clay-footer-action-btn.btn-success {
          background: linear-gradient(135deg, #059669 0%, #047857 100%);
          color: #ffffff;
          box-shadow: 2px 4px 10px rgba(5, 150, 105, 0.25);
        }

        /* ── Email Dialog Modal ── */
        .clay-email-dialog-card {
          width: 92vw;
          max-width: 720px;
          max-height: 92vh;
        }

        .clay-email-dialog-body {
          padding: 1.25rem 1.4rem;
          overflow-y: auto;
          display: flex;
          flex-direction: column;
          gap: 1.1rem;
        }

        .clay-email-events-recap {
          background: #ffffff;
          border-radius: 14px;
          border: 1.5px solid rgba(255, 255, 255, 0.95);
          padding: 0.85rem 1rem;
          box-shadow:
            inset 1.5px 1.5px 3px rgba(162, 178, 201, 0.2),
            2px 4px 10px rgba(0, 0, 0, 0.03);
        }

        .clay-events-recap-head {
          display: flex;
          align-items: center;
          justify-content: space-between;
          font-size: 0.76rem;
          font-weight: 800;
          color: #334155;
          margin-bottom: 0.5rem;
        }

        .recap-exempt-badge {
          background: #fef3c7;
          color: #92400e;
          font-size: 0.65rem;
          font-weight: 800;
          padding: 2px 7px;
          border-radius: 5px;
        }

        .recap-paid-badge {
          background: #ecfdf5;
          color: #065f46;
          font-size: 0.65rem;
          font-weight: 800;
          padding: 2px 7px;
          border-radius: 5px;
        }

        .clay-events-recap-chips {
          display: flex;
          flex-wrap: wrap;
          gap: 5px;
        }

        .recap-chip {
          display: inline-block;
          font-size: 0.7rem;
          font-weight: 700;
          padding: 2px 8px;
          border-radius: 6px;
          background: #ede9fe;
          color: #6d28d9;
          border: 1px solid #ddd6fe;
        }

        .clay-email-types-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1rem;
        }

        .clay-email-type-card {
          background: #ffffff;
          border-radius: 16px;
          border: 2px solid rgba(255, 255, 255, 0.95);
          padding: 1.1rem;
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
          box-shadow:
            6px 8px 18px rgba(162, 178, 201, 0.2),
            inset 2px 2px 4px rgba(255, 255, 255, 0.8);
          transition: all 0.2s ease;
        }

        .clay-email-type-card:hover {
          transform: translateY(-2px);
          box-shadow:
            8px 12px 22px rgba(162, 178, 201, 0.3),
            inset 2px 2px 4px rgba(255, 255, 255, 0.9);
        }

        .email-type-header {
          display: flex;
          align-items: center;
          gap: 10px;
        }

        .email-type-icon-box {
          width: 40px;
          height: 40px;
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          border: 2px solid rgba(255, 255, 255, 0.9);
          box-shadow: 2px 3px 8px rgba(0, 0, 0, 0.06);
        }

        .email-type-icon-box.type-confirm {
          background: #d1fae5;
        }

        .email-type-icon-box.type-qr {
          background: #e0e7ff;
        }

        .email-type-info {
          display: flex;
          flex-direction: column;
          gap: 2px;
        }

        .email-type-title {
          font-size: 0.85rem;
          font-weight: 800;
          color: #0f172a;
          line-height: 1.2;
        }

        .email-type-subtitle {
          font-size: 0.68rem;
          color: #64748b;
          font-weight: 600;
        }

        .email-type-desc {
          font-size: 0.75rem;
          color: #475569;
          line-height: 1.5;
          margin: 0;
          flex: 1;
        }

        .email-type-status-row {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding-top: 0.5rem;
          border-top: 1px dashed #e2e8f0;
          font-size: 0.72rem;
        }

        .status-label {
          color: #64748b;
          font-weight: 700;
        }

        .status-val {
          display: inline-flex;
          align-items: center;
          gap: 4px;
          font-weight: 800;
          font-size: 0.7rem;
        }
        .status-val.sent {
          color: #059669;
        }
        .status-val.pending {
          color: #94a3b8;
        }

        .clay-email-send-action-btn {
          width: 100%;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 6px;
          padding: 8px 14px;
          border-radius: 11px;
          border: 1.5px solid rgba(255, 255, 255, 0.9);
          font-size: 0.78rem;
          font-weight: 800;
          cursor: pointer;
          font-family: inherit;
          transition: all 0.2s cubic-bezier(0.34, 1.56, 0.64, 1);
        }

        .clay-email-send-action-btn:disabled {
          opacity: 0.6;
          cursor: not-allowed;
        }

        .clay-email-send-action-btn.btn-send-confirm {
          background: linear-gradient(135deg, #059669 0%, #047857 100%);
          color: #ffffff;
          box-shadow: 2px 4px 12px rgba(5, 150, 105, 0.25);
        }
        .clay-email-send-action-btn.btn-send-confirm:hover:not(:disabled) {
          transform: translateY(-1px);
          box-shadow: 3px 6px 16px rgba(5, 150, 105, 0.35);
        }

        .clay-email-send-action-btn.btn-send-qr {
          background: linear-gradient(135deg, #4f46e5 0%, #4338ca 100%);
          color: #ffffff;
          box-shadow: 2px 4px 12px rgba(79, 70, 229, 0.25);
        }
        .clay-email-send-action-btn.btn-send-qr:hover:not(:disabled) {
          transform: translateY(-1px);
          box-shadow: 3px 6px 16px rgba(79, 70, 229, 0.35);
        }

        /* ── Floating Toast ── */
        .clay-email-floating-toast {
          position: fixed;
          bottom: 24px;
          right: 24px;
          z-index: 10000;
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 12px 18px;
          border-radius: 14px;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.18);
          font-size: 0.84rem;
          font-weight: 700;
          animation: toastSlideUp 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
        }

        .clay-email-floating-toast.toast-success {
          background: #065f46;
          color: #ffffff;
          border: 1.5px solid #34d399;
        }

        .clay-email-floating-toast.toast-error {
          background: #991b1b;
          color: #ffffff;
          border: 1.5px solid #f87171;
        }

        .toast-close {
          background: transparent;
          border: none;
          color: #ffffff;
          cursor: pointer;
          font-size: 0.85rem;
          padding: 2px 5px;
          opacity: 0.8;
        }
        .toast-close:hover {
          opacity: 1;
        }

        .btn-loading {
          display: inline-flex;
          align-items: center;
          gap: 6px;
        }

        .spin {
          animation: spin 1s linear infinite;
        }

        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }

        @keyframes toastSlideUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        /* ── Responsive ── */
        @media (max-width: 768px) {
          .clay-mobile-swipe-hint {
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 8px 12px;
            background: #dbeafe;
            color: #1e40af;
            font-size: 0.72rem;
            font-weight: 800;
            border-bottom: 2px solid rgba(255, 255, 255, 0.9);
            text-align: center;
          }

          .clay-page-header { 
            flex-direction: column; 
            align-items: flex-start;
            gap: 10px;
          }

          .clay-header-left {
            gap: 10px;
          }

          .clay-page-title {
            font-size: 1.25rem;
          }

          .clay-toolbar { 
            flex-direction: column;
            width: 100%;
            gap: 10px;
          }

          .clay-search-box { 
            width: 100%; 
            min-width: unset; 
            box-sizing: border-box;
          }

          .clay-filter-box {
            width: 100%;
            box-sizing: border-box;
          }

          .clay-filter-select {
            width: 100%;
          }
        }
      `}</style>
    </div>
  );
};
