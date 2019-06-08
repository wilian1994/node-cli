const Commander = require('commander')
const Database = require('./database')
const Heroi = require('./heroi')

async function main(params){

    Commander
        /*
            Listando a ajuda para escolha das opcoes
            node index.js --help
        */
        .version('v1')
        .option('-n, --nome [value]', "Nome do Heroi")
        .option('-p, --poder [value]', "Poder do Heroi")
        .option('-i, --id [value]', "Poder do Heroi")
        
        .option('-c, --cadastrar', "Cadastrar um Heroi")
        .option('-l, --listar', "Listar um Heroi")
        .option('-r, --remover', "Remover um Heroi")
        .option('-a, --atualizar [value]', "Atualizar um Heroi")

        .parse(process.argv)
    const heroi = new Heroi(Commander)    

    try {
        if(Commander.cadastrar){
            //removendo um item do json
            delete heroi.id
            const resultado = await Database.cadastrar(heroi)
            if(!resultado){
                console.error('Heroi cadastrado com sucesso!')
                return;
            }
        }

        if(Commander.listar){
            const resultado = await Database.listar()
            console.log(resultado)
            return;
        }

        if(Commander.remover){
            const resultado = await Database.remover(heroi.id)

            if(!resultado){
                console.error('Não foi possivel remover um heroi')
            }

            console.log('Heroi removido com sucesso')
        }

        if(Commander.atualizar){
            const idParaAtualizar = parseInt(Commander.atualizar)
            const dado = JSON.stringify(heroi)
            const heroiAtualizar = JSON.parse(dado)
            const resultado = await Database.atualizar(idParaAtualizar, heroiAtualizar)
            if(!resultado){
                console.error('Não foi possível atualizar um heroi')
                return
            }
            console.log('Heroi atualizado com sucesso!')
        }

    } catch (error) {
        console.error('DEU RUIM', error)
    }
}

main()