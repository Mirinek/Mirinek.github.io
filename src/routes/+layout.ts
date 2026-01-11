import { locale } from 'svelte-i18n';
import { browser } from '$app/environment';

export const prerender = true;
export const load = async () => {
    if (browser) {
        locale.set(window.navigator.language);
    }
    return {};
};