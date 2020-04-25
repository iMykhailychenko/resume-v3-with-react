import { TOGGLE_LOCALE, ActionTypes } from '../../types';

export const contentActions = (locale: string): ActionTypes => ({
  type: TOGGLE_LOCALE,
  payload: locale,
});
