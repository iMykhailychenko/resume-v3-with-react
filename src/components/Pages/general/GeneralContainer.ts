import { connect } from 'react-redux';

import { IState } from '../../../types';
import General from './General';

const mapSTP = (state: IState): Pick<IState, 'content'> => ({
  content: state.content.general,
});

export default connect(mapSTP)(General);
