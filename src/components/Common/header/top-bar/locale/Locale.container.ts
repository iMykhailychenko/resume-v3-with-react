import { connect } from 'react-redux';
import { Dispatch } from 'redux';

import { locale } from '../../../../../redux/locale/actions';
import { IState, Locale } from '../../../../../types';
import LocaleComponent from './Locale.component';

const mapSTP = (state: IState): { locale: Locale } => ({
    locale: state.locale as Locale,
});

const mapDTP = (dispatch: Dispatch) => ({
    toggleLocale: (data: Locale): void => {
        dispatch(locale(data));
    },
});

export default connect(mapSTP, mapDTP)(LocaleComponent);
