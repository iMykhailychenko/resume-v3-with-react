import Locale from './Locale';
import { connect } from 'react-redux';
import { localeActions } from '../../../../redux/locale/localeActions';
import { IState } from '../../../../types';

const mapSTP = (state: IState): Pick<IState, 'locale'> => ({
  locale: state.locale,
});

const mapDTP = (dispatch: any) => ({
  toggleLocale: (locale: string) => dispatch(localeActions(locale)),
});

export default connect(mapSTP, mapDTP)(Locale);
