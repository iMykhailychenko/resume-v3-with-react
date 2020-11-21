import { connect } from 'react-redux';

import { IState } from '../../../types';
import Salary from './Salary.component';

const mapSTP = (state: IState): Pick<IState, 'content'> => ({
  content: state.content.salary,
});

export default connect(mapSTP)(Salary);
