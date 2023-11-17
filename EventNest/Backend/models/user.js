const mongoose=require('mongoose');


const User =mongoose.model('User' , {

        Username:{ type: String, required: true, unique: true },
        email: { type: String, required: true, unique: true },
        password: { type: String, required: true }

    } );



module.exports=User; 