function carrusel() {
    // Obtener el elemento del banner
    var banner = document.getElementById("banner");

    // Array con las rutas de las imágenes del carrusel
    var imagenes = [
        "./img/baner1.jpg",
        "./img/baner2.jpg",
        "./img/baner3.jpg",
        "./img/baner4.jpg"
    ];

    // Contador para controlar la imagen actual
    var contador = 0;

    // Función para cambiar la imagen del banner y actualizar el contador
    function cambiarImagen() {
        // Cambiar la imagen del banner
        banner.src = imagenes[contador];

        // Incrementar el contador para la próxima imagen
        contador++;

        // Si el contador llega al final del array, volver al inicio
        if (contador >= imagenes.length) {
            contador = 0;
        }

        // Llamar a la función cambiarImagen de nuevo después de un cierto intervalo de tiempo (en milisegundos)
        setTimeout(cambiarImagen, 1000); // Vuelve a llamar a la función cambiarImagen cada 1000 ms (1 segundo)
    }

    // Llamar a la función cambiarImagen para mostrar la primera imagen
    cambiarImagen();
}

// Llamar a la función carrusel para iniciar el carrusel cuando se carga la aplicación
document.addEventListener("DOMContentLoaded", function() {
    carrusel();
});
