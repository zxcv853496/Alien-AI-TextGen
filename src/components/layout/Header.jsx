import React from 'react';
import { useTranslation } from 'react-i18next';
import { createPortal } from 'react-dom';
import { useNavigate, Link } from 'react-router-dom';
import { cn } from '@/lib/utils';

import { Globe, Menu, X, LayoutDashboard } from 'lucide-react';

const LANGUAGES = [
  { code: 'zh', label: '繁體中文' },
  { code: 'en', label: 'English' },
  { code: 'cn', label: '简体中文' },
];

const Header = ({ isLoggedIn, onLogin, onLogout, onRegister }) => {
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();
  const [showUserMenu, setShowUserMenu] = React.useState(false);
  const [showLangMenu, setShowLangMenu] = React.useState(false);
  const [showMobileMenu, setShowMobileMenu] = React.useState(false);
  const [isClosing, setIsClosing] = React.useState(false);

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  const handleCloseMobileMenu = () => {
    setIsClosing(true);
    setTimeout(() => {
      setShowMobileMenu(false);
      setIsClosing(false);
    }, 300); // Match animation duration
  };

  const handleNavClick = (path) => {
    navigate(path);
    if (showMobileMenu) handleCloseMobileMenu();
  }

  return (
    <header className="bg-white/80 backdrop-blur-md border-b border-slate-200 px-6 py-4 flex justify-between items-center sticky top-0 z-50">
      <div
        className="flex items-center gap-2 cursor-pointer"
        onClick={() => handleNavClick('/')}
      >
        <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center text-white font-bold shadow-md shadow-indigo-200">
          A
        </div>
        <span className="text-xl font-bold tracking-tight text-slate-800">
          Alien AI <span className="text-xs font-normal text-slate-500 ml-1">Translate Studio</span>
        </span>
      </div>

      {/* Right Navigation */}
      <div className="flex items-center gap-4 md:gap-6">

        {/* Mobile Menu Button - Visible < md */}
        <button
          className="md:hidden p-2 text-slate-600 hover:bg-slate-100 rounded-full"
          onClick={() => setShowMobileMenu(true)}
        >
          <Menu className="w-6 h-6" />
        </button>

        {/* Desktop Navigation - Hidden < md */}
        <div className="hidden md:flex items-center gap-4 md:gap-6">
          {/* Language Switcher Dropdown */}
          <div className="relative">
            <button
              onClick={() => setShowLangMenu((prev) => !prev)}
              onBlur={() => setTimeout(() => setShowLangMenu(false), 200)}
              className="p-2 rounded-full hover:bg-slate-100 text-slate-600 transition-colors focus:ring-2 focus:ring-indigo-100 focus:outline-none"
              title={t('nav.language')}
            >
              <Globe className="w-5 h-5" />
            </button>

            {showLangMenu && (
              <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-xl shadow-slate-200 border border-slate-100 py-1 animate-in fade-in zoom-in-95 duration-200 z-50 overflow-hidden">
                {LANGUAGES.map((lang) => (
                  <button
                    key={lang.code}
                    onClick={() => { changeLanguage(lang.code); setShowLangMenu(false); }}
                    className={cn(
                      "w-full text-left px-4 py-2 text-sm font-medium transition-colors hover:bg-slate-50",
                      i18n.language?.startsWith(lang.code) ? "text-indigo-600 bg-indigo-50/50" : "text-slate-700"
                    )}
                  >
                    {lang.label}
                  </button>
                ))}
              </div>
            )}
          </div>

          <div className="h-4 w-[1px] bg-slate-300"></div>

          {!isLoggedIn ? (
            <>
              {/* Visitor Nav */}
              <button
                onClick={() => handleNavClick('/')}
                className="text-sm font-medium text-slate-600 hover:text-slate-900"
              >
                {t('nav.features')}
              </button>
              <button
                onClick={() => handleNavClick('/')}
                className="text-sm font-medium text-slate-600 hover:text-slate-900"
              >
                {t('nav.pricing')}
              </button>
              <button
                onClick={onLogin}
                className="text-sm font-bold text-indigo-600 hover:text-indigo-700 px-4 py-2 hover:bg-indigo-50 rounded-lg transition-colors"
              >
                {t('nav.login')}
              </button>
              <button
                onClick={onRegister}
                className="bg-slate-900 hover:bg-slate-800 text-white px-4 py-2 rounded-lg text-sm font-bold transition-all shadow-md"
              >
                {t('nav.register')}
              </button>
            </>
          ) : (
            <>
              {/* Logged In Nav */}
              <button
                onClick={() => handleNavClick('/dashboard')}
                className="hidden md:flex items-center gap-2 text-sm font-medium text-indigo-600 hover:text-indigo-700 transition-colors"
              >
                <LayoutDashboard className="w-4 h-4" /> {t('nav.dashboard')}
              </button>

              <div className="hidden md:flex flex-col items-end mr-2">
                <span className="text-[10px] text-slate-400 uppercase font-bold tracking-wider">
                  {t('nav.credits')}
                </span>
                <span className="text-sm font-bold text-indigo-600">1,250</span>
              </div>

              <div className="relative">
                <button
                  className="w-9 h-9 rounded-full bg-slate-200 overflow-hidden border-2 border-slate-100 focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 hover:border-indigo-300 transition-all"
                  title={t('nav.logout')}
                  onClick={() => setShowUserMenu(!showUserMenu)}
                  onBlur={() => setTimeout(() => setShowUserMenu(false), 200)}
                >
                  <img
                    src="https://api.dicebear.com/7.x/avataaars/svg?seed=Felix"
                    alt="User"
                    loading="lazy"
                  />
                </button>
                {/* Dropdown Menu */}
                {showUserMenu && (
                  <div className="absolute right-0 top-full pt-2 w-48 z-50">
                    <div className="bg-white rounded-xl shadow-xl border border-slate-100 p-2 animate-in fade-in zoom-in-95 origin-top-right">
                      <div className="px-3 py-2 border-b border-slate-50 mb-1">
                        <p className="text-sm font-bold text-slate-800">Felix Chen</p>
                        <p className="text-xs text-slate-500">Pro Plan</p>
                      </div>
                      <button
                        onClick={onLogout}
                        className="w-full text-left px-3 py-2 text-sm text-red-500 hover:bg-red-50 rounded-lg transition-colors"
                      >
                        {t('nav.logout')}
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </>
          )}
        </div>

        {/* Mobile Sidebar (Sheet) */}
        {showMobileMenu && createPortal(
          <>
            {/* Overlay */}
            <div
              className={cn(
                "fixed inset-0 bg-black/50 backdrop-blur-sm z-[60] md:hidden duration-300",
                isClosing ? "animate-out fade-out fill-mode-forwards" : "animate-in fade-in"
              )}
              onClick={handleCloseMobileMenu}
            ></div>

            {/* Sidebar Drawer */}
            <div
              className={cn(
                "fixed top-0 right-0 h-full w-3/4 max-w-sm bg-white shadow-2xl z-[70] md:hidden p-6 flex flex-col gap-6 duration-300 border-l border-slate-100",
                isClosing ? "animate-out slide-out-to-right fill-mode-forwards" : "animate-in slide-in-from-right"
              )}
            >
              <div className="flex justify-between items-center">
                <span className="font-bold text-lg text-slate-800">Menu</span>
                <button onClick={handleCloseMobileMenu} className="p-2 hover:bg-slate-100 rounded-full text-slate-500">
                  <X className="w-6 h-6" />
                </button>
              </div>

              <div className="flex flex-col gap-4">
                {/* Mobile Language Switcher */}
                <div className="grid grid-cols-2 gap-2 bg-slate-50 p-2 rounded-lg">
                  {LANGUAGES.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => changeLanguage(lang.code)}
                      className={cn(
                        "py-2 text-sm font-medium rounded-md transition-all",
                        i18n.language?.startsWith(lang.code)
                          ? "bg-white text-indigo-600 shadow-sm"
                          : "text-slate-500 hover:text-slate-700"
                      )}
                    >
                      {lang.label}
                    </button>
                  ))}
                </div>

                <div className="h-[1px] bg-slate-100 my-2"></div>

                {!isLoggedIn ? (
                  <>
                    <button
                      onClick={() => handleNavClick('/')}
                      className="text-left py-3 font-medium text-slate-600 border-b border-slate-50 hover:text-indigo-600"
                    >
                      {t('nav.features')}
                    </button>
                    <button
                      onClick={() => handleNavClick('/')}
                      className="text-left py-3 font-medium text-slate-600 border-b border-slate-50 hover:text-indigo-600"
                    >
                      {t('nav.pricing')}
                    </button>
                    <div className="flex flex-col gap-3 mt-2">
                      <button
                        onClick={onLogin}
                        className="text-left py-3 font-bold text-indigo-600 border-b border-slate-50"
                      >
                        {t('nav.login')}
                      </button>
                      <button
                        onClick={onRegister}
                        className="mt-4 w-full bg-slate-900 text-white py-3 rounded-xl font-bold"
                      >
                        {t('nav.register')}
                      </button>
                    </div>
                  </>
                ) : (
                  <>
                    <button
                      onClick={() => handleNavClick('/dashboard')}
                      className="text-left py-3 font-medium text-slate-600 border-b border-slate-50 hover:text-indigo-600 flex items-center gap-2"
                    >
                      <LayoutDashboard className="w-4 h-4" /> {t('nav.dashboard')}
                    </button>
                    <button onClick={onLogout} className="text-left py-3 font-medium text-red-500 border-b border-slate-50">
                      {t('nav.logout')}
                    </button>
                  </>
                )}
              </div>
            </div>
          </>,
          document.body
        )}
      </div>
    </header>
  );
};

export default Header;
