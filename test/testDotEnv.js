const chai = require('chai');
const chaihttp = require('chai-http');
const should = chai.should();

chai.use(chaihttp);

describe('.Assets', function() {
    const fs = require('fs');
    it('check .env exists', function() {
        chai.assert.isTrue(fs.existsSync('.env'), '.env file does not exist');
    })
});