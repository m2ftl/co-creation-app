import { createStore, combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form'

let reducers = combineReducers({
  form: formReducer
});

let store = createStore(reducers);
export default store;
