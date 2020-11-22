import { connect } from 'react-redux';

import { IState } from '../../../types';
import Skills from './Skills.component';

interface Values {
  img: string;
  logoColor: string;
  title: string;
  text: string;
}

interface Props {
  content: {
    title: string;
    text: string[];
    end: string[];
    relink: string;
    list: {
      title: string;
      text: string;
      item: Values[];
    }[];
  };
}

const mapSTP = (state: IState): Props => ({
  content: state.content.skills,
});

export default connect(mapSTP)(Skills);
