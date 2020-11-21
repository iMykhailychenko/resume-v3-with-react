import { connect } from 'react-redux';

import { IState } from '../../../types';
import NotFound from './NotFound.component';

const mapSTP = (state: IState): Pick<IState, 'content'> => ({
  content: state.content.notFound,
});

export default connect(mapSTP)(NotFound);
