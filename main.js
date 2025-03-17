/*
 * Processo principal
 * Estudo do Banco de Dados MongoDB (CRUD)
 * @author Allan Vítor
*/

// Importação do módulo de conexão
const { conectar, desconectar } = require('./database.js')

// Importação do modelo de dados do cliente
const clienteModel = require('./src/models/Clientes.js')

// Função para cadastrar um novo cliente
// ATENÇÃO! Para trabalhar com banco de dados usar sempre async e try-catch
const salvarCliente = async (nomeCli, foneCli, cpfCli) => {
    try {
        // Setar a estrutura de dados com os valores
        // OBS: Usar os mesmos nomes da estrutura do modelo de dados
        const novoCliente = new clienteModel({
            nomeCliente: nomeCli,
            foneCliente: foneCli,
            cpf: cpfCli
        })
        
        // Salvar os dados no banco
        await novoCliente.save()
        console.log("Cliente adicionado com sucesso")
    } catch (error) {
        console.log(error)
    }
}

//=========================================================================================================

const iniciarSistema = async () => {
    console.clear()
    console.log("Estudo do MongoDB")
    console.log("-----------------------------")
    await conectar()

    // Chama a função para salvar um cliente (pode passar dados como exemplo)
    await salvarCliente('Vítor Allan', '987654321', '112.416.719-00')

    // Desconectar após realizar a operação
    await desconectar()
}

iniciarSistema()
