import { ActionTypes, TOGGLE_MENU } from '../../types';

export const menuActions = (menu: boolean): ActionTypes => ({
  type: TOGGLE_MENU,
  payload: menu,
});
