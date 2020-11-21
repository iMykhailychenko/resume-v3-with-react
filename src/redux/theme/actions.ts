import { AnyAction } from 'redux';

import { SWITCH_THEME } from '../../types';

export const theme = (): AnyAction => ({
  type: SWITCH_THEME,
});
