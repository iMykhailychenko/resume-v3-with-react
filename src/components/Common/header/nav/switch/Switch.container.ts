import { connect } from 'react-redux';

import { themeActions } from '../../../../redux/theme/themeActions';
import { Dispatch, IState } from '../../../../types';
import SwitchTheme from './Switch.component';

const mapSTP = (state: IState): Pick<IState, 'theme'> => ({
  theme: state.theme,
});

const mapDTP = (dispatch: Dispatch<string>) => ({
  toggleTheme: (theme: string) => dispatch(themeActions(theme)),
});

export default connect(mapSTP, mapDTP)(SwitchTheme);
