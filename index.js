const express = require('express');
const mongoose = require('mongoose');
const cookieSession = require('cookie-session');
const passport = require('passport');
const keys = require('./config/keys');
require('./models/user');
require('./services/passport');


const app = express();

app.use(
    cookieSession({
        maxAge: 36000*24*30*1000,
        keys: [keys.cookieKey]
    })
);
app.use(passport.initialize());
app.use(passport.session());

// This line below is equal to us declaring -----> const authRoutes =  require('./routes/authRoutes')
//And than calling it like so ----->  authRoutes(app) 
require('./routes/authRoutes')(app); 

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log('Listening on http://localhost:' + PORT));

mongoose.connect(keys.mongoURI, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
  });