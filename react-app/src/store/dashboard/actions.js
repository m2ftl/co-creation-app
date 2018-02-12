export default function dashboardActions(dispatch){
  return {
      retrieveQuestionsCounter: (id) => {
        return fetch(`/viewquestionsallcounter/${id}`, {
            method: 'GET',
          })
          .then(response => response.json())
          .then(data => {
            dispatch({ type: "RETRIEVE_COUNTERQUESTIONS", data: data })
          });
      },
      retrieveTestsCounter: (id) => {
        return fetch(`/viewtestsallcounter/${id}`, {
            method: 'GET',
          })
          .then(response => response.json())
          .then(data => {
            dispatch({ type: "RETRIEVE_COUNTERTESTS", data: data })
          });
      }
  }
}
