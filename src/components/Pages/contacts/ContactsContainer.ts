import { connect } from 'react-redux';

import { IState } from '../../../types';
import Contacts from './Contacts';

const mapSTP = (state: IState): Pick<IState, 'content'> => ({
  content: state.content.contacts,
});

export default connect(mapSTP)(Contacts);
