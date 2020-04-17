import { TOGGLE_MENU, ActionTypes } from '../../types';

export const menuActions = (menu: boolean): ActionTypes => ({
  type: TOGGLE_MENU,
  payload: menu,
});
