import { AnyAction } from 'redux';

import { Locale, TOGGLE_LOCALE } from '../../types';

const locale = (state: Locale = 'EN', action: AnyAction): Locale => {
    switch (action.type) {
        case TOGGLE_LOCALE:
            return action.payload;

        default:
            return state;
    }
};

export default locale;
