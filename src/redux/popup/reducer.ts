import { AnyAction } from 'redux';

import { OPEN_POPUP } from '../../types';

const popup = (state = false, action: AnyAction): boolean => {
  switch (action.type) {
    case OPEN_POPUP:
      return !state;

    default:
      return state;
  }
};

export default popup;
