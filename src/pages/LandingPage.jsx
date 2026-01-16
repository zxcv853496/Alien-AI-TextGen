import React from 'react';
import { useTranslation } from 'react-i18next';
import { Globe, CheckCircle, Play, X } from 'lucide-react';

const LandingPage = ({ onStart }) => {
  const { t } = useTranslation();

  return (
    <div className="animate-fade-in">
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-16 pb-24 lg:pt-32">
        <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
          <div className="inline-flex items-center gap-2 bg-indigo-50 border border-indigo-100 text-indigo-700 px-4 py-1.5 rounded-full text-sm font-semibold mb-8">
            <Globe className="w-4 h-4" />
            {t('hero.tag')}
          </div>
          <h1 className="text-5xl md:text-7xl font-extrabold text-slate-900 tracking-tight mb-6 leading-tight">
            {t('hero.title_prefix')} <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-violet-600">
              {t('hero.title_highlight')}
            </span>
          </h1>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto mb-10 leading-relaxed">
            {t('hero.desc')}
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button
              onClick={onStart}
              className="px-8 py-4 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl font-bold text-lg shadow-lg shadow-indigo-200 transition-all hover:-translate-y-1"
            >
              {t('hero.btn_start')}
            </button>
          </div>
        </div>

        {/* Background decoration */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full z-0 pointer-events-none opacity-40">
          <div className="absolute top-20 left-10 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob"></div>
          <div className="absolute top-20 right-10 w-72 h-72 bg-yellow-300 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-2000"></div>
          <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-4000"></div>
        </div>
      </section>

      {/* Feature Comparison (Before/After) */}
      <section className="py-20 bg-white border-y border-slate-100">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">{t('compare.title')}</h2>
            <p className="text-slate-500">{t('compare.subtitle')}</p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Bad Example */}
            <div className="bg-slate-100 rounded-2xl p-6 relative grayscale opacity-70">
              <div className="aspect-video bg-slate-300 rounded-lg flex items-center justify-center relative mb-4">
                <span className="text-slate-500 font-bold">{t('compare.bad_label')}</span>
                <div className="absolute bottom-4 text-center w-full px-4">
                  <p className="text-white text-sm bg-black/50 px-2">{t('compare.bad_text')}</p>
                </div>
              </div>
              <div className="absolute -top-3 -left-3 bg-red-500 text-white px-4 py-1 rounded-full text-sm font-bold">
                Before
              </div>
              <ul className="space-y-2 text-slate-500 text-sm">
                {(t('compare.bad_list_items', { returnObjects: true }) || []).map((item, idx) => (
                  <li key={idx} className="flex gap-2">
                    <X className="w-4 h-4" /> {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Good Example */}
            <div className="bg-indigo-50 rounded-2xl p-6 relative shadow-xl shadow-indigo-100 border border-indigo-100 transform md:scale-105">
              <div className="aspect-video bg-slate-800 rounded-lg flex items-center justify-center relative mb-4 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-tr from-indigo-900/40 to-purple-900/40"></div>
                {/* 字幕展示區 */}
                <div className="absolute bottom-8 text-center w-full px-4">
                  <div className="bg-black/60 backdrop-blur-sm px-4 py-2 rounded-lg inline-block">
                    <p className="text-white text-lg font-bold">
                      This is a subtitle with accurate translation.
                    </p>
                    <p className="text-yellow-300 text-base font-medium mt-1">
                      這是一段精準翻譯的字幕。
                    </p>
                  </div>
                </div>
              </div>
              <div className="absolute -top-3 -right-3 bg-green-500 text-white px-4 py-1 rounded-full text-sm font-bold shadow-lg">
                Alien AI Global
              </div>
              <ul className="space-y-2 text-slate-700 text-sm font-medium">
                {(t('compare.good_list_items', { returnObjects: true }) || []).map((item, idx) => (
                  <li key={idx} className="flex gap-2 items-center">
                    <CheckCircle className="w-4 h-4 text-green-500" /> {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;
