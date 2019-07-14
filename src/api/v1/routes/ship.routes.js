const ShipSchemaValidator = require('../middlewares/ship.validation');

module.exports = (router) => {
    const ships = require('../controllers/ship.controller.js');

    router.post('/ships', ShipSchemaValidator.validateShipSchema(), ships.create);

    router.get('/ships', ships.findAll);
}