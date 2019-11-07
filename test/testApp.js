const chai = require('chai');
const chaihttp = require('chai-http');
const should = chai.should();

chai.use(chaihttp);

describe('Server', function(){
    var server = require('../app');

    it('GET /', function (done) {
        chai.request(server)
            .get('/')
            .end((err, res) => {
                res.should.have.status(200);                
            });
        done();
    });

    it('GET /pickle', function () {
        chai.request(server)
            .get('/pickles')
            .end((err, res) => {
                res.should.have.status(200);
            })
    });

    it('GET /pickle/dill', function () {
        chai.request(server)
            .get('/pickle/dill')
            .end((err, res) => {
                res.should.have.status(200);
                res.should.have.property('text').eql('Wow, I love dill pickles! They are so sweet!', "Thingy");
            })
    });

    it('GET /pickle/unknown', function () {
        chai.request(server)
            .get('/pickle/unknown')
            .end((err, res) => {
                res.should.have.status(200);
                res.should.have.property('text').eql('Hmmm, I\'ve never heard of a unknown pickle before', "Thingy");
            })
    });
});