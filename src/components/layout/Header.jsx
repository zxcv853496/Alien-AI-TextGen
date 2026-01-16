import React from 'react';
import { useTranslation } from 'react-i18next';
import { cn } from '@/lib/utils';

const Header = ({ isLoggedIn, onLogin, onLogout, currentView, onChangeView, onRegister }) => {
    const { t, i18n } = useTranslation();

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
                {/* Language Switcher */}
                <div className="flex items-center text-sm font-medium text-slate-600 bg-slate-100 rounded-lg p-1">
                    <button
                        onClick={() => changeLanguage('zh')}
                        className={cn(
                            'px-3 py-1 rounded-md transition-all',
                            i18n.language === 'zh'
                                ? 'bg-white text-indigo-600 shadow-sm'
                                : 'hover:text-slate-900',
                        )}
                    >
                        繁體
                    </button>
                    <button
                        onClick={() => changeLanguage('en')}
                        className={cn(
                            'px-3 py-1 rounded-md transition-all',
                            i18n.language === 'en'
                                ? 'bg-white text-indigo-600 shadow-sm'
                                : 'hover:text-slate-900',
                        )}
                    >
                        English
                    </button>
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
                                <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Felix" alt="User" />
                            </button>
                        </div>
                    </>
                )}
            </div>
        </header>
    );
};

export default Header;
