import { TOGGLE_LOCALE, ActionTypes } from '../../types';

export const localeActions = (locale: string): ActionTypes => ({
  type: TOGGLE_LOCALE,
  payload: locale,
});
