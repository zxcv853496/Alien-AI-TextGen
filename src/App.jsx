import React, { useState } from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import LandingPage from '@/pages/LandingPage';
import './App.css';

// --- 主應用入口 (Main App) ---
const App = () => {
  // View State: landing
  const [currentView, setCurrentView] = useState('landing');
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
    // Future: redirect to dashboard
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
      <Header
        isLoggedIn={isLoggedIn}
        onLogin={handleLogin}
        onRegister={handleStart}
        onLogout={handleLogout}
        currentView={currentView}
        onChangeView={setCurrentView}
      />

      {/* --- Main Content Render --- */}
      <main className="flex-grow">
        {currentView === 'landing' && <LandingPage onStart={handleStart} />}
      </main>

      <Footer />
    </div>
  );
};

export default App;
