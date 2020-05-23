const { io } = require('../server');

io.on('connection', (cliente) => { //cliente-> contiene toda la informacion del pc o de la conexion que se establecio

    console.log('Usuario conectado');

    cliente.emit('enviarMensaje', {
        usuario: 'Admin',
        mensaje: 'Bienvenido pendejo'
    });

    cliente.on('disconnect', () => {
        console.log('Usuario desconectado');
    });

    // Escuchar al cliente
    cliente.on('enviarMensaje', (data, callback) => {

        console.log(data);

        //Broadcast para enviar a todo el mundo
        cliente.broadcast.emit('enviarMensaje', {
            usuario: data.usuario,
            mensaje: data.mensaje
        })

        // if (mensaje.usuario) {
        //     callback({
        //         resp: 'TODO OK'
        //     });
        // } else {
        //     callback({
        //         resp: 'TODO SALIO MAL!!!'
        //     });
        // }
    });
});