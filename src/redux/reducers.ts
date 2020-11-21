import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import content from './content/reducer';
import { encryptor } from './encryptor';
import locale from './locale/reducer';
import menu from './menu/reducer';
import popup from './popup/reducer';
import theme from './theme/reducer';

const config = {
  storage,
  key: 'resume',
  white: ['locale', 'theme', 'content'],
  transforms: [encryptor],
};

const rootReducer = combineReducers({
  content,
  locale,
  menu,
  popup,
  theme,
});

export default persistReducer(config, rootReducer);
