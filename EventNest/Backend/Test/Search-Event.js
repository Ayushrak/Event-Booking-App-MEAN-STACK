const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../server'); 
const expect = chai.expect;

chai.use(chaiHttp);

describe('Event Retrieval Tests', function() {

    // Replace with an actual event ID from your database
    const expectedId = "507f191e810c19729de860ea";
    it('should retrieve an event by ID', function(done) {
        chai.request(app)
            .get(`/TPL/Events/find/${expectedId}`) 
            .end(function(err, res) {
                if (err) {
                    done(err);
                    return;
                }

                try {
                    expect(res).to.have.status(200);
                    expect(res.body).to.be.an('object');
                     // If the ID in the response is an ObjectId, cast it to a string for comparison
                     const resId = res.body._id.toString();
                     expect(resId).to.equal(expectedId);
                    done();
                } catch (error) {
                    done(error);
                }
            });
    });

});
