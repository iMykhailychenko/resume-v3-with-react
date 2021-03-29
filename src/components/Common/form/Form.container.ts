import { connect } from 'react-redux';

import { IState } from '../../../types';
import Form from './Form.component';

interface Props {
    content: { [key: string]: string };
}

const mapSTP = (state: IState): Props => ({
    content: state.content.form,
});

export default connect(mapSTP)(Form);
