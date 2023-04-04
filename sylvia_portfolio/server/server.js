const express = require('express');
const app = express();
const cors = require('cors');
const sqlite3 = require('sqlite3').verbose();

app.use(cors())
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

  db.all(`select * from credentials where username = '${username}' and password = '${password}'`, (err, rows) =>{
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