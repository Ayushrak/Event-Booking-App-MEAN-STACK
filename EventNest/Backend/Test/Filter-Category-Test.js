const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../server'); 
const expect = chai.expect;

chai.use(chaiHttp);

describe('Event Filter By Category Tests', () => {

    it('should retrieve events in the Music category', (done) => {
        chai.request(app)
            .get('/TPL/Events/byCategory/Music') 
            .end((err, res) => {
                if (err) {
                    done(err);
                    return;
                }

                try {
                    expect(res).to.have.status(200);
                    expect(res.body).to.be.an('array');
                    if (res.body.length > 0) {
                        res.body.forEach(event => {
                            expect(event.Category).to.equal('Music');
                        });
                    }

                    done();
                } catch (error) {
                    done(error);
                }
            });
    });

});
