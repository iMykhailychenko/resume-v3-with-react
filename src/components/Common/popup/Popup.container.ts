import { connect } from 'react-redux';
import { Dispatch } from 'redux';

import { popup } from '../../../redux/popup/actions';
import { IState } from '../../../types';
import Popup from './Popup.component';

const mapSTP = (state: IState): Pick<IState, 'popup'> => ({
    popup: state.popup,
});

const mapDTP = (dispatch: Dispatch) => ({
    togglePopup: (): void => {
        dispatch(popup());
    },
});

export default connect(mapSTP, mapDTP)(Popup);
