function hola(nombre, micallback){
    setTimeout(function() {
        console.log("hola," + nombre);
        micallback(nombre);
    }, 1000);
    }

function hablar(calllbackhablar){
    setTimeout(function() {
        console.log("bla bla bla... ");
        calllbackhablar();
    },1000);
}

function adios(nombre, otroCallback) {
    setTimeout(function() {
        console.log("Adios "+ nombre);
        otroCallback();
    }, 1000);
}

//-- 

console.log("iniciando proceso");
hola("Raynier", function (nombre) {
    hablar( function () {
        adios(nombre, function(){
        console.log("terminando proceso");
    })
    });
    
});

