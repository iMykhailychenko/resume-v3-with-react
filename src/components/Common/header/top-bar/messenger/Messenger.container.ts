import { connect } from 'react-redux';

import { IState } from '../../../../types';
import LinkMessenger from './Messenger.component';

const mapSTP = (state: IState): Pick<IState, 'theme'> => ({
  theme: state.theme,
});

export default connect(mapSTP)(LinkMessenger);
