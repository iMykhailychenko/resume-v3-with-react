import { connect } from 'react-redux';

import { IState } from '../../../../types';
import Canvas from './Canvas.component';

const mapSTP = (state: IState): Pick<IState, 'theme'> => ({
    theme: state.theme,
});

export default connect(mapSTP)(Canvas);
