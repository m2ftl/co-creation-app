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
      return fetch(`/archivetest/${id}`, {
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
    retrieveTestsadmin: () => {
      console.log("tata");
      return fetch('/viewtestsalladmin', {
          method: 'GET',
        })
        .then(response => response.json())
        .then(data => {
          console.log(data);
          dispatch({ type: "RETRIEVE_TESTS", data: data })
        });
    },
    reOpentest: (id) => {
      console.log(id);
      return fetch(`/reopentest/${id}`, {
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
    Insertedittest: (title,description,picture,question,id) =>
      {
        const input = {
          title:title,
          description:description,
          picture:picture,
          question:question,
          id: id
        };

         return fetch('/edittest', {
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
    retrieveTestsCounter: (id) => {
      return fetch(`/viewtestsallcounter/${id}`, {
          method: 'GET',
        })
        .then(response => response.json())
        .then(data => {
          console.log(data);
          dispatch({ type: "RETRIEVE_COUNTERTESTS", data: data })
        });
    }
  }
}
