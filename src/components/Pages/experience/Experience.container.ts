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
    relink: string;
    slider: {
      linkt: string;
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
