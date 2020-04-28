import { TOGGLE_LOCALE, SWITCH_THEME, ActionTypes } from '../../types';
import { setDataToLocalStorage } from '../../helpers/storage';

const setData = (store: any) => (next: (action: ActionTypes) => any) => (
  action: ActionTypes,
) => {
  next(action);

  switch (action.type) {
    case TOGGLE_LOCALE:
      setDataToLocalStorage('locale', action.payload);
      break;

    case SWITCH_THEME:
      const theme = action.payload === 'light' ? 'dark' : 'light';
      setDataToLocalStorage('theme', theme);
      break;
  }
};

export default setData;
