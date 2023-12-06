const chai = require('chai');
const chaiHttp = require('chai-http');
const expect = chai.expect;
const app = require('../server'); 

chai.use(chaiHttp);

describe('MyEvents Management - Retrieve Events', function() {
    it('should retrieve events created by a user', function(done) {
        const userId = '507f191e810c19729de860ec'; 

        chai.request(app)
            .get(`/TPL/Users/user/${userId}/myEvents`)
            .end(function(err, res) {
                expect(res).to.have.status(200);
                expect(res.body).to.be.an('array');
                // Additional checks can be added here
                done();
            });
    });
});
