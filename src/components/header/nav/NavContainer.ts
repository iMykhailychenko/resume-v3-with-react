import Nav from './Nav';
import { connect } from 'react-redux';
import { IState } from '../../../types';

const mapSTP = (state: IState): Pick<IState, 'menu'> => ({
  menu: state.menu,
});

export default connect(mapSTP)(Nav);
