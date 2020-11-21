import { ActionTypes, SWITCH_THEME } from '../../types';

export const themeActions = (theme: string): ActionTypes => ({
  type: SWITCH_THEME,
  payload: theme,
});
