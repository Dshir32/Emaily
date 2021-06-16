const express = require('express');
const mongoose = require('mongoose');
const cookieSession = require('cookie-session');
const passport = require('passport');
const bodyParser = require('body-parser');
const keys = require('./config/keys');
require('./models/user');
require('./services/passport');


const app = express();
app.use(express.urlencoded({extended: true}));
app.use(express.json()) // To parse the incoming requests with JSON payloads
app.use(
    cookieSession({
        maxAge: 36000*24*30*1000,
        keys: [keys.cookieKey]
    })
);
app.use(passport.initialize());
app.use(passport.session());

const proxy = require('http-proxy-middleware');
module.exports = function(app) {
    app.use(proxy('/auth/google', 
        { target: 'http://localhost:5000/' }
    ));
    app.use(proxy('/api/*', 
    { target: 'http://localhost:5000'        }
      ));
}


// This line below is equal to us declaring -----> const authRoutes =  require('./routes/authRoutes')
//And than calling it like so ----->  authRoutes(app) 
require('./routes/authRoutes')(app); 
require('./routes/billingRoutes')(app); 

if(process.env.NODE_ENV !== 'production') {
    //Express will serve prod assets like main.js/main.css
    app.use(express.static('client/build'));

    //Express will serve index.html if no route has been recognized
    const path = require('path');
    app.get('*', (req,res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    });
}

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log('Listening on https://localhost:' + PORT));

mongoose.connect(keys.mongoURI, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
  });