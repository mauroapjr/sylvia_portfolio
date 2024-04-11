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

// const express = require("express");
// const app = express();
// const cors = require("cors");
// const sqlite3 = require("sqlite3").verbose();
// const bodyParser = require("body-parser");

// app.use(cors());

// app.use((req, res, next) => {
//   res.setHeader("Access-Control-Allow-Origin", "*");
//   next();
// });

// // Increase payload size limit
// app.use(express.json({ limit: "100mb" }));
// app.use(bodyParser.json({ limit: "100mb" }));
// app.use(bodyParser.urlencoded({ limit: "100mb", extended: true }));

// // app.get("/", (req, res) => {
// //   res.send("helloWorld");
// // });


// // ***** Password validation *****

// let db = new sqlite3.Database("credentials.db", (err) => {
//   if (err) {
//     console.error(err.message);
//   }
//   console.log("Connected to credentials database");
// });

// app.post("/validatePassword", (req, res) => {
//   const { username, password } = req.body;

//   db.all(
//     `SELECT * FROM credentials WHERE username = '${username}' AND password = '${password}'`,
//     (err, rows) => {
//       if (err) {
//         throw err;
//       }
//       if (rows.length > 0) {
//         res.send({ validation: true });
//       } else {
//         res.send({ validation: false });
//       }
//     }
//   );
// });

// // ***** Create new user ******

// app.post("/register", (req, res) => {
//   const { username, password } = req.body;

//   // Check if the username already exist in the database

//   db.get(
//     `SELECT * FROM credentials WHERE username = '${username}'`,
//     (err, row) => {
//       if (err) {
//         throw err;
//       }
//       if (row) {
//         res.send({message: 'Username already exist'});
//       } else {
//         db.run(
//           `INSERT INTO credentials (username, password) VALUES ('${username}', '${password}')`,
//           (err) => {
//             if (err) {
//               throw err;
//             }
//             res.send({message: "User registered successfully!"});
//           }
//         );
//       }
//     }
//   );
// });

// // ****** Delete User ******

// app.post("/deleteUser", (req, res) => {
//   const { username } = req.body;

//   db.run(`DELETE FROM credentials WHERE username = '${username}'`, (err) => {
//     if (err) {
//       console.error(err.message);
//       res.status(500).send("Failed to delete user");
//     } else {
//       res.send({ message: "User deleted successfully" });
//     }
//   });
// });

// // ****** Admin User ******

// // Create a separated table for Admin Password

// // db.run(`ALTER TABLE credentials ADD COLUMN isAdmin INTEGER NOT NULL DEFAULT 0;`, (err) => {
// //   if (err) {
// //     console.error("Failed to add isAdmin column:", err.message);
// //   } else {
// //     console.log("Added isAdmin column to credentials table successfully.");
// //   }
// // });

// const username = "reactapp"; // Replace with the desired admin username
// const password = "reactapp"; // Replace with the desired admin password
// const isAdmin = 1; // 1 for true, indicating this user is an admin

// app.post("/adminLogin", (req, res) => {
//   const { username, password } = req.body;

// const insertAdminSql = `INSERT INTO credentials (username, password, isAdmin) VALUES (?, ?, ?)`;

// // Using the db variable that references your SQLite database connection
// db.run(insertAdminSql, [username, password, isAdmin], function(err) {
//   if (err) {
//     return console.error(err.message);
//   }
//   console.log(`A new admin user has been created with ID: ${this.lastID}`);
// });

// app.post("/validatePassword", (req, res) => {
//   const { username, password } = req.body;

//   db.get(
//     `SELECT * FROM credentials WHERE username = ? AND password = ?`,
//     [username, password],
//     (err, row) => {
//       if (err) {
//         console.error(err.message);
//         res.status(500).send({ error: "An error occurred during login." });
//       } else if (row) {
//         // User found, check if admin
//         const isAdmin = row.isAdmin === 1; // SQLite stores BOOLEAN as INTEGER (1 = true, 0 = false)
//         res.send({ validation: true, isAdmin });
//       } else {
//         // No user found
//         res.send({ validation: false });
//       }
//     }
//   );
// });

//   db.get(
//     `SELECT * FROM credentials WHERE username = ? AND password = ? AND isAdmin = TRUE`,
//     [username, password],
//     (err, row) => {
//       if (err) {
//         console.error(err.message);
//         res.status(500).send({ message: "An error occurred." });
//         return;
//       }
//       if (row) {
//         // User is authenticated and is an admin
//         res.send({ isAdmin: true, message: "Admin login successful." });
//       } else {
//         // Authentication failed or not an admin
//         res.send({ isAdmin: false, message: "Invalid credentials or not an admin." });
//       }
//     }
//   );
// });

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