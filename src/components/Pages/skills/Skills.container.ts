import { connect } from 'react-redux';

import { IState } from '../../../types';
import Skills from './Skills.component';

const mapSTP = (state: IState): Pick<IState, 'content'> => ({
  content: state.content.skills,
});

export default connect(mapSTP)(Skills);
