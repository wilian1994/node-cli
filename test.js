//trazendo somente informações que precisamos
const {
    deepEqual, 
    ok
} = require('assert')

const database = require('./database')

const DEFAULT_ITEM_CADASTRAR = {
    nome: 'Flash',
    poder: 'Speed',
    id: 1
}

describe('Suite de manipulação de Herois', () =>{

    it('deve pesquisar um heroi, usando os arquivos', async() => {
        const expected = DEFAULT_ITEM_CADASTRAR
        const [resultado] = await database.listar(expected.id)
        console.log(resultado);
        
        deepEqual(resultado, expected)
    })
    
    // it('deve cadastrar um heroi, usando os arquivos', async() => {
    //     const expected = {}
        
    //     ok(null, expected)
    // })
})