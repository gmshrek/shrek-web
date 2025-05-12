export function getLangFromUrl(url?: string): string {
  if (typeof window !== 'undefined') {
    // Client-side
    const pathname = window.location.pathname;
    const segments = pathname.split('/').filter(Boolean);
    const lang = segments[0];
    console.log('Client-side language detection:', {
      fullUrl: window.location.href,
      pathname,
      segments,
      detectedLang: lang
    });
    return lang === 'zh' ? 'zh' : 'en';
  } else {
    // Server-side
    if (!url) {
      console.log('Server-side: No URL provided, defaulting to en');
      return 'en';
    }
    try {
      const parsedUrl = new URL(url);
      const pathname = parsedUrl.pathname;
      const segments = pathname.split('/').filter(Boolean);
      const lang = segments[0];
      console.log('Server-side language detection:', {
        fullUrl: url,
        pathname,
        segments,
        detectedLang: lang
      });
      return lang === 'zh' ? 'zh' : 'en';
    } catch (error) {
      console.error('Error parsing URL:', error);
      return 'en';
    }
  }
} 