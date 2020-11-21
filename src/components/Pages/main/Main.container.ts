import { connect } from 'react-redux';

import { IState } from '../../../types';
import Main from './Main.component';

const mapSTP = (state: IState): Pick<IState, 'content'> => ({
  content: state.content.main,
});

export default connect(mapSTP)(Main);
