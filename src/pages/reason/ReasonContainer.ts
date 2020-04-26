import Reason from './Reason';
import { connect } from 'react-redux';
import { IState } from '../../types';

const mapSTP = (state: IState): Pick<IState, 'content'> => ({
  content: state.content.reason,
});

export default connect(mapSTP)(Reason);
