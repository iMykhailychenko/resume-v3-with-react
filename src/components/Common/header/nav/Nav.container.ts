import { connect } from 'react-redux';
import { Dispatch } from 'redux';

import { menu } from '../../../../redux/menu/actions';
import { IState, Theme } from '../../../../types';
import Nav from './Nav.component';

interface IProps {
    menu: boolean;
    theme: Theme;
}

const mapSTP = (state: IState): IProps => ({
    menu: state.menu,
    theme: state.theme,
});

const mapDTP = (dispatch: Dispatch) => ({
    toggleMenu: (): void => {
        dispatch(menu());
    },
});

export default connect(mapSTP, mapDTP)(Nav);
