import MenuBtn from './MenuBtn';
import { connect } from 'react-redux';
import { menuActions } from '../../../../redux/menu/menuActions';
import { IState } from '../../../../types';

const mapSTP = (state: IState): Pick<IState, 'menu'> => ({
  menu: state.menu,
});

const mapDTP = (dispatch: any) => ({
  toggleMenu: (menu: boolean) => dispatch(menuActions(menu)),
});

export default connect(mapSTP, mapDTP)(MenuBtn);
