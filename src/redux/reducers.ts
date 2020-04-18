  
import { combineReducers } from 'redux';
import { themeReducer } from './theme/themeReducer';
import { menuReducer } from './menu/menuReducer';
import { localeReducer } from './locale/localeReducer';
import { popupReducer } from './popup/popupReducer';

const rootReducer = combineReducers({
  theme: themeReducer,
  menu: menuReducer,
  locale: localeReducer,
  popup: popupReducer
});

export default rootReducer;