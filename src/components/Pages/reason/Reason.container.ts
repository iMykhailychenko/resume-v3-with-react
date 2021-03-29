import { connect } from 'react-redux';

import { IState } from '../../../types';
import Reason from './Reason.component';

interface Props {
    content: {
        title: string;
        firstText: string[];
        secondText: string[];
        relink: string;
    };
}

const mapSTP = (state: IState): Props => ({
    content: state.content.reason,
});

export default connect(mapSTP)(Reason);
