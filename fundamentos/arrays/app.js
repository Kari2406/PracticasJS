const meses = ['Enero', 'Febrero', 'Marzo', 'Abril'];

meses[4] = 'Mayo';
meses.push('Junio');
//añadir al inicio del arreglo
meses.unshift('Mes 0');

//encontrar elementos
//console.log(meses.indexOf('Abril'));


//eliminar un elemento de un arreglo
meses.pop();

// quitar elemento en el inicio
meses.shift();

//quitar un rango (el primer argumento indica en qué posición y el segundo cuántos elementos)
meses.splice(2, 1);

//revertir 
meses.reverse();

//console.log(meses);


//unir un arreglo con otro
let arreglo1 = [1, 2, 3],
    arreglo2 = [9, 8, 7];

console.log(arreglo1.concat(arreglo2));



const frutas = ['plátano', 'manzana', 'fresa', 'naranja', 'zanahoria'];
frutas.sort();
//console.log(frutas);



//MAP

let numbers = [4, 9, 16, 25];
let x = numbers.map(Math.sqrt)

console.log('numbers', numbers);
console.log('x', x);


//For each
//Ejecuta una función o sentencia por cada uno de los elementos

numbers.forEach(item => console.log(item));

numbers.forEach(number => console.log(number * 2));

