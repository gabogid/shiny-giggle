document.getElementById("routeForm").addEventListener("submit", function(event) {
    event.preventDefault();
    const route = document.getElementById("route").value;
    const date = document.getElementById("date").value;
    const passengerName = document.getElementById("passengerName").value;
    const passengerLastName = document.getElementById("passengerLastName").value;
    const documentNumber = document.getElementById("documentNumber").value;
    const destination = document.getElementById("destination").value;
    const ticketPrice = document.getElementById("ticketPrice").value;
  
    const reservationInfo = `Confirmación de Reserva\n\nRuta seleccionada: ${route}\nFecha de viaje: ${date}\nNombre de Pasajero: ${passengerName}\nApellidos: ${passengerLastName}\nDNI: ${documentNumber}\nDestino: ${destination}\nPrecio del Pasaje: ${ticketPrice}`;
  
    // Crear un archivo .txt y descargalo localmente
    const blob = new Blob([reservationInfo], { type: 'text/plain' });
    const a = document.createElement('a');
    a.href = URL.createObjectURL(blob);
    a.download = 'reserva.txt';
    a.style.display = 'none';
    document.body.appendChild(a);
    a.click();
  });
  