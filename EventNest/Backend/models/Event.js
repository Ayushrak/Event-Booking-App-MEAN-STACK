const mongoose=require('mongoose');

//build the model 

const Event =mongoose.model('Event' , {

   Title:String,
   Date:Date,
   Time:String,
   location:String,
   imageUrl: String

} );



module.exports=Event; 