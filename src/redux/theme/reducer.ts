import { AnyAction } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import { SWITCH_THEME, Theme } from '../../types';
import { encryptor } from '../encryptor';

const theme = (state: Theme = 'light', action: AnyAction): Theme => {
  switch (action.type) {
    case SWITCH_THEME:
      return state === 'light' ? 'dark' : 'light';

    default:
      return state;
  }
};

const themeConfig = {
  storage,
  key: 'theme',
  transforms: [encryptor],
};

export default persistReducer(themeConfig, theme);
