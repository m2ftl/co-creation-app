
export default function Insertidea(values)
  {
    console.log(values);
     // On submit of the form, send a POST request with the data to the server.
     return fetch('/createideanew', {
         method: 'POST',
         headers: {
           'Accept': 'application/json',
           'Content-Type': 'application/json'
          },
         body: JSON.stringify(values)
       })
       .then(response => response.json())
       .then(data => {
         if (data.result === "success") {
           console.log("toto");
           return true;// dispatch a success
         } else {
           console.warn(data);
           return false;
         }
       });
  }
