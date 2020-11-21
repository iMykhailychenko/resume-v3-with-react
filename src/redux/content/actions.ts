import { AnyAction } from 'redux';

import { Locale, TOGGLE_LOCALE } from '../../types';

const content = (data: Locale): AnyAction => ({
  type: TOGGLE_LOCALE,
  payload: data,
});

export default content;
