// TODO: Importar el modelo y controladores de reservas, luego vincular rutas con controladores

const { obtenerReservas, obtenerReserva, actualizarReserva, eliminarReserva, crearReserva } = require('../controllers/reserva.controllers');

const router = require('express').Router();


// ==========================================
//         Rutas para renderizar vistas
// ==========================================

// Obtener todas las reservas
router.get('/reservas', (req, res)=>{
    res.render('index')
})

// Formulario para crear una reserva
router.get('/reservas/crear', (req, res)=>{
    res.render('crearReserva')
})

// Formulario para actualizar una reserva
router.get('/reservas/editar/:id', (req, res)=>{
    const id = req.params.id

    res.render('editarReserva', {id})
})

// ==========================================
//         Rutas para CRUD de reservas
// ==========================================

// Obtener todas las reservas
router.get('/api/reservas', obtenerReservas);

router.get('/api/reservas/:id', obtenerReserva);
 
// Crear una reserva
router.post('/api/reservas', crearReserva);
 
// Actualizar una reserva
router.put('/api/reservas/:id', actualizarReserva);
 
// Eliminar una reserva de forma lógica
router.delete('/api/reservas/:id', eliminarReserva);

 
module.exports = router;