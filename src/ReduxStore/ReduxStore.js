// import { createStore, applyMiddleware, compose } from 'redux';
// import thunk from 'redux-thunk';
// import rootReducer from './reducers/index';

// const middleware = [thunk];

// const composeEnhancers = process.env.NODE_ENV === 'development' ?  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : null || compose;
// //const composeEnhancers = compose;
// const store = createStore(rootReducer, composeEnhancers(
//     applyMiddleware(...middleware),
// ));

// export default store;


import { createStore } from 'redux';
import rootReducer from './reducers/index'; 
const store = createStore(rootReducer);

export default store;
