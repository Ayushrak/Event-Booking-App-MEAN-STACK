const express = require('express');
const cors = require('cors');

require('./config/connect'); 
const EventRoute = require('./routes/Event');
const UserRoute = require('./routes/User');

const app = express();


app.use(cors()); 
app.use(express.json()); 
app.use('/TPL/Events', EventRoute);
app.use('/TPL/Users', UserRoute);

// Serve static files from 'uploads' directory
app.use('/uploads', express.static('uploads'));

// Error handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Server broke!');
});

const server = app.listen(3000, () => {
    console.log('Server is working on port 3000');
});

module.exports = server;
