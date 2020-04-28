import { TOGGLE_LOCALE, ActionTypes } from '../../types';
import { getDataFromLocalStorage } from '../../helpers/storage';

const init = getDataFromLocalStorage('locale', 'UA')

export const localeReducer = (
  locale: string = init,
  action: ActionTypes,
): string => {
  switch (action.type) {
    case TOGGLE_LOCALE:
      return action.payload;

    default:
      return locale;
  }
};
