import { createStore, combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form'

let reducers = combineReducers({
  form: formReducer,
  profileReducer: profileReducer
});

let store = createStore(reducers);
export default store;
