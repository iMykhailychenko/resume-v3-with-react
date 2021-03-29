import { connect } from 'react-redux';

import { IState } from '../../../types';
import General from './General.component';

interface Props {
    content: {
        title: string;
        tablet: string[][];
        text: string;
        relink: string;
    };
}

const mapSTP = (state: IState): Props => ({
    content: state.content.general,
});

export default connect(mapSTP)(General);
