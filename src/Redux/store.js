import {createStore, compose, applyMiddleware} from 'redux';
import {thunk} from 'redux-thunk';

// const store = createStore(rootReducer)

import rootReducer from './reduxers';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
//window.store = store;


const store = createStore(rootReducer,  composeEnhancers(applyMiddleware(thunk)))
export default store;


// , window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()