import { createStore, combineReducers } from 'redux';
import httpListReducers from './reducers/httpList';
import httpListState from './states/httpList';

const allReducers = combineReducers({
  httpList: httpListReducers
})

const store = createStore(allReducers, {httpList:httpListState});

export default store;