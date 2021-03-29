import { connect } from 'react-redux';
import { Dispatch } from 'redux';

import { popup } from '../../../redux/popup/actions';
import { IState } from '../../../types';
import Footer from './Footer.component';

interface Props {
    content: {
        text: string;
        btn: string;
    };
}

const mapSTP = (state: IState): Props => ({
    content: state.content.footer,
});

const mapDTP = (dispatch: Dispatch) => ({
    openPopup: (): void => {
        dispatch(popup());
    },
});

export default connect(mapSTP, mapDTP)(Footer);
