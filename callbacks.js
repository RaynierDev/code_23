function hola(nombre, micallback){
    setTimeout(function() {
        console.log("hola," + nombre);
        micallback();
    }, 1000);
    }

function adios(nombre, otroCallback) {
    setTimeout(function() {
        console.log("Adios "+ nombre);
        otroCallback();
    }, 1000);
}

console.log("iniciando proceso")
hola("Raynier", function () {
    adios("raynier", function() {
        console.log("terminando proceso");
    })
    
});

