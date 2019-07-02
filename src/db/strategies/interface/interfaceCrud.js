class NotImplementadException extends Error {
    constructor(){
        super("Not Implemented Exception")
    }
}

class Icrud{
    create(item){
        throw new NotImplementadException()
    }

    read(query) {
        throw new NotImplementadException()
    }

    update(id, item) {
        throw new NotImplementadException()
    }

    delete(id){
        throw new NotImplementadException()
    }

    isConnected() {
        throw this._database.isConnected()
    }
}

module.exports = Icrud