import { AnyAction } from 'redux';

import { Locale, TOGGLE_LOCALE } from '../../types';

const locale = (satate: Locale = 'EN', action: AnyAction): Locale => {
  switch (action.type) {
    case TOGGLE_LOCALE:
      return action.payload;

    default:
      return satate;
  }
};

export default locale;
