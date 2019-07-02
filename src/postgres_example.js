//npm install sequelize pg-hstore pg
const Sequelize = require('sequelize')
const driver = new Sequelize()(
    'herois',
    'wiliansilva',
    '123456',
    {
        host: 'localhost',
        dialect: 'postgres',
        quoteIdentifiers: false,
        operatorsAliases: false
    }
)

async function main() {
    const Herois = driver.define('herois', {
        id: {
            type: Sequelize.INTEGER,
            required: true,
            primaryKey: true,
            autoIncrement: true
        },
        nome: {
            type: Sequelize.STRING,
            required: true
        },
        poder: {
            type: Sequelize.STRING,
            required: true
        }
    },{
        tableName: 'TB_HEROIS',
        freezeTableName: false,
        timeStamp: false
    })
    await Herois.sync()
}

main()