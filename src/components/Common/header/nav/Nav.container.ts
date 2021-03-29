import { connect } from 'react-redux';

import { IState } from '../../../../types';
import Nav from './Nav.component';

const mapSTP = (state: IState): Pick<IState, 'menu'> => ({
    menu: state.menu,
});

export default connect(mapSTP)(Nav);
