import { connect } from 'react-redux';

import { IState, Theme } from '../../../../types';
import Canvas from './Canvas.component';

const mapSTP = (state: IState): { theme: Theme } => ({
    theme: state.theme,
});

export default connect(mapSTP)(Canvas);
