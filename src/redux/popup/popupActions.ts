import { OPEN_POPUP, ActionTypes } from '../../types';

export const popupActions = (popup: boolean): ActionTypes => ({
  type: OPEN_POPUP,
  payload: popup,
});
