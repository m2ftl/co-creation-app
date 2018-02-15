const express = require("express");
const port = process.env.PORT || 4000;
const app = express();
const path = require("path");
const PG = require("pg");
const bodyParser = require("body-parser");

if (!process.env.DATABASE_URL) {
  console.error("environment variables not sourced");
  exit();
}

app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies

app.use(
  "/static",
  express.static(path.join(__dirname, "react-app/build/static"))
);

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*"); // Put an origin here, * means everything which is bad.
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  ); // Needed by ExpressJS
  next();
});


app.get("/favicon.ico", function (req, res) {
  res.sendFile(path.join(__dirname, "react-app/build/favicon.ico"));
});
// Listen to POST requests.

// new profile

app.post("/api/profile/create", function(req, res) {
  const weatherbool = Object.keys(req.body.weather).filter(
    key => req.body.weather[key] === true
  );

  function knowCategory(index){
  if (index <=4.4){ return 'category1'}
  else if (index <= 11.4){ return 'category2'}
  else if (index <=18.4){ return 'category3'}
  else if (index <=26.4){ return 'category4'}
  else if (index <=36){ return 'category5'}
  else {return'category6'}
}
  const indexCategory=knowCategory(req.body.index)

  const client = new PG.Client({
    connectionString: process.env.DATABASE_URL,
    ssl: true
  });
  client.connect();
  client.query(
      "INSERT INTO users (id,first_name,last_name,email,birthdate,gender,phone,player_index,id_google, level, is_admin, id_index_category, avatar) VALUES (uuid_generate_v4(),$1,$2,$3,$4,$5,$6,$7,$8,$9,false,$10, $11) RETURNING id",
      [
        req.body.firstName,
        req.body.lastName,
        req.body.email,
        req.body.birthdate,
        req.body.gender,
        req.body.phone,
        req.body.index,
        req.body.id_google,
        req.body.level,
        indexCategory,
        req.body.avatar,
      ]
    )
    .then(resSQL => {
      return Promise.all(weatherbool
        .map(element =>
          client.query(
            "INSERT INTO user_weather (id_user, weather) VALUES ($1,$2)",
            [resSQL.rows[0].id, element]
          )
        ))
        .then(res2 => {
          client.end();
          res.json({
            result: "Profile created successfully ! Welcome !",
            id_user: resSQL.rows[0].id
          });
        });
    })
    .catch(e => {
      client.end();
      res.send({ result: "Oups something wrong " });
      console.warn(e);
    });
});

app.get("/api/profile/:id", function(req, res) {
  const client = new PG.Client({
    connectionString: process.env.DATABASE_URL,
    ssl: true
  });
  client.connect();
  client
    .query("SELECT id FROM users WHERE id=$1", [req.params.id])
    .then(resSQL => {
      client.end();
      res.send({ result: "Good" });
    })
    .catch(e => {
      client.end();
      res.send({ result: "Oups something wrong " });
      console.warn(e);
    });
});

// new idea

app.post("/createideanew", function(req, res) {
  const client = new PG.Client({
    connectionString: process.env.DATABASE_URL,
    ssl: true
  });
  client.connect();
  client
    .query(
      "INSERT INTO ideas (id, title, description,status,date,id_owner) VALUES (uuid_generate_v4(),$1,$2,'open',Now(),$3) RETURNING id",
      [req.body.title, req.body.description, req.body.uuid]
    )
    .then(res1 => {
      return client
        .query(
          "INSERT INTO like_ideas (id_idea, id_user) VALUES ($1, $2)",
          [res1.rows[0].id, req.body.uuid]
        )
    })
    .then(res1 => {
      client.end();
      res.send({ result: "success" });
    })
    .catch(error => {
      client.end();
      res.send({ result: "failed" });
      console.warn(error);
    });
});

// new idea

