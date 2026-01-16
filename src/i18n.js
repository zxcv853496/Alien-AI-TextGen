import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

const resources = {
  zh: {
    translation: {
      nav: {
        features: '功能特色',
        pricing: '價格方案',
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
  ja: {
    translation: {
      nav: {
        features: '機能',
        pricing: '料金',
        login: 'ログイン',
        register: '登録',
        dashboard: 'ダッシュボード',
        credits: 'クレジット',
        logout: 'ログアウト',
      },
      hero: {
        title_prefix: '動画コンテンツを',
        title_highlight: '言葉の壁を越えて',
        desc: '高度なAI分析を使用して、正確な字幕を生成し、30以上の言語に瞬時に翻訳します。Alien AIで世界中の視聴者にリーチしましょう。',
        btn_start: '無料で始める',
        btn_demo: 'デモを見る',
      },
      dashboard: {
        title: 'マイプロジェクト',
        subtitle: 'すべての動画字幕プロジェクトを管理',
        new_project: '新規プロジェクト',
        stats: { videos: '今月の動画', time: '節約時間', credits: '残クレジット' },
        recent: '最近のアクティビティ',
        table: { name: 'プロジェクト名', status: 'ステータス', date: '日付', duration: '期間', action: '操作' },
        status: { done: '完了', processing: '処理中', draft: '下書き' },
        btn_download: 'ダウンロード',
        btn_wait: '待機中',
        btn_edit: '編集',
      },
    },
  },
  ko: {
    translation: {
      nav: {
        features: '기능',
        pricing: '가격',
        login: '로그인',
        register: '가입하기',
        dashboard: '대시보드',
        credits: '크레딧',
        logout: '로그아웃',
      },
      hero: {
        title_prefix: '영상 콘텐츠의',
        title_highlight: '언어 장벽을 넘어',
        desc: '고급 AI 분석을 사용하여 정확한 자막을 생성하고 30개 이상의 언어로 즉시 번역하세요. Alien AI로 전 세계 시청자에게 다가가세요.',
        btn_start: '무료로 시작하기',
        btn_demo: '데모 보기',
      },
      dashboard: {
        title: '내 프로젝트',
        subtitle: '모든 동영상 자막 프로젝트 관리',
        new_project: '새 프로젝트',
        stats: { videos: '이번 달 동영상', time: '절약된 시간', credits: '남은 크레딧' },
        recent: '최근 활동',
        table: { name: '프로젝트 이름', status: '상태', date: '날짜', duration: '재생 시간', action: '작업' },
        status: { done: '완료', processing: '처리 중', draft: '초안' },
        btn_download: '다운로드',
        btn_wait: '대기 중',
        btn_edit: '편집',
      },
    },
  },
  es: {
    translation: {
      nav: {
        features: 'Funciones',
        pricing: 'Precios',
        login: 'Acceso',
        register: 'Registro',
        dashboard: 'Panel',
        credits: 'Créditos',
        logout: 'Salir',
      },
      hero: {
        title_prefix: 'Transforma tu contenido',
        title_highlight: 'Rompe barreras',
        desc: 'Usa IA avanzada para generar subtítulos precisos y traducir a más de 30 idiomas al instante. Llega a una audiencia global con Alien AI.',
        btn_start: 'Empezar gratis',
        btn_demo: 'Ver demo',
      },
      dashboard: {
        title: 'Mis Proyectos',
        subtitle: 'Gestiona todos tus proyectos de subtítulos',
        new_project: 'Nuevo Proyecto',
        stats: { videos: 'Videos este mes', time: 'Tiempo ahorrado', credits: 'Créditos' },
        recent: 'Actividad reciente',
        table: { name: 'Proyecto', status: 'Estado', date: 'Fecha', duration: 'Duración', action: 'Acción' },
        status: { done: 'Completado', processing: 'Procesando', draft: 'Borrador' },
        btn_download: 'Descargar',
        btn_wait: 'Esperando',
        btn_edit: 'Editar',
      },
    },
  },
  fr: {
    translation: {
      nav: {
        features: 'Fonctionnalités',
        pricing: 'Tarifs',
        login: 'Connexion',
        register: "S'inscrire",
        dashboard: 'Tableau de bord',
        credits: 'Crédits',
        logout: 'Déconnexion',
      },
      hero: {
        title_prefix: 'Transformez vos vidéos',
        title_highlight: 'Brisez les barrières',
        desc: 'Utilisez une IA avancée pour générer des sous-titres précis et traduire instantanément dans plus de 30 langues. Touchez un public mondial.',
        btn_start: 'Commencer gratuitement',
        btn_demo: 'Voir la démo',
      },
      dashboard: {
        title: 'Mes Projets',
        subtitle: 'Gérez tous vos projets de sous-titrage',
        new_project: 'Nouveau Projet',
        stats: { videos: 'Vidéos ce mois', time: 'Temps économisé', credits: 'Crédits restants' },
        recent: 'Activité récente',
        table: { name: 'Nom du projet', status: 'Statut', date: 'Date', duration: 'Durée', action: 'Action' },
        status: { done: 'Terminé', processing: 'Traitement', draft: 'Brouillon' },
        btn_download: 'Télécharger',
        btn_wait: 'Attente',
        btn_edit: 'Éditer',
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
