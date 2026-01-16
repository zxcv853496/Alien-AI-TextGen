import React from 'react';
import { useTranslation } from 'react-i18next';
import { cn } from '@/lib/utils';

import { Globe } from 'lucide-react';

const Header = ({ isLoggedIn, onLogin, onLogout, currentView, onChangeView, onRegister }) => {
  const { t, i18n } = useTranslation();
  const [showLangMenu, setShowLangMenu] = React.useState(false);

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <header className="bg-white/80 backdrop-blur-md border-b border-slate-200 px-6 py-4 flex justify-between items-center sticky top-0 z-50">
      <div
        className="flex items-center gap-2 cursor-pointer"
        onClick={() => onChangeView('landing')}
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
            <div className="absolute right-0 mt-2 w-40 bg-white rounded-lg shadow-xl shadow-slate-200 border border-slate-100 py-1 animate-in fade-in zoom-in-95 duration-200 z-50">
              <button
                onClick={() => { changeLanguage('zh'); setShowLangMenu(false); }}
                className={cn(
                  "w-full text-left px-4 py-2 text-sm font-medium transition-colors hover:bg-slate-50",
                  i18n.language === 'zh' ? "text-indigo-600 bg-indigo-50/50" : "text-slate-700"
                )}
              >
                繁體中文
              </button>
              <button
                onClick={() => { changeLanguage('en'); setShowLangMenu(false); }}
                className={cn(
                  "w-full text-left px-4 py-2 text-sm font-medium transition-colors hover:bg-slate-50",
                  i18n.language === 'en' ? "text-indigo-600 bg-indigo-50/50" : "text-slate-700"
                )}
              >
                English
              </button>
            </div>
          )}
        </div>

        <div className="h-4 w-[1px] bg-slate-300 hidden md:block"></div>

        {!isLoggedIn ? (
          <>
            <button className="hidden md:block text-sm font-medium text-slate-600 hover:text-slate-900">
              {t('nav.features')}
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
            {/* User logged in state (Simplified for now) */}
            <div className="relative group">
              <button
                onClick={onLogout}
                className="w-9 h-9 rounded-full bg-slate-200 overflow-hidden border-2 border-slate-100 focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 hover:border-indigo-300 transition-all"
                title={t('nav.logout')}
              >
                <img
                  src="https://api.dicebear.com/7.x/avataaars/svg?seed=Felix"
                  alt="User"
                  loading="lazy"
                />
              </button>
            </div>
          </>
        )}
      </div>
    </header>
  );
};

export default Header;
