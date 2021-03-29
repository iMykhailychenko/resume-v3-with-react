import { AnyAction, applyMiddleware, createStore, Store } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { persistStore } from 'redux-persist';
import thunk from 'redux-thunk';

import { IState } from '../types';
import reducers from './reducers';

const enhancer =
    process.env.NODE_ENV === 'development' ? composeWithDevTools(applyMiddleware(thunk)) : applyMiddleware(thunk);

export const store: Store<IState, AnyAction> = createStore(reducers, enhancer);
export const persistor = persistStore(store);
