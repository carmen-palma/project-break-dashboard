function actualizarReloj() {
    const ahora = new Date();
    let horas = ahora.getHours();
    let minutos = ahora.getMinutes();
    let segundos = ahora.getSeconds();

   
    horas = (horas < 10 ? "0" : "") + horas;
    minutos = (minutos < 10 ? "0" : "") + minutos;
    segundos = (segundos < 10 ? "0" : "") + segundos;

    const horaActual = `${horas}:${minutos}:${segundos}`;
    const fechaActual = `${ahora.getDate()}/${ahora.getMonth() + 1}/${ahora.getFullYear()}`;

    document.getElementById("clock").innerHTML = `
        <p>${horaActual}</p>
        <p>${fechaActual}</p>
    `;

   
    const hora = ahora.getHours();
    let mensaje = "";
    if (hora >= 0 && hora < 7) {
        mensaje = "Es hora de descansar. Apaga y sigue mañana";
    } else if (hora >= 7 && hora < 12) {
        mensaje = "Buenos días, desayuna fuerte y a darle al código";
    } else if (hora >= 12 && hora < 14) {
        mensaje = "Echa un rato más pero no olvides comer";
    } else if (hora >= 14 && hora < 16) {
        mensaje = "Espero que hayas comido";
    } else if (hora >= 16 && hora < 18) {
        mensaje = "Buenas tardes, el último empujón";
    } else if (hora >= 18 && hora < 22) {
        mensaje = "Esto ya son horas extras, piensa en parar pronto";
    } else {
        mensaje = "Buenas noches, es hora de pensar en parar y descansar";
    }

  
    document.getElementById("message").innerHTML = mensaje;
}


setInterval(actualizarReloj, 1000);
actualizarReloj();