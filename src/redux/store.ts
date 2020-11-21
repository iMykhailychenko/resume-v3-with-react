import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import setData from './middleware/setDataToStorage';
import rootReducer from './reducers';

const enhancer = applyMiddleware(setData);

const store = createStore(rootReducer, composeWithDevTools(enhancer));

export default store;
