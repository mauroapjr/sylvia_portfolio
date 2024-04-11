const express = require("express");
const app = express();
const cors = require("cors");
const sqlite3 = require("sqlite3").verbose();
const bodyParser = require("body-parser");
const bcrypt = require("bcrypt");

app.use(cors());
app.use(bodyParser.json({ limit: "100mb" }));
app.use(bodyParser.urlencoded({ limit: "100mb", extended: true }));

let db = new sqlite3.Database("credentials.db", sqlite3.OPEN_READWRITE, (err) => {
  if (err) {
    console.error(err.message);
  }
  console.log("Connected to the credentials database.");
});

// Validate Password (for both regular and admin users)
app.post("/validatePassword", (req, res) => {
  const { username, password } = req.body;
  
  db.get(`SELECT * FROM credentials WHERE username = ?`, [username], async (err, row) => {
    if (err) {
      console.error(err.message);
      return res.status(500).send("An error occurred during the login process.");
    }
    if (row) {
      // Check hashed password
      const match = await bcrypt.compare(password, row.password);
      if (match) {
        res.send({ validation: true, isAdmin: row.isAdmin === 1 });
      } else {
        res.send({ validation: false });
      }
    } else {
      res.send({ validation: false });
    }
  });
});

// Create New User
app.post("/register", async (req, res) => {
  const { username, password } = req.body;
  const hashedPassword = await bcrypt.hash(password, 10); // 10 is the salt rounds

  db.get(`SELECT * FROM credentials WHERE username = ?`, [username], (err, row) => {
    if (err) {
      console.error(err.message);
      return;
    }
    if (row) {
      res.send({ message: "Username already exists" });
    } else {
      db.run(`INSERT INTO credentials (username, password, isAdmin) VALUES (?, ?, ?)`, [username, hashedPassword, 0], (err) => {
        if (err) {
          console.error(err.message);
          return res.status(500).send("Failed to register the user.");
        }
        res.send({ message: "User registered successfully!" });
      });
    }
  });
});

// Delete User
app.post("/deleteUser", (req, res) => {
  const { username } = req.body;

  db.run(`DELETE FROM credentials WHERE username = ?`, [username], (err) => {
    if (err) {
      console.error(err.message);
      return res.status(500).send("Failed to delete user");
    }
    res.send({ message: "User deleted successfully" });
  });
});

// Admin Login

app.post("/adminLogin", (req, res) => {
  const { username, password } = req.body;

  db.get(`SELECT * FROM credentials WHERE username = ?`, [username], async (err, row) => {
    if (err) {
      console.error("Database error:", err.message);
      return res.status(500).send("An internal server error occurred.");
    }

    if (!row) {
      console.log("Login attempt failed: User not found", { username });
      return res.status(401).send("Invalid credentials.");
    }

    if (!row.isAdmin) {
      console.log("Login attempt by non-admin user", { username });
      return res.status(401).send("Access denied.");
    }

    const match = await bcrypt.compare(password, row.password);
    if (match) {
      console.log("Admin logged in successfully", { username });
      res.send({ isAdmin: true });
    } else {
      console.log("Login attempt failed: Incorrect password", { username });
      res.status(401).send("Invalid credentials.");
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