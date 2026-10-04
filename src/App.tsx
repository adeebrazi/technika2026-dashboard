
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { AnalyticsView } from './pages/Analytics';
import { DeveloperDashboard } from './pages/DeveloperDashboard';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AnalyticsView />} />
        <Route path="/developer" element={<DeveloperDashboard />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
