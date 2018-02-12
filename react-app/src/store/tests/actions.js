export default function testsActions(dispatch){
  return {
    retrieveTests: () => {
      return fetch('/viewtestsall', {
          method: 'GET',
        })
        .then(response => response.json())
        .then(data => {
          dispatch({ type: "RETRIEVE_TESTS", data: data })
        });
    },
    archiveTest: (id) => {
      console.log(id);
      return fetch(`/archivetest/${id}`, {
          method: 'GET',
        })
    },
    addAnswerTest: (answer, useruuid, test_id) => {
      const input = {
        answer: answer,
        owner: useruuid,
        test_id: test_id
      }
      return fetch("/addanswertest", {
          method: 'POST',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(input)
        })
        .then(response => response.json())
        .then(data => {
          if (data.result === "success") {
            return true;
          } else {
            console.warn(data);
            return false;
          }
        });
    },
    retrieveAnswerstests: (test) => {
      return fetch(`/${test}/answerstests`, {
          method: 'GET'
        })
        .then(response => response.json())
        .then(data => {
          dispatch({ type: "RETRIEVE_ANSWERSTESTS", data: data })
        });
    },
  }
}
