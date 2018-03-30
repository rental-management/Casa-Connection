require('dotenv').config();
const express = require('express');
const { json } = require('body-parser');
const session = require('express-session');
const cors = require('cors');
const massive = require('massive');
//did not include passport yet
//not sure if we will use auth0

const port = process.env.PORT || 3002;

//initialize express
const app = express();

//hooking up to the database
//NO DB CONNECTION STRING YET 3/30
// massive(CONNECTION_STRING)
//   .then(db => {
//     app.set("db", db);
//   })
//   .catch(err => {
//     console.log(err);
//   });

//Top Level Middlewares
app.use(cors());
// app.use(
//   session({
//     secret: SESSION_SECRET,
//     resave: false,
//     saveUninitialized: false,
//     cookie: {
//       maxAge: 100000
//     }
//   })
// );

//body-parser
app.use(json());

//ENDPOINTS GO HERE

app.listen(port, () => {
    console.log(`Hi, ho, hi, ho, it's off to work we go on ${port}`);
});



