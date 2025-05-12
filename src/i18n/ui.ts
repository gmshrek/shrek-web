export const languages = {
  en: 'English',
  zh: '中文',
};

export const defaultLang = 'en';

export const ui = {
  en: {
    'nav.home': 'Home',
    'nav.about': 'About',
    'nav.contact': 'Contact',
    'nav.products': 'Products',
    'nav.feedback': 'Feedback',
    'products.omnireader': 'OmniReader',
    'products.mouseboost': 'MouseBoost',
    'products.omnizip': 'OmniZip',
    'products.omniconverter': 'OmniConverter',
    'products.cognipdf': 'CogniPDF X',
    'products.textreader': 'TXT Reader',
    'footer.rights': 'All rights reserved.',
    'footer.privacy': 'Privacy Policy',
    'footer.terms': 'Terms of Service',
    'features.title': 'Why Choose Our Apps?',
    'features.macos.title': 'Focus on macOS Native Experience',
    'features.macos.description': 'Apps designed to feel right at home on your Mac.',
    'features.design.title': 'Clean & Efficient Design',
    'features.design.description': 'Intuitive interfaces that get out of your way.',
    'features.support.title': 'Continuous Updates & Support',
    'features.support.description': "We're committed to improving our apps and helping you.",
  },
  zh: {
    'nav.home': '首页',
    'nav.about': '关于',
    'nav.contact': '联系我们',
    'nav.products': '产品',
    'nav.feedback': '反馈',
    'products.omnireader': 'OmniReader',
    'products.mouseboost': 'MouseBoost',
    'products.omnizip': 'OmniZip',
    'products.omniconverter': 'OmniConverter',
    'products.cognipdf': 'CogniPDF X',
    'products.textreader': 'TXT Reader',
    'footer.rights': '保留所有权利。',
    'footer.privacy': '隐私政策',
    'footer.terms': '服务条款',
    'features.title': '为什么选择我们的应用？',
    'features.macos.title': '专注于 macOS 原生体验',
    'features.macos.description': '专为 Mac 设计的应用，让您感觉宾至如归。',
    'features.design.title': '简洁高效的设计',
    'features.design.description': '直观的界面，让您专注于工作。',
    'features.support.title': '持续更新与支持',
    'features.support.description': '我们致力于不断改进应用并为您提供帮助。',
  },
} as const;

export function getLangFromUrl(url: URL) {
  const [, lang] = url.pathname.split('/');
  if (lang in ui) return lang as keyof typeof ui;
  return defaultLang;
}

export function useTranslations(lang: keyof typeof ui) {
  return function t(key: keyof typeof ui[typeof defaultLang]) {
    return ui[lang][key] || ui[defaultLang][key];
  }
} 