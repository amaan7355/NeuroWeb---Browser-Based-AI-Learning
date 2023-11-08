const { model, Schema, Types } = require('../connection');

    const mySchema = new Schema({
        type : String,
        file : String,
        user : {type : Types.ObjectId, ref : "user"},
        createdAt : Date
    });

    module.exports =  model( 'aiModel', mySchema );