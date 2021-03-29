import { connect } from 'react-redux';

import { IState } from '../../../types';
import Education from './Education.component';

interface Props {
    content: {
        title: string;
        item: {
            title: string;
            text: string;
            background: string;
            color: string;
            translate: string;
            x: string;
            y: string;
        }[];
        relink: string;
    };
}

const mapSTP = (state: IState): Props => ({
    content: state.content.education,
});

export default connect(mapSTP)(Education);
