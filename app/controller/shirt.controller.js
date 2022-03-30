const { connection, Factory } = require('../factory/query_factory');

async function getInitializationData(req, res) {
    console.log('Get Init Data');

    let sql_shirts = `select * from shirts`;
    const res_shirts = await Factory(sql_shirts);
    res.json({ shirts: res_shirts });
}


async function getOneShirt(req, res) {
    const { id } = req.params;
    let sql = `select * from shirts where id = ${parseInt(id)}`;
    const result = await Factory(sql);
    res.json(result);
}

async function getShirts(req, res) {
    let sql = 'select * from shirts';
    const result = await Factory(sql);
    res.json(result);
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