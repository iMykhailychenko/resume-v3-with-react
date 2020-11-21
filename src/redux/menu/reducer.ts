import { AnyAction } from 'redux';

import { TOGGLE_MENU } from '../../types';

const menu = (state = false, action: AnyAction): boolean => {
  switch (action.type) {
    case TOGGLE_MENU:
      return !state;

    default:
      return state;
  }
};

export default menu;
