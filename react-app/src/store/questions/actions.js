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
    addComment: (comment, useruuid, question_id) => {
      const input = {
        comment: comment,
        owner: useruuid,
        question_id: question_id
      }
      return fetch("/addcomment", {
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
    }
  }
}
