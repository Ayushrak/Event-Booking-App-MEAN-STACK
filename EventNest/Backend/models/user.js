const mongoose=require('mongoose');


const { db2 } = require('../config/connect');

const UserSchema = new mongoose.Schema({
        // Username:{ type: String, required: true, unique: true },
        // email: { type: String, required: true, unique: true },
        // password: { type: String, required: true }

        Username:String,
        email: String, 
        password: String


});

const User = db2.model('User', UserSchema);

module.exports = User;




// const User =mongoose.model('User' , {

//         Username:{ type: String, required: true, unique: true },
//         email: { type: String, required: true, unique: true },
//         password: { type: String, required: true }

//     } );



// module.exports=User; 