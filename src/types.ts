export const SWITCH_THEME = 'SWITCH_THEME';
export const TOGGLE_MENU = 'TOGGLE_MENU';
export const TOGGLE_LOCALE = 'TOGGLE_LOCALE';

export interface IState {
  theme: string;
  menu: boolean;
  locale: string;
}

// Action types
interface SwitchTheme {
  type: typeof SWITCH_THEME;
  payload: string;
}

interface ToggleMenu {
  type: typeof TOGGLE_MENU;
  payload: boolean;
}

interface ToggleLocale {
  type: typeof TOGGLE_LOCALE;
  payload: string;
}

export type ActionTypes = SwitchTheme | ToggleMenu | ToggleLocale;
