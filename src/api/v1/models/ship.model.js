module.exports.Ship = function Ship(name, speed) {
    this.name = name;
    this.speed = speed;
}

module.exports.ShipWithId = function ShipWithId(id, ship) {
    this.id = id;
    this.name = ship.name;
    this.speed = ship.speed;
}
