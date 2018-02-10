export function profileActions(dispatch) {
  return {
    createUser: user => {
      return fetch("/api/profile/create", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          firstName: user.firstName,
          lastName: user.lastName,
          email: user.email,
          birthdate: user.birthdate,
          gender: user.gender,
          phone: user.phone,
          level: user.level,
          index: user.index,
          weather: user.weather,
          id_google: user.id_google
        })
      })
        .then(res => res.json())
        .then(data => {
          dispatch({ type: "CREATE_USER", id_user: data.id_user });
        })
        .catch(e => console.warn(e));
    },
    updateGender: event =>
      dispatch({
        type: "UPDATE_GENDER",
        gender: document.getElementById("Gender").options[
          document.getElementById("Gender").selectedIndex
        ].value
      }),
    updateBirthdate: event =>
      dispatch({ type: "UPDATE_BIRTHDATE", birthdate: event.target.value }),
    updatePhone: event =>
      dispatch({ type: "UPDATE_PHONE", phone: event.target.value }),
    updateIndex: event =>
      dispatch({ type: "UPDATE_INDEX", index: event.target.value }),
    updateLevel: event =>
      dispatch({ type: "UPDATE_LEVEL", level: event.target.value }),
    updateRain: () => dispatch({ type: "UPDATE_RAIN" }),
    updateCold: () => dispatch({ type: "UPDATE_COLD" }),
    updateMild: () => dispatch({ type: "UPDATE_MILD" }),
    updateSunny: () => dispatch({ type: "UPDATE_SUNNY" }),
    checkUser: (id_google) => {
      return fetch(`/${id_google}/checkuser`, {
          method: 'GET',
        })
        .then(response => response.json())
        .then(data => {
          if (data!=="no_user_in_DB") {
          localStorage.setItem("id_user",data);
          dispatch({ type: "USER_EXISTS" })
          return true
          }
          else {
          dispatch({ type: "USER_NOTEXISTS" })
          return false
          }
        });
    },
    retrieveUsers: () => {
      return fetch('/viewusersall', {
          method: 'GET',
        })
        .then(response => response.json())
        .then(data => {
          dispatch({ type: "RETRIEVE_USERS", data: data })
        });
    }
  };
}