app.post("/createquestionnew", function(req, res) {
  const client = new PG.Client({
    connectionString: process.env.DATABASE_URL,
    ssl: true
  });

  const top = Object.keys(req.body.topic).filter(
    key => req.body.topic[key] === true
  );

  client.connect();
  client.query(
    "INSERT INTO questions (id, title, description,status,date,id_owner) VALUES (uuid_generate_v4(),$1,$2,'open',Now(),$3) RETURNING *",
    [req.body.title, req.body.description, req.body.uuid],
    function(error, res1) {
      if (error) {
        console.warn(error);
        client.end();
        res.send({ result: "failed" });
      } else {
        top.forEach(function(element) {
          client.query(
            "INSERT INTO question_topic (id_question, topic) VALUES ($1,$2)",
            [res1.rows[0].id, element],
            function(error, res1) {
              if (error) {
                console.warn(error);
                client.end();
                res.send({ result: "failed" });
              }
            }
          );
        });
      }
      res.send({ result: "success" });
    }
  );
});

app.post("/createtestnew", function(req, res) {
  const client = new PG.Client({
    connectionString: process.env.DATABASE_URL,
    ssl: true
  });
  client.connect();
  client
    .query(
      "INSERT INTO tests (id, title, description,status,date,id_owner,question,picture) VALUES (uuid_generate_v4(),$1,$2,'open',Now(),$3,$4,$5)",
      [req.body.title, req.body.description, req.body.uuid, req.body.question,req.body.picture]
    )
    .then(res1 => {
      client.end();
      res.send({ result: "success" });
    })
    .catch(error => {
      client.end();
      res.send({ result: "failed" });
      console.warn(error);
    });
});

app.get("/viewideasall", function(req, res) {
  const client = new PG.Client({
    connectionString: process.env.DATABASE_URL,
    ssl: true
  });
  client.connect();
  client
    .query(
      "SELECT ideas.id,title, description, users.first_name, users.last_name, users.avatar, ideas.id_owner, ideas.date FROM ideas INNER JOIN users ON ideas.id_owner=users.id ORDER BY ideas.date DESC"
    )
    .then(res1 => {
      client.end();
      res.send(res1.rows);
    })
    .catch(error => {
      client.end();
      console.warn(error);
    });
});

app.get("/viewideas/:user_id", function(req, res) {
  const client = new PG.Client({
    connectionString: process.env.DATABASE_URL,
    ssl: true
  });
  client.connect();
  client
    .query(
      "SELECT ideas.id,title, description, users.first_name, users.last_name, users.avatar, ideas.id_owner, ideas.date, count(ideas.id) AS counter FROM ideas INNER JOIN like_ideas ON ideas.id = like_ideas.id_idea  INNER JOIN users ON ideas.id_owner=users.id WHERE id_owner = $1 GROUP BY (ideas.id,title, description, users.first_name, users.last_name, users.avatar , ideas.id_owner, ideas.date) ORDER BY counter DESC;",
      [req.params.user_id]
    )
    .then(resSql => {
      client.end();
      res.json(resSql.rows);
    })
    .catch(error => {
      client.end();
      console.warn(error);
    });
});

app.get("/:ideaid/comments", function(req, res) {
  const client = new PG.Client({
    connectionString: process.env.DATABASE_URL,
    ssl: true
  });
  client.connect();
  client
    .query(
      "SELECT comment, comments.status, users.first_name, users.last_name, users.avatar, comments.date FROM comments INNER JOIN users ON comments.id_owner=users.id WHERE comments.id_idea=$1 ORDER BY comments.date DESC;",
      [req.params.ideaid]
    )
    .then(res1 => {
      client.end();
      res.send(res1.rows);
    })
    .catch(error => {
      client.end();
      console.warn(error);
    });
});

app.post("/addcomment", function(req, res) {
  const client = new PG.Client({
    connectionString: process.env.DATABASE_URL,
    ssl: true
  });
  client.connect();
  client
    .query(
      "INSERT INTO comments (comment, status, id_owner, id_idea, date, id) VALUES ($1,'open',$2,$3,Now(),uuid_generate_v4())",
      [req.body.comment, req.body.owner, req.body.idea_id]
    )
    .then(res1 => {
      client.end();
      res.send({ result: "success" });
    })
    .catch(error => {
      client.end();
      res.send({ result: "failed" });
      console.warn(error);
    });
});

