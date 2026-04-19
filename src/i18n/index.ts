import ee from './ee.json';
import en from './en.json';
import ru from './ru.json';

export type Lang = 'ee' | 'en' | 'ru';

export const LANGS: Lang[] = ['ee', 'en', 'ru'];

export const LANG_LABELS: Record<Lang, string> = {
  ee: 'EST',
  en: 'ENG',
  ru: 'РУС',
};

export const HTML_LANG: Record<Lang, string> = {
  ee: 'et',
  en: 'en',
  ru: 'ru',
};

const locales: Record<Lang, unknown> = { ee, en, ru };

function lookup(lang: Lang, key: string): unknown {
  let value: unknown = locales[lang];
  for (const part of key.split('.')) {
    if (value && typeof value === 'object' && part in (value as Record<string, unknown>)) {
      value = (value as Record<string, unknown>)[part];
    } else {
      return undefined;
    }
  }
  return value;
}

export function t(lang: Lang, key: string): string {
  const v = lookup(lang, key);
  if (typeof v === 'string') return v;
  const fallback = lookup('ee', key);
  return typeof fallback === 'string' ? fallback : key;
}

export function tArray(lang: Lang, key: string): string[] {
  const v = lookup(lang, key);
  if (Array.isArray(v)) return v as string[];
  const fallback = lookup('ee', key);
  return Array.isArray(fallback) ? (fallback as string[]) : [];
}

export function langPath(lang: Lang, page: 'index' | 'more_info' = 'index'): string {
  const prefix = lang === 'ee' ? '' : `/${lang}`;
  return page === 'index' ? `${prefix}/` : `${prefix}/${page}.html`;
}
