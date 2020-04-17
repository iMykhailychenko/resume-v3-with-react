import { SWITCH_THEME, ActionTypes } from '../../types';

export const themeReducer = (
  theme: string = 'dark',
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
