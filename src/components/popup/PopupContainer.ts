import Popup from './Popup';
import { connect } from 'react-redux';
import { popupActions } from '../../redux/popup/popupActions';
import { IState } from '../../types';

const mapSTP = (state: IState): Pick<IState, 'popup'> => ({
  popup: state.popup,
});

const mapDTP = (dispatch: any) => ({
  togglePopup: (popup: boolean) => dispatch(popupActions(popup)),
});

export default connect(mapSTP, mapDTP)(Popup);
