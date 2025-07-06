import { register, init, locale, waitLocale } from 'svelte-i18n';

const defaultLocale = 'cs';

register('en', () => import('./locales/en.json'));
register('cs', () => import('./locales/cs.json'));

init({
	fallbackLocale: defaultLocale,
	initialLocale: defaultLocale,
});

export { locale, waitLocale };