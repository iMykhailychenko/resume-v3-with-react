import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from './reducers';
import setData from './middleware/setDataToStorage';

const enhancer = applyMiddleware(setData);

const store = createStore(rootReducer, composeWithDevTools(enhancer));

export default store;
