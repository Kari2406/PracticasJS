//crear objeto

/* const persona = {
    nombre: 'Miguel',
    apellido: 'Martínez',
    profesion: 'Diseñador gráfico',
    email: 'correo@correo.com',
    edad: 25,
    musica: ['rock', 'latin', 'grupero'],
    hogar: {
        ciudad: 'CDMX',
        pais: 'México'
    },
    nacimiento: function () {
        return new Date().getFullYear() - this.edad;
    }
}
persona.musica.push('alternativo')
/*  console.log(persona.nacimiento()); */



//Arreglo de objetos

/* const autos = [
    { modelo: 'Mustang', motor: 6.1 },
    { modelo: 'Camaro', motor: 6.2 },
    { modelo: 'Challenger', motor: 6.3 },
]; */

//Recorrer el arreglo para imprimir 
//en este caso el motor de cada objeto
/* for (let i = 0; i < autos.length; i++) {
    console.log(autos[i].motor );
} */

/* autos[0].modelo = 'Audi';
console.log(autos); */


let xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
        let myObj = JSON.parse(this.responseText);

        let movieYear = myObj.find(movie => movie.year === 1997);
        let movieDirector = myObj.find(movie => movie.director === 'Martin Scorsese');
        document.querySelector('#app').innerHTML = `
        <div class="card1">
            <div class="card-left">
                <img src="goodfather.jpg">
            </div>
            <div class="card-info">
                <div class="card-title">
                    <h1>${movieYear.title}</h1>
                    <p><strong>${movieYear.director}</strong></p>
                </div>
                <div class="card-details">
                    <ul>
                        <li>${movieYear.year}</li>
                        <li>${movieYear.duration}</li>
                        <li>${movieYear.genre}</li>
                    </ul>
                    <p>América, años 40. Don Vito Corleone (Marlon Brando) es el respetado jefe de una de las cinco
                        familias de la mafia de Nueva York. Tiene cuatro hijos: Connie (Talia Shire), el impulsivo Sonny
                        (James Caan), el pusilánime Fredo (John Cazale) y Michael (Al Pacino), que no quiere saber...<br><br>
                        <span><a href="https://www.filmaffinity.com/mx/film978961.html">Leer más</a></span>
                    </p>
                    <p><strong>Calificación: </strong>${movieYear.rate}</p>
                </div>
            </div>
        </div>
        <div class="card1">
        <div class="card-left">
            <img src="goodfellas.jpg">
        </div>
        <div class="card-info">
            <div class="card-title">
                <h1>${movieDirector.title}</h1>
                <p><strong>${movieDirector.director}</strong></p>
            </div>
            <div class="card-details">
                <ul>
                    <li>${movieDirector.year}</li>
                    <li>${movieDirector.duration}</li>
                    <li>${movieDirector.genre}</li>
                </ul>
                <p>Henry Hill, hijo de padre irlandés y madre siciliana, vive en Brooklyn y es fascinado por la vida que llevan los gángsters de su barrio, donde la mayoría de los vecinos son inmigrantes. Paul Cicero, el patriarca de la familia Pauline, es el protector del barrio. A los trece años, Henry abandona...<br><br>
                <span><a href="https://www.filmaffinity.com/mx/film809297.html">Leer más</a></span>
                </p>
                <p><strong>Calificación: </strong>${movieDirector.rate}</p>
            </div>
        </div>
    </div>
        `;
    }
};
xmlhttp.open("GET", "movies.json", true);
xmlhttp.send();
