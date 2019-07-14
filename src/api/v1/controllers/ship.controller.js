const Ship = require('../models/ship.model.js').Ship;
const ShipRepository = require('../db/repositories/ship.repository.js');

/**
 * Creates a Ship object from the request and stores it to the database.
 * The Response contains a newly created Ship with auto generated ID.
 * The Response is returned in JSON format.
 *
 * @param req
 * @param res
 */
exports.create = (req, res) => {
    const ship = new Ship(req.body.name, req.body.speed);
    ShipRepository.createShip(ship).then(createdShip => res.status(201).send(createdShip));

};

/**
 * Retrieves all Ships.
 * The Response contains an array of Ships.
 * The Response is returned in JSON format.
 *
 * @param req
 * @param res
 */
exports.findAll = (req, res) => {
    ShipRepository.getAllShips().then(ships => res.status(200).send(ships));
};