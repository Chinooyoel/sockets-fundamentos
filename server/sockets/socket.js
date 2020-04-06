const { io } = require("../server.js");

io.on("connection", ( cliente ) => {
    console.log("Usuario conectado")

    cliente.on("disconnect", () => {
        console.log("Usuario desconectado")
    })

    //escuchar al cliente
    cliente.on("enviarInformacion", ( mensaje, callback ) => {
        console.log(mensaje);

        cliente.broadcast.emit("enviarMensaje", mensaje)
        /*
        if( mensaje.usuario ){
            callback("TODO SALIO BIEN!!!!!!!! :D")
        }else{
            callback("TODO SALIO MAL!!!!! D:")
        }
        */
    })

    //enviar al cliente
    cliente.emit("enviarMensaje", {
        usuario : "administrador",
        mensaje: "Bienvenido al chat"
    })
})