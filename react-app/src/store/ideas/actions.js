export default function ideasActions(dispatch){
  return {
    retrieveIdeas: () => {
      return fetch('/viewideasall', {
          method: 'GET',
        })
        .then(response => response.json())
        .then(data => {
          dispatch({ type: "RETRIEVE_IDEAS", data: data })
        });
    },
    retrieveComments: (idea) => {
      return fetch(`/${idea}/comments`, {
          method: 'GET'
        })
        .then(response => response.json())
        .then(data => {
          dispatch({ type: "RETRIEVE_COMMENTS", data: data })
        });
    },
    resetComments: () => {
      return dispatch({ type: "RESET_COMMENTS" })
    },
    addComment: (comment, useruuid, idea_id) => {
      const input = {
        comment: comment,
        owner: useruuid,
        idea_id: idea_id
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
