import { setDataToLocalStorage } from '../../services/helpers';
import { ActionTypes, SWITCH_THEME, TOGGLE_LOCALE } from '../../types';

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
