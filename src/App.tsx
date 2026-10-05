
import { useEffect } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { AnalyticsView } from './pages/Analytics';
import { DeveloperDashboard } from './pages/DeveloperDashboard';
import { AdminLogin } from './pages/Admin/AdminLogin';
import { AdminLayout } from './pages/Admin/AdminLayout';
import { ProfileView } from './pages/Admin/ProfileView';
import { UsersView } from './pages/Admin/UsersView';
import { TeamsView } from './pages/Admin/TeamsView';
import { AccessControlView } from './pages/Admin/AccessControlView';

function App() {
  // Global Anti-Inspect & Security Protection
  useEffect(() => {
    const handleContextMenu = (e: MouseEvent) => {
      e.preventDefault();
      return false;
    };

    const handleKeyDown = (e: KeyboardEvent) => {
      // F12 key
      if (e.key === 'F12' || e.keyCode === 123) {
        e.preventDefault();
        return false;
      }

      const ctrlOrCmd = e.ctrlKey || e.metaKey;

      // Ctrl + Shift + I (Inspect) / J (Console) / C (Inspect Element)
      if (ctrlOrCmd && e.shiftKey && (
        e.key === 'I' || e.key === 'i' ||
        e.key === 'J' || e.key === 'j' ||
        e.key === 'C' || e.key === 'c'
      )) {
        e.preventDefault();
        return false;
      }

      // Ctrl + U (View Source)
      if (ctrlOrCmd && (e.key === 'u' || e.key === 'U')) {
        e.preventDefault();
        return false;
      }

      // Ctrl + S (Save Page)
      if (ctrlOrCmd && (e.key === 's' || e.key === 'S')) {
        e.preventDefault();
        return false;
      }
    };

    document.addEventListener('contextmenu', handleContextMenu, { capture: true });
    document.addEventListener('keydown', handleKeyDown, { capture: true });

    return () => {
      document.removeEventListener('contextmenu', handleContextMenu, { capture: true });
      document.removeEventListener('keydown', handleKeyDown, { capture: true });
    };
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AnalyticsView />} />
        <Route path="/developer" element={<DeveloperDashboard />} />

        {/* Admin / Organizer Portal */}
        <Route path="/admin/login" element={<AdminLogin />} />
        <Route path="/admin" element={<AdminLayout />}>
          <Route index element={<ProfileView />} />
          <Route path="profile" element={<Navigate to="/admin" replace />} />
          <Route path="participants" element={<UsersView />} />
          <Route path="users" element={<Navigate to="/admin/participants" replace />} />
          <Route path="teams" element={<TeamsView />} />
          <Route path="access" element={<AccessControlView />} />
          <Route path="permissions" element={<Navigate to="/admin/access" replace />} />
          <Route path="analytics" element={<Navigate to="/" replace />} />
        </Route>

        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
