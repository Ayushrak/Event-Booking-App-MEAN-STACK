const mongoose=require('mongoose');

const eventSchema = new mongoose.Schema({

   Title:String,
   Date:Date,
   Time:String,
   location:String,
   imageUrl: String


});

const Event = mongoose.model('Event', eventSchema);

module.exports = Event;

