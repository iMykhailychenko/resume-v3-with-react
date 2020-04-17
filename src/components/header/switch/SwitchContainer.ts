import SwitchTheme from './SwitchTheme';
import { connect } from 'react-redux';
import { themeActions } from '../../../redux/theme/themeActions';
import { IState } from '../../../types';

const mapSTP = (state: IState): Pick<IState, 'theme'> => ({
  theme: state.theme,
});

const mapDTP = (dispatch: any) => ({
  toggleTheme: (theme: string) => dispatch(themeActions(theme))
});

export default connect(mapSTP, mapDTP)(SwitchTheme);