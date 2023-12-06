const mongoose=require('mongoose');


const UserSchema = new mongoose.Schema({
        // Username:{ type: String, required: true, unique: true },
        // email: { type: String, required: true, unique: true },
        // password: { type: String, required: true }

        Username:String,
        email: String, 
        password: String,
        rsvps: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Event', default: [] }],
        myEvents: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Event', default: [] }]


        


},{ collection: 'Users' });

const User = mongoose.model('User', UserSchema);

module.exports = User;




