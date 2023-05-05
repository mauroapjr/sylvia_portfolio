const express = require("express");
const app = express();
const cors = require("cors");
const sqlite3 = require("sqlite3").verbose();

app.use(cors());

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  next();
});
app.use(express.json({}));

app.get('/', (req, res) => {
  res.send('helloWorld');
});


// ***** Password validation *****

let db = new sqlite3.Database("credentials.db", (err) => {
  if (err) {
    console.error(err.message);
  }
  console.log("Connected to credentials database");
});

app.post("/validatePassword", (req, res) => {
  const { username, password } = req.body;

  db.all(
    `SELECT * FROM credentials WHERE username = '${username}' AND password = '${password}'`,
    (err, rows) => {
      if (err) {
        throw err;
      }
      if (rows.length > 0) {
        res.send({ validation: true });
      } else {
        res.send({ validation: false });
      }
    }
  );
});


// ***** Blog Database *****

app.get("/admin", (req, res) => {
  blogDb.all(`SELECT * FROM posts`, (err, rows) => {
    if (err) {
      throw err;
    }
    res.send(rows);
  });
});

let blogDb = new sqlite3.Database("blog.db", (err) => {
  if (err) {
    console.log(err.message);
  } else {
    console.log("Connected to Blog Database");
    blogDb.run(
      "CREATE TABLE IF NOT EXISTS posts (id INTEGER PRIMARY KEY, title TEXT, content TEXT, author TEXT, date TEXT)"
    );
  }
});

blogDb.run(`DELETE FROM posts`, (err) => {
  if (err) {
    console.log(err.message);
  }
  console.log("Deleted all posts from the blog database");
});

blogDb.run(`INSERT INTO posts (title, content) VALUES
  ('My First Blog Post', 'This is my first blog post. Welcome to my blog!'),
  ('My Second Blog Post', 'This is my second blog post. Thanks for reading!'),
  ('My Third Blog Post', 'This is my third blog post. Stay tuned for more updates!');`, (err) => {
    if (err) {
      console.log(err.message);
    }
    console.log("Inserted 3 blog posts");
});



app.post('/blog.db', (req, res) => {
  const { title, content, author, date } = req.body;

  blogDb.run(
    'INSERT INTO posts (title, content, author, date) VALUES (?, ?, ?, ?)',
    [title, content, author, date],
    function (err) {
      if (err) {
        console.log(err.message);
        res.status(500).send('Failed to create post');
      } else {
        const postId = this.lastID;
        console.log(`Created post with ID ${postId}`);
        res.send({ id: postId });
      }
    }
  );
})



app.listen(3001, () => console.log("Server listening on PORT 3001"));

