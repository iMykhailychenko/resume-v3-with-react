import { connect } from 'react-redux';

import { popupActions } from '../../redux/popup/popupActions';
import { Dispatch, IState } from '../../types';
import Footer from './Footer.component';

const mapSTP = (state: IState): Pick<IState, 'popup' | 'content'> => ({
  popup: state.popup,
  content: state.content.footer,
});

const mapDTP = (dispatch: Dispatch<boolean>) => ({
  openPopup: (popup: boolean) => dispatch(popupActions(popup)),
});

export default connect(mapSTP, mapDTP)(Footer);
