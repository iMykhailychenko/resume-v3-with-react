import Navigation from './Navigation';
import { connect } from 'react-redux';
import { menuActions } from '../../../../redux/menu/menuActions';
import { IState } from '../../../../types';

const mapSTP = (state: IState): Pick<IState, 'menu' | 'content'> => ({
  menu: state.menu,
  content: state.content.header,
});

const mapDTP = (dispatch: any) => ({
  toggleMenu: (menu: boolean) => dispatch(menuActions(menu)),
});

export default connect(mapSTP, mapDTP)(Navigation);
