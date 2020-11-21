import { ActionTypes, OPEN_POPUP } from '../../types';

export const popupReducer = (popup = false, action: ActionTypes): boolean => {
  switch (action.type) {
    case OPEN_POPUP:
      return !popup;

    default:
      return popup;
  }
};
