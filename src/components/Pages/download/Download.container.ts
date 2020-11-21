import { connect } from 'react-redux';

import { IState } from '../../../types';
import Download from './Download.component';

interface Props {
  content: {
    title: string;
    text: string;
    pdf: string;
    doc: string;
    btn: string;
    relink: string;
  };
}

const mapSTP = (state: IState): Props => ({
  content: state.content.download,
});

export default connect(mapSTP)(Download);