app.get('/viewquestionsall/:id', function(req, res) {
  const client = new PG.Client({
    connectionString: process.env.DATABASE_URL,
    ssl: true,
  });
  client.connect();
  client.query("SELECT DISTINCT questions.id,title, description, users1.first_name, users1.last_name, users1.avatar, questions.status,questions.date,answers.id_owner FROM questions INNER JOIN users as users1 ON questions.id_owner=users1.id INNER JOIN question_topic as qt3 ON qt3.id_question=questions.id and qt3.topic=(SELECT level FROM users as users2 WHERE users2.id=$1) INNER JOIN question_topic as qt1 ON qt1.id_question=questions.id and qt1.topic=(SELECT id_index_category FROM users as users2 WHERE users2.id=$1) INNER JOIN question_topic as qt2 ON qt2.id_question=questions.id and qt2.topic IN (SELECT DISTINCT weather FROM user_weather WHERE user_weather.id_user=$1)  LEFT JOIN answers ON answers.id_question=questions.id  and answers.id_owner =$1 WHERE questions.status='open' and answers.id_owner is NULL ORDER BY date DESC",[req.params.id])
  .then(res1 => {
    client.end();
    res.send(res1.rows);
  })
  .catch(error => {
    client.end();
    console.warn(error);
  });
});

app.get('/viewquestionsalladmin', function(req, res) {
  const client = new PG.Client({
    connectionString: process.env.DATABASE_URL,
    ssl: true,
  });
  client.connect();
  client.query("SELECT questions.id,title, description, users.first_name, users.last_name,status,date FROM questions INNER JOIN users ON questions.id_owner=users.id ORDER BY status DESC,date DESC")
  .then(res1 => {
    client.end();
    res.send(res1.rows);
  })
  .catch(error => {
    client.end();
    console.warn(error);
  });
});

