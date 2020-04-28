export const SWITCH_THEME = 'SWITCH_THEME';
export const TOGGLE_MENU = 'TOGGLE_MENU';
export const TOGGLE_LOCALE = 'TOGGLE_LOCALE';
export const OPEN_POPUP = 'OPEN_POPUP';

export interface IState {
  theme: string;
  locale: string;
  menu: boolean;
  popup: boolean;
  content: any;
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

interface OpenPopup {
  type: typeof OPEN_POPUP;
  payload: boolean;
}

export type ActionTypes = SwitchTheme | ToggleMenu | ToggleLocale | OpenPopup;

export interface Dispatch<S> {
  <A extends ActionTypes>(action: A): A;
}
