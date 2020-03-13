const mongooes = require('mongoose');
const { Schema } = mongooes;

const Personal = new Schema({
    Nombres: { type: String, require: true },
    Documento: { type: String, require: true },
    fechaInicio: { type: String, require: true },
    fechaFin: { type: String, require: true },
    fechaInicioTurno: { type: String, require: true },
    fechaFinTurno: { type: String, require: true },
    fechaInicioExtra: { type: String, require: true },
    fechaFinExtra: { type: String, require: true },
    motivoExtra: { type: String, require: true }
});

module.exports = mongooes.model('personal', Personal);