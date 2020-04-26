import Skills from './Skills';
import { connect } from 'react-redux';
import { IState } from '../../types';

const mapSTP = (state: IState): Pick<IState, 'content'> => ({
  content: state.content.skills,
});

export default connect(mapSTP)(Skills);
