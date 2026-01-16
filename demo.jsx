import React, { useState, useEffect } from 'react';
import {
  Upload, FileVideo, Globe, CheckCircle, Clock, Download, Play,
  Settings, AlertCircle, Zap, ChevronRight, X, LogIn, LayoutDashboard,
  Plus, Video, CreditCard, Search, Languages, ChevronDown
} from 'lucide-react';

// --- 多語系字典 (Mock) ---
const translations = {
  zh: {
    nav: { features: "功能特色", pricing: "定價方案", login: "登入", register: "免費註冊", dashboard: "儀表板", credits: "點數", logout: "登出" },
    hero: {
      tag: "全新升級：支援 30+ 多國語言翻譯",
      title_prefix: "讓您的影片內容",
      title_highlight: "跨越語言隔閡",
      desc: "結合 Gemini 強大語意分析，一鍵生成精準字幕並自動翻譯。讓您的內容輕鬆走向國際，觸及全球觀眾。",
      btn_start: "免費開始試用",
      btn_demo: "觀看翻譯演示"
    },
    compare: {
      title: "為什麼選擇 Alien AI？",
      subtitle: "精準翻譯，連結全球",
      bad_label: "一般字幕工具",
      bad_text: "這是一段很普通的字幕，可能有錯字且只有單一語言。",
      bad_list: ["語音識別率低", "僅支援單一語言", "無法理解專有名詞"],
      good_label: "Alien AI 多語系",
      good_text: "This is a subtitle with accurate translation. (這是一段精準翻譯的字幕)",
      good_list: ["Gemini 語意精準識別", "支援雙語字幕對照", "自動翻譯 30+ 語言"]
    },
    pricing: {
      title: "簡單透明的方案",
      free: { title: "免費體驗", price: "$0", unit: "/ 月", features: ["每月 5 分鐘額度", "匯出 SRT 字幕檔", "支援單一語言生成"] },
      pro: { title: "創作者版", price: "$499", unit: "/ 月", features: ["每月 60 分鐘額度", "AI 多國語言翻譯", "雙語字幕輸出"], badge: "最熱門" },
      studio: { title: "企業版", price: "$1,299", unit: "/ 月", features: ["每月 200 分鐘額度", "優先極速渲染", "專屬詞彙庫微調"] },
      btn_try: "註冊試用",
      btn_upgrade: "立即升級",
      btn_contact: "聯繫業務"
    },
    dashboard: {
      title: "我的專案",
      subtitle: "管理您所有的影片字幕專案",
      new_project: "建立新專案",
      stats: { videos: "本月製作影片", time: "節省翻譯時間", credits: "剩餘點數" },
      recent: "近期活動",
      table: { name: "專案名稱", status: "狀態", date: "建立時間", duration: "時長", action: "操作" },
      status: { done: "已完成", processing: "翻譯中", draft: "草稿" },
      btn_download: "下載",
      btn_wait: "等待中",
      btn_edit: "繼續編輯"
    },
    editor: {
      back: "回到儀表板",
      steps: { upload: "上傳與設定", processing: "AI 處理", result: "預覽下載" },
      upload: {
        drag_title: "拖放影片至此",
        drag_desc: "或點擊此處瀏覽檔案 (MP4, MOV)",
        change_file: "更換影片",
        settings_title: "生成設定",
        source_lang: "原始語言",
        target_lang: "翻譯目標語言 (選填)",
        target_placeholder: "不翻譯 (僅生成原文字幕)",
        style: "字幕風格",
        style_std: "標準清晰",
        style_film: "雙語對照",
        estimate: "預估消耗",
        btn_start: "開始生成",
        btn_upload_first: "請先上傳影片",
        notice: "上傳即代表您同意服務條款。AI 生成內容建議進行人工校對。"
      },
      processing: {
        title: "AI 正在翻譯中...",
        desc: "正在分析音軌、轉錄文字並進行多語系翻譯",
        steps: ["上傳至 n8n...", "Gemini 轉錄與翻譯...", "字幕合成中..."]
      },
      result: {
        title: "處理完成",
        info: "專案 ID: #829103 • 耗時 45秒",
        btn_new: "處理新影片",
        btn_download: "下載完整包 (MP4 + SRT)",
        video_overlay: "這就是多語系字幕的力量！\nThis is the power of multi-language subtitles!",
        list_title: "字幕預覽",
        list_badge: "雙語模式",
        edit_btn: "編輯字幕內容"
      }
    }
  },
  en: {
    nav: { features: "Features", pricing: "Pricing", login: "Log In", register: "Sign Up", dashboard: "Dashboard", credits: "Credits", logout: "Log Out" },
    hero: {
      tag: "New: Support for 30+ Languages Translation",
      title_prefix: "Make Your Video Content",
      title_highlight: "Break Language Barriers",
      desc: "Combine Gemini's powerful semantic analysis to generate accurate subtitles and automatic translations. Take your content global effortlessly.",
      btn_start: "Start for Free",
      btn_demo: "Watch Demo"
    },
    compare: {
      title: "Why Choose Alien AI?",
      subtitle: "Accurate Translation, Global Connection",
      bad_label: "Standard Tools",
      bad_text: "Ordinary subtitles with potential typos and single language only.",
      bad_list: ["Low accuracy", "Single language only", "No context understanding"],
      good_label: "Alien AI Global",
      good_text: "This is a subtitle with accurate translation. (Double subtitles support)",
      good_list: ["Gemini Semantic Accuracy", "Bilingual Subtitles", "Translate to 30+ Languages"]
    },
    pricing: {
      title: "Simple & Transparent Pricing",
      free: { title: "Free Trial", price: "$0", unit: "/ mo", features: ["5 mins credit / month", "Export SRT files", "Single language generation"] },
      pro: { title: "Creator", price: "$499", unit: "/ mo", features: ["60 mins credit / month", "AI Multi-language Translation", "Bilingual Output"], badge: "Popular" },
      studio: { title: "Enterprise", price: "$1,299", unit: "/ mo", features: ["200 mins credit / month", "Priority Rendering", "Custom Vocabulary"] },
      btn_try: "Try Now",
      btn_upgrade: "Upgrade Now",
      btn_contact: "Contact Sales"
    },
    dashboard: {
      title: "My Projects",
      subtitle: "Manage all your video subtitle projects",
      new_project: "New Project",
      stats: { videos: "Videos This Month", time: "Translation Time Saved", credits: "Credits Left" },
      recent: "Recent Activity",
      table: { name: "Project Name", status: "Status", date: "Date", duration: "Duration", action: "Action" },
      status: { done: "Completed", processing: "Translating", draft: "Draft" },
      btn_download: "Download",
      btn_wait: "Waiting",
      btn_edit: "Edit"
    },
    editor: {
      back: "Back to Dashboard",
      steps: { upload: "Upload & Config", processing: "AI Processing", result: "Preview" },
      upload: {
        drag_title: "Drag & Drop Video",
        drag_desc: "or click to browse (MP4, MOV)",
        change_file: "Change Video",
        settings_title: "Generation Settings",
        source_lang: "Source Language",
        target_lang: "Target Language (Optional)",
        target_placeholder: "No Translation (Original Only)",
        style: "Subtitle Style",
        style_std: "Standard",
        style_film: "Bilingual",
        estimate: "Estimated Cost",
        btn_start: "Start Generation",
        btn_upload_first: "Upload Video First",
        notice: "By uploading, you agree to our Terms. AI content should be reviewed."
      },
      processing: {
        title: "AI is Translating...",
        desc: "Analyzing audio, transcribing text, and performing multi-language translation",
        steps: ["Uploading to n8n...", "Gemini Transcribing...", "Synthesizing..."]
      },
      result: {
        title: "Processing Complete",
        info: "Project ID: #829103 • 45s elapsed",
        btn_new: "New Video",
        btn_download: "Download All (MP4 + SRT)",
        video_overlay: "This is the power of AI!\nAIの力はすごいです！",
        list_title: "Subtitle Preview",
        list_badge: "Bilingual",
        edit_btn: "Edit Subtitles"
      }
    }
  }
};

