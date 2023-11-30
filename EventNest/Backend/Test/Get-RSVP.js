const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../server'); 
const expect = chai.expect;

chai.use(chaiHttp);

describe('Retrieve User RSVPs Tests', () => {

    it('should retrieve RSVPs for a specific user', (done) => {
        const userId = '507f191e810c19729de860ea';

        chai.request(app)
            .get(`/TPL/Users/user/${userId}/rsvp`)
            .end((err, res) => {
                if (err) {
                    done(err);
                    return;
                }

                try {
                    expect(res).to.have.status(200);
                    expect(res.body).to.be.an('array');

                    done();
                } catch (error) {
                    done(error);
                }
            });
    });

});
