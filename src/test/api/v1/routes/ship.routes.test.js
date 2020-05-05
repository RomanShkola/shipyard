let chai = require('chai');
let expect = require('chai').expect;
let chaiHttp = require('chai-http');
let server = require('../../../../server');

const ShipRepository = require('../../../../src/api/v1/db/repositories/ship.repository');

chai.should();
chai.use(chaiHttp);

describe('Ships', () => {

    let testShip = {
        name: "ship test",
        speed: "15",
    }

    beforeEach((done) => {
        ShipRepository.createShip(testShip).then(createdShip => {
            testShip = createdShip;
            done();
        });
    });

    afterEach((done) => {
        ShipRepository.deleteShip(testShip).then(res => { if (res) done()});
    });

    describe('/POST ships', function() {
        it('it should create a new Ship', (done) => {
            chai.request(server)
                .post('/v1/ships')
                .send(testShip)
                .end((err, res) => {
                    res.should.have.status(201);
                    res.body.should.be.a('object');
                    res.body.should.have.property('id');
                    res.body.should.have.property('name');
                    res.body.should.have.property('speed');
                    ShipRepository.deleteShip(res.body);
                    done();
                });
        });

        it('it should fail the validation for a Ship with missing required parameter', (done) => {

            let ship = {
                name: "ship test",
            }

            chai.request(server)
                .post('/v1/ships')
                .send(ship)
                .end((err, res) => {
                    res.should.have.status(400);
                    done();
                });
        });

        it('it should fail the validation for a Ship with invalid data type', (done) => {

            let ship = {
                name: "ship test",
                speed: 10,
            }

            chai.request(server)
                .post('/v1/ships')
                .send(ship)
                .end((err, res) => {
                    res.should.have.status(400);
                    done();
                });
        });
    });

    describe('/GET ships', function() {
        it('it should all the Ships', (done) => {
            chai.request(server)
                .get('/v1/ships')
                .end((err, res) => {
                    res.should.have.status(200);
                    res.body.should.be.a('array');
                    res.body.length.should.be.greaterThan(0);
                    done();
                });
        });
    });
});