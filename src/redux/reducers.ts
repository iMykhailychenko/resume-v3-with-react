import { combineReducers } from 'redux';

import content from './content/reducer';
import locale from './locale/reducer';
import menu from './menu/reducer';
import popup from './popup/reducer';
import theme from './theme/reducer';

const rootReducer = combineReducers({
  content,
  locale,
  menu,
  popup,
  theme,
});

export default rootReducer;
