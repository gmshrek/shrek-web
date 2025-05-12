import { getLangFromUrl } from '../i18n/utils';
import { products as enProducts } from './products.en';
import { products as zhProducts } from './products.zh';

export interface Product {
  id: string;
  name: string;
  tagline: string;
  description: string;
  icon: string;
  url: string;
  appStoreUrl: string;
  features: {
    title: string;
    description: string;
  }[];
}

export function getProducts(url?: string): Product[] {
  const lang = getLangFromUrl(url);
  return lang === 'zh' ? zhProducts : enProducts;
}

// 在服务器端渲染时，我们需要传入 URL
// 注意：这个默认导出可能不会在服务器端渲染时获得正确的 URL
// 建议在使用时直接调用 getProducts(url) 并传入当前页面的 URL
export const products = getProducts(); 