import { connect } from 'react-redux';

import { menuActions } from '../../../../../redux/menu/actions';
import { Dispatch, IState } from '../../../../../types';
import MenuBtn from './Menu.component';

const mapSTP = (state: IState): Pick<IState, 'menu' | 'theme' | 'content'> => ({
  menu: state.menu,
  theme: state.theme,
  content: state.content.header.menu,
});

const mapDTP = (dispatch: Dispatch) => ({
  toggleMenu: (menu: boolean) => dispatch(menuActions(menu)),
});

export default connect(mapSTP, mapDTP)(MenuBtn);
