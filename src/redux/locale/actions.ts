import { AnyAction } from 'redux';

import { Locale, TOGGLE_LOCALE } from '../../types';

export const locale = (data: Locale): AnyAction => ({
    type: TOGGLE_LOCALE,
    payload: data,
});
