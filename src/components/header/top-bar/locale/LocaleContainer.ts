import Locale from './Locale';
import { connect } from 'react-redux';
import { localeActions } from '../../../../redux/locale/localeActions';
import { IState, Dispatch } from '../../../../types';

const mapSTP = (state: IState): Pick<IState, 'locale'> => ({
  locale: state.locale,
});

const mapDTP = (dispatch: Dispatch<string>) => ({
  toggleLocale: (locale: string) => dispatch(localeActions(locale)),
});

export default connect(mapSTP, mapDTP)(Locale);
