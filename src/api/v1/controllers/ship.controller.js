exports.create = (req, res) => {
    const ship = new Ship(req.body.name, req.body.speed);
};

exports.findAll = (req, res) => {

};