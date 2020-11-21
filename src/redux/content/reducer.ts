import { AnyAction } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import { EN, RU, UA } from '../../assets/content';
import { Content, Locale, TOGGLE_LOCALE } from '../../types';
import { encryptor } from '../encryptor';

const translate = { UA, RU, EN };

const content = (state: Content = UA, action: AnyAction): Content => {
  switch (action.type) {
    case TOGGLE_LOCALE:
      return translate[action.payload as Locale];

    default:
      return state;
  }
};

const contentConfig = {
  storage,
  key: 'content',
  transforms: [encryptor],
};

export default persistReducer(contentConfig, content);
