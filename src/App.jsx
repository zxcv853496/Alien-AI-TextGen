import React, { useState } from 'react';
import { Routes, Route, useNavigate, useLocation, Navigate } from 'react-router-dom';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import LandingPage from '@/pages/LandingPage';
import LoginPage from '@/pages/LoginPage';
import DashboardPage from '@/pages/DashboardPage';
import EditorPage from '@/pages/EditorPage';
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
    navigate('/dashboard');
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    navigate('/');
  };

  const handleStart = () => {
    // If logged in, go to editor, else trigger login/register mock flow
    if (isLoggedIn) {
      navigate('/editor');
    } else {
      window.alert('開始試用 (Mock)');
    }
  };

  // Determine if we should show header/footer
  const showLayout = true;

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
          <Route path="/dashboard" element={isLoggedIn ? <DashboardPage /> : <Navigate to="/login" />} />
          <Route path="/editor" element={isLoggedIn ? <EditorPage /> : <Navigate to="/login" />} />
        </Routes>
      </main>

      {showLayout && <Footer />}
    </div>
  );
};

export default App;
