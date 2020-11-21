import EN from '../../content/en/content.json';
import RU from '../../content/ru/content.json';
import UA from '../../content/ua/content.json';
import { getDataFromLocalStorage } from '../../services/helpers';
import { ActionTypes, TOGGLE_LOCALE } from '../../types';

const init = getDataFromLocalStorage('locale', 'UA');
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
