import { ActionTypes, OPEN_POPUP } from '../../types';

export const popupActions = (popup: boolean): ActionTypes => ({
  type: OPEN_POPUP,
  payload: popup,
});
