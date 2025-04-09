/**
 * Processo principal
 * Estudo do banco de dados MongoDB (CRUD)
 * @author Allan Vítor
 */

// Importação do módulo de conexão
const { conectar, desconectar } = require('./database.js')

// Importação do modelo de dados da OS
const ordemServicoModel = require('./src/models/OS.js')

// Função para cadastrar uma nova OS
const salvarOS = async (numeroOS, nomeCli, foneCli, cpfCli, equipamentoCli, numeroSerieCli, problemaCli, tecnicoCli, valorCli) => {
    try {
        const novaOS = new ordemServicoModel({
            numeroOS,
            nomeCliente: nomeCli,
            foneCliente: foneCli,
            cpf: cpfCli,
            equipamento: equipamentoCli,
            numeroSerie: numeroSerieCli,
            problemaRelatado: problemaCli,
            tecnico: tecnicoCli,
            valor: valorCli
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
const atualizarOS = async (id, nomeCliente, foneCliente, cpf, statusOS, equipamento, numeroSerie, problemaRelatado, diagnosticoTecnico, tecnico, valor) => {
    try {
        const osAtualizada = await ordemServicoModel.findByIdAndUpdate(
            id,
            {
                nomeCliente,
                foneCliente,
                cpf,
                statusOS,
                equipamento,
                numeroSerie,
                problemaRelatado,
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
    /* await salvarOS(
        "OS011",                     // numeroOS
        "Joana Silva",              // nomeCliente
        "11988887777",              // foneCliente
        "12345678901",              // cpf
        "Em andamento",            // statusOS
        "Notebook Dell Inspiron",  // equipamento
        "SN12345XYZ",              // numeroSerie
        "Tela nao liga",           // problemaRelatado
        "10",   // diagnosticoTecnico
        "Carlos Henrique",         // tecnico
        450                         // valor
    ); */



    // CRUD Read (listar todas as OS)
    //await listarOS()

    // CRUD Read (buscar OS pelo número)
    //await buscarOSPorNumero("OS011")

    // CRUD Read (buscar OS pelo CPF do cliente)
    // await buscarOSPorCPF("12345678905")

    // CRUD Update (atualizar OS)
   /* await atualizarOS(
 
         "67f6c6f3418ecf56fda88980",
         "Maria Silva",              // nomeCliente
         "11988887777",              // foneCliente
         "12345678901",              // cpf
         "Finalizada",            // statusOS
         "Notebook Dell Inspiron",  // equipamento
         "SN12345XYZ",              // numeroSerie
         "Tela nao liga",           // problemaRelatado
         "Precisa trocar a placa",                      // diagnosticoTecnico
         "Vitor Silva",         // tecnico
         450                         // valor
     ); */



    // CRUD Delete (excluir OS)
    //await excluirOS("67e45570d8e308619157c6de")

    await desconectar()
}

iniciarSistema()
