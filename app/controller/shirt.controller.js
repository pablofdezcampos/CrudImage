const { connection, Factory } = require('../factory/query_factory');

async function getInitializationData(req, res) {
    console.log('Get Init Data');
}

async function getOneShirt(req, res) {
    console.log('Get One Shirt');
}

async function getShirts(req, res) {
    console.log('Get All Shirts');
}

async function newShirt(req, res) {
    console.log('New shirt');
}


module.exports = {
    getInitializationData,
    getOneShirt,
    getShirts,
    newShirt
}