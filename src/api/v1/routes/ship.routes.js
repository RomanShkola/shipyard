module.exports = (router) => {
    const ships = require('../controllers/ship.controller.js');

    router.post('/ships', ships.create);

    router.get('/ships', ships.findAll);
}