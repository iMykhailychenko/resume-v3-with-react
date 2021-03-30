import { connect } from 'react-redux';

import { IState } from '../../../types';
import Main from './Main.component';

interface Props {
    content: {
        title: string;
        text: string;
        relink: string;
        downloadHere: string;
    };
}

const mapSTP = (state: IState): Props => ({
    content: state.content.main,
});

export default connect(mapSTP)(Main);
