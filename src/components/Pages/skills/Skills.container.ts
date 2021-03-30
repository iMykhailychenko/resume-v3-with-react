import { connect } from 'react-redux';

import { IState } from '../../../types';
import Skills, { IList } from './Skills.component';

interface Props {
    content: {
        title: string;
        text: string[];
        relink: string;
        search: string;
        empty: IList[];
        list: IList[];
    };
}

const mapSTP = (state: IState): Props => ({
    content: state.content.skills,
});

export default connect(mapSTP)(Skills);
