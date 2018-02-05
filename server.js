const express = require('express');
const port = process.env.PORT || 4000;
const app = express();
const path = require('path');

app.use("/static", express.static(path.join(__dirname, "react-app/build/static")));

app.get("*", (request, result) => {
  result.sendFile(path.join(__dirname, "react-app/build/index.html"));
});

app.listen(port, function listening() {
  console.log("Listening on port ", port);
});
