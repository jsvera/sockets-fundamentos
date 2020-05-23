var socket = io();
socket.on('connect', function() {
    console.log('Conectado al servidor');
});

// ON *escuchar* sucesos
socket.on('disconnect', function() { //cuando se pierde conexion con el servidor
    console.log('Perdimos conexion con el servidor');
});

// Enviar (emitir) informacion
socket.emit('enviarMensaje', {
    usuario: 'Jefferson',
    mensaje: 'Hola mundo'
}, function(resp) {
    console.log('RESPUESTA SERVER: ', resp);
});

// Escuchar informacion
socket.on('enviarMensaje', function(mensaje) {
    console.log('Servidor: ', mensaje);
});