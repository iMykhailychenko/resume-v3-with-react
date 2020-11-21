import { getDataFromLocalStorage } from '../../services/helpers';
import { ActionTypes, TOGGLE_LOCALE } from '../../types';

const init: string = getDataFromLocalStorage('locale', 'UA');

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
