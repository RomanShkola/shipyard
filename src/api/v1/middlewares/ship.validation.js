const { Validator } = require('express-json-validator-middleware');
const validator = new Validator({allErrors: true});

const ShipSchema = {
    type: 'object',
    properties: {
        id: {
            type: 'number'
        },
        name: {
            type: 'string'
        },
        speed: {
            type: 'string'
        },
    },
    required: ['name', 'speed']
}

const validateShipSchema = () => {
    return validator.validate({body: ShipSchema});
}

module.exports = { validateShipSchema };