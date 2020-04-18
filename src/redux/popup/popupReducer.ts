import { OPEN_POPUP, ActionTypes } from '../../types';

export const popupReducer = (
  popup: boolean = false,
  action: ActionTypes,
): boolean => {
  switch (action.type) {
    case OPEN_POPUP:
      return !popup;

    default:
      return popup;
  }
};
