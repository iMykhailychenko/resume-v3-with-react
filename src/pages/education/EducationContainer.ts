import Education from './Education';
import { connect } from 'react-redux';
import { IState } from '../../types';

const mapSTP = (state: IState): Pick<IState, 'content'> => ({
  content: state.content.education,
});

export default connect(mapSTP)(Education);
