const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../server'); 
const expect = chai.expect;

chai.use(chaiHttp);

describe('User Login Tests', function() {
    
    // User credentials for login
    const loginData = {
        "email": "Balkis@example.com",
        "password": "BalkisPass123!"
    };

    it('should log in an existing user', function(done) {
        chai.request(app)
            .post('/TPL/Users/login')
            .send(loginData)
            .end((err, res) => {
                if (err) {
                    done(err);
                    return;
                }

                try {
                    expect(res).to.have.status(200);
                } catch (error) {
                    done(error);
                    return;
                }

                done();
            });
    });

});
