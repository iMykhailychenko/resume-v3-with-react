import { connect } from 'react-redux';

import { popupActions } from '../../redux/popup/popupActions';
import { Dispatch, IState } from '../../types';
import Popup from './Popup';

const mapSTP = (state: IState): Pick<IState, 'popup'> => ({
  popup: state.popup,
});

const mapDTP = (dispatch: Dispatch<boolean>) => ({
  togglePopup: (popup: boolean) => dispatch(popupActions(popup)),
});

export default connect(mapSTP, mapDTP)(Popup);
