import App from './App';
import { connect } from 'react-redux';
import { IState } from '../../types';

const mapSTP = (state: IState): Pick<IState, 'theme' | 'menu'> => ({
  theme: state.theme,
  menu: state.menu,
});

export default connect(mapSTP)(App);
