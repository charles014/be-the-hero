const Knex = require('knex');
const configuration = require('../../knexfile');

const connection = Knex.knex(configuration.development);

module.exports = connection;