import { TOGGLE_MENU, ActionTypes } from '../../types';

export const menuReducer = (
  menu: boolean = false,
  action: ActionTypes,
): boolean => {
  switch (action.type) {
    case TOGGLE_MENU:
      return !menu;

    default:
      return menu;
  }
};
