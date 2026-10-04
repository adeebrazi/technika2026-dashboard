import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';

const API = import.meta.env.VITE_API_URL || 'https://reg.technika2026.online';

export const ProfileView: React.FC = () => {
  const navigate = useNavigate();

  const token = localStorage.getItem('adminToken');
  const role = localStorage.getItem('adminRole') || 'admin';
  const name = localStorage.getItem('adminName') || 'Administrator';
  const designation = localStorage.getItem('adminDesignation') || (role === 'admin' ? 'Administration' : 'Coordinator');
  const storedEmail = localStorage.getItem('adminEmail');

  const [copiedToken, setCopiedToken] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [showLogoutModal, setShowLogoutModal] = useState(false);
  const [stats, setStats] = useState<{ totalUsers: number; totalTeams: number } | null>(null);

  // Decode JWT payload if available
  let tokenData: any = {};
  try {
    if (token) {
      const base64Url = token.split('.')[1];
      const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
      const jsonPayload = decodeURIComponent(
        atob(base64)
          .split('')
          .map((c) => '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2))
          .join('')
      );
      tokenData = JSON.parse(jsonPayload);
    }
  } catch (err) {
    console.warn('Unable to decode JWT token', err);
  }

  const email = tokenData.email || storedEmail || (role === 'admin' ? 'adeeb@technika2026.online' : 'staff@technika2026.online');
  const sessionIssuedAt = tokenData.iat ? new Date(tokenData.iat * 1000).toLocaleString('en-IN', { timeZone: 'Asia/Kolkata', dateStyle: 'medium', timeStyle: 'short' }) : 'Active Session';
  const sessionExpiresAt = tokenData.exp ? new Date(tokenData.exp * 1000).toLocaleString('en-IN', { timeZone: 'Asia/Kolkata', dateStyle: 'medium', timeStyle: 'short' }) : '12 Hours from login';

  // Calculate remaining session time in hours/mins
  const getRemainingTime = () => {
    if (!tokenData.exp) return 'Active (12h)';
    const diffSec = tokenData.exp - Math.floor(Date.now() / 1000);
    if (diffSec <= 0) return 'Expired';
    const hrs = Math.floor(diffSec / 3600);
    const mins = Math.floor((diffSec % 3600) / 60);
    return `${hrs}h ${mins}m remaining`;
  };

  // Fetch quick metrics for the profile summary
  useEffect(() => {
    const fetchQuickMetrics = async () => {
      try {
        const [usersRes, teamsRes] = await Promise.allSettled([
          fetch(`${API}/api/admin/users`, { headers: { Authorization: `Bearer ${token}` } }),
          fetch(`${API}/api/admin/teams`, { headers: { Authorization: `Bearer ${token}` } })
        ]);

        let uCount = 0;
        let tCount = 0;

        if (usersRes.status === 'fulfilled' && usersRes.value.ok) {
          const uData = await usersRes.value.json();
          uCount = Array.isArray(uData) ? uData.length : (uData.users?.length || 0);
        }
        if (teamsRes.status === 'fulfilled' && teamsRes.value.ok) {
          const tData = await teamsRes.value.json();
          tCount = Array.isArray(tData) ? tData.length : (tData.teams?.length || 0);
        }

        setStats({ totalUsers: uCount, totalTeams: tCount });
      } catch (err) {
        // Non-blocking fallback
      }
    };

    if (token) fetchQuickMetrics();
  }, [token]);

  const handleLogout = () => {
    localStorage.removeItem('adminToken');
    localStorage.removeItem('adminRole');
    localStorage.removeItem('adminName');
    localStorage.removeItem('adminDesignation');
    localStorage.removeItem('adminEmail');
    navigate('/admin/login');
  };

  const getInitials = (fullName: string) => {
    return fullName
      .split(' ')
      .filter(Boolean)
      .map((n) => n[0])
      .join('')
      .substring(0, 2)
      .toUpperCase();
  };

  const getRoleTheme = () => {
    switch (role) {
      case 'admin':
        return {
          title: 'Administrator',
          pillBg: '#dbeafe',
          pillColor: '#1d4ed8',
          gradient: 'linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%)',
          scope: 'Full Administrative & Financial Authority',
          tag: 'ROOT ACCESS',
        };
      case 'faculty':
        return {
          title: 'Faculty Coordinator',
          pillBg: '#ede9fe',
          pillColor: '#6d28d9',
          gradient: 'linear-gradient(135deg, #8b5cf6 0%, #6d28d9 100%)',
          scope: 'Departmental & Event Supervision',
          tag: 'FACULTY PRIVILEGES',
        };
      case 'coordinator':
        return {
          title: 'Student Coordinator',
          pillBg: '#d1fae5',
          pillColor: '#047857',
          gradient: 'linear-gradient(135deg, #10b981 0%, #047857 100%)',
          scope: 'Participant Check-in & Roster Management',
          tag: 'COORDINATOR DESK',
        };
      default:
        return {
          title: 'Staff Member',
          pillBg: '#e2e8f0',
          pillColor: '#334155',
          gradient: 'linear-gradient(135deg, #64748b 0%, #334155 100%)',
          scope: 'Operational Support',
          tag: 'STANDARD ACCESS',
        };
    }
  };

  const theme = getRoleTheme();

  return (
    <div className="clay-profile-page">
      {/* ── Page Header ── */}
      <div className="clay-profile-header">
        <div className="clay-header-left">
          <div className="clay-header-emblem">👤</div>
          <div>
            <h1 className="clay-page-title">USER PROFILE & CREDENTIALS</h1>
            <p className="clay-page-subtitle">Complete administrative authorization, security credentials & session management</p>
          </div>
        </div>
        <div className="clay-status-chip">
          <span className="clay-pulse-dot" />
          <span className="clay-status-text">AUTHORIZED SESSION · {theme.tag}</span>
        </div>
      </div>

      {/* ── Main Profile Grid ── */}
      <div className="clay-profile-grid">
        
        {/* Left Column: Hero Card & Details */}
        <div className="clay-profile-col-left">
          
          {/* Hero Card */}
          <div className="clay-card clay-hero-card">
            <div className="clay-hero-banner" style={{ background: theme.gradient }}>
              <div className="clay-hero-banner-orb" />
            </div>

            <div className="clay-hero-body">
              <div className="clay-hero-avatar-wrapper">
                <div className="clay-hero-avatar" style={{ background: theme.gradient }}>
                  <span className="clay-hero-avatar-text">{getInitials(name)}</span>
                </div>
                <div className="clay-hero-online-badge" title="Active Online Session">
                  <span className="clay-hero-online-dot" />
                </div>
              </div>

              <div className="clay-hero-names">
                <h2 className="clay-hero-name">{name}</h2>
                <div className="clay-hero-badge-row">
                  <span 
                    className="clay-role-pill" 
                    style={{ background: theme.pillBg, color: theme.pillColor }}
                  >
                    ★ {designation}
                  </span>
                  <span className="clay-inst-pill">
                    🏛 Arka Jain University
                  </span>
                </div>
              </div>

              {/* Quick Info Strip */}
              <div className="clay-info-strip">
                <div className="clay-strip-item">
                  <span className="clay-strip-label">Official Email</span>
                  <div className="clay-strip-val-row">
                    <span className="clay-strip-val">{email}</span>
                    <button 
                      className="clay-strip-copy-btn" 
                      onClick={() => {
                        navigator.clipboard.writeText(email);
                        setCopiedEmail(true);
                        setTimeout(() => setCopiedEmail(false), 2000);
                      }}
                      title="Copy email address"
                    >
                      {copiedEmail ? '✓ Copied' : '📋 Copy'}
                    </button>
                  </div>
                </div>

                <div className="clay-strip-item">
                  <span className="clay-strip-label">Assigned Role</span>
                  <span className="clay-strip-val bold">{theme.title}</span>
                </div>

                <div className="clay-strip-item">
                  <span className="clay-strip-label">Access Level</span>
                  <span className="clay-strip-val highlight">{theme.scope}</span>
                </div>

                <div className="clay-strip-item">
                  <span className="clay-strip-label">Account Clearance</span>
                  <span className="clay-strip-val clearance-ok">✓ Verified Technika Authority</span>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Shortcuts */}
          <div className="clay-card clay-shortcuts-card">
            <h3 className="clay-card-title">⚡ QUICK SHORTCUTS</h3>
            <div className="clay-shortcuts-grid">
              <Link to="/admin/participants" className="clay-shortcut-btn">
                <span className="clay-shortcut-icon">👤</span>
                <div className="clay-shortcut-text">
                  <span className="clay-shortcut-title">Participants</span>
                  <span className="clay-shortcut-desc">View all student registrations</span>
                </div>
                <span className="clay-shortcut-arrow">→</span>
              </Link>

              <Link to="/admin/teams" className="clay-shortcut-btn">
                <span className="clay-shortcut-icon">👥</span>
                <div className="clay-shortcut-text">
                  <span className="clay-shortcut-title">Teams Directory</span>
                  <span className="clay-shortcut-desc">Monitor team rosters & codes</span>
                </div>
                <span className="clay-shortcut-arrow">→</span>
              </Link>

              <Link to="/" className="clay-shortcut-btn">
                <span className="clay-shortcut-icon">📊</span>
                <div className="clay-shortcut-text">
                  <span className="clay-shortcut-title">Live Analytics</span>
                  <span className="clay-shortcut-desc">Registration stats & charts</span>
                </div>
                <span className="clay-shortcut-arrow">→</span>
              </Link>

              <Link to="/developer" className="clay-shortcut-btn">
                <span className="clay-shortcut-icon">⚡</span>
                <div className="clay-shortcut-text">
                  <span className="clay-shortcut-title">Developer Hub</span>
                  <span className="clay-shortcut-desc">Cloudinary, Vercel & Health</span>
                </div>
                <span className="clay-shortcut-arrow">→</span>
              </Link>
            </div>
          </div>

        </div>

        {/* Right Column: Privileges, Session & Sign Out Center */}
        <div className="clay-profile-col-right">
          
          {/* System Metrics Overview */}
          {stats && (
            <div className="clay-card clay-stats-summary-card">
              <h3 className="clay-card-title">📈 SYSTEM ACTIVITY OVERVIEW</h3>
              <div className="clay-stats-pills-row">
                <div className="clay-mini-stat">
                  <span className="clay-mini-stat-num">{stats.totalUsers}</span>
                  <span className="clay-mini-stat-lbl">Registered Participants</span>
                </div>
                <div className="clay-mini-stat">
                  <span className="clay-mini-stat-num">{stats.totalTeams}</span>
                  <span className="clay-mini-stat-lbl">Active Formed Teams</span>
                </div>
                <div className="clay-mini-stat">
                  <span className="clay-mini-stat-num live">ONLINE</span>
                  <span className="clay-mini-stat-lbl">Technika Backend API</span>
                </div>
              </div>
            </div>
          )}

          {/* Access Matrix & Clearances */}
          <div className="clay-card clay-clearance-card">
            <h3 className="clay-card-title">🛡️ AUTHORIZED PRIVILEGES & CLEARANCES</h3>
            <div className="clay-clearance-list">
              <div className="clay-clearance-item active">
                <div className="clay-clearance-icon">✓</div>
                <div className="clay-clearance-content">
                  <span className="clay-clearance-title">Participant Verification & Approvals</span>
                  <span className="clay-clearance-desc">Inspect student IDs, review ₹600 manual receipts, and mark approvals.</span>
                </div>
                <span className="clay-clearance-tag full">GRANTED</span>
              </div>

              <div className="clay-clearance-item active">
                <div className="clay-clearance-icon">✓</div>
                <div className="clay-clearance-content">
                  <span className="clay-clearance-title">Team Rosters & Code Administration</span>
                  <span className="clay-clearance-desc">View generated team IDs, inspect leader permissions, and monitor rosters.</span>
                </div>
                <span className="clay-clearance-tag full">GRANTED</span>
              </div>

              <div className="clay-clearance-item active">
                <div className="clay-clearance-icon">✓</div>
                <div className="clay-clearance-content">
                  <span className="clay-clearance-title">Real-Time Registration Telemetry</span>
                  <span className="clay-clearance-desc">Access high-resolution departmental breakdown, gender stats, and trends.</span>
                </div>
                <span className="clay-clearance-tag full">GRANTED</span>
              </div>

              <div className="clay-clearance-item active">
                <div className="clay-clearance-icon">✓</div>
                <div className="clay-clearance-content">
                  <span className="clay-clearance-title">Document Inspection Viewer</span>
                  <span className="clay-clearance-desc">Side-by-side verification of payment screenshots, No-Dues slips & College IDs.</span>
                </div>
                <span className="clay-clearance-tag full">GRANTED</span>
              </div>

              <div className="clay-clearance-item active">
                <div className="clay-clearance-icon">✓</div>
                <div className="clay-clearance-content">
                  <span className="clay-clearance-title">Export & Report Generation</span>
                  <span className="clay-clearance-desc">Download consolidated CSV manifests for registration desk check-ins.</span>
                </div>
                <span className="clay-clearance-tag full">GRANTED</span>
              </div>
            </div>
          </div>

          {/* Session & Security Info */}
          <div className="clay-card clay-session-card">
            <h3 className="clay-card-title">🔐 ACTIVE SESSION SECURITY</h3>
            <div className="clay-session-table">
              <div className="clay-session-row">
                <span className="clay-session-key">Session State</span>
                <span className="clay-session-val green-text">● Authenticated & Active</span>
              </div>
              <div className="clay-session-row">
                <span className="clay-session-key">Session Started</span>
                <span className="clay-session-val">{sessionIssuedAt}</span>
              </div>
              <div className="clay-session-row">
                <span className="clay-session-key">Token Expiry</span>
                <span className="clay-session-val">{sessionExpiresAt} ({getRemainingTime()})</span>
              </div>
              <div className="clay-session-row">
                <span className="clay-session-key">Auth Scheme</span>
                <span className="clay-session-val">HMAC SHA-256 JWT Bearer</span>
              </div>
              <div className="clay-session-row">
                <span className="clay-session-key">Bearer Token</span>
                <div className="clay-token-row">
                  <code className="clay-token-snippet">
                    {token ? `${token.substring(0, 18)}...${token.substring(token.length - 10)}` : 'N/A'}
                  </code>
                  {token && (
                    <button 
                      className="clay-copy-token-btn"
                      onClick={() => {
                        navigator.clipboard.writeText(token);
                        setCopiedToken(true);
                        setTimeout(() => setCopiedToken(false), 2000);
                      }}
                      title="Copy full JWT token"
                    >
                      {copiedToken ? '✓' : 'Copy'}
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Sign Out Center (Prominent Logout Button) */}
          <div className="clay-card clay-logout-card">
            <div className="clay-logout-card-header">
              <div className="clay-logout-warning-icon">🚪</div>
              <div>
                <h3 className="clay-logout-card-title">TERMINATE SESSION / SIGN OUT</h3>
                <p className="clay-logout-card-desc">
                  Safely disconnect your credentials and clear cached authorization keys from this browser.
                </p>
              </div>
            </div>

            <div className="clay-logout-actions">
              <button 
                onClick={() => setShowLogoutModal(true)} 
                className="clay-big-logout-btn"
                id="profile-logout-btn"
              >
                <span className="clay-btn-icon">🚪</span>
                <span className="clay-btn-text">LOG OUT OF ADMIN PORTAL</span>
              </button>

              <button 
                onClick={() => navigate('/admin/login')} 
                className="clay-switch-account-btn"
              >
                🔄 Switch Account / Re-authenticate
              </button>
            </div>
          </div>

        </div>

      </div>

      {/* ── Logout Confirmation Modal ── */}
      {showLogoutModal && (
        <div className="clay-modal-backdrop" onClick={() => setShowLogoutModal(false)}>
          <div className="clay-logout-modal" onClick={(e) => e.stopPropagation()}>
            <div className="clay-modal-icon">⚠️</div>
            <h3 className="clay-modal-title">Confirm Sign Out</h3>
            <p className="clay-modal-desc">
              Are you sure you want to end your session as <strong>{name}</strong> ({designation})? You will need to log in again to access the portal.
            </p>
            <div className="clay-modal-btns">
              <button 
                onClick={() => setShowLogoutModal(false)}
                className="clay-modal-cancel-btn"
              >
                Cancel
              </button>
              <button 
                onClick={handleLogout}
                className="clay-modal-confirm-btn"
              >
                Yes, Log Out
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ── Component Styles ── */}
      <style>{`
        .clay-profile-page {
          max-width: 1300px;
          margin: 0 auto;
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
          font-family: 'Space Grotesk', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
          color: #1e293b;
        }

        /* ── Header ── */
        .clay-profile-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 1rem;
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
          gap: 12px;
        }

        .clay-header-emblem {
          width: 44px;
          height: 44px;
          border-radius: 14px;
          background: linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.3rem;
          color: #ffffff;
          border: 2px solid #ffffff;
          box-shadow:
            4px 6px 14px rgba(37, 99, 235, 0.35),
            inset 2px 2px 4px rgba(255, 255, 255, 0.5),
            inset -2px -2px 4px rgba(15, 23, 42, 0.25);
        }

        .clay-page-title {
          font-size: 1.25rem;
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

        .clay-status-chip {
          display: flex;
          align-items: center;
          gap: 8px;
          background: #eef4fc;
          padding: 6px 14px;
          border-radius: 12px;
          border: 1.5px solid rgba(255, 255, 255, 0.9);
          box-shadow:
            3px 4px 10px rgba(162, 178, 201, 0.15),
            inset 1px 1px 3px rgba(255, 255, 255, 0.8),
            inset -1px -1px 3px rgba(162, 178, 201, 0.12);
        }

        .clay-pulse-dot {
          width: 9px;
          height: 9px;
          border-radius: 50%;
          background: #10b981;
          box-shadow: 0 0 8px #10b981;
          animation: pulseGreen 2s infinite;
        }

        @keyframes pulseGreen {
          0% { transform: scale(0.95); opacity: 0.8; }
          50% { transform: scale(1.15); opacity: 1; }
          100% { transform: scale(0.95); opacity: 0.8; }
        }

        .clay-status-text {
          font-size: 0.72rem;
          font-weight: 800;
          color: #047857;
          letter-spacing: 0.04em;
        }

        /* ── Grid Layout ── */
        .clay-profile-grid {
          display: grid;
          grid-template-columns: 1fr 1.35fr;
          gap: 1.5rem;
          align-items: start;
        }

        @media (max-width: 1024px) {
          .clay-profile-grid {
            grid-template-columns: 1fr;
          }
        }

        .clay-profile-col-left,
        .clay-profile-col-right {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }

        /* ── Reusable Clay Card ── */
        .clay-card {
          background: #f4f8fd;
          border-radius: 20px;
          border: 2px solid rgba(255, 255, 255, 0.9);
          box-shadow:
            6px 8px 20px rgba(162, 178, 201, 0.22),
            -5px -5px 14px rgba(255, 255, 255, 0.8),
            inset 2px 2px 4px rgba(255, 255, 255, 0.8),
            inset -2px -2px 4px rgba(162, 178, 201, 0.15);
          overflow: hidden;
        }

        .clay-card-title {
          font-size: 0.82rem;
          font-weight: 900;
          color: #334155;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          padding: 1.1rem 1.4rem 0.6rem 1.4rem;
          margin: 0;
          display: flex;
          align-items: center;
          gap: 6px;
        }

        /* ── Hero Card ── */
        .clay-hero-banner {
          height: 105px;
          width: 100%;
          position: relative;
          overflow: hidden;
        }

        .clay-hero-banner-orb {
          position: absolute;
          width: 160px;
          height: 160px;
          border-radius: 50%;
          top: -40px;
          right: -20px;
          background: rgba(255, 255, 255, 0.15);
          filter: blur(10px);
        }

        .clay-hero-body {
          padding: 0 1.5rem 1.5rem 1.5rem;
          position: relative;
          margin-top: -45px;
        }

        .clay-hero-avatar-wrapper {
          position: relative;
          width: 90px;
          height: 90px;
          margin-bottom: 0.8rem;
        }

        .clay-hero-avatar {
          width: 90px;
          height: 90px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          border: 4px solid #ffffff;
          box-shadow:
            6px 8px 18px rgba(37, 99, 235, 0.35),
            inset 3px 3px 6px rgba(255, 255, 255, 0.5),
            inset -3px -3px 6px rgba(15, 23, 42, 0.25);
        }

        .clay-hero-avatar-text {
          font-size: 2rem;
          font-weight: 900;
          color: #ffffff;
          text-shadow: 0 2px 4px rgba(0,0,0,0.2);
        }

        .clay-hero-online-badge {
          position: absolute;
          bottom: 2px;
          right: 2px;
          width: 22px;
          height: 22px;
          border-radius: 50%;
          background: #22c55e;
          border: 3.5px solid #ffffff;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 2px 6px rgba(34, 197, 94, 0.4);
        }

        .clay-hero-online-dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: #ffffff;
        }

        .clay-hero-names {
          display: flex;
          flex-direction: column;
          gap: 6px;
          margin-bottom: 1.2rem;
        }

        .clay-hero-name {
          font-size: 1.5rem;
          font-weight: 900;
          color: #0f172a;
          margin: 0;
          letter-spacing: -0.02em;
        }

        .clay-hero-badge-row {
          display: flex;
          align-items: center;
          gap: 8px;
          flex-wrap: wrap;
        }

        .clay-role-pill {
          font-size: 0.72rem;
          font-weight: 900;
          padding: 3px 10px;
          border-radius: 10px;
          letter-spacing: 0.02em;
          border: 1px solid rgba(255, 255, 255, 0.6);
          box-shadow: 2px 2px 6px rgba(0,0,0,0.06);
        }

        .clay-inst-pill {
          font-size: 0.72rem;
          font-weight: 700;
          padding: 3px 10px;
          border-radius: 10px;
          background: #e2e8f0;
          color: #475569;
          border: 1px solid rgba(255, 255, 255, 0.6);
        }

        /* ── Info Strip ── */
        .clay-info-strip {
          background: #eef4fc;
          border-radius: 16px;
          padding: 1rem;
          border: 1.5px solid rgba(255, 255, 255, 0.9);
          display: flex;
          flex-direction: column;
          gap: 0.85rem;
          box-shadow:
            inset 2px 2px 4px rgba(255, 255, 255, 0.8),
            inset -2px -2px 4px rgba(162, 178, 201, 0.15);
        }

        .clay-strip-item {
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 10px;
          font-size: 0.8rem;
          border-bottom: 1px dashed rgba(162, 178, 201, 0.4);
          padding-bottom: 0.5rem;
        }

        .clay-strip-item:last-child {
          border-bottom: none;
          padding-bottom: 0;
        }

        .clay-strip-label {
          color: #64748b;
          font-weight: 600;
        }

        .clay-strip-val-row {
          display: flex;
          align-items: center;
          gap: 6px;
        }

        .clay-strip-val {
          font-weight: 700;
          color: #1e293b;
          word-break: break-all;
        }

        .clay-strip-val.bold {
          font-weight: 800;
          color: #0f172a;
        }

        .clay-strip-val.highlight {
          color: #2563eb;
          font-weight: 700;
        }

        .clay-strip-val.clearance-ok {
          color: #059669;
          font-weight: 800;
        }

        .clay-strip-copy-btn {
          background: #dbeafe;
          color: #1d4ed8;
          border: 1px solid rgba(255, 255, 255, 0.8);
          border-radius: 6px;
          padding: 2px 8px;
          font-size: 0.68rem;
          font-weight: 800;
          cursor: pointer;
          transition: all 0.2s;
        }

        .clay-strip-copy-btn:hover {
          background: #bfdbfe;
          transform: translateY(-1px);
        }

        /* ── Shortcuts ── */
        .clay-shortcuts-grid {
          padding: 0.6rem 1.4rem 1.4rem 1.4rem;
          display: flex;
          flex-direction: column;
          gap: 0.6rem;
        }

        .clay-shortcut-btn {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 0.75rem 1rem;
          border-radius: 14px;
          background: #ffffff;
          border: 1.5px solid rgba(255, 255, 255, 0.9);
          text-decoration: none;
          color: #1e293b;
          box-shadow:
            4px 5px 12px rgba(162, 178, 201, 0.15),
            -3px -3px 8px rgba(255, 255, 255, 0.8),
            inset 1px 1px 2px rgba(255, 255, 255, 0.8);
          transition: all 0.25s cubic-bezier(0.34, 1.56, 0.64, 1);
        }

        .clay-shortcut-btn:hover {
          background: #eef4fc;
          transform: translateY(-2px);
          box-shadow:
            6px 8px 16px rgba(162, 178, 201, 0.25),
            -4px -4px 10px rgba(255, 255, 255, 0.9);
        }

        .clay-shortcut-icon {
          font-size: 1.3rem;
          flex-shrink: 0;
        }

        .clay-shortcut-text {
          flex: 1;
          display: flex;
          flex-direction: column;
        }

        .clay-shortcut-title {
          font-size: 0.84rem;
          font-weight: 800;
          color: #0f172a;
        }

        .clay-shortcut-desc {
          font-size: 0.68rem;
          color: #64748b;
          font-weight: 500;
        }

        .clay-shortcut-arrow {
          font-size: 1rem;
          font-weight: 900;
          color: #94a3b8;
        }

        /* ── Mini Stats ── */
        .clay-stats-pills-row {
          padding: 0.6rem 1.4rem 1.4rem 1.4rem;
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 10px;
        }

        .clay-mini-stat {
          background: #ffffff;
          padding: 0.85rem;
          border-radius: 14px;
          border: 1.5px solid rgba(255, 255, 255, 0.9);
          text-align: center;
          display: flex;
          flex-direction: column;
          gap: 4px;
          box-shadow:
            4px 5px 12px rgba(162, 178, 201, 0.15),
            inset 1px 1px 2px rgba(255, 255, 255, 0.8);
        }

        .clay-mini-stat-num {
          font-size: 1.3rem;
          font-weight: 900;
          color: #2563eb;
        }

        .clay-mini-stat-num.live {
          color: #059669;
          font-size: 1rem;
          padding-top: 4px;
        }

        .clay-mini-stat-lbl {
          font-size: 0.65rem;
          font-weight: 700;
          color: #64748b;
          text-transform: uppercase;
        }

        /* ── Clearances List ── */
        .clay-clearance-list {
          padding: 0.6rem 1.4rem 1.4rem 1.4rem;
          display: flex;
          flex-direction: column;
          gap: 0.7rem;
        }

        .clay-clearance-item {
          display: flex;
          align-items: center;
          gap: 12px;
          background: #ffffff;
          padding: 0.8rem 1rem;
          border-radius: 14px;
          border: 1.5px solid rgba(255, 255, 255, 0.9);
          box-shadow:
            3px 4px 10px rgba(162, 178, 201, 0.12),
            inset 1px 1px 2px rgba(255, 255, 255, 0.8);
        }

        .clay-clearance-icon {
          width: 28px;
          height: 28px;
          border-radius: 50%;
          background: #d1fae5;
          color: #047857;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: 900;
          font-size: 0.85rem;
          flex-shrink: 0;
        }

        .clay-clearance-content {
          flex: 1;
          display: flex;
          flex-direction: column;
          gap: 2px;
        }

        .clay-clearance-title {
          font-size: 0.82rem;
          font-weight: 800;
          color: #0f172a;
        }

        .clay-clearance-desc {
          font-size: 0.68rem;
          color: #64748b;
          font-weight: 500;
        }

        .clay-clearance-tag.full {
          background: #d1fae5;
          color: #047857;
          font-size: 0.62rem;
          font-weight: 900;
          padding: 3px 8px;
          border-radius: 8px;
          letter-spacing: 0.05em;
        }

        /* ── Session Security ── */
        .clay-session-table {
          padding: 0.6rem 1.4rem 1.4rem 1.4rem;
          display: flex;
          flex-direction: column;
          gap: 0.6rem;
        }

        .clay-session-row {
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 12px;
          font-size: 0.78rem;
          padding: 0.4rem 0;
          border-bottom: 1px dashed rgba(162, 178, 201, 0.35);
        }

        .clay-session-row:last-child {
          border-bottom: none;
        }

        .clay-session-key {
          color: #64748b;
          font-weight: 600;
        }

        .clay-session-val {
          font-weight: 700;
          color: #1e293b;
        }

        .clay-session-val.green-text {
          color: #059669;
          font-weight: 800;
        }

        .clay-token-row {
          display: flex;
          align-items: center;
          gap: 6px;
        }

        .clay-token-snippet {
          background: #e2e8f0;
          padding: 2px 6px;
          border-radius: 6px;
          font-family: monospace;
          font-size: 0.72rem;
          color: #334155;
        }

        .clay-copy-token-btn {
          background: #e2e8f0;
          border: 1px solid rgba(255, 255, 255, 0.8);
          border-radius: 6px;
          padding: 2px 6px;
          font-size: 0.65rem;
          font-weight: 700;
          cursor: pointer;
        }

        /* ── Sign Out Center ── */
        .clay-logout-card {
          background: linear-gradient(135deg, #fff5f5 0%, #fef2f2 100%);
          border: 2px solid rgba(239, 68, 68, 0.2);
          box-shadow:
            6px 8px 20px rgba(239, 68, 68, 0.12),
            -5px -5px 14px rgba(255, 255, 255, 0.9),
            inset 2px 2px 4px rgba(255, 255, 255, 0.9),
            inset -2px -2px 4px rgba(239, 68, 68, 0.08);
          padding: 1.4rem;
        }

        .clay-logout-card-header {
          display: flex;
          align-items: flex-start;
          gap: 12px;
          margin-bottom: 1.2rem;
        }

        .clay-logout-warning-icon {
          width: 40px;
          height: 40px;
          border-radius: 12px;
          background: #fee2e2;
          color: #dc2626;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.3rem;
          border: 2px solid #ffffff;
          flex-shrink: 0;
          box-shadow: 3px 4px 10px rgba(239, 68, 68, 0.2);
        }

        .clay-logout-card-title {
          font-size: 0.95rem;
          font-weight: 900;
          color: #991b1b;
          margin: 0;
          letter-spacing: 0.02em;
        }

        .clay-logout-card-desc {
          font-size: 0.75rem;
          color: #7f1d1d;
          margin: 4px 0 0 0;
          line-height: 1.4;
          font-weight: 500;
        }

        .clay-logout-actions {
          display: flex;
          flex-direction: column;
          gap: 10px;
        }

        .clay-big-logout-btn {
          width: 100%;
          padding: 0.95rem 1.4rem;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          border: 2.5px solid #ffffff;
          border-radius: 16px;
          background: linear-gradient(135deg, #ef4444 0%, #b91c1c 100%);
          color: #ffffff;
          font-weight: 900;
          font-size: 0.92rem;
          cursor: pointer;
          letter-spacing: 0.05em;
          text-transform: uppercase;
          box-shadow:
            5px 7px 18px rgba(185, 28, 28, 0.35),
            inset 2px 2px 4px rgba(255, 255, 255, 0.4),
            inset -2px -2px 4px rgba(0, 0, 0, 0.3);
          transition: all 0.25s cubic-bezier(0.34, 1.56, 0.64, 1);
        }

        .clay-big-logout-btn:hover {
          transform: translateY(-2px);
          box-shadow:
            7px 10px 24px rgba(185, 28, 28, 0.45),
            inset 2px 2px 4px rgba(255, 255, 255, 0.5),
            inset -2px -2px 4px rgba(0, 0, 0, 0.35);
        }

        .clay-btn-icon {
          font-size: 1.15rem;
        }

        .clay-switch-account-btn {
          background: transparent;
          border: 1.5px dashed rgba(220, 38, 38, 0.35);
          color: #b91c1c;
          padding: 0.65rem 1rem;
          border-radius: 12px;
          font-size: 0.76rem;
          font-weight: 800;
          cursor: pointer;
          transition: all 0.2s;
        }

        .clay-switch-account-btn:hover {
          background: rgba(254, 226, 226, 0.7);
          border-color: #dc2626;
        }

        /* ── Modal Backdrop ── */
        .clay-modal-backdrop {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(15, 23, 42, 0.4);
          backdrop-filter: blur(4px);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 1000;
          padding: 1rem;
        }

        .clay-logout-modal {
          background: #ffffff;
          border-radius: 24px;
          border: 3px solid #ffffff;
          box-shadow:
            0 20px 40px rgba(0, 0, 0, 0.2),
            inset 2px 2px 4px rgba(255, 255, 255, 0.9);
          padding: 1.8rem;
          max-width: 440px;
          width: 100%;
          text-align: center;
          display: flex;
          flex-direction: column;
          align-items: center;
          animation: popModal 0.25s cubic-bezier(0.34, 1.56, 0.64, 1);
        }

        @keyframes popModal {
          0% { transform: scale(0.9); opacity: 0; }
          100% { transform: scale(1); opacity: 1; }
        }

        .clay-modal-icon {
          font-size: 2.2rem;
          margin-bottom: 0.6rem;
        }

        .clay-modal-title {
          font-size: 1.2rem;
          font-weight: 900;
          color: #0f172a;
          margin: 0 0 0.5rem 0;
        }

        .clay-modal-desc {
          font-size: 0.84rem;
          color: #64748b;
          line-height: 1.5;
          margin: 0 0 1.5rem 0;
        }

        .clay-modal-btns {
          display: flex;
          gap: 12px;
          width: 100%;
        }

        .clay-modal-cancel-btn {
          flex: 1;
          padding: 0.75rem 1rem;
          border-radius: 14px;
          border: 2px solid #e2e8f0;
          background: #f8fafc;
          color: #475569;
          font-weight: 800;
          font-size: 0.85rem;
          cursor: pointer;
          transition: all 0.2s;
        }

        .clay-modal-cancel-btn:hover {
          background: #f1f5f9;
        }

        .clay-modal-confirm-btn {
          flex: 1;
          padding: 0.75rem 1rem;
          border-radius: 14px;
          border: 2px solid #ef4444;
          background: #ef4444;
          color: #ffffff;
          font-weight: 900;
          font-size: 0.85rem;
          cursor: pointer;
          box-shadow: 0 4px 12px rgba(239, 68, 68, 0.35);
          transition: all 0.2s;
        }

        .clay-modal-confirm-btn:hover {
          background: #dc2626;
        }
      `}</style>
    </div>
  );
};
