const { connection, Factory } = require('../factory/query_factory');

async function getInitializationData(req, res) {
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
    let sql = `select * from shirts`;
    const result = await Factory(sql);
    res.json(result);
}

async function newShirt(req, res) {
    const { body, file } = req;
    if (file) {
        let url = `http://localhost:8080/img/${file.filename}`;
        let sql = `insert into shirts(name, img_url, color) values
                   ${connection.escape(body.name)}, ${connection.escape(url)}, ${connection.escape(body.color)} `;
        const result = await Factory(sql); +
        res.json(result);
    }
}


module.exports = {
    getInitializationData,
    getOneShirt,
    getShirts,
    newShirt
}