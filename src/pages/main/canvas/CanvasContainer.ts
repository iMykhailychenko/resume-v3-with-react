import Canvas from './Canvas.jsx';
import { connect } from 'react-redux';
import { IState } from '../../../types';

const mapSTP = (state: IState): Pick<IState, 'theme'> => ({
  theme: state.theme,
});

export default connect(mapSTP)(Canvas);