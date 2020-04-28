import { SWITCH_THEME, ActionTypes } from '../../types';
import { getDataFromLocalStorage } from '../../helpers/storage';

const init = getDataFromLocalStorage('theme', 'dark');

export const themeReducer = (
  theme: string = init,
  action: ActionTypes,
): string => {
  switch (action.type) {
    case SWITCH_THEME:
      const nextTheme = theme === 'light' ? 'dark' : 'light';
      return nextTheme;

    default:
      return theme;
  }
};
