const Icrud = require('./interface/interfaceCrud')


class Postgres extends Icrud {
    constructor(){
        super()
    }

    isConnected(){
        
    }

    create(item){
        console.log(('salvou no postgres'))
    }
}

module.exports = Postgres