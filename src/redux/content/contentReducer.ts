import { TOGGLE_LOCALE, ActionTypes } from '../../types';
import { getDataFromLocalStorage } from '../../helpers/storage';

import UA from '../../content/ua/content.json';
import RU from '../../content/ru/content.json';
import EN from '../../content/en/content.json';

const init = getDataFromLocalStorage('locale', 'UA')
const content: { [key: string]: {} } = { UA, RU, EN };

export const contentReducer = (
  locale: {} = content[init],
  action: ActionTypes,
): {} => {
  switch (action.type) {
    case TOGGLE_LOCALE:
      return content[action.payload];

    default:
      return locale;
  }
};
