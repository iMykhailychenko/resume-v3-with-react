import { connect } from 'react-redux';

import { IState } from '../../../types';
import Education from './Education';

const mapSTP = (state: IState): Pick<IState, 'content'> => ({
  content: state.content.education,
});

export default connect(mapSTP)(Education);
