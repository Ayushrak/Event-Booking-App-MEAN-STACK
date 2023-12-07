const express=require('express');
const multer=require('multer');
const Event= require('../models/Event');
const router=express.Router();


const storage = multer.diskStorage({
  destination: function(req, file, cb) {
      cb(null, 'uploads/');
  },
  filename: function(req, file, cb) {
      cb(null,file.originalname);
  }
});


const fileFilter = (req, file, cb) => {
  // Accept images only
  if (file.mimetype.startsWith('image')) {
      cb(null, true);
  } else {
      cb(null, false);
  }
};

const upload = multer({ 
  storage: storage, 
  fileFilter: fileFilter 
});

//create event
router.post('/add',  upload.single('imageFile'),async (req, res) => {
  let formattedDate = '';
  if (req.body.Date && !isNaN(new Date(req.body.Date).getTime())) {
      formattedDate = new Date(req.body.Date).toISOString().split('T')[0];
  } else {
      // Handle invalid date here (e.g., set a default date or return an error response)
      console.error('Invalid date provided:', req.body.Date);
      return res.status(400).send({ error: 'Invalid date provided' .req.body.Date});
  }
  const event = new Event({
    Title: req.body.Title,
    Category: req.body.Category,
    Date:formattedDate,
    Time: req.body.Time,
    location: req.body.location,
    description:req.body.description,
    // Use uploaded file path, or null if no file was uploaded
    imageUrl: req.file ? `/uploads/${req.file.filename}` : null 
  });

  try {
    const savedEvent = await event.save();
    res.status(201).send(savedEvent); // Set the status code to 201 because RESTful API practice to return a 201 Created
  } catch (err) {
    res.status(400).send(err);
    console.log(err);
  }
});

// List all events
router.get('/all', async (req, res) => {
  try {
    console.log('Route /all accessed'); // Debugging
    const events = await Event.find();
    res.send(events);
  } catch (err) {
    res.status(500).send('Error fetching events');
  }
});


//find events by ID 
router.get('/find/:id', async (req, res) => {
  try {
    const event = await Event.findById(req.params.id);//FindByID if we are working with the default mongoDB id format 
    if (!event) 
      return res.status(404).send('Event not found');
      res.send(event);
  } catch (err) {
    console.log(err);
    res.status(500).send("Internal server Error");
  }
});



//Find by category

router.get('/byCategory/:category', async (req, res) => {
    try {
        const category = req.params.category;
        const events = await Event.find({ Category: category });
        res.status(200).json(events);
    } catch (err) {
        res.status(500).send("Internal server error");
        console.error(err);
    }
});



//Update event by ID 
router.put('/update/:id', async (req, res) => {
  try {
    const event = await Event.findByIdAndUpdate(req.params.id, {
      Title: req.body.Title,
      Category: req.body.Category,
      Date: req.body.Date,
      Time: req.body.Time,
      location: req.body.location,
      imageUrl: req.body.imageUrl // Update the image URL
    }, { new: true });

    if (!event) return res.status(404).send('Event not found');
    res.send(event);
  } catch (err) {
     console.error(err);
    res.status(500).send(err);
  }
});

//Delete event by ID
router.delete('/delete/:id', async (req, res) => {
  try {
    const result = await Event.deleteOne({ _id: req.params.id });
    if (result.deletedCount === 0) {
      return res.status(404).send('Event not found');
    }
    res.send({ message: 'Event deleted successfully' });
  } catch (err) {
    console.error('Error during event deletion:', err.message);
    res.status(500).send('Internal Server Error');
  }
});
module.exports = router;
