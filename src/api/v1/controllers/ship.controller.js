const Ship = require('../models/ship.model.js').Ship;
const ShipRepository = require('../db/repositories/ship.repository.js');

exports.create = (req, res) => {
    const ship = new Ship(req.body.name, req.body.speed);
    ShipRepository.createShip(ship).then(createdShip => res.status(201).send(createdShip));

};

exports.findAll = (req, res) => {
    ShipRepository.getAllShips().then(ships => res.status(200).send(ships));
};