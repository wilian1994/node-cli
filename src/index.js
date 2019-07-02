const ContextStrategy  = require('./db/strategies/base/contexStrategy')
const Postgres = require('./db/strategies/postgres')

const contextPostgres = new ContextStrategy(new Postgres())
contextPostgres.create();