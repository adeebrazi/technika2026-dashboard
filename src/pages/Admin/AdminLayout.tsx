import React, { useState } from 'react';
import { Navigate, Outlet, Link, useLocation } from 'react-router-dom';

export const AdminLayout: React.FC = () => {
  const location = useLocation();
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);

  const token = localStorage.getItem('adminToken');
  const role = localStorage.getItem('adminRole');
  const name = localStorage.getItem('adminName') || 'Administrator';
  const designation = localStorage.getItem('adminDesignation') || (role === 'admin' ? 'Administration' : 'Coordinator');

  if (!token) {
    return <Navigate to="/admin/login" replace />;
  }

  const getInitials = (fullName: string) => {
    return fullName
      .split(' ')
      .filter(Boolean)
      .map(n => n[0])
      .join('')
      .substring(0, 2)
      .toUpperCase();
  };

  const navItems = [
    { name: 'Analytics', path: '/', icon: '📊', desc: 'Public dashboard & stats' },
    { name: 'Participants', path: '/admin/participants', icon: '👤', desc: 'View all registrations' },
    { name: 'Teams', path: '/admin/teams', icon: '👥', desc: 'Team formations & rosters' },
    { name: 'Developer', path: '/developer', icon: '⚡', desc: 'Pipelines & health check' },
  ];

  const getRoleBadgeColor = () => {
    switch (role) {
      case 'admin': return { bg: '#dbeafe', color: '#2563eb', shadow: 'rgba(37, 99, 235, 0.15)' };
      case 'faculty': return { bg: '#ede9fe', color: '#7c3aed', shadow: 'rgba(124, 58, 237, 0.15)' };
      case 'coordinator': return { bg: '#d1fae5', color: '#059669', shadow: 'rgba(5, 150, 105, 0.15)' };
      default: return { bg: '#dbeafe', color: '#2563eb', shadow: 'rgba(37, 99, 235, 0.15)' };
    }
  };

  const roleBadge = getRoleBadgeColor();

  return (
    <div className={`clay-admin-shell ${sidebarCollapsed ? 'sidebar-collapsed' : ''}`}>
      {/* ── Background Floating Orbs ── */}
      <div className="clay-bg-orb clay-bg-orb-1" />
      <div className="clay-bg-orb clay-bg-orb-2" />
      <div className="clay-bg-orb clay-bg-orb-3" />

      {/* ── Sidebar (Fixed & Locked) ── */}
      <aside className={`clay-sidebar ${sidebarCollapsed ? 'collapsed' : ''}`}>
        {/* Brand Header */}
        <div className="clay-sidebar-brand">
          <div className="clay-brand-row">
            <div className="clay-brand-logo" style={{ padding: 0, overflow: 'hidden' }}>
              <img 
                src="/technika_logo.jpg" 
                alt="Technika 6.0" 
                style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '12px' }} 
              />
            </div>
            {!sidebarCollapsed && (
              <div className="clay-brand-text">
                <span className="clay-brand-name">TECHNIKA</span>
                <span className="clay-brand-ver">6.0</span>
              </div>
            )}
          </div>
          <button 
            className="clay-sidebar-toggle"
            onClick={() => setSidebarCollapsed(!sidebarCollapsed)}
            title={sidebarCollapsed ? 'Expand sidebar' : 'Collapse sidebar'}
          >
            {sidebarCollapsed ? '→' : '←'}
          </button>
        </div>

        {/* Profile Card as Button to Complete Profile Section (/admin) */}
        <Link 
          to="/admin" 
          className={`clay-profile-card ${location.pathname === '/admin' ? 'active' : ''}`}
          title="View Complete Profile, Credentials & Settings"
        >
          <div className="clay-avatar">
            <span className="clay-avatar-initials">{getInitials(name)}</span>
            <span className="clay-avatar-status" />
          </div>
          {!sidebarCollapsed && (
            <div className="clay-profile-info">
              <span className="clay-profile-name">{name}</span>
              <span className="clay-profile-role" style={{ 
                background: roleBadge.bg, 
                color: roleBadge.color,
                boxShadow: `2px 2px 6px ${roleBadge.shadow}, inset 1px 1px 2px rgba(255,255,255,0.8), inset -1px -1px 2px ${roleBadge.shadow}`
              }}>
                {designation}
              </span>
            </div>
          )}
          {!sidebarCollapsed && (
            <span className="clay-profile-arrow" title="View Profile">→</span>
          )}
        </Link>

        {/* Navigation */}
        <nav className="clay-nav">
          <div className="clay-nav-label">{!sidebarCollapsed && 'NAVIGATION'}</div>
          <ul className="clay-nav-list">
            {navItems.map((item) => {
              const isActive = item.path === '/' 
                ? location.pathname === '/' 
                : location.pathname.startsWith(item.path);
              return (
                <li key={item.name}>
                  <Link
                    to={item.path}
                    className={`clay-nav-item ${isActive ? 'active' : ''}`}
                    title={sidebarCollapsed ? item.name : undefined}
                  >
                    <span className="clay-nav-icon">{item.icon}</span>
                    {!sidebarCollapsed && (
                      <div className="clay-nav-text">
                        <span className="clay-nav-name">{item.name}</span>
                        <span className="clay-nav-desc">{item.desc}</span>
                      </div>
                    )}
                    {isActive && !sidebarCollapsed && <span className="clay-nav-active-dot" />}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </aside>

      {/* ── Mobile Top Header Bar (Mobile Only) ── */}
      <header className="clay-mobile-topbar">
        <div className="clay-mobile-brand">
          <div className="clay-mobile-logo">
            <img 
              src="/technika_logo.jpg" 
              alt="Technika 6.0" 
              style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '10px' }} 
            />
          </div>
          <div className="clay-mobile-title">
            <span className="clay-mobile-name">TECHNIKA</span>
            <span className="clay-mobile-ver">6.0</span>
          </div>
        </div>

        <Link to="/admin" className="clay-mobile-profile-btn" title="View Profile">
          <div className="clay-mobile-avatar">
            <span>{getInitials(name)}</span>
            <span className="clay-mobile-dot" />
          </div>
          <div className="clay-mobile-user-meta">
            <span className="clay-mobile-user-name">{name.split(' ')[0]}</span>
            <span className="clay-mobile-role" style={{ background: roleBadge.bg, color: roleBadge.color }}>
              {role === 'admin' ? 'Admin' : 'Faculty'}
            </span>
          </div>
        </Link>
      </header>

      {/* ── Main Content Area ── */}
      <main className="clay-main-content">
        <Outlet />
      </main>

      {/* ── Mobile Bottom Navigation Bar (Mobile Only) ── */}
      <nav className="clay-mobile-bottom-nav">
        <Link 
          to="/" 
          className={`clay-mob-nav-btn ${location.pathname === '/' ? 'active' : ''}`}
        >
          <span className="clay-mob-icon">📊</span>
          <span className="clay-mob-label">Analytics</span>
        </Link>

        <Link 
          to="/admin/participants" 
          className={`clay-mob-nav-btn ${location.pathname.startsWith('/admin/participants') ? 'active' : ''}`}
        >
          <span className="clay-mob-icon">👤</span>
          <span className="clay-mob-label">Users</span>
        </Link>

        <Link 
          to="/admin/teams" 
          className={`clay-mob-nav-btn ${location.pathname.startsWith('/admin/teams') ? 'active' : ''}`}
        >
          <span className="clay-mob-icon">👥</span>
          <span className="clay-mob-label">Teams</span>
        </Link>

        <Link 
          to="/developer" 
          className={`clay-mob-nav-btn ${location.pathname.startsWith('/developer') ? 'active' : ''}`}
        >
          <span className="clay-mob-icon">⚡</span>
          <span className="clay-mob-label">Dev</span>
        </Link>

        <Link 
          to="/admin" 
          className={`clay-mob-nav-btn ${location.pathname === '/admin' ? 'active' : ''}`}
        >
          <span className="clay-mob-icon">⚙️</span>
          <span className="clay-mob-label">Profile</span>
        </Link>
      </nav>

      {/* ── Claymorphism Admin Shell Styles ── */}
      <style>{`
        .clay-admin-shell {
          display: flex;
          min-height: 100vh;
          width: 100%;
          background: #e6ecf5;
          font-family: 'Space Grotesk', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
          color: #1e293b;
          position: relative;
          overflow: hidden;
        }

        /* ── Background Orbs ── */
        .clay-bg-orb {
          position: fixed;
          border-radius: 50%;
          pointer-events: none;
          z-index: 0;
          filter: drop-shadow(0 15px 25px rgba(0,0,0,0.06));
        }

        .clay-bg-orb-1 {
          width: 300px;
          height: 300px;
          top: -5%;
          right: 5%;
          background: linear-gradient(135deg, #a5b4fc 0%, #818cf8 100%);
          box-shadow: 
            inset -12px -12px 24px rgba(99, 102, 241, 0.4),
            inset 12px 12px 24px rgba(255, 255, 255, 0.65);
          animation: floatAdmin 10s ease-in-out infinite alternate;
          opacity: 0.5;
        }

        .clay-bg-orb-2 {
          width: 220px;
          height: 220px;
          bottom: 5%;
          right: 15%;
          background: linear-gradient(135deg, #6ee7b7 0%, #34d399 100%);
          box-shadow: 
            inset -10px -10px 20px rgba(16, 185, 129, 0.4),
            inset 10px 10px 20px rgba(255, 255, 255, 0.65);
          animation: floatAdmin 12s ease-in-out 1s infinite alternate-reverse;
          opacity: 0.4;
        }

        .clay-bg-orb-3 {
          width: 160px;
          height: 160px;
          bottom: 30%;
          left: 40%;
          background: linear-gradient(135deg, #fde047 0%, #eab308 100%);
          box-shadow: 
            inset -8px -8px 16px rgba(202, 138, 4, 0.4),
            inset 8px 8px 16px rgba(255, 255, 255, 0.65);
          animation: floatAdmin 8s ease-in-out 2s infinite alternate;
          opacity: 0.35;
        }

        @keyframes floatAdmin {
          0% { transform: translateY(0px) rotate(0deg); }
          100% { transform: translateY(-20px) rotate(5deg); }
        }

        /* ── Sidebar (Fixed & Locked) ── */
        .clay-sidebar {
          width: 270px;
          min-width: 270px;
          height: 100vh;
          position: fixed;
          top: 0;
          left: 0;
          bottom: 0;
          background: #eef3f9;
          border-right: 2.5px solid rgba(255, 255, 255, 0.9);
          box-shadow:
            8px 0 30px rgba(162, 178, 201, 0.2),
            inset -4px 0 12px rgba(162, 178, 201, 0.08),
            inset 4px 0 12px rgba(255, 255, 255, 0.6);
          display: flex;
          flex-direction: column;
          z-index: 100;
          overflow-y: auto;
          transition: width 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
        }

        .clay-sidebar.collapsed {
          width: 76px;
          min-width: 76px;
        }

        /* ── Brand ── */
        .clay-sidebar-brand {
          padding: 1.1rem 1rem;
          border-bottom: 2px solid rgba(255, 255, 255, 0.7);
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 8px;
        }

        .clay-brand-row {
          display: flex;
          align-items: center;
          gap: 10px;
        }

        .clay-brand-logo {
          width: 38px;
          height: 38px;
          border-radius: 12px;
          background: linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          border: 2.5px solid #ffffff;
          box-shadow:
            4px 6px 14px rgba(37, 99, 235, 0.35),
            inset 3px 3px 6px rgba(255, 255, 255, 0.5),
            inset -3px -3px 6px rgba(15, 23, 42, 0.3);
        }

        .clay-brand-t {
          font-weight: 900;
          font-size: 1.15rem;
          color: #ffffff;
          text-shadow: 0 2px 4px rgba(0,0,0,0.2);
        }

        .clay-brand-text {
          display: flex;
          align-items: baseline;
          gap: 4px;
        }

        .clay-brand-name {
          font-weight: 900;
          font-size: 1.05rem;
          color: #0f172a;
          letter-spacing: -0.02em;
        }

        .clay-brand-ver {
          font-weight: 900;
          font-size: 0.65rem;
          color: #2563eb;
          background: #dbeafe;
          padding: 1px 6px;
          border-radius: 6px;
          box-shadow:
            inset 1px 1px 2px rgba(255, 255, 255, 0.8),
            inset -1px -1px 2px rgba(37, 99, 235, 0.15),
            2px 2px 4px rgba(37, 99, 235, 0.1);
        }

        .clay-sidebar-toggle {
          width: 28px;
          height: 28px;
          border-radius: 50%;
          border: 2px solid rgba(255, 255, 255, 0.8);
          background: #e2eaf4;
          color: #475569;
          font-weight: 900;
          font-size: 0.7rem;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow:
            inset 2px 2px 4px rgba(255, 255, 255, 0.8),
            inset -2px -2px 4px rgba(162, 178, 201, 0.3),
            3px 3px 8px rgba(162, 178, 201, 0.25);
          transition: all 0.2s;
          flex-shrink: 0;
        }

        .clay-sidebar-toggle:hover {
          background: #dbeafe;
          color: #2563eb;
          transform: scale(1.08);
        }

        /* ── Profile Card (Clickable Link to Complete Profile) ── */
        .clay-profile-card {
          padding: 0.9rem 1rem;
          margin: 0.8rem 0.75rem;
          background: #f4f8fd;
          border-radius: 18px;
          border: 2px solid rgba(255, 255, 255, 0.9);
          box-shadow:
            6px 8px 18px rgba(162, 178, 201, 0.22),
            -5px -5px 14px rgba(255, 255, 255, 0.8),
            inset 2px 2px 4px rgba(255, 255, 255, 0.8),
            inset -2px -2px 4px rgba(162, 178, 201, 0.18);
          display: flex;
          align-items: center;
          gap: 10px;
          text-decoration: none;
          color: inherit;
          cursor: pointer;
          transition: all 0.25s cubic-bezier(0.34, 1.56, 0.64, 1);
        }

        .clay-profile-card:hover {
          background: #eaf1fb;
          transform: translateY(-2px);
          border-color: rgba(255, 255, 255, 1);
          box-shadow:
            8px 10px 22px rgba(162, 178, 201, 0.3),
            -5px -5px 14px rgba(255, 255, 255, 0.9),
            inset 2px 2px 4px rgba(255, 255, 255, 0.9);
        }

        .clay-profile-card.active {
          background: #e6f0fc;
          border-color: #3b82f6;
          box-shadow:
            6px 8px 18px rgba(37, 99, 235, 0.18),
            inset 2px 2px 4px rgba(255, 255, 255, 0.9),
            inset -2px -2px 4px rgba(37, 99, 235, 0.1);
        }

        .clay-profile-arrow {
          margin-left: auto;
          font-size: 0.95rem;
          font-weight: 900;
          color: #94a3b8;
          transition: transform 0.2s, color 0.2s;
        }

        .clay-profile-card:hover .clay-profile-arrow {
          color: #2563eb;
          transform: translateX(2px);
        }

        .clay-profile-card.active .clay-profile-arrow {
          color: #2563eb;
        }

        .clay-avatar {
          width: 42px;
          height: 42px;
          border-radius: 50%;
          background: linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          border: 2.5px solid #ffffff;
          position: relative;
          box-shadow:
            4px 5px 12px rgba(59, 130, 246, 0.35),
            inset 3px 3px 6px rgba(255, 255, 255, 0.45),
            inset -3px -3px 6px rgba(15, 23, 42, 0.25);
        }

        .clay-avatar-initials {
          font-weight: 900;
          font-size: 0.82rem;
          color: #ffffff;
          text-shadow: 0 1px 3px rgba(0,0,0,0.2);
        }

        .clay-avatar-status {
          position: absolute;
          bottom: -1px;
          right: -1px;
          width: 12px;
          height: 12px;
          border-radius: 50%;
          background: #22c55e;
          border: 2.5px solid #eef3f9;
          box-shadow: 0 2px 4px rgba(34, 197, 94, 0.4);
        }

        .clay-profile-info {
          display: flex;
          flex-direction: column;
          gap: 3px;
          min-width: 0;
          overflow: hidden;
        }

        .clay-profile-name {
          font-weight: 800;
          font-size: 0.85rem;
          color: #0f172a;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }

        .clay-profile-role {
          display: inline-block;
          font-size: 0.62rem;
          font-weight: 800;
          padding: 2px 8px;
          border-radius: 8px;
          letter-spacing: 0.02em;
          width: fit-content;
        }

        /* ── Navigation ── */
        .clay-nav {
          flex: 1;
          padding: 0.5rem 0.75rem;
        }

        .clay-nav-label {
          font-size: 0.6rem;
          font-weight: 800;
          color: #94a3b8;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          padding: 0 8px;
          margin-bottom: 0.5rem;
        }

        .clay-nav-list {
          list-style: none;
          padding: 0;
          margin: 0;
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }

        .clay-nav-item {
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 0.7rem 0.85rem;
          border-radius: 14px;
          text-decoration: none;
          color: #475569;
          background: transparent;
          border: 2px solid transparent;
          transition: all 0.25s cubic-bezier(0.34, 1.56, 0.64, 1);
          position: relative;
        }

        .clay-nav-item:hover {
          background: #f4f8fd;
          color: #1e293b;
          border-color: rgba(255, 255, 255, 0.7);
          box-shadow:
            4px 5px 12px rgba(162, 178, 201, 0.2),
            -3px -3px 8px rgba(255, 255, 255, 0.7),
            inset 1px 1px 3px rgba(255, 255, 255, 0.7),
            inset -1px -1px 3px rgba(162, 178, 201, 0.12);
          transform: translateY(-1px);
        }

        .clay-nav-item.active {
          background: #f4f8fd;
          color: #2563eb;
          border-color: rgba(255, 255, 255, 0.9);
          font-weight: 700;
          box-shadow:
            6px 8px 18px rgba(162, 178, 201, 0.25),
            -5px -5px 14px rgba(255, 255, 255, 0.8),
            inset 2px 2px 4px rgba(255, 255, 255, 0.8),
            inset -2px -2px 4px rgba(162, 178, 201, 0.18);
          transform: translateY(-1px);
        }

        .clay-nav-icon {
          font-size: 1.15rem;
          flex-shrink: 0;
          filter: drop-shadow(0 2px 3px rgba(0,0,0,0.1));
        }

        .clay-nav-text {
          display: flex;
          flex-direction: column;
          min-width: 0;
        }

        .clay-nav-name {
          font-weight: 700;
          font-size: 0.85rem;
        }

        .clay-nav-desc {
          font-size: 0.62rem;
          color: #94a3b8;
          font-weight: 500;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }

        .clay-nav-active-dot {
          position: absolute;
          right: 12px;
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: #2563eb;
          box-shadow: 0 0 8px rgba(37, 99, 235, 0.5);
        }

        /* ── Main Content (Offset by Fixed Sidebar) ── */
        .clay-main-content {
          flex: 1;
          margin-left: 270px;
          width: calc(100% - 270px);
          min-width: 0;
          min-height: 100vh;
          padding: 1.5rem 2rem;
          position: relative;
          z-index: 1;
          transition: margin-left 0.3s cubic-bezier(0.34, 1.56, 0.64, 1), width 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
        }

        .clay-admin-shell.sidebar-collapsed .clay-main-content {
          margin-left: 76px;
          width: calc(100% - 76px);
        }

        /* ── Scrollbar Styles ── */
        .clay-main-content::-webkit-scrollbar {
          width: 8px;
        }

        .clay-main-content::-webkit-scrollbar-track {
          background: #e6ecf5;
        }

        .clay-main-content::-webkit-scrollbar-thumb {
          background: #c8d5e3;
          border-radius: 10px;
          border: 2px solid #e6ecf5;
        }

        .clay-main-content::-webkit-scrollbar-thumb:hover {
          background: #a2b5c8;
        }

        /* ── Mobile Topbar & Bottom Nav (Hidden on Desktop) ── */
        .clay-mobile-topbar,
        .clay-mobile-bottom-nav {
          display: none;
        }

        /* ── Responsive Mobile Overhaul ── */
        @media (max-width: 768px) {
          .clay-admin-shell {
            flex-direction: column;
            overflow-x: hidden;
          }

          /* Hide Desktop Sidebar on Mobile */
          .clay-sidebar {
            display: none !important;
          }

          /* Mobile Topbar */
          .clay-mobile-topbar {
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding: 0.65rem 1rem;
            background: #eef3f9;
            border-bottom: 2px solid rgba(255, 255, 255, 0.9);
            box-shadow: 0 4px 15px rgba(162, 178, 201, 0.2);
            position: sticky;
            top: 0;
            z-index: 150;
            backdrop-filter: blur(12px);
            width: 100%;
          }

          .clay-mobile-brand {
            display: flex;
            align-items: center;
            gap: 8px;
          }

          .clay-mobile-logo {
            width: 32px;
            height: 32px;
            border-radius: 10px;
            overflow: hidden;
            border: 2px solid #ffffff;
            box-shadow: 2px 3px 8px rgba(37, 99, 235, 0.25);
            flex-shrink: 0;
          }

          .clay-mobile-title {
            display: flex;
            align-items: baseline;
            gap: 4px;
          }

          .clay-mobile-name {
            font-weight: 900;
            font-size: 0.95rem;
            color: #0f172a;
            letter-spacing: -0.01em;
          }

          .clay-mobile-ver {
            font-weight: 900;
            font-size: 0.65rem;
            color: #2563eb;
            background: #dbeafe;
            padding: 1px 5px;
            border-radius: 6px;
          }

          .clay-mobile-profile-btn {
            display: flex;
            align-items: center;
            gap: 8px;
            text-decoration: none;
            background: #ffffff;
            padding: 4px 10px 4px 5px;
            border-radius: 20px;
            border: 1.5px solid rgba(255, 255, 255, 0.9);
            box-shadow:
              3px 4px 10px rgba(162, 178, 201, 0.18),
              inset 1px 1px 2px rgba(255, 255, 255, 0.8);
          }

          .clay-mobile-avatar {
            width: 28px;
            height: 28px;
            border-radius: 50%;
            background: linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%);
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 0.72rem;
            font-weight: 900;
            color: #ffffff;
            position: relative;
          }

          .clay-mobile-dot {
            position: absolute;
            bottom: -1px;
            right: -1px;
            width: 8px;
            height: 8px;
            border-radius: 50%;
            background: #22c55e;
            border: 1.5px solid #ffffff;
          }

          .clay-mobile-user-meta {
            display: flex;
            flex-direction: column;
            gap: 1px;
          }

          .clay-mobile-user-name {
            font-size: 0.75rem;
            font-weight: 800;
            color: #0f172a;
            line-height: 1;
          }

          .clay-mobile-role {
            font-size: 0.6rem;
            font-weight: 800;
            padding: 1px 5px;
            border-radius: 5px;
            width: fit-content;
          }

          /* Main Content occupies 100% full width */
          .clay-main-content {
            margin-left: 0 !important;
            width: 100% !important;
            max-width: 100vw !important;
            padding: 0.85rem 0.85rem 85px 0.85rem !important;
            box-sizing: border-box;
          }

          /* Mobile Bottom Navigation Bar */
          .clay-mobile-bottom-nav {
            display: flex;
            align-items: center;
            justify-content: space-around;
            position: fixed;
            bottom: 0;
            left: 0;
            right: 0;
            height: 64px;
            background: rgba(238, 243, 249, 0.96);
            backdrop-filter: blur(16px);
            border-top: 2px solid rgba(255, 255, 255, 0.9);
            box-shadow:
              0 -6px 20px rgba(162, 178, 201, 0.25),
              inset 0 1px 2px rgba(255, 255, 255, 0.8);
            z-index: 200;
            padding: 0 0.4rem;
          }

          .clay-mob-nav-btn {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            gap: 2px;
            text-decoration: none;
            color: #64748b;
            padding: 5px 8px;
            border-radius: 12px;
            transition: all 0.2s cubic-bezier(0.34, 1.56, 0.64, 1);
            position: relative;
            flex: 1;
          }

          .clay-mob-icon {
            font-size: 1.25rem;
            line-height: 1.2;
          }

          .clay-mob-label {
            font-size: 0.62rem;
            font-weight: 700;
            letter-spacing: 0.01em;
          }

          .clay-mob-nav-btn.active {
            color: #2563eb;
            background: #ffffff;
            box-shadow:
              3px 4px 10px rgba(162, 178, 201, 0.2),
              -2px -2px 6px rgba(255, 255, 255, 0.9),
              inset 1px 1px 2px rgba(255, 255, 255, 0.9);
            transform: translateY(-2px);
          }
        }
      `}</style>
    </div>
  );
};
