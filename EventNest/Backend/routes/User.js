const express = require('express');
const User = require('../models/user');
const bcrypt = require('bcrypt');
const router = express.Router();

// User registration
router.post('/register', async (req, res) => {
  
    try {
    // Hash the password
    const hashedPassword = await bcrypt.hash(req.body.password, 8);

    // Create a new user with the hashed password
    const user = new User({
      Username: req.body.Username,
      email: req.body.email,
      password: hashedPassword
    });

    await user.save();
    res.status(200).send({ user });
  } catch (err) {
    console.error(err); 
    res.status(400).send(err);

  }
});

// User login
router.post('/login', async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.email });
    if (!user || !await bcrypt.compare(req.body.password, user.password)) {
      return res.status(401).send({ error: 'Login failed!' });
    }
    res.send({ user });
  } catch (err) {
    res.status(400).send(err);
  }
});


/***************RSVPS HANDLING LOGIC****************/


//Adding to RSVPs arrays 
router.post('/user/:userId/rsvp/:eventId', async (req, res) => {
  try {
      const user = await User.findById(req.params.userId);
      const eventId = req.params.eventId;

      // Ensure user exists
      if (!user) {
        return res.status(404).send("User not found");
      }

      // Add the event to the user's rsvps array
      console.log(user);
      console.log("********************")
      user.rsvps.push(eventId);
      console.log(user.rsvps);
      await user.save();
      res.status(200).send(user);
  } catch (err) {
      console.log(err);
      res.status(500).send("Internal server error");
  }
});



//Retrieving from RSVP'd events 

router.get('/user/:userId/rsvp', async (req, res) => {
  try {
    const user = await User.findById(req.params.userId).populate('rsvps');
    if (!user) {
      return res.status(404).send("User not found");
    }
    res.status(200).json(user.rsvps);
    
    console.log(user);
    console.log("*****************")
    console.log(user.rsvps);
    } catch (err) {
  console.log(err);
  res.status(500).send("Internal server error");
}
});





module.exports = router;
