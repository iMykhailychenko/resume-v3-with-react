import { EN, RU, UA } from './assets/content';

export const SWITCH_THEME = 'SWITCH_THEME';
export const TOGGLE_MENU = 'TOGGLE_MENU';
export const TOGGLE_LOCALE = 'TOGGLE_LOCALE';
export const OPEN_POPUP = 'OPEN_POPUP';

export type Content = typeof EN | typeof RU | typeof UA;
export type Locale = 'UA' | 'RU' | 'EN';
export type Theme = 'light' | 'dark';

export interface IState {
    theme: string;
    locale: string;
    menu: boolean;
    popup: boolean;
    content: Content;
}
