import { connect } from 'react-redux';

import { IState, Theme } from '../../../../../types';
import LinkMessenger from './Messenger.component';

const mapSTP = (state: IState): { theme: Theme } => ({
  theme: state.theme as Theme,
});

export default connect(mapSTP)(LinkMessenger);
