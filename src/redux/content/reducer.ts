import { AnyAction } from 'redux';

import { EN, RU, UA } from '../../assets/content';
import { Content, Locale, TOGGLE_LOCALE } from '../../types';

const translate = { UA, RU, EN };

const content = (state: Content = UA, action: AnyAction): Content => {
  switch (action.type) {
    case TOGGLE_LOCALE:
      return translate[action.payload as Locale];

    default:
      return state;
  }
};

export default content;
