/**
 * Modelo de dados para a construção
 * Clientes
**/

// Importação dos recursos framework mongoose
const { model, Schema } = require('mongoose'); // Corrigido para usar 'Schema' com "S" maiúsculo

// Criação da estrutura da coleção clientes
const clienteSchema = new Schema({
    nomeCliente: {
        type: String
    },
    foneCliente: {
        type: String
    },
    cpf: {
        type: String,
        unique: true,
        index: true
    },

    dataCadastro: {
        type: Date,
        default: Date.now
    
    }
}, {versionKey: false}); // Não versionar os dados armazenados

// Exportar para o main o modelo do banco de dados
// OBS: Clientes será o nome da coleção
module.exports = model('Clientes', clienteSchema);
