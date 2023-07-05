const form = document.querySelector('form');
const id = form.dataset.id;

let nombre = document.getElementById('nombre')
let apellido = document.getElementById('apellido')
let origen = document.getElementById('origen')
let destino = document.getElementById('destino')
let fechaSolicitada = document.getElementById('fechaPartida')
let codigoReserva = document.getElementById('codigoReserva')
let costoReserva = document.getElementById('costoReserva')


const obtenerReserva = async (id) => {
    const reserva = await fetch(`http://localhost:3000/api/reservas/${id}`);
    return await reserva.json();
}

const editarReserva = async(e)=>{

    e.preventDefault();

    let nombre = document.getElementById('nombre').value
    let apellido = document.getElementById('apellido').value
    let origen = document.getElementById('origen').value
    let destino = document.getElementById('destino').value
    let fechaSolicitada = document.getElementById('fechaPartida').value
    let codigoReserva = document.getElementById('codigoReserva').value
    let costoReserva = document.getElementById('costoReserva').value

    const actualizarReserva = await fetch(`http://localhost:3000/api/reservas/${id}`,{
        method: 'PUT',
        body: JSON.stringify({nombre, apellido, origen, destino, fechaSolicitada, codigoReserva, costoReserva}),
        headers: {
            'Content-type': 'application/json'
        }
    });

    const res = await actualizarReserva.json();

    if(actualizarReserva.ok){
        alert(res.mensaje);
        return location.href = '/reservas';
    }

}

form.addEventListener('submit', editarReserva);


document.addEventListener('DOMContentLoaded', async () => {
    const reserva = await obtenerReserva(id);


    nombre.value =  reserva.nombre
    apellido.value = reserva.apellido
    origen.value = reserva.origen
    destino.value =  reserva.destino
    fechaSolicitada.value = reserva.fechaSolicitada
    codigoReserva.value = reserva.codigoReserva
    costoReserva.value = reserva.costoReserva
    
});