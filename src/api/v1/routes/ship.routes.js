const ShipSchemaValidator = require('../middlewares/ship.validation');

module.exports = (router) => {
    const ships = require('../controllers/ship.controller.js');

    /**
     * Add ship to shipyard
     */
    router.post('/ships', ShipSchemaValidator.validateShipSchema(), ships.create);

    /**
     * Fetches list of Ships
     */
    router.get('/ships', ships.findAll);
}