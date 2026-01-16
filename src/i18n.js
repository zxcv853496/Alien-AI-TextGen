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
        features: 'Features',
        login: 'Log In',
        register: 'Sign Up',
        dashboard: 'Dashboard',
        credits: 'Credits',
        logout: 'Log Out',
      },
      hero: {
        tag: 'New: Support for 30+ Languages Translation',
        title_prefix: 'Make Your Video Content',
        title_highlight: 'Break Language Barriers',
        desc: "Combine Gemini's powerful semantic analysis to generate accurate subtitles and automatic translations. Take your content global effortlessly.",
        btn_start: 'Start for Free',
        btn_demo: 'Watch Demo',
      },
      compare: {
        title: 'Why Choose Alien AI?',
        subtitle: 'Accurate Translation, Global Connection',
        bad_label: 'Standard Tools',
        bad_text: 'Ordinary subtitles with potential typos and single language only.',
        bad_list_items: ['Low accuracy', 'Single language only', 'No context understanding'],
        good_label: 'Alien AI Global',
        good_text: 'This is a subtitle with accurate translation. (Double subtitles support)',
        good_list_items: [
          'Gemini Semantic Accuracy',
          'Bilingual Subtitles',
          'Translate to 30+ Languages',
        ],
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
