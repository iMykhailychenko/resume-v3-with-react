import { connect } from 'react-redux';

import { IState } from '../../../types';
import Reason from './Reason';

const mapSTP = (state: IState): Pick<IState, 'content'> => ({
  content: state.content.reason,
});

export default connect(mapSTP)(Reason);
