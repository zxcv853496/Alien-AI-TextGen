import React from 'react';
import { useTranslation } from 'react-i18next';
import { LayoutDashboard } from 'lucide-react';

const LoginPage = ({ onLoginSuccess, onRegisterClick }) => {
  const { t } = useTranslation();

  return (
    <div className="min-h-[calc(100vh-80px)] md:min-h-screen grid grid-cols-1 lg:grid-cols-2">
      {/* Left Column - Branding (Hidden on mobile < lg) */}
      <div className="hidden lg:flex flex-col justify-center items-center bg-gradient-to-br from-indigo-600 to-violet-700 text-white p-12 relative overflow-hidden">
        {/* Background Patterns */}
        <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
          <div className="absolute top-10 left-10 w-64 h-64 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-purple-400 rounded-full blur-3xl"></div>
        </div>

        <div className="relative z-10 text-center max-w-md">
          <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto mb-8 shadow-inner border border-white/30">
            <span className="text-4xl font-bold">A</span>
          </div>
          <h2 className="text-3xl font-bold mb-4">{t('hero.title_loading', 'Welcome to Alien AI')}</h2>
          <p className="text-indigo-100 text-lg leading-relaxed mb-8">
            {t('hero.desc', 'Unlock the power of global communication with AI-driven translation.')}
          </p>

          {/* Simple Testimonial or Feature decoration */}
          <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 text-left border border-white/10">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-2 h-2 rounded-full bg-green-400"></div>
              <span className="text-sm font-medium text-indigo-50">System Status: Online</span>
            </div>
            <div className="space-y-2 opacity-80">
              <div className="h-2 w-3/4 bg-white/20 rounded"></div>
              <div className="h-2 w-1/2 bg-white/20 rounded"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Right Column - Simple Login Form */}
      <div className="flex flex-col justify-center items-center p-6 md:p-12 bg-white">
        <div className="w-full max-w-md space-y-8">
          <div className="text-center lg:text-left">
            <h2 className="text-3xl font-bold text-slate-900 tracking-tight">
              {t('nav.login', 'Log In')}
            </h2>
            <p className="mt-2 text-slate-500">
              Welcome back! Please enter your details.
            </p>
          </div>

          <form className="mt-8 space-y-6" onSubmit={(e) => { e.preventDefault(); onLoginSuccess && onLoginSuccess(); }}>
            <div className="space-y-5">
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-1">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="appearance-none relative block w-full px-4 py-3 border border-slate-300 placeholder-slate-400 text-slate-900 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm transition-shadow"
                  placeholder="Enter your email"
                />
              </div>

              <div>
                <label htmlFor="password" className="block text-sm font-medium text-slate-700 mb-1">
                  Password
                </label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="appearance-none relative block w-full px-4 py-3 border border-slate-300 placeholder-slate-400 text-slate-900 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm transition-shadow"
                  placeholder="••••••••"
                />
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  id="remember-me"
                  name="remember-me"
                  type="checkbox"
                  className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-slate-300 rounded cursor-pointer"
                />
                <label htmlFor="remember-me" className="ml-2 block text-sm text-slate-600 cursor-pointer select-none">
                  Remember me
                </label>
              </div>

              <div className="text-sm">
                <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">
                  Forgot password?
                </a>
              </div>
            </div>

            <div className="space-y-4">
              <button
                type="submit"
                className="group relative w-full flex justify-center py-3 px-4 border border-transparent text-sm font-bold rounded-xl text-white bg-slate-900 hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-slate-900 transition-all shadow-lg hover:shadow-xl"
              >
                Sign in
              </button>

              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-slate-200"></div>
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-2 bg-white text-slate-500">Or continue with</span>
                </div>
              </div>

              <button
                type="button"
                className="w-full flex justify-center items-center gap-3 py-3 px-4 border border-slate-200 rounded-xl bg-white text-slate-700 font-medium hover:bg-slate-50 transition-colors"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24">
                  <path
                    d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                    fill="#4285F4"
                  />
                  <path
                    d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                    fill="#34A853"
                  />
                  <path
                    d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                    fill="#FBBC05"
                  />
                  <path
                    d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                    fill="#EA4335"
                  />
                </svg>
                Google
              </button>
            </div>
          </form>

          <div className="text-center mt-4">
            <p className="text-sm text-slate-600">
              Don't have an account?{' '}
              <button onClick={onRegisterClick} className="font-bold text-indigo-600 hover:text-indigo-500">
                Sign up
              </button>
            </p>
          </div>

        </div>
      </div>
    </div>
  );
};

export default LoginPage;
