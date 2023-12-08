const mongoose=require('mongoose');

const eventSchema = new mongoose.Schema({

   Title:String,
   Category: String,
   Date:String,
   location:String,
   description:String,
   imageUrl: String


},{ collection: 'Events' });

const Event = mongoose.model('Event', eventSchema);

module.exports = Event;

