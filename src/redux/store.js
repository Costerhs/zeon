import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import newsReducer from './reducers/newsReducer';
import thunkMiddleware from 'redux-thunk';
import cartReducer from './reducers/cartReducer';
const reducer = combineReducers({
  news: newsReducer,
  cart: cartReducer,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer, composeEnhancers(applyMiddleware(thunkMiddleware)));
window.store = store;
export default store;
