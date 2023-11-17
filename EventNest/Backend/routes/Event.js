const express=require('express');
const Event= require('../models/Event');
const router=express.Router();


//create event
router.post('/add', async (req, res) => {
  const event = new Event({
    Title: req.body.Title,
    Date: req.body.Date,
    Time: req.body.Time,
    location: req.body.location,
    imageUrl: req.body.imageUrl
  });

  try {
    const savedEvent = await event.save();
    res.send(savedEvent);
  } catch (err) {
    res.status(400).send(err);
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
    const event = await Event.findById(req.params.id);
    if (!event) return res.status(404).send('Event not found');
    res.send(event);
  } catch (err) {
    res.status(500).send(err);
  }
});


//Update event by ID 
router.put('/update/:id', async (req, res) => {
  try {
    const event = await Event.findByIdAndUpdate(req.params.id, {
      Title: req.body.Title,
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
    const event = await Event.findByIdAndRemove(req.params.id);
    if (!event) return res.status(404).send('Event not found');
    res.send(event);
  } catch (err) {
    res.status(500).send(err);
  }
});


module.exports = router;
