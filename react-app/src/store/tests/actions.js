export default function testsActions(dispatch){
  return {
    retrieveTests: () => {
      return fetch('/viewtestsall', {
          method: 'GET',
        })
        .then(response => response.json())
        .then(data => {
          console.log(data);
          dispatch({ type: "RETRIEVE_TESTS", data: data })
        });
    },
    addAnswer: (answer, useruuid, test_id) => {
      const input = {
        answer: answer,
        owner: useruuid,
        test_id: test_id
      }
      return fetch("/addanswer", {
          method: 'POST',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(input)
        })
        .then(response => response.json())
        .then(data => {
          console.log(data);
          if (data.result === "success") {
            return true;
          } else {
            console.warn(data);
            return false;
          }
        });
    }
  }
}
