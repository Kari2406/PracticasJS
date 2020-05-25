//En JS existe un objeto llamado Date
const diaHoy = new Date();

let valor;
//mes
valor = diaHoy.getMonth();
//dìa
valor = diaHoy.getDate();
valor = diaHoy.getDay();
valor = diaHoy.getFullYear();
valor = diaHoy.getMinutes();
//obtener milisegundos desde 1970
valor = diaHoy.getTime();
console.log(valor);