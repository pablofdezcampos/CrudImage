const route = require('express').Router();

const { getInitializationData, getOneShirt, getShirts, newShirt } = require('../controller/shirt.controller');

route.get('/getInitializationData', getInitializationData);
route.get('./getOneShirt/:id', getOneShirt);
route.get('./getShirts', getShirts);

route.post('./newShirt', newShirt);

module.exports = route;