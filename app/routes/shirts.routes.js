const route = require('express').Router();

const storage = require('../../config/multer');
const multer = require('multer');
const uploader = multer({ storage });

const { getInitializationData, getOneShirt, getShirts, newShirt } = require('../controller/shirt.controller');

route.get('/getInitializationData', getInitializationData);
route.get('./getOneShirt/:id', getOneShirt);
route.get('./getShirts', getShirts);

route.post('./newShirt', uploader.single('file'), newShirt);

module.exports = route;