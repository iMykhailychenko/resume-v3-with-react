  
import { combineReducers } from 'redux';
import { themeReducer } from './theme/themeReducer';
import { menuReducer } from './menu/menuReducer';
import { localeReducer } from './locale/localeReducer';

const rootReducer = combineReducers({
  theme: themeReducer,
  menu: menuReducer,
  locale: localeReducer
});

export default rootReducer;