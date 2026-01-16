import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import {
  ChevronRight,
  Upload,
  FileVideo,
  Settings,
  AlertCircle,
  Globe,
  CheckCircle,
  Download,
  Play
} from 'lucide-react';

const EditorPage = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [step, setStep] = useState('upload');
  const [file, setFile] = useState(null);
  const [progress, setProgress] = useState(0);
  const [targetLang, setTargetLang] = useState('');

  useEffect(() => {
    if (step === 'processing') {
      const timer = setInterval(() => {
        setProgress((oldProgress) => {
          if (oldProgress === 100) {
            clearInterval(timer);
            setTimeout(() => setStep('result'), 500);
            return 100;
          }
          const diff = Math.random() * 10;
          return Math.min(oldProgress + diff, 100);
        });
      }, 500);
      return () => clearInterval(timer);
    }
  }, [step]);

  const handleDrop = (e) => {
    e.preventDefault();
    setFile({ name: 'my_awesome_video.mp4', size: '245 MB' });
  };

  const translations = {
    // Helper to map keys since demo uses direct objects for steps, but we use i18n
    processingSteps: t('editor.processing.steps', { returnObjects: true }) || []
  };

  return (
    <div className="max-w-5xl mx-auto p-6 md:py-12 animate-in fade-in duration-500">
      <button
        onClick={() => navigate('/dashboard')}
        className="mb-6 flex items-center text-slate-500 hover:text-indigo-600 text-sm font-medium transition-colors"
      >
        <ChevronRight className="w-4 h-4 rotate-180 mr-1" /> {t('editor.back')}
      </button>

      {/* Step Indicator */}
      <div className="mb-12 flex justify-center">
        <div className="flex items-center gap-4 text-sm font-medium">
          <div
            className={`flex items-center gap-2 ${step === 'upload' ? 'text-indigo-600' : 'text-slate-400'}`}
          >
            <div
              className={`w-6 h-6 rounded-full flex items-center justify-center border-2 ${step === 'upload' ? 'border-indigo-600 bg-indigo-50' : 'border-slate-300'}`}
            >
              1
            </div>
            {t('editor.steps.upload')}
          </div>
          <div className="w-8 h-[2px] bg-slate-200"></div>
          <div
            className={`flex items-center gap-2 ${step === 'processing' ? 'text-indigo-600' : 'text-slate-400'}`}
          >
            <div
              className={`w-6 h-6 rounded-full flex items-center justify-center border-2 ${step === 'processing' ? 'border-indigo-600 bg-indigo-50' : 'border-slate-300'}`}
            >
              2
            </div>
            {t('editor.steps.processing')}
          </div>
          <div className="w-8 h-[2px] bg-slate-200"></div>
          <div
            className={`flex items-center gap-2 ${step === 'result' ? 'text-indigo-600' : 'text-slate-400'}`}
          >
            <div
              className={`w-6 h-6 rounded-full flex items-center justify-center border-2 ${step === 'result' ? 'border-indigo-600 bg-indigo-50' : 'border-slate-300'}`}
            >
              3
            </div>
            {t('editor.steps.result')}
          </div>
        </div>
      </div>

      {/* --- Step 1: Upload & Configuration --- */}
      {step === 'upload' && (
        <div className="flex flex-col lg:flex-row gap-8">
          <div
            className="flex-1 bg-white rounded-2xl shadow-sm border border-slate-200 p-8 flex flex-col items-center justify-center min-h-[400px] border-dashed border-2 border-slate-300 hover:border-indigo-400 hover:bg-indigo-50/30 transition-all cursor-pointer group relative"
            onDragOver={(e) => e.preventDefault()}
            onDrop={handleDrop}
            onClick={() => !file && setFile({ name: 'demo_video.mp4', size: '120 MB' })}
          >
            {file ? (
              <div className="flex flex-col items-center gap-4 z-10">
                <FileVideo className="w-16 h-16 text-indigo-500" />
                <div className="text-center">
                  <h3 className="text-lg font-semibold text-slate-800">{file.name}</h3>
                  <p className="text-sm text-slate-500">{file.size}</p>
                </div>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setFile(null);
                  }}
                  className="mt-2 text-sm text-red-500 hover:text-red-700 font-medium px-4 py-2 hover:bg-red-50 rounded-lg transition-colors"
                >
                  {t('editor.upload.change_file')}
                </button>
              </div>
            ) : (
              <>
                <div className="w-20 h-20 bg-indigo-50 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Upload className="w-10 h-10 text-indigo-600" />
                </div>
                <h2 className="text-2xl font-bold text-slate-800 mb-2">
                  {t('editor.upload.drag_title')}
                </h2>
                <p className="text-slate-500 mb-6">{t('editor.upload.drag_desc')}</p>
                <span className="text-xs text-slate-400 bg-slate-100 px-3 py-1 rounded-full">
                  Max 500MB
                </span>
              </>
            )}
          </div>

          <div className="w-full lg:w-[360px] flex flex-col gap-6">
            <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6">
              <h3 className="text-lg font-bold text-slate-800 mb-4 flex items-center gap-2">
                <Settings className="w-5 h-5 text-slate-400" />
                {t('editor.upload.settings_title')}
              </h3>
              <div className="space-y-6">
                {/* 原始語言 */}
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    {t('editor.upload.source_lang')}
                  </label>
                  <select className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-2.5 text-sm outline-none focus:ring-2 focus:ring-indigo-500">
                    <option>繁體中文 (台灣)</option>
                    <option>English (US)</option>
                    <option>日本語</option>
                  </select>
                </div>

                {/* 目標翻譯語言 */}
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2 flex justify-between">
                    {t('editor.upload.target_lang')}
                  </label>
                  <select
                    className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-2.5 text-sm outline-none focus:ring-2 focus:ring-indigo-500"
                    value={targetLang}
                    onChange={(e) => setTargetLang(e.target.value)}
                  >
                    <option value="">{t('editor.upload.target_placeholder')}</option>
                    <option value="en">English (US)</option>
                    <option value="zh">繁體中文 (台灣)</option>
                    <option value="jp">日本語</option>
                    <option value="ko">한국어</option>
                    <option value="es">Español</option>
                    <option value="fr">Français</option>
                  </select>
                </div>

                {/* 字幕風格 */}
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    {t('editor.upload.style')}
                  </label>
                  <div className="grid grid-cols-2 gap-3">
                    <button className="border-2 border-indigo-600 bg-indigo-50 text-indigo-700 px-3 py-2 rounded-lg text-sm font-medium text-center">
                      {t('editor.upload.style_std')}
                    </button>
                    <button className="border border-slate-200 text-slate-600 px-3 py-2 rounded-lg text-sm font-medium text-center">
                      {t('editor.upload.style_film')}
                    </button>
                  </div>
                </div>
              </div>
              <div className="mt-8">
                <div className="flex justify-between items-center text-sm mb-4">
                  <span className="text-slate-500">{t('editor.upload.estimate')}</span>
                  {/* 翻譯會消耗更多點數 */}
                  <span className="font-bold text-slate-800">
                    {targetLang ? '80' : '50'} {t('nav.credits')}
                  </span>
                </div>
                <button
                  onClick={() => file && setStep('processing')}
                  disabled={!file}
                  className={`w-full py-3.5 rounded-xl font-bold flex items-center justify-center gap-2 transition-all transform active:scale-[0.98] ${file ? 'bg-indigo-600 hover:bg-indigo-700 text-white shadow-lg shadow-indigo-200' : 'bg-slate-200 text-slate-400 cursor-not-allowed'}`}
                >
                  {file ? t('editor.upload.btn_start') : t('editor.upload.btn_upload_first')}{' '}
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            <div className="bg-blue-50 border border-blue-100 rounded-xl p-4 flex gap-3">
              <AlertCircle className="w-5 h-5 text-blue-500 shrink-0" />
              <p className="text-xs text-blue-700 leading-relaxed">{t('editor.upload.notice')}</p>
            </div>
          </div>
        </div>
      )}

      {/* --- Step 2: Processing --- */}
      {step === 'processing' && (
        <div className="max-w-2xl mx-auto bg-white rounded-2xl shadow-lg border border-slate-100 p-12 text-center">
          <div className="relative w-32 h-32 mx-auto mb-8">
            <div className="absolute inset-0 border-4 border-slate-100 rounded-full"></div>
            <div className="absolute inset-0 border-4 border-indigo-500 border-t-transparent rounded-full animate-spin"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <Globe className="w-10 h-10 text-indigo-500 animate-pulse" />
            </div>
          </div>
          <h2 className="text-2xl font-bold text-slate-800 mb-2">{t('editor.processing.title')}</h2>
          <p className="text-slate-500 mb-8">{t('editor.processing.desc')}</p>
          <div className="w-full bg-slate-100 rounded-full h-3 mb-4 overflow-hidden">
            <div
              className="bg-indigo-600 h-full rounded-full transition-all duration-300 ease-out"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
          <div className="flex justify-between text-xs text-slate-400 font-medium">
            {Array.isArray(translations.processingSteps) && translations.processingSteps.map((s, i) => (
              <span key={i}>{s}</span>
            ))}
          </div>
        </div>
      )}

      {/* --- Step 3: Result --- */}
      {step === 'result' && (
        <div className="flex flex-col gap-6">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            <div>
              <h2 className="text-2xl font-bold text-slate-800 flex items-center gap-2">
                <CheckCircle className="w-6 h-6 text-green-500" /> {t('editor.result.title')}
              </h2>
              <p className="text-slate-500 text-sm mt-1">{t('editor.result.info')}</p>
            </div>
            <div className="flex gap-3">
              <button
                onClick={() => setStep('upload')}
                className="px-4 py-2 text-sm font-medium text-slate-600 hover:bg-slate-100 rounded-lg"
              >
                {t('editor.result.btn_new')}
              </button>
              <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-5 py-2 rounded-lg text-sm font-bold flex items-center gap-2 shadow-lg shadow-indigo-200">
                <Download className="w-4 h-4" /> {t('editor.result.btn_download')}
              </button>
            </div>
          </div>
          <div className="flex flex-col lg:flex-row gap-6 h-[600px]">
            <div className="lg:w-2/3 bg-black rounded-xl overflow-hidden relative group flex flex-col">
              <div className="flex-1 bg-slate-900 relative flex items-center justify-center">
                <div className="absolute inset-0 opacity-50 bg-[url('https://images.unsplash.com/photo-1516035069371-29a1b244cc32?q=80&w=2000&auto=format&fit=crop')] bg-cover bg-center"></div>

                {/* 模擬雙語字幕 */}
                <div className="absolute bottom-12 text-center w-full px-8">
                  <div className="bg-black/60 px-4 py-2 rounded-lg inline-block backdrop-blur-sm">
                    {targetLang ? (
                      <>
                        <p className="text-white text-xl font-bold">這就是多語系字幕的力量！</p>
                        <p className="text-yellow-300 text-lg mt-1 font-medium">
                          This is the power of multi-language subtitles!
                        </p>
                      </>
                    ) : (
                      <p className="text-white text-xl font-bold">這就是 AI 精準字幕的力量！</p>
                    )}
                  </div>
                </div>

                <button className="w-16 h-16 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-all border border-white/50 z-20">
                  <Play className="w-6 h-6 ml-1" fill="white" />
                </button>
              </div>
            </div>
            <div className="lg:w-1/3 bg-white rounded-xl shadow-sm border border-slate-200 flex flex-col overflow-hidden">
              <div className="p-4 border-b border-slate-100 flex justify-between items-center bg-slate-50">
                <h3 className="font-bold text-slate-700">{t('editor.result.list_title')}</h3>
                {targetLang && (
                  <span className="text-xs bg-indigo-100 text-indigo-700 px-2 py-0.5 rounded font-medium">
                    {t('editor.result.list_badge')}
                  </span>
                )}
              </div>
              <div className="flex-1 overflow-y-auto p-2 space-y-2 custom-scrollbar">
                {/* Mock Subtitles */}
                {[
                  {
                    time: '00:15',
                    src: '各位觀眾大家好，歡迎來到今天的影片。',
                    trans: "Hello everyone, welcome to today's video.",
                  },
                  {
                    time: '00:23',
                    src: '今天我們要來介紹如何使用 Alien AI。',
                    trans: 'Today we are going to introduce how to use Alien AI.',
                  },
                  {
                    time: '00:42',
                    src: '它不僅能生成字幕，還能自動翻譯。',
                    trans: 'It can not only generate subtitles but also translate automatically.',
                  },
                  {
                    time: '01:05',
                    src: '這將幫助你觸及全球的觀眾。',
                    trans: 'This will help you reach a global audience.',
                  },
                ].map((item, i) => (
                  <div
                    key={i}
                    className="p-3 rounded-lg hover:bg-slate-50 cursor-pointer border border-transparent hover:border-slate-200 transition-all"
                  >
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-xs font-mono text-indigo-500 bg-indigo-50 px-1.5 rounded">
                        {item.time}
                      </span>
                    </div>
                    <p className="text-sm text-slate-700 font-medium">{item.src}</p>
                    {targetLang && <p className="text-sm text-slate-500 mt-1">{item.trans}</p>}
                  </div>
                ))}
              </div>
              <div className="p-4 border-t border-slate-100 bg-slate-50">
                <button className="w-full border border-slate-300 bg-white text-slate-600 py-2 rounded-lg text-sm font-medium hover:bg-slate-50 transition-colors">
                  {t('editor.result.edit_btn')}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default EditorPage;
