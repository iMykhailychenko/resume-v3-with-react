import { connect } from 'react-redux';

import { popupActions } from '../../../redux/popup/actions';
import { Dispatch, IState } from '../../../types';
import Popup from './Popup.component';

const mapSTP = (state: IState): Pick<IState, 'popup'> => ({
  popup: state.popup,
});

const mapDTP = (dispatch: Dispatch) => ({
  togglePopup: (popup: boolean) => dispatch(popupActions(popup)),
});

export default connect(mapSTP, mapDTP)(Popup);
