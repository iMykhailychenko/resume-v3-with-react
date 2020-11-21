import { AnyAction } from 'redux';

import { TOGGLE_MENU } from '../../types';

export const menu = (): AnyAction => ({
  type: TOGGLE_MENU,
});
