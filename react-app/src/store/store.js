import { createStore, combineReducers} from 'redux';
import { reducer as formReducer } from 'redux-form';
import profileReducer from "./profile/reducers";
import googleUserReducer from "./user/reducer";
import ideasReducer from "./ideas/reducers";
import questionsReducer from "./questions/reducers";
import testsReducer from "./tests/reducers";
import dashboardReducer from "./dashboard/reducers";


let reducers = combineReducers({
  form: formReducer,
  profileReducer: profileReducer,
  googleUserReducer: googleUserReducer,
  ideasReducer: ideasReducer,
  questionsReducer: questionsReducer,
  testsReducer: testsReducer,
  dashboardReducer: dashboardReducer
});

export const store = createStore(reducers);
