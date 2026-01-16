import React, { useState } from 'react';
import { Routes, Route, useNavigate, useLocation } from 'react-router-dom';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import LandingPage from '@/pages/LandingPage';
import LoginPage from '@/pages/LoginPage';
import './App.css';

// --- 主應用入口 (Main App) ---
const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const handleLoginStart = () => {
    navigate('/login');
  };

  const handleLoginSuccess = () => {
    setIsLoggedIn(true);
    navigate('/');
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    navigate('/');
  };

  const handleStart = () => {
    window.alert('開始試用 (Mock)');
  };

  // Determine if we should show header/footer
  // For now, user wants header everywhere. If later we want to hide it on login, we can check location.pathname
  // const showLayout = location.pathname !== '/login'; 
  const showLayout = true; // Based on latest user request "Add header back to login page"

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-indigo-100 flex flex-col">
      {showLayout && (
        <Header
          isLoggedIn={isLoggedIn}
          onLogin={handleLoginStart}
          onRegister={handleStart}
          onLogout={handleLogout}
        />
      )}

      {/* --- Main Content Render --- */}
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<LandingPage onStart={handleStart} />} />
          <Route path="/login" element={<LoginPage onLoginSuccess={handleLoginSuccess} onRegisterClick={handleStart} />} />
        </Routes>
      </main>

      {showLayout && <Footer />}
    </div>
  );
};

export default App;
