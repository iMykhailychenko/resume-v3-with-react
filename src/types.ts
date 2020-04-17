export const SWITCH_THEME = 'SWITCH_THEME';
export const TOGGLE_MENU = 'TOGGLE_MENU';

export interface IState {
  theme: string;
  menu: boolean;
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

export type ActionTypes = SwitchTheme | ToggleMenu;
