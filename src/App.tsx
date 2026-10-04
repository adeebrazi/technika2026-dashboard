
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { AnalyticsView } from './pages/Analytics';
import { DeveloperDashboard } from './pages/DeveloperDashboard';
import { AdminLogin } from './pages/Admin/AdminLogin';
import { AdminLayout } from './pages/Admin/AdminLayout';
import { ProfileView } from './pages/Admin/ProfileView';
import { UsersView } from './pages/Admin/UsersView';
import { TeamsView } from './pages/Admin/TeamsView';

function App() {
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
          <Route path="analytics" element={<Navigate to="/" replace />} />
        </Route>

        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
