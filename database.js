/**
 * Módulo de conexão com o banco de dados
 * Uso do framework mongoose 
**/

// Importação do Mongoose
const mongoose = require('mongoose')
// configuração do acesso ao banco de dados
// ip/link - autenticação
//OBS: atlas (Obter via compass)
//Para criar um banco de dados personalizado basta escolher um nome no final da String da Url (ex:dballan)
const url = 'mongodb+srv://admin:123senac@projetoestudo.qp8p0.mongodb.net/Clientes'
// criar uma variável de apoio para a validação
let conectado = false
// método para conectar ao banco de dados
const conectar = async () => {
    // Verificar se já está conectado
    if (!conectado) {
        try {
            await mongoose.connect(url) // Conectar ao banco de dados
            conectado = true // setar a variável de conexão como verdadeira
            console.log("MongoDB conectado com sucesso!")
        } catch (error) {
            // Se o código do erro for igual a 8000 (erro autenticação)
            if (error.code = 8000) {
                console.log("Erro de autenticação")

            }  else {
             console.log(error)   
            }
            
        }
    } else {
        console.log("Já está conectado ao MongoDB.")
    }
}

// método para desconectar do banco de dados
// async executar a função de forma assíncrona
const desconectar = async () => {
    // Verificação (se estiver conectado, desconectar)
    if (conectado) {
        try {
            await mongoose.disconnect() // Desconectar do banco de dados
            conectado = false // setar a variável de conexão como falsa
            console.log("MongoDB desconectado com sucesso!")
        } catch (error) {
            console.log(error)
        }
    } else {
        console.log("Não há conexão para desconectar.")
    }
}

// Exportar para o main os métodos conectar e desconectar
module.exports = { conectar, desconectar }
