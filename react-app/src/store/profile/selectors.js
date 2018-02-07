export function getUser(state){
  return{
    user: state.profileReducer,
  }
}

// attributs of user:
// {
//   firstName:"",
//   lastName:"",
//   gender:"",
//   birthdate:"",
//   email:"",
//   phone:"",
//   level:"",
//   index:"",
//   weather:{
//     rain:false,
//     cold:false,
//     mild:false,
//     sunny:false
//   },
// }
