/**
 * Processo principal
 * Estudo do banco de dados MongoDB (CRUD)
 * @author Allan Vítor
 */

// Importação do módulo de conexão
const { conectar, desconectar } = require('./database.js')

// Importação do modelo de dados da OS
const ordemServicoModel = require('./src/models/OrdemServico.js')

// Função para cadastrar uma nova OS
const salvarOS = async (numeroOS, nomeCli, foneCli, cpfCli, equipamento, numeroSerie, problemaRelatado, tecnico, valor) => {
    try {
        const novaOS = new ordemServicoModel({
            numeroOS,
            nomeCliente: nomeCli,
            foneCliente: foneCli,
            cpf: cpfCli,
            equipamento,
            numeroSerie,
            problemaRelatado,
            tecnico,
            valor
        })
        await novaOS.save()
        console.log("Ordem de Serviço cadastrada com sucesso!")
    } catch (error) {
        console.log(error)
    }
}

// Função para listar todas as OS em ordem de data (mais recentes primeiro)
const listarOS = async () => {
    try {
        const ordens = await ordemServicoModel.find().sort({ data: -1 })
        console.log(ordens)
    } catch (error) {
        console.log(error)
    }
}

// Função para buscar OS pelo número
const buscarOSPorNumero = async (numero) => {
    try {
        const os = await ordemServicoModel.findOne({ numeroOS: numero })
        console.log(os)
    } catch (error) {
        console.log(error)
    }
}

// Função para buscar OS pelo CPF do cliente
const buscarOSPorCPF = async (cpf) => {
    try {
        const os = await ordemServicoModel.find({ cpf: cpf })
        console.log(os)
    } catch (error) {
        console.log(error)
    }
}

// Função para atualizar uma OS (usando o ID)
const atualizarOS = async (id, statusOS, diagnosticoTecnico, tecnico, valor) => {
    try {
        const osAtualizada = await ordemServicoModel.findByIdAndUpdate(
            id,
            {
                statusOS,
                diagnosticoTecnico,
                tecnico,
                valor
            },
            {
                new: true,
                runValidators: true
            }
        )
        console.log("Ordem de Serviço atualizada com sucesso!")
    } catch (error) {
        console.log(error)
    }
}

// Função para excluir uma OS
const excluirOS = async (id) => {
    try {
        await ordemServicoModel.findByIdAndDelete(id)
        console.log("Ordem de Serviço excluída com sucesso.")
    } catch (error) {
        console.log(error)
    }
}

//========================================================
// Execução principal do sistema
const iniciarSistema = async () => {
    console.clear()
    console.log("Estudo do MongoDB - Ordem de Serviço")
    console.log("-------------------------------------")
    await conectar()

    // CRUD Create (inserção no banco de dados)
    await salvarOS(
        "OS005",               // numeroOS
        "Leandro Ramos",       // nomeCliente
        "99999-1234",          // foneCliente
        "12345678912",         // cpf
        "Fechada",              // statusOS
        "Playstation 4",       // equipamento
        "D54321",              // numeroSerie
        "Fazendo muito barulho", // problemaRelatado
        380         // valor 

    );


    // CRUD Read (listar todas as OS)
    // await listarOS()

    // CRUD Read (buscar OS pelo número)
    // await buscarOSPorNumero("OS001")

    // CRUD Read (buscar OS pelo CPF do cliente)
    // await buscarOSPorCPF("12345678905")

    // CRUD Update (atualizar OS)
    /* await atualizarOS(

        "67e45f12e2246cb8a5d87b9a",
        "Finalizada",               // numeroOS
        "Leandro Pereira Ramos",       // nomeCliente
        "99999-1234",          // foneCliente
        "12345678912",         // cpf
        "Fechada",             // statusOS
        "Playstation 4",       // equipamento
        "D54321",              // numeroSerie
        "Fazendo muito barulho", // problemaRelatado
        380                    // valor
    ); */



    // CRUD Delete (excluir OS)
    //await excluirOS("67e45570d8e308619157c6de")

    await desconectar()
}

iniciarSistema()
