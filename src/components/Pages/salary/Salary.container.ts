import { connect } from 'react-redux';

import { IState } from '../../../types';
import Salary from './Salary.component';

interface Props {
  content: {
    title: string;
    text: string[];
    sale: string;
    before: string;
    now: string;
    graphText: string;
    captionOne: string;
    captionTwo: string;
    endText: string;
    relink: string;
  };
}

const mapSTP = (state: IState): Props => ({
  content: state.content.salary,
});

export default connect(mapSTP)(Salary);
