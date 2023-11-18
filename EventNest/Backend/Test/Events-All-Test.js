const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../server'); 
const expect = chai.expect;

chai.use(chaiHttp);

describe('Event Tests', function() {
    this.timeout(5000); 

    it('should list all events', function(done) {
        chai.request(app)
            .get('/Events/all') 
            .end(function(err, res) {
              
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

    // ... other tests ...
});
