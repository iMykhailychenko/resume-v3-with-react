import { TOGGLE_LOCALE, ActionTypes } from '../../types';
import UA from '../../content/ua/content.json';
import RU from '../../content/ru/content.json';

const content: { [key: string]: {} } = { UA, RU };

export const contentReducer = (
  locale: {} = content.UA,
  action: ActionTypes,
): {} => {
  switch (action.type) {
    case TOGGLE_LOCALE:
      return content[action.payload];

    default:
      return locale;
  }
};
