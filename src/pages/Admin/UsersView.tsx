import React, { useEffect, useState } from 'react';

const API = import.meta.env.VITE_API_URL || 'https://reg.technika2026.online';

export const UsersView: React.FC = () => {
  const role = localStorage.getItem('adminRole');
  
  const [users, setUsers] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [searchQuery, setSearchQuery] = useState('');
  const [filterEvent, setFilterEvent] = useState('all');
  const [accessLevel, setAccessLevel] = useState<'full' | 'limited'>('limited');
  
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
    if (user.paymentScreenshotUrl && typeof user.paymentScreenshotUrl === 'string' && user.paymentScreenshotUrl.trim()) {
      const trimmed = user.paymentScreenshotUrl.trim();
      if (!addedUrls.has(trimmed)) {
        const isExempt = user.isAjuExempt || (user.paymentUTR && user.paymentUTR.startsWith('NODUES-'));
        docs.push({
          id: 'payment',
          title: isExempt ? 'Fee Receipt / Verification Slip' : 'Online Payment UPI Screenshot',
          subtitle: `UTR: ${user.utrEnteredManually || user.paymentUTR || 'N/A'}`,
          url: trimmed,
          badge: isExempt ? 'Receipt' : 'UPI SS',
          type: 'payment',
          icon: '📸'
        });
        addedUrls.add(trimmed);
      }
    }

    return docs;
  };

  const openDocViewer = (user: any, initialIndex = 0) => {
    const docs = getUserDocuments(user);
    if (docs.length === 0) return;
    setActiveDocModal({
      user,
      docs,
      activeIdx: Math.min(initialIndex, docs.length - 1),
      viewMode: 'tabs'
    });
  };

  const getFullImageUrl = (url?: string) => {
    if (!url) return '';
    if (url.startsWith('http://') || url.startsWith('https://') || url.startsWith('data:')) return url;
    return `${API}${url.startsWith('/') ? '' : '/'}${url}`;
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const res = await fetch(`${API}/api/admin/users`, {
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('adminToken')}`
        }
      });
      if (res.ok) {
        const data = await res.json();
        setUsers(data.users || data);
        setAccessLevel(data.accessLevel || 'full');
      } else {
        setError('Failed to fetch users');
      }
    } catch (err) {
      setError('Network error');
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
    
    return matchesSearch && matchesEvent;
  });

  const canDelete = role === 'admin';
  const fullAccess = accessLevel === 'full';

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
        <span>{error}</span>
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
          .clay-error-state span { color: #dc2626; font-weight: 700; }
        `}</style>
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
        <div className="clay-count-badge">
          <span className="clay-count-num">{filteredUsers.length}</span>
          <span className="clay-count-label">{filteredUsers.length === users.length ? 'Total' : `of ${users.length}`}</span>
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
                {fullAccess && <th>ID</th>}
                <th>{fullAccess ? 'Name & Email' : 'Name'}</th>
                <th>Institution</th>
                <th>Registered Events</th>
                {fullAccess && <th>Payment Status</th>}
                {canDelete && <th>Actions</th>}
              </tr>
            </thead>
            <tbody>
              {filteredUsers.length === 0 ? (
                <tr>
                  <td colSpan={fullAccess ? (canDelete ? 6 : 5) : 3} style={{ textAlign: 'center', padding: '40px', color: '#94a3b8' }}>
                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
                      <span style={{ fontSize: '2rem' }}>📭</span>
                      <span style={{ fontWeight: 700 }}>No participants found</span>
                      <span style={{ fontSize: '0.8rem' }}>Try adjusting your search or filter</span>
                    </div>
                  </td>
                </tr>
              ) : (
                filteredUsers.map((user, idx) => (
                  <tr key={user._id} className={idx % 2 === 0 ? 'row-even' : 'row-odd'}>
                    {fullAccess && (
                      <td>
                        <span className="clay-id-badge">{user.registrationId}</span>
                      </td>
                    )}
                    <td>
                      <div className="clay-user-cell">
                        <div className="clay-user-name">{user.name}</div>
                        {fullAccess && <div className="clay-user-email">{user.email}</div>}
                        {fullAccess && <div className="clay-user-phone">📞 {user.whatsapp}</div>}
                      </div>
                    </td>
                    <td>
                      <div className="clay-inst-cell">
                        <div className="clay-inst-name">{user.institution}</div>
                        {fullAccess && <div className="clay-inst-course">{user.course} - {user.semester}</div>}
                      </div>
                    </td>
                    <td>
                      {user.registeredEvents?.length > 0 ? (
                        <div className="clay-events-list">
                          {user.registeredEvents.map((r: any) => (
                            <span key={r._id} className="clay-event-chip">
                              {r.event?.name || 'Unknown'}
                            </span>
                          ))}
                        </div>
                      ) : (
                        <span className="clay-no-events">No events</span>
                      )}
                    </td>
                    {fullAccess && (
                      <td>
                        {(() => {
                          const docs = getUserDocuments(user);
                          if (docs.length === 0) {
                            return (
                              <div>
                                <span className="clay-no-events">No SS</span>
                                <div className="clay-utr-info">
                                  <div><strong>UTR:</strong> {user.utrEnteredManually || user.paymentUTR || 'N/A'}</div>
                                  <div><strong>Fetched:</strong> {user.utrFetchedFromScreenshot || 'PENDING'}</div>
                                </div>
                              </div>
                            );
                          }

                          if (docs.length === 1) {
                            return (
                              <div className="clay-ss-cell-wrap">
                                <button
                                  onClick={() => openDocViewer(user, 0)}
                                  className="clay-view-ss-btn"
                                  title={`View ${docs[0].title}`}
                                >
                                  <span>{docs[0].icon} View SS</span>
                                </button>
                                <div className="clay-utr-info">
                                  <div><strong>UTR:</strong> {user.utrEnteredManually || user.paymentUTR}</div>
                                  <div><strong>Fetched:</strong> {user.utrFetchedFromScreenshot || 'PENDING'}</div>
                                </div>
                              </div>
                            );
                          }

                          // 2 or more screenshots (e.g. No-Dues Slip + College ID)
                          return (
                            <div className="clay-multi-ss-cell">
                              <button
                                onClick={() => openDocViewer(user, 0)}
                                className="clay-view-ss-btn clay-multi-ss-main-btn"
                                title="Click to view both uploaded screenshots in side-by-side or tabbed modal"
                              >
                                <span>📸 View SS</span>
                                <span className="clay-ss-count-chip">{docs.length} Files</span>
                              </button>

                              <div className="clay-ss-quick-tags">
                                {docs.map((doc, dIdx) => (
                                  <button
                                    key={doc.id}
                                    onClick={() => openDocViewer(user, dIdx)}
                                    className={`clay-ss-mini-tag tag-${doc.type}`}
                                    title={`Click to open ${doc.title}`}
                                  >
                                    <span>{doc.icon}</span>
                                    <span>{doc.badge}</span>
                                  </button>
                                ))}
                              </div>

                              <div className="clay-utr-info">
                                <div><strong>UTR:</strong> {user.utrEnteredManually || user.paymentUTR}</div>
                                <div><strong>Fetched:</strong> {user.utrFetchedFromScreenshot || 'PENDING'}</div>
                              </div>
                            </div>
                          );
                        })()}
                      </td>
                    )}
                    {canDelete && (
                      <td>
                        <button
                          onClick={() => handleDelete(user._id, user.name)}
                          className="clay-delete-btn"
                        >
                          🗑️ Cancel
                        </button>
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
                          href={getFullImageUrl(doc.url)}
                          target="_blank"
                          rel="noreferrer"
                          className="clay-open-full-btn"
                          title="Open original full resolution image in new tab"
                        >
                          Open Original ↗
                        </a>
                      </div>
                      <div className="clay-side-img-box">
                        <img
                          src={getFullImageUrl(doc.url)}
                          alt={doc.title}
                          className="clay-modal-img"
                          loading="lazy"
                        />
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
                            href={getFullImageUrl(currentDoc.url)}
                            target="_blank"
                            rel="noreferrer"
                            className="clay-open-full-btn"
                            title="Open original high-res image in new tab"
                          >
                            Open Original ↗
                          </a>
                        </div>
                      </div>

                      <div className="clay-single-img-wrap">
                        <img
                          src={getFullImageUrl(currentDoc.url)}
                          alt={currentDoc.title}
                          className="clay-modal-img"
                        />
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
            </div>
          </div>
        </div>
      )}

      {/* ── Claymorphism Styles ── */}
      <style>{`
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
          z-index: 9999;
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
