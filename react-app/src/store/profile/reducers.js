let initialState={
  uuid:"234f683a-773f-4127-931e-6d1e7463856d",
  id_user:"234f683a-773f-4127-931e-6d1e7463856d",
  firstName:"",
  lastName:"",
  gender:"",
  birthdate:"",
  email:"",
  phone:"",
  level:"",
  index:"",
  weather:{
    rain:false,
    cold:false,
    mild:false,
    sunny:false
  },
  id_google:"",
  completedProfile: false,
  loggedIn: false
}

export default function profileReducer(state=initialState, action){
  switch(action.type){
    case "LOGGED_IN":
      return {
        ...state,
        id_google: action.id,
        firstName: action.givenName,
        lastName: action.familyName,
        email: action.email,
        loggedIn: true,
      };
    case "UPDATE_GENDER":
      return{
        ...state,
        gender:action.gender
      }
    case "UPDATE_BIRTHDATE":
      return{
        ...state,
        birthdate:action.birthdate
      }
    case "UPDATE_PHONE":
      return{
        ...state,
        phone:action.phone
      }
    case "UPDATE_INDEX":
      return{
        ...state,
        index:action.index
      }
    case "UPDATE_LEVEL":
      return{
        ...state,
        level:action.level
      }
    case "UPDATE_RAIN":
      return{
        ...state,
        weather:{
          ...state.weather,
          rain: !state.weather.rain
        }
        }
    case "UPDATE_COLD":
      return{
        ...state,
        weather:{
          ...state.weather,
          cold: !state.weather.cold
        }
        }
    case "UPDATE_MILD":
      return{
        ...state,
        weather:{
          ...state.weather,
          mild: !state.weather.mild
        }
        }
    case "UPDATE_SUNNY":
      return{
        ...state,
        weather:{
          ...state.weather,
          sunny: !state.weather.sunny
        }
        }
    case "CREATE_USER":
    return{
      ...state,
      completedProfile: true
    };
    default:
      return state;
  }
}
