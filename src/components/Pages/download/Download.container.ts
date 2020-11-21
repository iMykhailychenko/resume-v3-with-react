import { connect } from 'react-redux';

import { IState } from '../../../types';
import Download from './Download.component';

const mapSTP = (state: IState): Pick<IState, 'content'> => ({
  content: state.content.download,
});

export default connect(mapSTP)(Download);
