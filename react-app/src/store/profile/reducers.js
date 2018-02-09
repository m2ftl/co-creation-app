
const userid = localStorage.getItem("id_user")
  ? localStorage.getItem("id_user"): "";

let initialState={
  id_user: userid,
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
  completedProfile: null,
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
    localStorage.setItem("id_user", action.id_user);
    return{
      ...state,
      completedProfile: true,
      id_user: action.id_user,
    }
    case "USER_EXISTS":
    return{
      ...state,
      completedProfile: true
    }
    case "USER_NOTEXISTS":
    return{
      ...state,
      completedProfile: false
    }
    default:
      return state;
  }
}
