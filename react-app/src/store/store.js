import { createStore, combineReducers} from 'redux';
import { reducer as formReducer } from 'redux-form';
import profileReducer from "./profile/reducers";
import googleUserReducer from "./user/reducer";
import {getUser} from "./profile/selectors";
import {getUserState} from "./user/selectors";



let reducers = combineReducers({
  form: formReducer,
  profileReducer: profileReducer,
  googleUserReducer: googleUserReducer
});

export const store = createStore(reducers);
