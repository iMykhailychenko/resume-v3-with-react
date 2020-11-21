import { ActionTypes, TOGGLE_LOCALE } from '../../types';

export const localeActions = (locale: string): ActionTypes => ({
  type: TOGGLE_LOCALE,
  payload: locale,
});
