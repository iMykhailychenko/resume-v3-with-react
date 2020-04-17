  
import { combineReducers } from 'redux';
import { themeReducer } from './theme/themeReducer';
import { menuReducer } from './menu/menuReducer';

const rootReducer = combineReducers({
  theme: themeReducer,
  menu: menuReducer,
});

export default rootReducer;