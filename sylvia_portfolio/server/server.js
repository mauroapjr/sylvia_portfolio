const express = require("express");
const app = express();
const cors = require("cors");
const sqlite3 = require("sqlite3").verbose();
const bodyParser = require("body-parser");

app.use(cors());

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  next();
});

// Increase payload size limit
app.use(express.json({ limit: "100mb" }));
app.use(bodyParser.json({ limit: "100mb" }));
app.use(bodyParser.urlencoded({ limit: "100mb", extended: true }));

// app.get("/", (req, res) => {
//   res.send("helloWorld");
// });


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

// ***** Create new user ******

app.post("/register", (req, res) => {
  const { username, password } = req.body;

  // Check if the username already exist in the database

  db.get(
    `SELECT * FROM credentials WHERE username = '${username}'`,
    (err, row) => {
      if (err) {
        throw err;
      }
      if (row) {
        res.send({message: 'Username already exist'});
      } else {
        db.run(
          `INSERT INTO credentials (username, password) VALUES ('${username}', '${password}')`,
          (err) => {
            if (err) {
              throw err;
            }
            res.send({message: "User registered successfully!"});
          }
        );
      }
    }
  );
});

// ****** Delete User ******

app.post("/deleteUser", (req, res) => {
  const { username } = req.body;

  db.run(`DELETE FROM credentials WHERE username = '${username}'`, (err) => {
    if (err) {
      console.error(err.message);
      res.status(500).send("Failed to delete user");
    } else {
      res.send({ message: "User deleted successfully" });
    }
  });
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
  }
});

// Add image column to posts table - Needed just to create the column once. 

// blogDb.run(`ALTER TABLE posts ADD COLUMN image TEXT`, (err) => {
//   if (err) {
//     console.log(err.message);
//   } else {
//     console.log("Added image column to posts table");
//   }
// });

app.post("/blog.db", (req, res) => {
  const { title, content, author, date } = req.body;

  // Check if the post already exists
  blogDb.get(
    "SELECT * FROM posts WHERE title = ? AND content = ? AND author = ? AND date = ?",
    [title, content, author, date],
    (err, row) => {
      if (err) {
        console.log(err.message);
        res.status(500).send("Failed to create post");
        return;
      }

      // If the post already exists, return the existing post's ID
      if (row) {
        console.log(`Post already exists with ID ${row.id}`);
        res.send({ id: row.id });
        return;
      }

      // If the post does not exist, insert the new post
      blogDb.run(
        "INSERT INTO posts (title, content, author, date) VALUES (?, ?, ?, ?)",
        [title, content, author, date],
        function (err) {
          if (err) {
            console.log(err.message);
            res.status(500).send("Failed to create post");
          } else {
            const postId = this.lastID;
            console.log(`Created post with ID ${postId}`);

            // Delete the oldest posts
            blogDb.run(
              `DELETE FROM posts WHERE id IN (SELECT id FROM posts ORDER BY date ASC LIMIT 1)`,
              (err) => {
                if (err) {
                  console.log(err.message);
                  res.status(500).send("Failed to delete oldest posts");
                } else {
                  console.log("Deleted oldest posts");
                  res.send({ id: postId });
                }
              }
            );
          }
        }
      );
    }
  );
});

app.listen(3001, () => console.log("Server listening on PORT 3001"));