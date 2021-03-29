import { AnyAction } from 'redux';

import { OPEN_POPUP } from '../../types';

export const popup = (): AnyAction => ({
    type: OPEN_POPUP,
});
