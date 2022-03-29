const route = require('express').Router();

route.get('/example', (req, res) => {
    res.json({ message: 'This is a message' });
});

module.exports = route;