import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/layout/navbar';
import { MobileNav } from './components/layout/mobile-nav';
import { HomePage } from './pages/home';
import { ScanPage } from './pages/scan';
import { ProfilePage } from './pages/profile';
import { SettingsPage } from './pages/settings';

function App() {
  return (
    <BrowserRouter>
      <div className="flex min-h-screen flex-col bg-gradient-to-br from-gray-900 to-black text-white">
        <Navbar />
        <main className="flex-1 pb-16">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/scan" element={<ScanPage />} />
            <Route path="/profile" element={<ProfilePage />} />
            <Route path="/settings" element={<SettingsPage />} />
          </Routes>
        </main>
        <MobileNav />
      </div>
    </BrowserRouter>
  );
}

export default App;