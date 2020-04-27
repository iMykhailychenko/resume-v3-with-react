import NotFound from './NotFound';
import { connect } from 'react-redux';
import { IState } from '../../types';

const mapSTP = (state: IState): Pick<IState, 'content'> => ({
  content: state.content.notFound,
});

export default connect(mapSTP)(NotFound);
