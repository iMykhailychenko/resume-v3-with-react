import { getDataFromLocalStorage } from '../../services/helpers';
import { ActionTypes, SWITCH_THEME } from '../../types';

const init = getDataFromLocalStorage('theme', 'dark');

export const themeReducer = (theme: string = init, action: ActionTypes): string => {
  switch (action.type) {
    case SWITCH_THEME:
      const nextTheme = theme === 'light' ? 'dark' : 'light';
      return nextTheme;

    default:
      return theme;
  }
};
