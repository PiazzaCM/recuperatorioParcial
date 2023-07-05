const obtenerReservas = async()=>{
    const reservas = await fetch('http://localhost:3000/api/reservas');

    return await reservas.json()
}


const mostrarReservas = (reservas, tablaElement) => {

    let html = ''

    reservas.forEach(reserva => {
        html+= `<tr>
        <td>${reserva.nombre}</td>
        <td>${reserva.apellido}</td>
        <td>${reserva.origen}</td>
        <td>${reserva.destino}</td>
        <td>${reserva.fechaSolicitud}</td>
        <td>${reserva.fechaSolicitada}</td>
        <td>${reserva.codigoReserva}</td>
        <td>$${reserva.costoReserva}</td>
        <td><a href="/reservas/editar/${reserva.id}" class="btn btn-warning">Editar</a> <button class="btn btn-danger" data-id="${reserva.id}" onClick=eliminarReserva(event)>Eliminar</button></td>
        </tr>`
    });

    tablaElement.innerHTML = html

}


const eliminarReserva = async(e)=>{

    const id = e.target.dataset.id;

    const eliminar = await fetch(`http://localhost:3000/api/reservas/${id}`,{
        method: 'DELETE'
    });

    const res = await eliminar.json();

    if(eliminar.ok){
        alert(res.mensaje)
        return location.href = '/reservas';
    }

 }



window.addEventListener('DOMContentLoaded', async()=>{

    const tabla = document.getElementById('body')
    const reservas = await obtenerReservas()
console.log(reservas);
    mostrarReservas(reservas, tabla)
})