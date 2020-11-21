import { ActionTypes, TOGGLE_MENU } from '../../types';

export const menuReducer = (menu = false, action: ActionTypes): boolean => {
  switch (action.type) {
    case TOGGLE_MENU:
      return !menu;

    default:
      return menu;
  }
};
