
export default function Insertquestion(values,useruuid)
  {
    const input = {
      ...values,
      uuid: useruuid
    };
    console.log(input);
     // On submit of the form, send a POST request with the data to the server.
     return fetch('/createquestionnew', {
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
