import { SWITCH_THEME, ActionTypes } from '../../types';

export const themeActions = (theme: string): ActionTypes => ({
  type: SWITCH_THEME,
  payload: theme,
});
