import { createStore, combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import profileReducer from "./profile/reducers";
import googleUserReducer from "./user/reducer";

let reducers = combineReducers({
  form: formReducer,
  profileReducer: profileReducer,
  googleUserReducer: googleUserReducer
});

let store = createStore(reducers);
export default store;
