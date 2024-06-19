const mensajes = [
    "¡Hola! Bienvenido a nuestra página.",
    "¡Saludos! Esperamos que disfrutes tu visita.",
    "¡Hola, amigo! ¿Cómo estás hoy?",
    // Agrega más mensajes aquí
];

const mensajeAleatorio = mensajes[Math.floor(Math.random() * mensajes.length)];

document.getElementById("mensaje-bienvenida").innerHTML = `<p>${mensajeAleatorio}</p>`;

function calcularDiasVividos() {
    const fechaNacimientoInput = document.getElementById("fecha-nacimiento").value;
    const fechaNacimiento = new Date(fechaNacimientoInput);

    const fechaActual = new Date();
    const diferenciaEnMilisegundos = fechaActual - fechaNacimiento;
    const diasVividos = Math.floor(diferenciaEnMilisegundos / (1000 * 60 * 60 * 24));

    alert(`Has vivido aproximadamente ${diasVividos} días.`);
}