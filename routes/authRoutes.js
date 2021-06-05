const passport = require('passport');

module.exports = (app) => {
    app.get('/auth/google' , passport.authenticate('google', {
        scope:['profile','email']
        })
    );
    
    app.get('/auth/google/callback',passport.authenticate('google'));

    app.get('/api/logout', (req, res) => {
        req.logout(); 
        // logout is attached automatically to the req obj by passport, 
        // when we call logout it takes the cookie that contains the user.id and kill it.
        res.send(req.user); // this should out put empty obj. since req.user no longer exist after logout func
    });

    app.get('/api/current_user' , (req, res) => {
        res.send(req.user);
    });
}
