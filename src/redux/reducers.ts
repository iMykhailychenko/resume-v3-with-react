import { combineReducers } from 'redux';

import { contentReducer } from './content/contentReducer';
import { localeReducer } from './locale/localeReducer';
import { menuReducer } from './menu/menuReducer';
import { popupReducer } from './popup/popupReducer';
import { themeReducer } from './theme/themeReducer';

const rootReducer = combineReducers({
  theme: themeReducer,
  menu: menuReducer,
  locale: localeReducer,
  content: contentReducer,
  popup: popupReducer,
});

export default rootReducer;
