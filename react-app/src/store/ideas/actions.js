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
    retrieveIdeasByLikes: () => {
      return fetch('/viewideasallbylikes', {
          method: 'GET',
        })
        .then(response => response.json())
        .then(data => {
          dispatch({ type: "RETRIEVE_IDEAS_BY_LIKES", data: data })
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
    },
    like: (idea_id, owner_id) => {
      return fetch("/api/like/add", {
          method: 'POST',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            idea_id: idea_id,
            owner_id: owner_id
          })
        })
        .then(response => response.json())
        .then(data => {
          if (data.result === "success") {
            console.log("like added");
          } else {
            console.warn(data);
          }
        });
    },
    countLikes: (idea_id) => {
      return fetch(`/api/idea/${idea_id}/like/count`, {
          method: 'GET'
        })
        .then(res => {
          return res.json();
          })
        .catch(e=>console.warn(e))
    },
    authorizeLike: (idea_id, owner_id) => {
      return fetch(`/api/idea/${idea_id}/${owner_id}/like/authorize`, {
          method: 'GET'
        })
        .then(response => response.json())
        .then(data => data)
        .catch(e => console.warn(e))
      },
      Inserteditidea: (title,description,id) =>
        {
          const input = {
            title:title,
            description:description,
            id: id
          };

           return fetch('/editidea', {
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
                 return true;// dispatch a success
               } else {
                 console.warn(data);
                 return false;
               }
             });
      }
  }
}
