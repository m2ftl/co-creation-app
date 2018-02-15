export default function questionsActions(dispatch){
  return {
    retrieveQuestions: (id) => {
      return fetch(`/viewquestionsall/${id}`, {
          method: 'GET',
        })
        .then(response => response.json())
        .then(data => {
          console.log(data);
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
      return fetch(`/archivequestion/${id}`, {
      method: 'GET',
      })
      .then(response => response.json())
      .then(data => {
        if (data.data === "success") {
          return true;
        } else {
          console.warn(data);
          return false;
        }
      });
    },
    reOpenQuestion: (id) => {
      return fetch(`/reopenquestion/${id}`, {
      method: 'GET',
      })
      .then(response => response.json())
      .then(data => {
        if (data.data === "success") {
          return true;
        } else {
          console.warn(data);
          return false;
        }
      });
    },
    retrieveQuestionsAdmin: () => {
      return fetch('/viewquestionsalladmin', {
          method: 'GET',
        })
        .then(response => response.json())
        .then(data => {
          dispatch({ type: "RETRIEVE_QUESTIONS", data: data })
        });
    },
    retrieveTopics: (question) => {
      return fetch(`/${question}/topics`, {
          method: 'GET'
        })
        .then(response => response.json())
        .then(data => {
          dispatch({ type: "RETRIEVE_TOPICS", data: data })
        });
    },
    resetTopics: () => {
      return dispatch({ type: "RESET_TOPICS" })
    },
    Inserteditquestion: (title,description,id) =>
      {
        const input = {
          title:title,
          description:description,
          id: id
        };
         return fetch('/editquestion', {
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
      },
      Inserteditquestiontopics: (topic,id) =>
        {
          const input = {
            topic:topic,
            id: id
          };
           return fetch('/editquestiontopics', {
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
