import { createStore, combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import profileReducer from "./profile/reducers";

let reducers = combineReducers({
  form: formReducer,
  profileReducer: profileReducer
});

let store = createStore(reducers);
export default store;
