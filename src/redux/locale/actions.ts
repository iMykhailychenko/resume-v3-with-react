import { AnyAction } from 'redux';

import { Locale, TOGGLE_LOCALE } from '../../types';

const locale = (data: Locale): AnyAction => ({
    type: TOGGLE_LOCALE,
    payload: data,
});

export default locale;
