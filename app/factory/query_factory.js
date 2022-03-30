const util = require('util');
const connection = require('../../config/connection');
const query = util.promisify(connection.query).bind(connection);

async function Factory(sql) {
    try {
        let sql_query = sql;
        const result = query(sql);
        return result;
    } catch (err) {
        console.log(`There was an error ${err}`);
        return err;
    }
}

module.exports = {
    Factory,
    connection
}