const ctrlReservas = {};
const Reserva = require('../models/Reserva')
// ==========================================
//         Rutas para CRUD de reservas
// ==========================================

// Obtener todas las reservas
ctrlReservas.obtenerReservas = async (req, res)=>{

    try {
        const reservas = await Reserva.findAll({
            where: {
                estado: true
            }
        })

        res.json(reservas)
    } catch (error) {
        console.log(error);
        res.status(400).json({
            mensaje: 'Error al solicitar reservas'
        })
    }

}
// Obtener una reserva
ctrlReservas.obtenerReserva = async (req, res)=>{

    const id = req.params.id

    try {
        const reserva = await Reserva.findOne({
            where: {
                id,
                estado: true
            }
        })


        if(!reserva){
            return res.json({
                mensaje: 'No hay una reserva con ese id'
            })
        }
        
        res.json(reserva)
    } catch (error) {
        console.log(error);
        res.status(400).json({
            mensaje: 'Error al solicitar la reservaa'
        })
    }

}
// Crear una reserva
ctrlReservas.crearReserva = async (req, res)=>{

    const {nombre, apellido, origen, destino, fechaSolicitada, codigoReserva, costoReserva} = req.body

    try {
        
        await Reserva.create({
            nombre, apellido, origen, destino, fechaSolicitada, codigoReserva, costoReserva
        })

        res.json({
            mensaje: 'Reserva creada'
        })
    } catch (error) {
        console.log(error);
        res.status(400).json({
            mensaje: 'Error al crear reserva'
        })
    }

}
// Actualizar una reserva
ctrlReservas.actualizarReserva = async (req, res)=>{
    const id = req.params.id

    const {nombre, apellido, origen, destino, fechaSolicitada, codigoReserva, costoReserva} = req.body

    try {
        await Reserva.update({
            nombre, apellido, origen, destino, fechaSolicitada, codigoReserva, costoReserva
        },{
            where: {
                id,
                estado: true
            }
        })


        res.json({
            mensaje: 'Reserva actualizada'
        })

    
      
    } catch (error) {
        console.log(error);
        res.status(400).json({
            mensaje: 'Error al actualizar la reserva'
        })
    }

}
// Eliminar una reserva de forma lógica
ctrlReservas.eliminarReserva = async (req, res)=>{

    const id = req.params.id

    try {
        await Reserva.update({
            estado: false
        }, {
            where: {
                id,
                estado: true
            }
        })

        res.json({
            mensaje: 'Reserva eliminada'
        })
    } catch (error) {
        console.log(error);
        res.status(400).json({
            mensaje: 'Error al eliminar reserva'
        })
    }

}

module.exports = ctrlReservas;