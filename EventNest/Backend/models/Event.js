const mongoose=require('mongoose');

const eventSchema = new mongoose.Schema({

   Title:String,
   Category: String,
   Date:String,// changed to string for display purposes, but the date is being tested as Date in the CRUD operation then sent as string
   Time:String,
   location:String,
   imageUrl: String


},{ collection: 'Events' });

const Event = mongoose.model('Event', eventSchema);

module.exports = Event;

