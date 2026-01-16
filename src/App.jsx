import React, { useState } from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import LandingPage from '@/pages/LandingPage';
import LoginPage from '@/pages/LoginPage';
import './App.css';

// --- 主應用入口 (Main App) ---
const App = () => {
  // View State: landing, login
  const [currentView, setCurrentView] = useState('landing');
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLoginStart = () => {
    setCurrentView('login');
  };

  const handleLoginSuccess = () => {
    setIsLoggedIn(true);
    setCurrentView('landing');
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setCurrentView('landing');
  };

  const handleStart = () => {
    window.alert('開始試用 (Mock)');
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-indigo-100 flex flex-col">
      {currentView !== 'login' && (
        <Header
          isLoggedIn={isLoggedIn}
          onLogin={handleLoginStart}
          onRegister={handleStart}
          onLogout={handleLogout}
          currentView={currentView}
          onChangeView={setCurrentView}
        />
      )}

      {/* --- Main Content Render --- */}
      <main className="flex-grow">
        {currentView === 'landing' ? <LandingPage onStart={handleStart} /> : null}
        {currentView === 'login' ? <LoginPage onLoginSuccess={handleLoginSuccess} onRegisterClick={handleStart} /> : null}
      </main>

      {currentView !== 'login' && <Footer />}
    </div>
  );
};

export default App;
