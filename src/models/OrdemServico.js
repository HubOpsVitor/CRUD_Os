// Importação dos recursos do framework mongoose
const { model, Schema } = require('mongoose');

// Criação da estrutura da coleção ordem_servicos
const osSchema = new Schema({
    numeroOS: {
        type: String,
        unique: true,
        required: true
    },
    data: {
        type: Date,
        default: Date.now
    },
    nomeCliente: {
        type: String,
        required: true
    },
    foneCliente: {
        type: String,
        required: true
    },
    cpf: {
        type: String,
        unique: true,
        required: true
    },
    statusOS: {
        type: String,
        enum: ['Aberta', 'Em andamento', 'Aguardando peças', 'Finalizada', 'Cancelada'],
        default: 'Aberta'
    },
    equipamento: {
        type: String,
        required: true
    },
    numeroSerie: {
        type: String
    },
    problemaRelatado: {
        type: String
    },
    diagnosticoTecnico: {
        type: String
    },
    tecnico: {
        type: String
    },
    valor: {
        type: Number,
        default: 0
    }
}, { versionKey: false }); // Não versionar os dados armazenados

// Exportar o modelo do banco de dados
// OBS: "ordem_servicos" será o nome da coleção no MongoDB
module.exports = model('OrdemServico', osSchema);
