for (let i = 0; i < 10; i++) {
    if (i == 6) {
        console.log('voy en el 6');
        continue;
    }
    console.log(`${i}`);
}




//foreach

const pendientes = ['tarea', 'comer', 'proyecto', 'aprender js'];

pendientes.forEach(function (item) {
    console.log(`Hacer: ${item}`);
});


//map