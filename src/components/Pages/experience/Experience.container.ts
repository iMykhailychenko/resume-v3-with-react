import { connect } from 'react-redux';

import { IState } from '../../../types';
import Experience from './Experience.component';

const mapSTP = (state: IState): Pick<IState, 'content'> => ({
  content: state.content.experience,
});

export default connect(mapSTP)(Experience);
