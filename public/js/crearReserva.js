const form = document.querySelector('form')

const crearReserva = async(e)=>{

    e.preventDefault()

    const nombre = document.getElementById('nombre').value
    const apellido = document.getElementById('apellido').value
    const origen = document.getElementById('origen').value
    const destino = document.getElementById('destino').value
    const fechaSolicitada = document.getElementById('fechaPartida').value
    const codigoReserva = document.getElementById('codigoReserva').value
    const costoReserva = document.getElementById('costoReserva').value


    const crearReserva = await fetch('http://localhost:3000/api/reservas',{
        method: 'POST',
        body: JSON.stringify({nombre, apellido, origen, destino, fechaSolicitada, codigoReserva, costoReserva}),
        headers: {
            'Content-type': 'application/json'
        }
    })

    const res = await crearReserva.json()


    if(crearReserva.ok){
        alert(res.mensaje)
        return location.href = '/reservas'
    }

}

form.addEventListener('submit', crearReserva)