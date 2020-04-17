import MenuBtn from './MenuBtn';
import { connect } from 'react-redux';
import { menuActions } from '../../../../redux/menu/menuActions';
import { IState } from '../../../../types';

const mapSTP = (state: IState): Pick<IState, 'menu' | 'theme'> => ({
  menu: state.menu,
  theme: state.theme,
});

const mapDTP = (dispatch: any) => ({
  toggleMenu: (menu: boolean) => dispatch(menuActions(menu)),
});

export default connect(mapSTP, mapDTP)(MenuBtn);
