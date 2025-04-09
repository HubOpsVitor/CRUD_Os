// Importação dos recursos do framework mongoose
const { model, Schema } = require('mongoose');

// Criação da estrutura da coleção ordem_servicos
const osSchema = new Schema({
    numeroOS: {
        type: String,
        unique: true,
    },
    nomeCliente: {
        type: String,
    },
    foneCliente: {
        type: String,
    },
    cpf: {
        type: String,
    },
    statusOS: {
        type: String
    },
    equipamento: {
        type: String,
    },
    numeroSerie: {
        type: String
    },
    problemaRelatado: {
        type: String
    },
    tecnico: {
        type: String
    },
    valor: {
        type: String
    },
    data: {
        type: Date,
        default: Date.now
    }
}, { versionKey: false }); // Não versionar os dados armazenados

// Exportar o modelo do banco de dados
module.exports = model('OrdemServico', osSchema);
