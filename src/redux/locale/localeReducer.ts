import { TOGGLE_LOCALE, ActionTypes } from '../../types';

export const localeReducer = (
  locale: string = 'UA',
  action: ActionTypes,
): string => {
  switch (action.type) {
    case TOGGLE_LOCALE:
      return action.payload;

    default:
      return locale;
  }
};
