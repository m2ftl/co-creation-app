const express = require('express');
const PORT = process.env.port || 4000;
const app = express();

app.use("/static", express.static(path.join(__dirname, "react-app/build/static")));

app.get("*", (request, result) => {
  result.sendFile(path.join(__dirname, "react-app/build/index.html"));
});

app.listen(PORT, function listening() {
  console.log("Listening on port ", server.address().port);
});
