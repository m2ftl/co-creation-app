export function profileActions(dispatch){
  return {
    createUser: (event) => dispatch({ type: "CREATE_USER"}),
    updateGender: (event) => dispatch({ type: "UPDATE_GENDER", gender: document.getElementById("Gender").options[document.getElementById("Gender").selectedIndex].value }),
    updateBirthdate: (event) => dispatch({ type: "UPDATE_BIRTHDATE", birthdate: event.target.value }),
    updatePhone: (event) => dispatch({ type: "UPDATE_PHONE", phone: event.target.value }),
    updateIndex: (event) => dispatch({ type: "UPDATE_INDEX", index: event.target.value }),
    updateLevel: (event) => dispatch({ type: "UPDATE_LEVEL", level: event.target.value }),
    updateRain: (event) => dispatch({ type: "UPDATE_RAIN"}),
    updateCold: (event) => dispatch({ type: "UPDATE_COLD"}),
    updateMild: (event) => dispatch({ type: "UPDATE_MILD"}),
    updateSunny: (event) => dispatch({ type: "UPDATE_SUNNY"}),
  }
}
