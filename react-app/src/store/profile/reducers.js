let initialState={
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
}

export default function profileReducer(state=initialState, action){
  switch(action.type){
    case "UPDATE_FIRST_NAME":
      return{
        ...state,
        firstName:action.firstName
      }
    case "UPDATE_LAST_NAME":
      return{
        ...state,
        lastName:action.lastName
      }
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
    case "UPDATE_EMAIL":
      return{
        ...state,
        email:action.email
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
    console.log(state)
    return state
    default:
      return state;
  }
}
