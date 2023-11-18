const mongoose=require('mongoose');
const { db1 } = require('../config/connect'); 

const eventSchema = new mongoose.Schema({

   Title:String,
   Date:Date,
   Time:String,
   location:String,
   imageUrl: String


});

const Event = db1.model('Event', eventSchema);

module.exports = Event;



//build the model 

// const Event =mongoose.model('Event' , {

//    Title:String,
//    Date:Date,
//    Time:String,
//    location:String,
//    imageUrl: String

// } );



// module.exports=Event; 