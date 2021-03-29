import { AnyAction } from 'redux';

import { SWITCH_THEME, Theme } from '../../types';

const theme = (state: Theme = 'dark', action: AnyAction): Theme => {
    switch (action.type) {
        case SWITCH_THEME:
            return state === 'light' ? 'dark' : 'light';

        default:
            return state;
    }
};

export default theme;
