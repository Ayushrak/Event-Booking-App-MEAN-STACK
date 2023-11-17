const mongoose =require('mongoose');

const dbUri1 = 'mongodb://localhost:27017/Events';
const dbUri2 = 'mongodb://localhost:27017/Users';

// Connect to Events Database 
const db1 = mongoose.createConnection(dbUri1, { useNewUrlParser: true, useUnifiedTopology: true });
db1.on('connected', () => console.log('Connected to Events DB'));
db1.on('error', (err) => console.error('Error connecting to Events DB:', err));

// Connect to Users Database 
const db2 = mongoose.createConnection(dbUri2, { useNewUrlParser: true, useUnifiedTopology: true });
db2.on('connected', () => console.log('Connected to Users DB'));
db2.on('error', (err) => console.error('Error connecting to Users DB:', err));

module.exports = { db1, db2 };

module.exports= mongoose; 