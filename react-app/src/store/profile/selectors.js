export const getUser= (state) => {
  return{
    user: {
      id_user: state.profileReducer.id_user,
      firstName:state.profileReducer.firstName,
      lastName:state.profileReducer.lastName,
      gender:state.profileReducer.gender,
      birthdate:state.profileReducer.birthdate,
      email:state.profileReducer.email,
      phone:state.profileReducer.phone,
      level:state.profileReducer.level,
      index:state.profileReducer.index,
      weather:state.profileReducer.weather,
      id_google:state.profileReducer.id_google,
      completedProfile:state.profileReducer.completedProfile,
      loggedIn:state.profileReducer.loggedIn
    }
  }
}
