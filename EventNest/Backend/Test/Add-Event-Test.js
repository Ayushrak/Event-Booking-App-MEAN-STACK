const chai = require('chai');
const chaiHttp = require('chai-http');
const fs = require('fs');
const path = require('path');
const app = require('../server');
const expect = chai.expect;

chai.use(chaiHttp);
const { getDateString } = require('../Utilities/UsefulFunctions'); 

describe('Event Creation Tests', function() {

    it('should add a new event with an image and description', function(done) {
        const filePath = path.join(__dirname, '../uploads/nature.jpg'); 
        const newEvent = {
            Title: "Mock Event",
            Category: "Music",
            Date: "2023-01-01",
            Time: "18:00",
            location: "123 Event St.",
            description: "This is a mock event for testing purposes.",
        };

        chai.request(app)
            .post('/TPL/Events/add') 
            .set('Content-Type', 'multipart/form-data')
            .field('Title', newEvent.Title)
            .field('Category', newEvent.Category)
            .field('Date', getDateString(newEvent.Date))
            .field('Time', newEvent.Time)
            .field('location', newEvent.location)
            .field('description', newEvent.description) // Add the Description field
            .attach('imageFile', fs.readFileSync(filePath), 'image.JPG')
            .end(function(err, res) {
                if (err) {
                    console.log(err);
                    done(err);
                    return; 
                }

                try {
                    expect(res).to.have.status(201); 
                    expect(res.body).to.be.an('object');
                    expect(res.body).to.have.property('Title', newEvent.Title);
                    expect(res.body).to.have.property('location', newEvent.location);
                    expect(res.body).to.have.property('description', newEvent.description); 
                    // Validate imageUrl or image path as necessary
                    done();
                } catch (error) {
                    done(error);
                }
            });
    });

});
