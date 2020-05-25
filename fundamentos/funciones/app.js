//function declaration

function saludar(nombre = 'Visitante') {
    return `hola ${nombre}`;
}
let saludo;
saludo = saludar('');

//console.log(saludo);



//Function expression

const saludar2 = function (nombre = 'Visitante') {
    return `hola ${nombre}`;
}
//console.log(saludar2('Juan'));




//Método de propiedad 

const musica = {
    reproducir: function (id) {
        console.log(`Reproduciendo Canción no. ${id}`);
    },
    pausar: function () {
        console.log(`Pause a la música`);
    }
}

musica.reproducir(30);
musica.pausar();