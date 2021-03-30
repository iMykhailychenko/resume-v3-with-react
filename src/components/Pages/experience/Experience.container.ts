import { connect } from 'react-redux';

import { IState } from '../../../types';
import Experience from './Experience.component';

interface Props {
    content: {
        title: string;
        secondTitle: string;
        textOne: string;
        textTwo: string;
        textThree: string;
        textFour: string;
        relink: string;
        slider: {
            link: string;
            company: string;
            title: string;
            responsibility: string;
            list: string[];
        }[];
    };
}

const mapSTP = (state: IState): Props => ({
    content: state.content.experience,
});

export default connect(mapSTP)(Experience);
