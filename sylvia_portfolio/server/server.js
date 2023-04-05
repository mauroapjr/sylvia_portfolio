const express = require('express');
const app = express();
const cors = require('cors');
const sqlite3 = require('sqlite3').verbose();

app.use(cors())
// app.use(cors({
//   Access-Control-Allow-Origin: 'http://localhost:3000',
//   Access-Control-Allow-Methods: 'GET, POST, PUT, DELETE',
//   Access-Control-Allow-Headers: 'Content-Type',
// }))

app.use((req,res,next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  next();
})
app.use(express.json({}));

let db = new sqlite3.Database('credentials.db', (err) => {
  if (err) {
     console.error(err.message);
  }
   console.log('Connected to credentials database');
});

 app.post('/validatePassword', (req, res) => {
   const { username, password } = req.body

  db.all(`select * from credentials where username = '${username}' and password = '${password}'`, (err, rows) => {
    if (err) {
      throw err;
    } 
    if (rows.length > 0) {
      res.send({validation: true})
    } else {
      res.send({validation: false})
    }
  }) 
 })
  
app.listen(3001, () => console.log('Server listening on PORT 3001'));


// const express = require('express');
// const app = express();
// const cors = require('cors');
// const sqlite3 = require('sqlite3').verbose();

// // Allow requests from any origin
// app.use(cors());

// // Parse JSON request bodies
// app.use(express.json());

// // Connect to SQLite3 database
// let db = new sqlite3.Database('credentials.db', (err) => {
//   if (err) {
//     console.error(err.message);
//   }
//   console.log('Connected to credentials database');
// });

// // Route to validate password
// app.post('/validatePassword', (req, res) => {
//   const { username, password } = req.body

//   db.all(`select * from credentials where username = '${username}' and password = '${password}'`, (err, rows) =>{
//     if (err) {
//       throw err;
//     } 
//     if (rows.length > 0) {
//       res.send({validation: true})
//     } else {
//       res.send({validation: false})
//     }
//   }) 
// });

// // Set up CORS headers for preflight requests (OPTIONS)
// app.options('/validatePassword', cors());

// // Handle preflight requests for all routes
// app.use((req, res, next) => {
//   res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
//   res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
//   res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
//   next();
// });

// // Start server
// app.listen(3001, () => console.log('Server listening on PORT 3001'));
