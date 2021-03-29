import { connect } from 'react-redux';

import { IState, Theme } from '../../../types';
import Salary from './Salary.component';

interface Props {
    theme: Theme;
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
    theme: state.theme as Theme,
    content: state.content.salary,
});

export default connect(mapSTP)(Salary);
