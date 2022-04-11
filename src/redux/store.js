import { combineReducers, createStore } from 'redux';
import newsReducer from './reducers/newsReducer';

const reducer = combineReducers({
  news: newsReducer,
});

let store = createStore(reducer);
window.store = store;
export default store;
