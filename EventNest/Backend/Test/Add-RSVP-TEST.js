const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../server'); 
const expect = chai.expect;

chai.use(chaiHttp);

describe('User RSVP to Event Tests', () => {

    it('should add an event to the user\'s RSVP list', (done) => {
        const userId = '507f191e810c19729de860ea'; 
        const eventId = '6567e9df7c7cf8d322896e24';

        chai.request(app)
            .post(`/TPL/Users/user/${userId}/rsvp/${eventId}`) 
            .end((err, res) => {
                if (err) {
                    console.log(err);
                    done(err);
                    return;
                }

                try {
                    expect(res).to.have.status(200);
                    expect(res.body).to.be.an('object');
                    expect(res.body.rsvps).to.include(eventId);

                    done();
                } catch (error) {
                    done(error);
                }
            });
    });

});