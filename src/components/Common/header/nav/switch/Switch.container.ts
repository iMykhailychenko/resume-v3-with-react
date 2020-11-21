import { connect } from 'react-redux';
import { Dispatch } from 'redux';

import { theme } from '../../../../../redux/theme/actions';
import { IState } from '../../../../../types';
import SwitchTheme from './Switch.component';

const mapSTP = (state: IState): Pick<IState, 'theme'> => ({
  theme: state.theme,
});

const mapDTP = (dispatch: Dispatch) => ({
  toggleTheme: (): void => {
    dispatch(theme());
  },
});

export default connect(mapSTP, mapDTP)(SwitchTheme);
