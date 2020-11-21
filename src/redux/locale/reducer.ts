import { AnyAction } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import { Locale, TOGGLE_LOCALE } from '../../types';
import { encryptor } from '../encryptor';

const locale = (satate: Locale = 'UA', action: AnyAction): Locale => {
  switch (action.type) {
    case TOGGLE_LOCALE:
      return action.payload;

    default:
      return satate;
  }
};

const localeConfig = {
  storage,
  key: 'locale',
  transforms: [encryptor],
};

export default persistReducer(localeConfig, locale);
