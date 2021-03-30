import { connect } from 'react-redux';
import { Dispatch } from 'redux';

import content from '../../redux/content/actions';
import { IState, Locale } from '../../types';
import App from './App.componet';

interface IProps {
    theme: string;
    menu: boolean;
    locale: Locale;
}

const mapSTP = (state: IState): IProps => ({
    theme: state.theme,
    menu: state.menu,
    locale: state.locale,
});

const mapDTP = (dispatch: Dispatch) => ({
    toggleContent: (data: Locale): void => {
        dispatch(content(data));
    },
});

export default connect(mapSTP, mapDTP)(App);