// --- 子組件：首頁 (Landing Page) ---
const LandingPage = ({ onStart, onLogin, lang, t }) => (
  <div className="animate-fade-in">
    {/* Hero Section */}
    <section className="relative overflow-hidden pt-16 pb-24 lg:pt-32">
      <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
        <div className="inline-flex items-center gap-2 bg-indigo-50 border border-indigo-100 text-indigo-700 px-4 py-1.5 rounded-full text-sm font-semibold mb-8">
          <Globe className="w-4 h-4" />
          {t.hero.tag}
        </div>
        <h1 className="text-5xl md:text-7xl font-extrabold text-slate-900 tracking-tight mb-6 leading-tight">
          {t.hero.title_prefix} <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-violet-600">{t.hero.title_highlight}</span>
        </h1>
        <p className="text-xl text-slate-600 max-w-2xl mx-auto mb-10 leading-relaxed">
          {t.hero.desc}
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <button onClick={onStart} className="px-8 py-4 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl font-bold text-lg shadow-lg shadow-indigo-200 transition-all hover:-translate-y-1">
            {t.hero.btn_start}
          </button>
          <button onClick={() => window.alert("Demo Video 彈窗")} className="px-8 py-4 bg-white border border-slate-200 hover:bg-slate-50 text-slate-700 rounded-xl font-bold text-lg flex items-center justify-center gap-2 transition-all">
            <Play className="w-5 h-5 fill-slate-700" />
            {t.hero.btn_demo}
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
          <h2 className="text-3xl font-bold text-slate-900 mb-4">{t.compare.title}</h2>
          <p className="text-slate-500">{t.compare.subtitle}</p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Bad Example */}
          <div className="bg-slate-100 rounded-2xl p-6 relative grayscale opacity-70">
            <div className="aspect-video bg-slate-300 rounded-lg flex items-center justify-center relative mb-4">
              <span className="text-slate-500 font-bold">{t.compare.bad_label}</span>
              <div className="absolute bottom-4 text-center w-full px-4">
                <p className="text-white text-sm bg-black/50 px-2">{t.compare.bad_text}</p>
              </div>
            </div>
            <div className="absolute -top-3 -left-3 bg-red-500 text-white px-4 py-1 rounded-full text-sm font-bold">Before</div>
            <ul className="space-y-2 text-slate-500 text-sm">
              {t.compare.bad_list.map((item, idx) => (
                <li key={idx} className="flex gap-2"><X className="w-4 h-4" /> {item}</li>
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
                  <p className="text-white text-lg font-bold">This is a subtitle with accurate translation.</p>
                  <p className="text-yellow-300 text-base font-medium mt-1">這是一段精準翻譯的字幕。</p>
                </div>
              </div>
            </div>
            <div className="absolute -top-3 -right-3 bg-green-500 text-white px-4 py-1 rounded-full text-sm font-bold shadow-lg">Alien AI Global</div>
            <ul className="space-y-2 text-slate-700 text-sm font-medium">
              {t.compare.good_list.map((item, idx) => (
                <li key={idx} className="flex gap-2 items-center"><CheckCircle className="w-4 h-4 text-green-500" /> {item}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>

    {/* Pricing Section */}
    <section className="py-20 bg-slate-50">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-slate-900 text-center mb-12">{t.pricing.title}</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {/* Free Plan */}
          <div className="bg-white p-8 rounded-2xl border border-slate-200 hover:border-indigo-300 transition-all">
            <h3 className="text-lg font-bold text-slate-900 mb-2">{t.pricing.free.title}</h3>
            <div className="text-3xl font-bold text-slate-900 mb-6">{t.pricing.free.price} <span className="text-base font-normal text-slate-500">{t.pricing.free.unit}</span></div>
            <ul className="space-y-4 mb-8 text-sm text-slate-600">
              {t.pricing.free.features.map((item, i) => (
                <li key={i} className="flex gap-2"><CheckCircle className="w-4 h-4 text-slate-400" /> {item}</li>
              ))}
            </ul>
            <button onClick={onLogin} className="w-full py-3 border border-slate-200 rounded-xl font-bold text-slate-600 hover:bg-slate-50 transition-colors">{t.pricing.btn_try}</button>
          </div>

          {/* Pro Plan */}
          <div className="bg-white p-8 rounded-2xl border-2 border-indigo-600 relative shadow-xl shadow-indigo-100">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-indigo-600 text-white px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide">{t.pricing.pro.badge}</div>
            <h3 className="text-lg font-bold text-slate-900 mb-2">{t.pricing.pro.title}</h3>
            <div className="text-3xl font-bold text-slate-900 mb-6">{t.pricing.pro.price} <span className="text-base font-normal text-slate-500">{t.pricing.pro.unit}</span></div>
            <ul className="space-y-4 mb-8 text-sm text-slate-600">
              {t.pricing.pro.features.map((item, i) => (
                <li key={i} className="flex gap-2"><CheckCircle className="w-4 h-4 text-indigo-500" /> {item}</li>
              ))}
            </ul>
            <button onClick={onLogin} className="w-full py-3 bg-indigo-600 text-white rounded-xl font-bold hover:bg-indigo-700 transition-colors shadow-lg shadow-indigo-200">{t.pricing.btn_upgrade}</button>
          </div>

          {/* Studio Plan */}
          <div className="bg-white p-8 rounded-2xl border border-slate-200 hover:border-indigo-300 transition-all">
            <h3 className="text-lg font-bold text-slate-900 mb-2">{t.pricing.studio.title}</h3>
            <div className="text-3xl font-bold text-slate-900 mb-6">{t.pricing.studio.price} <span className="text-base font-normal text-slate-500">{t.pricing.studio.unit}</span></div>
            <ul className="space-y-4 mb-8 text-sm text-slate-600">
              {t.pricing.studio.features.map((item, i) => (
                <li key={i} className="flex gap-2"><CheckCircle className="w-4 h-4 text-slate-400" /> {item}</li>
              ))}
            </ul>
            <button onClick={onLogin} className="w-full py-3 border border-slate-200 rounded-xl font-bold text-slate-600 hover:bg-slate-50 transition-colors">{t.pricing.btn_contact}</button>
          </div>
        </div>
      </div>
    </section>
  </div>
);

// --- 子組件：儀表板 (Dashboard) ---
const Dashboard = ({ onNewProject, t }) => (
  <div className="max-w-6xl mx-auto p-6 md:py-12 animate-fade-in">
    <div className="flex justify-between items-center mb-8">
      <div>
        <h2 className="text-2xl font-bold text-slate-900">{t.dashboard.title}</h2>
        <p className="text-slate-500 text-sm">{t.dashboard.subtitle}</p>
      </div>
      <button
        onClick={onNewProject}
        className="bg-indigo-600 hover:bg-indigo-700 text-white px-5 py-2.5 rounded-xl font-bold flex items-center gap-2 shadow-lg shadow-indigo-200 transition-transform active:scale-95"
      >
        <Plus className="w-5 h-5" />
        {t.dashboard.new_project}
      </button>
    </div>

    {/* Stats Cards */}
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
      <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm flex items-center gap-4">
        <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center">
          <Video className="w-6 h-6" />
        </div>
        <div>
          <div className="text-2xl font-bold text-slate-900">12</div>
          <div className="text-xs text-slate-500 font-medium uppercase">{t.dashboard.stats.videos}</div>
        </div>
      </div>
      <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm flex items-center gap-4">
        <div className="w-12 h-12 bg-indigo-50 text-indigo-600 rounded-xl flex items-center justify-center">
          <Clock className="w-6 h-6" />
        </div>
        <div>
          <div className="text-2xl font-bold text-slate-900">45m</div>
          <div className="text-xs text-slate-500 font-medium uppercase">{t.dashboard.stats.time}</div>
        </div>
      </div>
      <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm flex items-center gap-4">
        <div className="w-12 h-12 bg-amber-50 text-amber-600 rounded-xl flex items-center justify-center">
          <CreditCard className="w-6 h-6" />
        </div>
        <div>
          <div className="text-2xl font-bold text-slate-900">1,250</div>
          <div className="text-xs text-slate-500 font-medium uppercase">{t.dashboard.stats.credits}</div>
        </div>
      </div>
    </div>

    {/* Project List */}
    <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
      <div className="flex items-center justify-between px-6 py-4 border-b border-slate-100">
        <h3 className="font-bold text-slate-800">{t.dashboard.recent}</h3>
        <div className="flex gap-2">
          <button className="p-2 text-slate-400 hover:bg-slate-50 rounded-lg"><Search className="w-5 h-5" /></button>
        </div>
      </div>
      <table className="w-full text-left border-collapse">
        <thead className="bg-slate-50 text-slate-500 text-xs uppercase font-semibold">
          <tr>
            <th className="px-6 py-4">{t.dashboard.table.name}</th>
            <th className="px-6 py-4">{t.dashboard.table.status}</th>
            <th className="px-6 py-4">{t.dashboard.table.date}</th>
            <th className="px-6 py-4">{t.dashboard.table.duration}</th>
            <th className="px-6 py-4 text-right">{t.dashboard.table.action}</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-slate-100 text-sm">
          {/* Item 1 */}
          <tr className="hover:bg-slate-50 transition-colors group">
            <td className="px-6 py-4 font-medium text-slate-900 flex items-center gap-3">
              <div className="w-10 h-10 bg-slate-100 rounded-lg flex items-center justify-center text-slate-400">
                <FileVideo className="w-5 h-5" />
              </div>
              My_Vlog_Ep01.mp4
            </td>
            <td className="px-6 py-4">
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium bg-green-100 text-green-700">
                <div className="w-1.5 h-1.5 rounded-full bg-green-500"></div>
                {t.dashboard.status.done}
              </span>
            </td>
            <td className="px-6 py-4 text-slate-500">2023-10-24</td>
            <td className="px-6 py-4 text-slate-500">10:23</td>
            <td className="px-6 py-4 text-right">
              <button className="text-indigo-600 hover:text-indigo-800 font-medium text-xs border border-indigo-200 px-3 py-1.5 rounded-lg hover:bg-indigo-50 transition-colors">{t.dashboard.btn_download}</button>
            </td>
          </tr>
          {/* Item 2 */}
          <tr className="hover:bg-slate-50 transition-colors group">
            <td className="px-6 py-4 font-medium text-slate-900 flex items-center gap-3">
              <div className="w-10 h-10 bg-slate-100 rounded-lg flex items-center justify-center text-slate-400">
                <FileVideo className="w-5 h-5" />
              </div>
              Podcast_Interview_Cut.mov
            </td>
            <td className="px-6 py-4">
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-700 animate-pulse">
                <div className="w-1.5 h-1.5 rounded-full bg-blue-500"></div>
                {t.dashboard.status.processing}
              </span>
            </td>
            <td className="px-6 py-4 text-slate-500">剛剛</td>
            <td className="px-6 py-4 text-slate-500">05:12</td>
            <td className="px-6 py-4 text-right">
              <button className="text-slate-400 cursor-not-allowed font-medium text-xs px-3 py-1.5">{t.dashboard.btn_wait}</button>
            </td>
          </tr>
          {/* Item 3 */}
          <tr className="hover:bg-slate-50 transition-colors group">
            <td className="px-6 py-4 font-medium text-slate-900 flex items-center gap-3">
              <div className="w-10 h-10 bg-slate-100 rounded-lg flex items-center justify-center text-slate-400">
                <FileVideo className="w-5 h-5" />
              </div>
              Shorts_Demo.mp4
            </td>
            <td className="px-6 py-4">
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium bg-amber-100 text-amber-700">
                <div className="w-1.5 h-1.5 rounded-full bg-amber-500"></div>
                {t.dashboard.status.draft}
              </span>
            </td>
            <td className="px-6 py-4 text-slate-500">2023-10-20</td>
            <td className="px-6 py-4 text-slate-500">00:59</td>
            <td className="px-6 py-4 text-right">
              <button onClick={onNewProject} className="text-slate-600 hover:text-slate-900 font-medium text-xs border border-slate-200 px-3 py-1.5 rounded-lg hover:bg-slate-50 transition-colors">{t.dashboard.btn_edit}</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
);

// --- 子組件：編輯工作區 (Editor) ---
const EditorWorkspace = ({ onBack, t }) => {
  const [step, setStep] = useState('upload');
  const [file, setFile] = useState(null);
  const [progress, setProgress] = useState(0);
  // 新增翻譯語言設定
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

  return (
    <div className="max-w-5xl mx-auto p-6 md:py-12 animate-fade-in">
      <button onClick={onBack} className="mb-6 flex items-center text-slate-500 hover:text-indigo-600 text-sm font-medium transition-colors">
        <ChevronRight className="w-4 h-4 rotate-180 mr-1" /> {t.editor.back}
      </button>

      {/* Step Indicator */}
      <div className="mb-12 flex justify-center">
        <div className="flex items-center gap-4 text-sm font-medium">
          <div className={`flex items-center gap-2 ${step === 'upload' ? 'text-indigo-600' : 'text-slate-400'}`}>
            <div className={`w-6 h-6 rounded-full flex items-center justify-center border-2 ${step === 'upload' ? 'border-indigo-600 bg-indigo-50' : 'border-slate-300'}`}>1</div>
            {t.editor.steps.upload}
          </div>
          <div className="w-8 h-[2px] bg-slate-200"></div>
          <div className={`flex items-center gap-2 ${step === 'processing' ? 'text-indigo-600' : 'text-slate-400'}`}>
            <div className={`w-6 h-6 rounded-full flex items-center justify-center border-2 ${step === 'processing' ? 'border-indigo-600 bg-indigo-50' : 'border-slate-300'}`}>2</div>
            {t.editor.steps.processing}
          </div>
          <div className="w-8 h-[2px] bg-slate-200"></div>
          <div className={`flex items-center gap-2 ${step === 'result' ? 'text-indigo-600' : 'text-slate-400'}`}>
            <div className={`w-6 h-6 rounded-full flex items-center justify-center border-2 ${step === 'result' ? 'border-indigo-600 bg-indigo-50' : 'border-slate-300'}`}>3</div>
            {t.editor.steps.result}
          </div>
        </div>
      </div>

      {/* --- Step 1: Upload & Configuration --- */}
      {step === 'upload' && (
        <div className="flex flex-col lg:flex-row gap-8">
          <div className="flex-1 bg-white rounded-2xl shadow-sm border border-slate-200 p-8 flex flex-col items-center justify-center min-h-[400px] border-dashed border-2 border-slate-300 hover:border-indigo-400 hover:bg-indigo-50/30 transition-all cursor-pointer group relative"
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
                  onClick={(e) => { e.stopPropagation(); setFile(null); }}
                  className="mt-2 text-sm text-red-500 hover:text-red-700 font-medium px-4 py-2 hover:bg-red-50 rounded-lg transition-colors"
                >
                  {t.editor.upload.change_file}
                </button>
              </div>
            ) : (
              <>
                <div className="w-20 h-20 bg-indigo-50 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Upload className="w-10 h-10 text-indigo-600" />
                </div>
                <h2 className="text-2xl font-bold text-slate-800 mb-2">{t.editor.upload.drag_title}</h2>
                <p className="text-slate-500 mb-6">{t.editor.upload.drag_desc}</p>
                <span className="text-xs text-slate-400 bg-slate-100 px-3 py-1 rounded-full">Max 500MB</span>
              </>
            )}
          </div>

          <div className="w-full lg:w-[360px] flex flex-col gap-6">
            <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6">
              <h3 className="text-lg font-bold text-slate-800 mb-4 flex items-center gap-2">
                <Settings className="w-5 h-5 text-slate-400" />
                {t.editor.upload.settings_title}
              </h3>
              <div className="space-y-6">
                {/* 原始語言 */}
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">{t.editor.upload.source_lang}</label>
                  <select className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-2.5 text-sm outline-none focus:ring-2 focus:ring-indigo-500">
                    <option>繁體中文 (台灣)</option>
                    <option>English (US)</option>
                    <option>日本語</option>
                  </select>
                </div>

                {/* 目標翻譯語言 (新增) */}
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2 flex justify-between">
                    {t.editor.upload.target_lang}
                    <span className="text-indigo-600 text-xs font-bold bg-indigo-50 px-2 py-0.5 rounded">NEW</span>
                  </label>
                  <select
                    className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-2.5 text-sm outline-none focus:ring-2 focus:ring-indigo-500"
                    value={targetLang}
                    onChange={(e) => setTargetLang(e.target.value)}
                  >
                    <option value="">{t.editor.upload.target_placeholder}</option>
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
                  <label className="block text-sm font-medium text-slate-700 mb-2">{t.editor.upload.style}</label>
                  <div className="grid grid-cols-2 gap-3">
                    <button className="border-2 border-indigo-600 bg-indigo-50 text-indigo-700 px-3 py-2 rounded-lg text-sm font-medium text-center">{t.editor.upload.style_std}</button>
                    <button className="border border-slate-200 text-slate-600 px-3 py-2 rounded-lg text-sm font-medium text-center">{t.editor.upload.style_film}</button>
                  </div>
                </div>
              </div>
              <div className="mt-8">
                <div className="flex justify-between items-center text-sm mb-4">
                  <span className="text-slate-500">{t.editor.upload.estimate}</span>
                  {/* 翻譯會消耗更多點數 */}
                  <span className="font-bold text-slate-800">{targetLang ? '80' : '50'} {translations.zh.nav.credits}</span>
                </div>
                <button onClick={() => file && setStep('processing')} disabled={!file} className={`w-full py-3.5 rounded-xl font-bold flex items-center justify-center gap-2 transition-all transform active:scale-[0.98] ${file ? 'bg-indigo-600 hover:bg-indigo-700 text-white shadow-lg shadow-indigo-200' : 'bg-slate-200 text-slate-400 cursor-not-allowed'}`}>
                  {file ? t.editor.upload.btn_start : t.editor.upload.btn_upload_first} <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            <div className="bg-blue-50 border border-blue-100 rounded-xl p-4 flex gap-3">
              <AlertCircle className="w-5 h-5 text-blue-500 shrink-0" />
              <p className="text-xs text-blue-700 leading-relaxed">
                {t.editor.upload.notice}
              </p>
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
            <div className="absolute inset-0 flex items-center justify-center"><Globe className="w-10 h-10 text-indigo-500 animate-pulse" /></div>
          </div>
          <h2 className="text-2xl font-bold text-slate-800 mb-2">{t.editor.processing.title}</h2>
          <p className="text-slate-500 mb-8">{t.editor.processing.desc}</p>
          <div className="w-full bg-slate-100 rounded-full h-3 mb-4 overflow-hidden">
            <div className="bg-indigo-600 h-full rounded-full transition-all duration-300 ease-out" style={{ width: `${progress}%` }}></div>
          </div>
          <div className="flex justify-between text-xs text-slate-400 font-medium">
            {t.editor.processing.steps.map((s, i) => <span key={i}>{s}</span>)}
          </div>
        </div>
      )}

      {/* --- Step 3: Result --- */}
      {step === 'result' && (
        <div className="flex flex-col gap-6">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            <div>
              <h2 className="text-2xl font-bold text-slate-800 flex items-center gap-2"><CheckCircle className="w-6 h-6 text-green-500" /> {t.editor.result.title}</h2>
              <p className="text-slate-500 text-sm mt-1">{t.editor.result.info}</p>
            </div>
            <div className="flex gap-3">
              <button onClick={() => setStep('upload')} className="px-4 py-2 text-sm font-medium text-slate-600 hover:bg-slate-100 rounded-lg">{t.editor.result.btn_new}</button>
              <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-5 py-2 rounded-lg text-sm font-bold flex items-center gap-2 shadow-lg shadow-indigo-200"><Download className="w-4 h-4" /> {t.editor.result.btn_download}</button>
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
                        <p className="text-yellow-300 text-lg mt-1 font-medium">This is the power of multi-language subtitles!</p>
                      </>
                    ) : (
                      <p className="text-white text-xl font-bold">這就是 AI 精準字幕的力量！</p>
                    )}
                  </div>
                </div>

                <button className="w-16 h-16 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-all border border-white/50 z-20"><Play className="w-6 h-6 ml-1" fill="white" /></button>
              </div>
            </div>
            <div className="lg:w-1/3 bg-white rounded-xl shadow-sm border border-slate-200 flex flex-col overflow-hidden">
              <div className="p-4 border-b border-slate-100 flex justify-between items-center bg-slate-50">
                <h3 className="font-bold text-slate-700">{t.editor.result.list_title}</h3>
                {targetLang && <span className="text-xs bg-indigo-100 text-indigo-700 px-2 py-0.5 rounded font-medium">{t.editor.result.list_badge}</span>}
              </div>
              <div className="flex-1 overflow-y-auto p-2 space-y-2 custom-scrollbar">
                {/* Mock Subtitles */}
                {[
                  { time: "00:15", src: "各位觀眾大家好，歡迎來到今天的影片。", trans: "Hello everyone, welcome to today's video." },
                  { time: "00:23", src: "今天我們要來介紹如何使用 Alien AI。", trans: "Today we are going to introduce how to use Alien AI." },
                  { time: "00:42", src: "它不僅能生成字幕，還能自動翻譯。", trans: "It can not only generate subtitles but also translate automatically." },
                  { time: "01:05", src: "這將幫助你觸及全球的觀眾。", trans: "This will help you reach a global audience." },
                ].map((item, i) => (
                  <div key={i} className="p-3 rounded-lg hover:bg-slate-50 cursor-pointer border border-transparent hover:border-slate-200 transition-all">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-xs font-mono text-indigo-500 bg-indigo-50 px-1.5 rounded">{item.time}</span>
                    </div>
                    <p className="text-sm text-slate-700 font-medium">{item.src}</p>
                    {targetLang && <p className="text-sm text-slate-500 mt-1">{item.trans}</p>}
                  </div>
                ))}
              </div>
              <div className="p-4 border-t border-slate-100 bg-slate-50">
                <button className="w-full border border-slate-300 bg-white text-slate-600 py-2 rounded-lg text-sm font-medium hover:bg-slate-50 transition-colors">
                  {t.editor.result.edit_btn}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

// --- 主應用入口 (Main App) ---
const App = () => {
  // View State: landing, dashboard, editor
  const [currentView, setCurrentView] = useState('landing');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  // Language State: 'zh' or 'en'
  const [lang, setLang] = useState('zh');

  const t = translations[lang]; // 獲取當前語言的字典

  // 模擬登入
  const handleLogin = () => {
    setIsLoggedIn(true);
    setCurrentView('dashboard');
  };

  // 模擬登出
  const handleLogout = () => {
    setIsLoggedIn(false);
    setCurrentView('landing');
  };

  // 導航邏輯
  const renderView = () => {
    switch (currentView) {
      case 'landing':
        return <LandingPage onStart={() => setCurrentView('dashboard')} onLogin={handleLogin} lang={lang} t={t} />;
      case 'dashboard':
        return <Dashboard onNewProject={() => setCurrentView('editor')} t={t} />;
      case 'editor':
        return <EditorWorkspace onBack={() => setCurrentView('dashboard')} t={t} />;
      default:
        return <LandingPage onStart={() => setCurrentView('dashboard')} onLogin={handleLogin} lang={lang} t={t} />;
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-indigo-100">

      {/* --- Global Header --- */}
      <header className="bg-white/80 backdrop-blur-md border-b border-slate-200 px-6 py-4 flex justify-between items-center sticky top-0 z-50">
        <div className="flex items-center gap-2 cursor-pointer" onClick={() => setCurrentView('landing')}>
          <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center text-white font-bold shadow-md shadow-indigo-200">A</div>
          <span className="text-xl font-bold tracking-tight text-slate-800">Alien AI <span className="text-xs font-normal text-slate-500 ml-1">Translate Studio</span></span>
        </div>

        {/* Right Navigation */}
        <div className="flex items-center gap-4 md:gap-6">

          {/* Language Switcher */}
          <div className="flex items-center text-sm font-medium text-slate-600 bg-slate-100 rounded-lg p-1">
            <button
              onClick={() => setLang('zh')}
              className={`px-3 py-1 rounded-md transition-all ${lang === 'zh' ? 'bg-white text-indigo-600 shadow-sm' : 'hover:text-slate-900'}`}
            >
              繁體
            </button>
            <button
              onClick={() => setLang('en')}
              className={`px-3 py-1 rounded-md transition-all ${lang === 'en' ? 'bg-white text-indigo-600 shadow-sm' : 'hover:text-slate-900'}`}
            >
              English
            </button>
          </div>

          <div className="h-4 w-[1px] bg-slate-300 hidden md:block"></div>

          {!isLoggedIn ? (
            <>
              <button className="hidden md:block text-sm font-medium text-slate-600 hover:text-slate-900">{t.nav.features}</button>
              <button className="hidden md:block text-sm font-medium text-slate-600 hover:text-slate-900">{t.nav.pricing}</button>
              <button onClick={handleLogin} className="text-sm font-bold text-indigo-600 hover:text-indigo-700 px-4 py-2 hover:bg-indigo-50 rounded-lg transition-colors">{t.nav.login}</button>
              <button onClick={handleLogin} className="bg-slate-900 hover:bg-slate-800 text-white px-4 py-2 rounded-lg text-sm font-bold transition-all shadow-md">{t.nav.register}</button>
            </>
          ) : (
            <>
              <button
                onClick={() => setCurrentView('dashboard')}
                className={`hidden md:flex items-center gap-2 text-sm font-medium ${currentView === 'dashboard' ? 'text-indigo-600' : 'text-slate-500 hover:text-slate-800'}`}>
                <LayoutDashboard className="w-4 h-4" /> {t.nav.dashboard}
              </button>

              <div className="hidden md:flex flex-col items-end">
                <span className="text-[10px] text-slate-400 uppercase font-bold tracking-wider">{t.nav.credits}</span>
                <span className="text-sm font-bold text-indigo-600">1,250</span>
              </div>

              <div className="relative group">
                <button className="w-9 h-9 rounded-full bg-slate-200 overflow-hidden border-2 border-slate-100 focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
                  <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Felix" alt="User" />
                </button>
                {/* Dropdown Menu (Simple Mock) */}
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-xl shadow-xl border border-slate-100 p-2 hidden group-hover:block animate-fade-in-up origin-top-right">
                  <div className="px-3 py-2 border-b border-slate-50 mb-1">
                    <p className="text-sm font-bold text-slate-800">Felix Chen</p>
                    <p className="text-xs text-slate-500">Pro Plan</p>
                  </div>
                  <button onClick={handleLogout} className="w-full text-left px-3 py-2 text-sm text-red-500 hover:bg-red-50 rounded-lg">{t.nav.logout}</button>
                </div>
              </div>
            </>
          )}
        </div>
      </header>

      {/* --- Main Content Render --- */}
      <main>
        {renderView()}
      </main>

      {/* --- Simple Footer --- */}
      {currentView === 'landing' && (
        <footer className="bg-white border-t border-slate-200 py-12 px-6">
          <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 bg-slate-900 rounded-md flex items-center justify-center text-white font-bold text-xs">A</div>
              <span className="font-bold text-slate-900">Alien AI</span>
            </div>
            <p className="text-sm text-slate-500">© 2024 Alien AI Inc. All rights reserved.</p>
            <div className="flex gap-6 text-sm text-slate-500">
              <a href="#" className="hover:text-indigo-600">Privacy</a>
              <a href="#" className="hover:text-indigo-600">Terms</a>
              <a href="#" className="hover:text-indigo-600">Contact</a>
            </div>
          </div>
        </footer>
      )}
    </div>
  );
};

export default App;