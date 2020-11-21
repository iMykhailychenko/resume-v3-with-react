import { ActionTypes, TOGGLE_LOCALE } from '../../types';

export const contentActions = (locale: string): ActionTypes => ({
  type: TOGGLE_LOCALE,
  payload: locale,
});
