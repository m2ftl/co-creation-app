const express = require('express');
const port = process.env.PORT || 4000;
const app = express();
const path = require('path');
const PG = require('pg');
const bodyParser = require('body-parser');

if (!process.env.DATABASE_URL) {
  console.error("environment variables not sourced");
  exit();
}

app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies

app.use("/static", express.static(path.join(__dirname, "react-app/build/static")));

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*"); // Put an origin here, * means everything which is bad.
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept"); // Needed by ExpressJS
  next();
});

// Listen to POST requests.

// new profile

app.post('/api/profile/create',function(req,res) {
  const client = new PG.Client({
    connectionString: process.env.DATABASE_URL,
    ssl: true,
  });
  client.connect();
  client.query("INSERT INTO users (id,first_name,last_name,email,birthdate,gender,phone,is_admin,player_index,id_google) VALUES (uuid_generate_v4(),$1,$2,$3,$4,$5,$6,false,$7,$8) RETURNING id",
  [req.body.firstName,req.body.lastName,req.body.email,req.body.birthdate,req.body.gender,req.body.phone,req.body.index,req.body.id_google])
  .then(resSQL => {
    res.json({result:"Profile created successfully ! Welcome !", id_user:resSQL.rows[0].id});
    client.end();
  })
  .catch(e => {
    res.send({result:"Oups something wrong "})
    console.warn(e);
    });
});

app.get('/api/profile/:id',function(req,res) {
  const client = new PG.Client({
    connectionString: process.env.DATABASE_URL,
    ssl: true,
  });
  client.connect();
  client.query("SELECT id FROM users WHERE id=$1",
  [req.params.id])
  .then(resSQL => {
    res.send({result:"Good"});
    client.end();
  })
  .catch(e => {
    res.send({result:"Oups something wrong "})
    console.warn(e);
    });
});


// new idea

app.post('/createideanew', function(req, res) {
  const client = new PG.Client({
    connectionString: process.env.DATABASE_URL,
    ssl: true,
  });
  client.connect();
  client.query("INSERT INTO ideas (id, title, description,status,date,id_owner) VALUES (uuid_generate_v4(),$1,$2,'open',Now(),$3)", [req.body.title, req.body.description,req.body.uuid])
  .then(res1 => {
    res.send({result:"success"})
    client.end()})
  .catch(error => {
    res.send({result:"failed"})
    console.warn(error);
  });
});


// new idea

app.post('/createquestionnew', function(req, res) {
  const client = new PG.Client({
    connectionString: process.env.DATABASE_URL,
    ssl: true,
  });

  const top = Object.keys(req.body.topic).filter(key => req.body.topic[key]===true );

  client.connect();
  client.query("INSERT INTO questions (id, title, description,status,date,id_owner) VALUES (uuid_generate_v4(),$1,$2,'open',Now(),$3) RETURNING *", [req.body.title, req.body.description,req.body.uuid],
  function(error, res1){
    if(error){
      console.warn(error);
      res.send({result:"failed"});
    } else {
    top.forEach(function(element) {
      client.query("INSERT INTO question_topic (id_question, topic) VALUES ($1,$2)", [res1.rows[0].id,element],function(error, res1){
        if(error)
          { console.warn(error);
            res.send({result:"failed"})}
      })
    })}
    res.send({result:"success"});
  })
});

app.post('/createtestnew', function(req, res) {
  const client = new PG.Client({
    connectionString: process.env.DATABASE_URL,
    ssl: true,
  });
  client.connect();
  client.query("INSERT INTO tests (id, title, description,status,date,id_owner,question) VALUES (uuid_generate_v4(),$1,$2,'open',Now(),$3,$4)", [req.body.title, req.body.description,req.body.uuid,req.body.question])
  .then(res1 => {
    res.send({result:"success"})
    client.end()})
  .catch(error => {
    res.send({result:"failed"})
    console.warn(error);
  });
});


app.get('/viewideasall', function(req, res) {
  const client = new PG.Client({
    connectionString: process.env.DATABASE_URL,
    ssl: true,
  });
  client.connect();
  client.query("SELECT ideas.id,title, description, users.first_name, users.last_name FROM ideas INNER JOIN users ON ideas.id_owner=users.id")
  .then(res1 => {
    client.end();
    res.send(res1.rows);
  })
  .catch(error => {
    console.warn(error);
  });
});

app.get('/:id/comments', function(req, res) {
  const client = new PG.Client({
    connectionString: process.env.DATABASE_URL,
    ssl: true,
  });
  client.connect();
  client.query("SELECT comment, comments.status, users.first_name, users.last_name, comments.date FROM comments INNER JOIN users ON comments.id_owner=users.id WHERE comments.id_idea=$1;", [req.params.id])
  .then(res1 => {
    client.end();
    res.send(res1.rows);
  })
  .catch(error => {
    console.warn(error);
  });
});

app.post('/addcomment', function(req, res) {
  const client = new PG.Client({
    connectionString: process.env.DATABASE_URL,
    ssl: true,
  });
  client.connect();
  client.query("INSERT INTO comments (comment, status, id_owner, id_idea, date, id) VALUES ($1,'open',$2,$3,Now(),uuid_generate_v4())", [req.body.comment, req.body.owner, req.body.idea_id])
  .then(res1 => {
    res.send({result:"success"})
    client.end()})
  .catch(error => {
    res.send({result:"failed"})
    console.warn(error);
  });
});

app.get('/viewquestionsall', function(req, res) {
  const client = new PG.Client({
    connectionString: process.env.DATABASE_URL,
    ssl: true,
  });
  client.connect();
  client.query("SELECT questions.id,title, description, users.first_name, users.last_name,status FROM questions INNER JOIN users ON questions.id_owner=users.id")
  .then(res1 => {
    client.end();
    res.send(res1.rows);
  })
  .catch(error => {
    console.warn(error);
  });
});

app.post('/addanswerquestion', function(req, res) {
  const client = new PG.Client({
    connectionString: process.env.DATABASE_URL,
    ssl: true,
  });
  client.connect();
  client.query("INSERT INTO answers (answer, status, id_owner, id_question, date, id) VALUES ($1,'open',$2,$3,Now(),uuid_generate_v4())", [req.body.answer, req.body.owner, req.body.question_id])
  .then(res1 => {
    res.send({result:"success"})
    client.end()})
  .catch(error => {
    res.send({result:"failed"})
    console.warn(error);
  });
});


app.get('/viewtestsall', function(req, res) {
  const client = new PG.Client({
    connectionString: process.env.DATABASE_URL,
    ssl: true,
  });
  client.connect();
  client.query("SELECT title, description, status, id, date, question FROM tests")
  .then(res1 => {
    console.log(res1.rows);
    client.end();
    res.send(res1.rows);
  })
  .catch(error => {
    console.warn(error);
  });
});


app.get("*", (request, result) => {
  result.sendFile(path.join(__dirname, "react-app/build/index.html"));
});


app.listen(port, function listening() {
  console.log("Listening on port ", port);
});
