import Salary from './Salary';
import { connect } from 'react-redux';
import { IState } from '../../types';

const mapSTP = (state: IState): Pick<IState, 'content'> => ({
  content: state.content.salary,
});

export default connect(mapSTP)(Salary);
