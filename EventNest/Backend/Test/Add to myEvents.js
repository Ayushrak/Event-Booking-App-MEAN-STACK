const chai = require('chai');
const chaiHttp = require('chai-http');
const expect = chai.expect;
const app = require('../server'); 

chai.use(chaiHttp);

describe('MyEvents Management - Add Event', function() {
    it('should add an event to a user\'s myEvents array', function(done) {
        const userId = '507f191e810c19729de860eb'; 
        const eventId = '5f50c31e1c9d44000047b036'; 

        chai.request(app)
            .post(`/TPL/Users/user/${userId}/myEvents/${eventId}`)
            .end(function(err, res) {
                expect(res).to.have.status(200);
                expect(res.body).to.be.an('object');
                expect(res.body.myEvents).to.include(eventId);
                done();
            });
    });
});
