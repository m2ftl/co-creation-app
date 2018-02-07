const express = require('express');
const port = process.env.PORT || 4000;
const app = express();
const path = require('path');
const PG = require('pg');
const bodyParser = require('body-parser');

app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies

app.use("/static", express.static(path.join(__dirname, "react-app/build/static")));

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*"); // Put an origin here, * means everything which is bad.
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept"); // Needed by ExpressJS
  next();
});

app.get("*", (request, result) => {
  result.sendFile(path.join(__dirname, "react-app/build/index.html"));
});

// Listen to POST requests to /users.
app.post('/createideanew', function(req, res) {
  console.log(req.body);
  const client = new PG.Client({
    connectionString: process.env.DATABASE_URL,
    ssl: true,
  });
  console.log(process.env.DATABASE_URL);
  client.connect();
  client.query("INSERT INTO ideas (id, title, description) VALUES (uuid_generate_v4(),$1,$2)", [req.body.title, req.body.description])
  .then(res => {
    client.end()})
  .catch(error => {
      console.warn(error);
  });
});

app.listen(port, function listening() {
  console.log("Listening on port ", port);
});
