import { connect } from 'react-redux';

import { IState } from '../../../types';
import NotFound from './NotFound.component';

interface Props {
    content: {
        title: string;
        text: string;
        relink: string;
    };
}

const mapSTP = (state: IState): Props => ({
    content: state.content.notFound,
});

export default connect(mapSTP)(NotFound);
