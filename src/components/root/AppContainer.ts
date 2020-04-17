  
import App from './App';
import { connect } from 'react-redux';
import { IState } from '../../types';

const mapSTP = (state: IState): IState => ({
  ...state,
});

export default connect(mapSTP)(App);