    const { model, Schema } = require('../connection');

    const mySchema = new Schema({
        name : { type: String, require: true},
        email : { type: String, require: true, unique: true},
        password : { type: String, require: true},
        avatar : {type : String, default: "default_avatar.jpg"},
        createdAt : Date
    });

   module.exports =  model( 'user', mySchema );