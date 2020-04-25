import FormComponent from './FormComponent';
import { connect } from 'react-redux';
import { IState } from '../../types';

const mapSTP = (state: IState): Pick<IState, 'content'> => ({
  content: state.content.form,
});

export default connect(mapSTP)(FormComponent);
