const dotenv = require('dotenv');
const mongoose = require('mongoose');
dotenv.config();

mongoose.connect(process.env.DB_URL)
.then((result) => {
    console.log('database connected');
}).catch((err) => {
    console.log(err);
});

module.exports=mongoose;