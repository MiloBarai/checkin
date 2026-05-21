import { Routes, Route } from 'react-router-dom';
import GatedApp from './GatedApp.jsx';
import PrivacyPage from './pages/PrivacyPage.jsx';

export default function App() {
  return (
    <Routes>
      <Route path="/privacy" element={<PrivacyPage />} />
      <Route path="/*" element={<GatedApp />} />
    </Routes>
  );
}
