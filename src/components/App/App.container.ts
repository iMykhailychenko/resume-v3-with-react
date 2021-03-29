import { connect } from 'react-redux';

import { IState } from '../../types';
import App from './App.componet';

const mapSTP = (state: IState): Pick<IState, 'theme' | 'menu'> => ({
    theme: state.theme,
    menu: state.menu,
});

export default connect(mapSTP)(App);
