const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../server'); 

const expect = chai.expect;
chai.use(chaiHttp);

describe('User Tests', function() {

    it('should create a new user', function(done) {
        chai.request(app)
            .post('/users/register')
            .send({ 
                "Username": "joe",
                "email": "joelle@example.com",
                "password": "StrongPass123!"
            })
            .end((err, res) => {
                if (err) {
                    done(err);
                    return;
                }

                try {
                    expect(res).to.have.status(200);
                    // Add any additional assertions here
                } catch (error) {
                    done(error);
                    return;
                }
                
                done(); // Call done to complete the test
            });
    });

    // Additional tests...
});
