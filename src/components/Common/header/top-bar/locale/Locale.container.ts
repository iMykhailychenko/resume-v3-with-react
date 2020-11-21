import { connect } from 'react-redux';

import { localeActions } from '../../../../../redux/locale/actions';
import { Dispatch, IState } from '../../../../../types';
import Locale from './Locale.component';

const mapSTP = (state: IState): Pick<IState, 'locale'> => ({
  locale: state.locale,
});

const mapDTP = (dispatch: Dispatch) => ({
  toggleLocale: (locale: string) => dispatch(localeActions(locale)),
});

export default connect(mapSTP, mapDTP)(Locale);
