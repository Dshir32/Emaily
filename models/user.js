const mongoose = require('mongoose');
const Schema = mongoose.Schema;
// const { Schema } = mongoose; ----> This equals to the row above, 
// Saying mongoose object has property called schema take it and assign it to the new variable called 'Schema'

const userSchema = new Schema({
    googleId:String
});

mongoose.model('users', userSchema); // First arg get the collection name, Second arg gets the schema we created above.