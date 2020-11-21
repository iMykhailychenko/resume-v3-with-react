import { connect } from 'react-redux';
import { Dispatch } from 'redux';

import { menu } from '../../../../../redux/menu/actions';
import { IState, Theme } from '../../../../../types';
import Menu from './Menu.component';

interface Props {
  menu: boolean;
  theme: Theme;
  content: string;
}

const mapSTP = (state: IState): Props => ({
  menu: state.menu,
  theme: state.theme as Theme,
  content: state.content.header.menu,
});

const mapDTP = (dispatch: Dispatch) => ({
  toggleMenu: (): void => {
    dispatch(menu());
  },
});

export default connect(mapSTP, mapDTP)(Menu);
