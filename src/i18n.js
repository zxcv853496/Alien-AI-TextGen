import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

const resources = {
  zh: {
    translation: {
      nav: {
        features: '功能特色',
        login: '登入',
        register: '免費註冊',
        dashboard: '儀表板',
        credits: '點數',
        logout: '登出',
      },
      hero: {
        tag: '全新升級：支援 30+ 多國語言翻譯',
        title_prefix: '讓您的影片內容',
        title_highlight: '跨越語言隔閡',
        desc: '結合 Gemini 強大語意分析，一鍵生成精準字幕並自動翻譯。讓您的內容輕鬆走向國際，觸及全球觀眾。',
        btn_start: '免費開始試用',
        btn_demo: '觀看翻譯演示',
      },
      compare: {
        title: '為什麼選擇 Alien AI？',
        subtitle: '精準翻譯，連結全球',
        bad_label: '一般字幕工具',
        bad_text: '這是一段很普通的字幕，可能有錯字且只有單一語言。',
        bad_list_items: ['語音識別率低', '僅支援單一語言', '無法理解專有名詞'],
        good_label: 'Alien AI 多語系',
        good_text: 'This is a subtitle with accurate translation. (這是一段精準翻譯的字幕)',
        good_list_items: ['Gemini 語意精準識別', '支援雙語字幕對照', '自動翻譯 30+ 語言'],
      },
    },
  },
  en: {
    translation: {
      nav: {
        features: "Features",
        pricing: "Pricing",
        login: "Log In",
        register: "Get Started",
        dashboard: "Dashboard",
        logout: "Log Out",
        credits: "Credits",
      },
      hero: {
        title_prefix: "Transform your video content",
        title_highlight: "Break Language Barriers",
        desc: "Use advanced AI to generate accurate subtitles and translate to 30+ languages instantly. Reach a global audience with Alien AI.",
        btn_start: "Start for Free",
        btn_demo: "Watch Demo",
      },
      dashboard: {
        title: 'My Projects',
        subtitle: 'Manage all your video subtitle projects',
        new_project: 'New Project',
        stats: {
          videos: 'Videos This Month',
          time: 'Translation Time Saved',
          credits: 'Credits Left',
        },
        recent: 'Recent Activity',
        table: {
          name: 'Project Name',
          status: 'Status',
          date: 'Date',
          duration: 'Duration',
          action: 'Action',
        },
        status: { done: 'Completed', processing: 'Translating', draft: 'Draft' },
        btn_download: 'Download',
        btn_wait: 'Waiting',
        btn_edit: 'Edit',
      },
      editor: {
        back: 'Back to Dashboard',
        steps: { upload: 'Upload & Config', processing: 'AI Processing', result: 'Preview' },
        upload: {
          drag_title: 'Drag & Drop Video',
          drag_desc: 'or click to browse (MP4, MOV)',
          change_file: 'Change Video',
          settings_title: 'Generation Settings',
          source_lang: 'Source Language',
          target_lang: 'Target Language (Optional)',
          target_placeholder: 'No Translation (Original Only)',
          style: 'Subtitle Style',
          style_std: 'Standard',
          style_film: 'Bilingual',
          estimate: 'Estimated Cost',
          btn_start: 'Start Generation',
          btn_upload_first: 'Upload Video First',
          notice: 'By uploading, you agree to our Terms. AI content should be reviewed.',
        },
        processing: {
          title: 'AI is Translating...',
          desc: 'Analyzing audio, transcribing text, and performing multi-language translation',
          steps: ['Uploading to n8n...', 'Gemini Transcribing...', 'Synthesizing...'],
        },
        result: {
          title: 'Processing Complete',
          info: 'Project ID: #829103 • 45s elapsed',
          btn_new: 'New Video',
          btn_download: 'Download All (MP4 + SRT)',
          list_title: 'Subtitle Preview',
          list_badge: 'Bilingual',
          edit_btn: 'Edit Subtitles',
        },
      },
    },
  },
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'zh',
    interpolation: {
      escapeValue: false, // react already safes from xss
    },
  });

export default i18n;
