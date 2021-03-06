const Icrud = require('./../interface/interfaceCrud')

class ContextStrategy extends Icrud{
    constructor(strategy){
        super()
        this._database = strategy
    }

    create(item){
        return this._database.create(item)
    }

    read(item){
        return this._database.read(item)
    }
   
    delete(id,item){
        return this._database.delete(id, item)
    }

    delete(id){
        return this._database.delete(id)
    }

    isConnected(){
        return this._database.isConnected()
    }

}

module.exports = ContextStrategy