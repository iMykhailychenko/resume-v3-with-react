import Nav from './Nav';
import { connect } from 'react-redux';
// import { themeActions } from '../../../redux/theme/themeActions';
import { IState } from '../../../types';

const mapSTP = (state: IState): Pick<IState, 'menu'> => ({
  menu: state.menu,
});

// const mapDTP = (dispatch: any) => ({
//   toggleTheme: (theme: string) => dispatch(themeActions(theme))
// });

export default connect(mapSTP)(Nav);