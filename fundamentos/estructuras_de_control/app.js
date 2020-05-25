let hora = 3;
if (hora >= 3 && hora <= 11) {
    console.log('Buenos días');
} else if (hora > 11 && hora <= 18) {
    console.log('buenas tardes');
} else if (hora > 18 && hora <= 24 || hora > 0 && hora <= 2) {
    console.log('Buenas noches');
} else {
    'Hola no válida'
}


//operador ternario
const logueado = false;
console.log(logueado === true ? 'Te logueaste' : 'No te logueaste');



//switch

const metodoPago = 'cuerpo';
switch (metodoPago) {
    case 'efectivo':
        console.log(`El usuario pagó cone ${metodoPago}`);
        break;
    case 'cheque':
        console.log(`El usuario pagó cone ${metodoPago}`);
        break;
    case 'tarjeta':
        console.log(`El usuario pagó cone ${metodoPago}`);
        break;
    default:
        console.log('método de pago no soportado');
        break;
}

let mes;
switch (new Date().getMonth()) {
    case 0:
        mes = 'Enero';
        break;
    case 1:
        mes = 'Febrero';
        break;
    case 2:
        mes = 'Marzo';
        break;
    case 3:
        mes = 'Abril';
        break;
    case 4:
        mes = 'Mayo';
        break;
    case 5:
        mes = 'Junio';
        break;
    case 6:
        mes = 'Julio';
        break;
    case 7:
        mes = 'Agosto';
        break;
    case 8:
        ms = 'Septiembre';
        break;
    case 9:
        mes = 'Octubre';
        break;
    case 10:
        mes = 'Noviembre';
        break;
    case 11:
        mes = 'Diciembre';
        break;
}

console.log(`Este mes es ${mes}`);