app.get("/archivetest/:id", function(req, res) {
  const client = new PG.Client({
    connectionString: process.env.DATABASE_URL,
    ssl: true
  });
  client.connect();
  client
    .query("UPDATE tests SET status='closed' WHERE id=$1;", [req.params.id])
    .then(resSQL => {
      client.end();
      res.send({ data: "success" });
    })
    .catch(e => {
      client.end();
      res.send({ data: "failed" });
      console.warn(e);
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
    client.end();
    res.send({result:"success"})
  })
  .catch(error => {
    client.end();
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
  client.query("SELECT * FROM tests WHERE status='open' ORDER BY date DESC")
  .then(res1 => {
    client.end();
    res.send(res1.rows);
  })
  .catch(error => {
    client.end();
    console.warn(error);
  });
});

app.get('/viewtestsalladmin', function(req, res) {
  const client = new PG.Client({
    connectionString: process.env.DATABASE_URL,
    ssl: true,
  });
  client.connect();
  client.query("SELECT * FROM tests ORDER BY status DESC,date DESC")
  .then(res1 => {
    client.end();
    res.send(res1.rows);
  })
  .catch(error => {
    client.end();
    console.warn(error);
  });
});

app.get('/:id/answers', function(req, res) {
  const client = new PG.Client({
    connectionString: process.env.DATABASE_URL,
    ssl: true,
  });
  client.connect();
  client.query("SELECT answer, answers.status, users.first_name, users.last_name, users.avatar, answers.date FROM answers INNER JOIN users ON answers.id_owner=users.id WHERE answers.id_question=$1;", [req.params.id])
  .then(res1 => {
    client.end();
    res.send(res1.rows);
  })
  .catch(error => {
    client.end();
    console.warn(error);
  });
});

app.post('/addanswertest', function(req, res) {
  const client = new PG.Client({
    connectionString: process.env.DATABASE_URL,
    ssl: true,
  });
  client.connect();
  client.query("INSERT INTO test_answers (answer, rating, status, id_owner, id_test, id,date) VALUES ($1,$4,'open',$2,$3,uuid_generate_v4(),Now())", [req.body.answer, req.body.owner, req.body.test_id,req.body.rating])
  .then(res1 => {
    client.end();
    res.send({result:"success"})
  })
  .catch(error => {
    client.end();
    res.send({result:"failed"})
    console.warn(error);
  });
});


app.get("/:id_google/checkuser", function(req, res) {
  const client = new PG.Client({
    connectionString: process.env.DATABASE_URL,
    ssl: true
  });
  client.connect();
  client
    .query("SELECT * FROM users WHERE id_google=$1;", [req.params.id_google])
    .then(resSQL => {
      client.end();
      res.json(resSQL.rows.length>0?resSQL.rows[0]:"no_user_in_DB");
    })
    .catch(e => {
      client.end();
      res.send({ result: "Oups something wrong " });
      console.warn(e);
    });
});

app.get("/archivequestion/:id", function(req, res) {
  const client = new PG.Client({
    connectionString: process.env.DATABASE_URL,
    ssl: true
  });
  client.connect();
  client
    .query("UPDATE questions SET status='closed' WHERE id=$1;", [req.params.id])
    .then(resSQL => {
      client.end();
      res.send({ data: "success" });
    })
    .catch(e => {
      client.end();
      res.send({ data: "failed" });
      console.warn(e);
    });
});

app.get("/reopenquestion/:id", function(req, res) {
  const client = new PG.Client({
    connectionString: process.env.DATABASE_URL,
    ssl: true
  });
  client.connect();
  client
    .query("UPDATE questions SET status='open' WHERE id=$1;", [req.params.id])
    .then(resSQL => {
      client.end();
      res.send({ data: "success" });
    })
    .catch(e => {
      client.end();
      res.send({ data: "failed" });
      console.warn(e);
    });
});

app.get('/:id/topics', function(req, res) {
  const client = new PG.Client({
    connectionString: process.env.DATABASE_URL,
    ssl: true,
  });
  client.connect();
  client.query("SELECT topic FROM question_topic WHERE id_question=$1;", [req.params.id])
  .then(res1 => {
    client.end();
    res.send(res1.rows);
  })
  .catch(error => {
    client.end();
    console.warn(error);
  });
});


app.get("/api/idea/:idea_id/like/count", function(req,res) {
  const client = new PG.Client({
    connectionString: process.env.DATABASE_URL,
    ssl: true
  });
  client.connect();
  client
    .query("SELECT COUNT(id_idea) FROM like_ideas WHERE id_idea=$1;",
    [req.params.idea_id])
    .then(resSQL => {
      client.end();
      return res.json(resSQL.rows[0].count)
    })
    .catch(e => {
      client.end();
      res.send({ result: "Oups something wrong " });
      console.warn(e);
    })
});

app.post("/editquestion", function(req, res) {
  const client = new PG.Client({
    connectionString: process.env.DATABASE_URL,
    ssl: true
  });
  client.connect();
  client.query(
    "UPDATE questions SET title=$1, description=$2 WHERE id=$3",
    [req.body.title,req.body.description, req.body.id],
    function(error, res1) {
      if (error) {
        client.end();
        console.warn(error);
        res.send({ result: "failed" });
      } else {
        client.end();
        res.send({ result: "success" });
      }
    }
  );
});

app.get('/viewquestionsallcounter/:id', function(req, res) {
  const client = new PG.Client({
    connectionString: process.env.DATABASE_URL,
    ssl: true,
  });
  client.connect();
  client.query("SELECT COUNT(1) from (SELECT DISTINCT  (questions.id) FROM questions INNER JOIN users as users1 ON questions.id_owner=users1.id INNER JOIN question_topic as qt3 ON qt3.id_question=questions.id and qt3.topic=(SELECT level FROM users as users2 WHERE users2.id=$1) INNER JOIN question_topic as qt1 ON qt1.id_question=questions.id and qt1.topic=(SELECT id_index_category FROM users as users2 WHERE users2.id=$1) INNER JOIN question_topic as qt2 ON qt2.id_question=questions.id and qt2.topic IN (SELECT DISTINCT weather FROM user_weather WHERE user_weather.id_user=$1)  LEFT JOIN answers ON answers.id_question=questions.id  and answers.id_owner =$1 WHERE questions.status='open' and answers.id_owner is NULL GROUP BY questions.id) as dbcount ",[req.params.id])
  .then(res1 => {
    client.end();
    res.send(res1.rows[0].count);
  })
  .catch(error => {
    client.end();
    console.warn(error);
  });
});

app.get("/viewusersall", function(req, res) {
  const client = new PG.Client({
    connectionString: process.env.DATABASE_URL,
    ssl: true
  });
  client.connect();
  client
    .query(
      "SELECT * FROM users ORDER BY users.last_name ASC"
    )
    .then(res1 => {
      client.end();
      res.send(res1.rows);
    })
    .catch(error => {
      client.end();
      console.warn(error);
    });
});

app.post("/editquestiontopics", function(req, res) {
  const client = new PG.Client({
    connectionString: process.env.DATABASE_URL,
    ssl: true
  });
  const top = Object.keys(req.body.topic).filter(
    key => req.body.topic[key] === true
  );
  client.connect();
  client.query(
    "DELETE FROM question_topic WHERE id_question=$1",
    [req.body.id],
    function(error, res1) {
      if (error) {
        console.warn(error);
        client.end();
        res.send({ result: "failed" });
      } else {
        top.forEach(function(element) {
          client.query(
            "INSERT INTO question_topic (id_question, topic) VALUES ($1,$2)",
            [req.body.id, element],
            function(error, res1) {
              if (error) {
                console.warn(error);
                client.end();
                res.send({ result: "failed" });
              }
            }
          );
        });
      }
      res.send({ result: "success" });
    }
  );
});

app.get('/:id/answerstests', function(req, res) {
  const client = new PG.Client({
    connectionString: process.env.DATABASE_URL,
    ssl: true,
  });
  client.connect();
  client.query("SELECT answer, rating, status, users.first_name, users.last_name, users.avatar, test_answers.date FROM test_answers INNER JOIN users ON test_answers.id_owner=users.id WHERE test_answers.id_test=$1 ORDER BY test_answers.date DESC;", [req.params.id])
  .then(res1 => {
    client.end();
    res.send(res1.rows);
  })
  .catch(error => {
    client.end();
    console.warn(error);
  });
});

app.get("/reopentest/:id", function(req, res) {
  const client = new PG.Client({
    connectionString: process.env.DATABASE_URL,
    ssl: true
  });
  client.connect();
  client
    .query("UPDATE tests SET status='open' WHERE id=$1;", [req.params.id])
    .then(resSQL => {
      client.end();
      res.send({ data: "success" });
    })
    .catch(e => {
      client.end();
      res.send({ data: "failed" });
      console.warn(e);
    });
});

app.get("/api/idea/:idea_id/:user_id/like/authorize", function(req, res) {
  const client = new PG.Client({
    connectionString: process.env.DATABASE_URL,
    ssl: true
  });
  client.connect();
  client.query("SELECT COUNT(id_user) FROM like_ideas where id_idea=$1 and id_user=$2",
  [req.params.idea_id,req.params.user_id])
    .then(resSQL => {
      client.end();
      res.json(parseInt(resSQL.rows[0].count,10));
    })
    .catch(e => {
      client.end();
      console.warn(e);
    });
  });

app.post("/edittest", function(req, res) {
  const client = new PG.Client({
    connectionString: process.env.DATABASE_URL,
    ssl: true
  });
  client.connect();
  client.query(
    "UPDATE tests SET title=$1, description=$2, picture=$3, question=$4 WHERE id=$5",
    [req.body.title,req.body.description,req.body.picture,req.body.question,req.body.id],
    function(error, res1) {
      if (error) {
        console.warn(error);
        client.end();
        res.send({ result: "failed" });
      } else {
        client.end();
        res.send({ result: "success" });
      }
    }
  );
});

app.get('/viewtestsallcounter/:id', function(req, res) {
  const client = new PG.Client({
    connectionString: process.env.DATABASE_URL,
    ssl: true,
  });
  client.connect();
  client.query("SELECT COUNT (tests.id) FROM tests WHERE tests.status='open' ",[])
  .then(res1 => {
    client.end();
    res.send(res1.rows[0].count);
  })
  .catch(error => {
    client.end();
    console.warn(error);
  });
});

app.get('/isadmin/:id_google', function(req, res) {
  const client = new PG.Client({
    connectionString: process.env.DATABASE_URL,
    ssl: true,
  });
  client.connect();
  client.query("SELECT is_admin FROM users WHERE id_google=$1 ",[req.params.id_google])
  .then(resSQL => {
    client.end();
    res.json(resSQL.rows.length>0?resSQL.rows[0].is_admin:"no_user_in_DB");
  })
  .catch(error => {
    client.end();
    console.warn(error);
  });
});


app.post("/api/like/add", function(req, res) {
  const client = new PG.Client({
    connectionString: process.env.DATABASE_URL,
    ssl: true
  });
  client.connect();
  client.query(
      "INSERT INTO like_ideas (id_idea, id_user) VALUES ($1,$2);",
      [req.body.idea_id,req.body.owner_id]
    )
    .then(resSQL => {
      client.end();
    })
    .catch(e => {
      client.end();
      res.send({ result: "Oups something wrong " });
      console.warn(e);
    });
});

app.get("/viewideasallbylikes", function(req,res) {
  const client = new PG.Client({
    connectionString: process.env.DATABASE_URL,
    ssl: true
  });
  client.connect();
  client
    .query(
      "SELECT ideas.id,title, description, users.first_name, users.last_name, users.avatar, ideas.id_owner, ideas.date, count(ideas.id) AS counter FROM ideas INNER JOIN like_ideas ON ideas.id = like_ideas.id_idea INNER JOIN users ON ideas.id_owner=users.id GROUP BY (ideas.id,title, description, users.first_name, users.last_name, users.avatar, ideas.id_owner, ideas.date) ORDER BY counter DESC"
    )
    .then(res1 => {
      client.end();
      res.send(res1.rows);
    })
    .catch(error => {
      client.end();
      console.warn(error);
    });
});

app.post("/update_profile", function(req, res) {

  const values = Object.keys(req.body.weather).filter(
    key => req.body.weather[key] === true
  );

  const client = new PG.Client({
    connectionString: process.env.DATABASE_URL,
    ssl: true
  });

  client.connect();
  client.query(
    "UPDATE users SET first_name=$1, last_name=$2, email=$3, birthdate=$4, gender=$5, phone=$6, player_index=$7, level=$8 WHERE id=$9",
    [
      req.body.firstName,
      req.body.lastName,
      req.body.email,
      req.body.birthdate,
      req.body.gender,
      req.body.phone,
      req.body.index,
      req.body.level,
      req.body.id
    ],
    function(error, res1) {
      if (error) {
        console.warn(error);
        client.end();
        res.send({ result: "failed" });
      }
      else {
        client.query(
          "DELETE FROM user_weather WHERE id_user=$1",
          [req.body.id],
          function(error, res1) {
            if (error) {
              console.warn(error);
              client.end();
              res.send({ result: "failed" });
            }
            else {
              client.query(
                `INSERT INTO user_weather (id_user, weather) VALUES ${values.map((weather, index) => `($1, $${index + 2})`)}`,
                [req.body.id, ...values],
                function(error, res1) {
                  client.end();
                  if (error) {
                    console.warn(error);
                    res.send({ result: "failed" });
                  }
                }
              );
            }
            res.send({ result: "success" });
          }
        );
      }
  });
});

app.post("/editidea", function(req, res) {
  const client = new PG.Client({
    connectionString: process.env.DATABASE_URL,
    ssl: true
  });
  client.connect();
  client.query(
    "UPDATE ideas SET title=$1, description=$2 WHERE id=$3",
    [req.body.title,req.body.description,req.body.id],
    function(error, res1) {
      if (error) {
        console.warn(error);
        client.end();
        res.send({ result: "failed" });
      } else {
        client.end();
        res.send({ result: "success" });
      }
    }
  );
});

app.get('/viewideasallcounter/:id', function(req, res) {
  const client = new PG.Client({
    connectionString: process.env.DATABASE_URL,
    ssl: true,
  });
  client.connect();
  client.query("SELECT COUNT (ideas.id) FROM ideas WHERE ideas.status='open' ",[])
  .then(res1 => {
    client.end();
    res.send(res1.rows[0].count);
  })
  .catch(error => {
    client.end();
    console.warn(error);
  });
});

app.get('/users/export', function(req, res) {
  const client = new PG.Client({
    connectionString: process.env.DATABASE_URL,
    ssl: true,
  });
  client.connect();
  client.query("SELECT first_name, last_name, gender, email, phone, player_index, id_index_category, birthdate, level FROM users",[])
  .then(resSQL => {
    client.end();
    res.json(resSQL.rows);
  })
  .catch(error => {
    client.end();
    console.warn(error);
  });
});

app.get("*", (request, result) => {
  result.sendFile(path.join(__dirname, "react-app/build/index.html"));
});

app.listen(port, function listening() {
  console.log("Listening on port ", port);
});
