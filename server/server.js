require('dotenv').config();
const express = require('express');
const { json } = require('body-parser');
const session = require('express-session');
const cors = require('cors');
const passport = require("passport");
const massive = require('massive');
const Auth0Strategy = require('passport-auth0');
const { CONNECTION_STRING, SESSION_SECRET, DOMAIN, CLIENT_SECRET, CLIENT_ID } = process.env;
const port = process.env.PORT || 3002;
const mainCtrl = require("./controllers/mainCtrl");


//initialize express
const app = express();

// Database Connection //
massive(CONNECTION_STRING)
  .then(db => {
    app.set("db", db);
  })
  .catch(err => {
    console.log(err);
  });

//Top Level Middlewares
//cors
app.use(cors());
//body-parser
app.use(json());
//session
app.use(
  session({
    secret: SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    cookie: {
      maxAge: 100000
    }
  })
);

//auth0Strategy setup
app.use(passport.initialize());
app.use(passport.session());

//passport setup (adding users on login or pulling their credentials if already in table)
passport.use(
    new Auth0Strategy(
        {
            domain: DOMAIN,
            clientSecret: CLIENT_SECRET,
            clientID: CLIENT_ID,
            callbackURL: "/auth",
            scope: 'openid profile'
        },
        (accessToken, refreshToken, extraParams, profile, done) => {
            app.get('db').getUserByAuthId([profile.id]).then(response => {
                if(!response[0]){
                    console.log(profile);
                    app.get('db').createUser([profile.id, profile.name.givenName, profile.name.familyName]).then(createdUser => done(null, createdUser[0]));
                } else {
                    console.log(profile);

                    return done(null, response[0]);
                }
            });
        }
    )
)

//passport
passport.serializeUser((user, done) => done(null, user));
passport.deserializeUser((user, done) => done(null, user));


//ENDPOINTS GO HERE

//auth endpoint
app.get('/auth', passport.authenticate('auth0', {
    successRedirect: "http://localhost:3000",
    failureRedirect: "/auth",
    failureFlash: true
})
);
app.get('/properties', mainCtrl.getProperties);

// get request for the property image
// app.get('/api/getImg', mainCtrl.getPropertyImg);


//server setup 
app.listen(port, () => {
    console.log(`Hi, ho, hi, ho, it's off to work we go on ${port}`);
});



