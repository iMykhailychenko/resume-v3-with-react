import { connect } from 'react-redux';

import { IState } from '../../../types';
import Contacts from './Contacts.component';

interface Props {
  content: {
    [key: string]: string;
  };
}

const mapSTP = (state: IState): Props => ({
  content: state.content.contacts,
});

export default connect(mapSTP)(Contacts);
