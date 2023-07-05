// TODO: Crear modelo de datos de Reserva
const { sequelize, Model, DataTypes} = require('../database/database')

const Reserva = sequelize.define('reserva', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    nombre: {
        type: DataTypes.STRING,
        require: true
    },
    apellido: {
        type: DataTypes.STRING,
        require: true
    },
    origen: {
        type: DataTypes.STRING,
        require: true
    },
    destino: {
        type: DataTypes.STRING,
        require: true
    },
    fechaSolicitud: {
        type: DataTypes.STRING,
        require: true,
        default: new Date().toLocaleDateString('es', { weekday: 'long', year: 'numeric', month: 'short', day: 'numeric' })
    },
    fechaSolicitada: {
        type: DataTypes.STRING,
        require: true,
    },
    codigoReserva: {
        type: DataTypes.INTEGER,
        require: true
    },
    estado: {
        type: DataTypes.BOOLEAN,
        default: true
    }
});

Reserva.sync()

module.exports = Reserva