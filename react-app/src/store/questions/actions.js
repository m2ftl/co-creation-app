export default function questionsActions(dispatch){
  return {
    retrieveQuestions: () => {
      return fetch('/viewquestionsall', {
          method: 'GET',
        })
        .then(response => response.json())
        .then(data => {
          dispatch({ type: "RETRIEVE_QUESTIONS", data: data })
        });
    },
    addanswerquestion: (answer, useruuid, question_id) => {
      const input = {
        answer: answer,
        owner: useruuid,
        question_id: question_id
      }
      return fetch("/addanswerquestion", {
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
    retrieveAnswers: (question) => {
      return fetch(`/${question}/answers`, {
          method: 'GET'
        })
        .then(response => response.json())
        .then(data => {
          dispatch({ type: "RETRIEVE_ANSWERS", data: data })
        });
    },
    resetAnswers: () => {
      return dispatch({ type: "RESET_ANSWERS" })
    },
    archiveQuestion: (id) => {
      return fetch(`/archivetest/${id}`, {
      method: 'GET',
      })
    }
  }
}
