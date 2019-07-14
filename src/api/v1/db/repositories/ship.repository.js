const pgPool = require('../index');
const Ship = require('../../models/ship.model').Ship;
const ShipWithId = require('../../models/ship.model').ShipWithId;

/**
 * Stores a Ship to the database
 * @type {Function}
 */
const createShip = ((ship) => {

    return pgPool.query('INSERT INTO ships (name, speed) VALUES ($1, $2) RETURNING id', [ship.name, ship.speed])
            .then(result => {
                return new ShipWithId(result.rows[0].id, new Ship(ship.name, ship.speed))
            }).catch(console.log);
})

/**
 * Rerieves all Ships
 * @type {Function}
 */
const getAllShips = (() => {

    return pgPool.query('SELECT * FROM ships ORDER BY id ASC')
        .then(result => {
            return result.rows.map((row) => { return new ShipWithId(row.id, new Ship(row.name, row.speed)) });
        }).catch(console.log);
})

/**
 * For tests
 * Deletes a Ship
 * @type {Function}
 */
const deleteShip = ((ship) => {

    return pgPool.query('DELETE FROM ships WHERE id = $1', [ship.id])
        .then((success, error) => {
            if (!error) return true
            else return false
        }).catch(console.log);
})

module.exports = {
    createShip,
    getAllShips,
    deleteShip
}