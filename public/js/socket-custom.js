
var socket = io();

socket.on("connect", () => {
    console.log("Conectado al servidor");
})

socket.on("disconnect", () => {
    console.log("Se perdio la conexion con el servidor")
})

//enviar al servidor
socket.emit("enviarInformacion", {
    usuario: "yoel",
    mensaje: "hola perroo :D"
}, ( resp ) => {
    console.log("Respuesta del servidor: ", resp)
})

//Escuchar del servidor
socket.on("enviarMensaje", ( mensaje ) => {
    console.log("Servidor: ", mensaje);
})
