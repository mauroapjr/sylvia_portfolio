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

app.get("/", (req, res) => {
  res.send("helloWorld");
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
  }
});

app.post("/blog.db", (req, res) => {
  const { title, content, author, date } = req.body;


  
  // First, check if the post already exists
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

// app.post('/blog.db', (req, res) => {
//   const { title, content, author, date } = req.body;

//   // First, check if the post already exists
//   blogDb.get('SELECT * FROM posts WHERE title = ? AND content = ? AND author = ? AND date = ?',
//     [title, content, author, date],
//     (err, row) => {
//       if (err) {
//         console.log(err.message);
//         res.status(500).send('Failed to create post');
//         return;
//       }

//       // If the post already exists, return the existing post's ID
//       if (row) {
//         console.log(`Post already exists with ID ${row.id}`);
//         res.send({ id: row.id });
//         return;
//       }

//       // If the post does not exist, insert the new post
//       blogDb.run(
//         'INSERT INTO posts (title, content, author, date) VALUES (?, ?, ?, ?)',
//         [title, content, author, date],
//         function (err) {
//           if (err) {
//             console.log(err.message);
//             res.status(500).send('Failed to create post');
//           } else {
//             const postId = this.lastID;
//             console.log(`Created post with ID ${postId}`);
//             res.send({ id: postId });
//           }
//         }
//       );
//     }
//   );
// });

app.listen(3001, () => console.log("Server listening on PORT 3001"));
