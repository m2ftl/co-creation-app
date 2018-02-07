
export default function Insertidea(values)
  {
    console.log(values);
     // On submit of the form, send a POST request with the data to the server.
     fetch('/createideanew', {
         method: 'POST',
         headers: {
           'Accept': 'application/json',
           'Content-Type': 'application/json'
          },
         body: JSON.stringify(values)
       })
  }
