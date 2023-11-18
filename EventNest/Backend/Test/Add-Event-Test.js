const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../server'); // Adjust this path to your Express app's entry point
const expect = chai.expect;

chai.use(chaiHttp);

describe('Event Creation Tests', function() {

    it('should add a new event', function(done) {
        const newEvent = {
            Title: "New Event",
            Date: "2023-01-01",
            Time: "18:00",
            location: "123 Event St.",
            imageUrl: "http://example.com/event.jpg"
        };

        chai.request(app)
            .post('/Events/add') // Replace with your actual endpoint for adding events
            .send(newEvent)
            .end(function(err, res) {
                if (err) {
                    done(err);
                    return;
                }

                try {
                    expect(res).to.have.status(201); 
                    expect(res.body).to.be.an('object');
                    expect(res.body).to.have.property('Title', newEvent.Title);
                    expect(res.body).to.have.property('Date', '2023-01-01T00:00:00.000Z');
                    expect(res.body).to.have.property('Time', newEvent.Time);
                    expect(res.body).to.have.property('location', newEvent.location);
                    done();
                } catch (error) {
                    done(error);
                }
            });
    });

    // ... other tests ...
});
