  
import { combineReducers } from 'redux';
import { themeReducer } from './theme/themeReducer';
import { menuReducer } from './menu/menuReducer';
import { localeReducer } from './locale/localeReducer';
import { popupReducer } from './popup/popupReducer';
import { contentReducer } from './content/contentReducer';

const rootReducer = combineReducers({
  theme: themeReducer,
  menu: menuReducer,
  locale: localeReducer,
  content: contentReducer,
  popup: popupReducer
});

export default rootReducer;