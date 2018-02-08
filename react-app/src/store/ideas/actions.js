export default function ideasActions(dispatch){
  return {
    retrieveIdeas: () => {
      console.log("function launched");
      return fetch('/viewideasall', {
          method: 'GET',
        })
        .then(response => response.json())
        .then(data => {
          dispatch({ type: "RETRIEVE_IDEAS", data: data })
        });
    }
  }
}
