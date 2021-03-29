import { connect } from 'react-redux';
import { Dispatch } from 'redux';

import { menu } from '../../../../../redux/menu/actions';
import { IState } from '../../../../../types';
import Navigation from './Navigation.component';

interface Props {
    content: { [key: string]: string };
}

const mapSTP = (state: IState): Props => ({
    content: state.content.header,
});

const mapDTP = (dispatch: Dispatch) => ({
    toggleMenu: (): void => {
        dispatch(menu());
    },
});

export default connect(mapSTP, mapDTP)(Navigation);
