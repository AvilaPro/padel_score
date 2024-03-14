/**
 * Variables globales de utilidad
 */
var showHeader = true;

/**
 * Declaracion e inicializacion de variables
 */
var ptsTeam1 = 0;
var ptsTeam2 = 0;
let setsTeam1 = 0;
let setsTeam2 = 0;
let gamesTeam1 = 0;
let gamesTeam2 = 0;
let nameTeam1 = "Equipo A";
let nameTeam2 = "Equipo B";

/**
 * Evento de carga de la pagina
 */
// window.addEventListener("load", () => {
//     document.getElementById("spinner").style.display = "none";
// })
setTimeout(() => {
    document.getElementById("spinner").style.display = "none";
    funcion();
}, 1000);

/**
 * Funcion para mostrar el Header
 */
function hiddenHeader() {
    document.getElementById("header").style.display = "flex";
    document.getElementById("showHeader").style.display = "none";
    showHeader = true;
}

document.getElementById("btnName1").addEventListener("click", () => {
    formNameTeam(1);
});
document.getElementById("btnName2").addEventListener("click", () => {
    formNameTeam(2);
});

/**
 * Funcion para mostrar el formulario de cambio de nombre del equipo
*/
function formNameTeam(n){
    let f = document.nameTeam;
    f.number.value = n;
    f.style.display = "block";
}

/**
 * Funcion para cambiar el nombre del Team
 */
function changeName(){
    let newName = document.nameTeam.name.value;
    let number = document.nameTeam.number.value;
    if (newName != ""){
        if (number == 1) {
            document.getElementById("name1").innerHTML = newName;
        }
        if (number == 2) {
            document.getElementById("name2").innerHTML = newName;
        }
    }
    document.nameTeam.reset();
    document.nameTeam.style.display = "none";
}
/**
 * Funcion para la logica de suma de puntos
 */
function sumarPunto(e, team) {
    e.stopPropagation();
    if (showHeader) {
        document.getElementById("header").style.display = "none";
        document.getElementById("showHeader").style = "display: flex; color: red;";
        showHeader = !showHeader;
    }
    if (team == 1) {
        pts1 = document.getElementById("pts1");
        games1 = document.getElementById("games1");
        ptsTeam1++;
        // alert("Los puntos del team 1 son: " + ptsTeam1);
        switch (ptsTeam1) {
            case 1:
                pts1.innerHTML = "15";
                break;
            case 2:
                pts1.innerHTML = "30";
                break;
            case 3:
                pts1.innerHTML = "40";
                break;
            case 4:
                pts1.innerHTML = "0";
                ptsTeam1 = 0;
                gamesTeam1++;
                games1.innerHTML = gamesTeam1.toString();
                break;

            default:
                break;
        }

    } else {
        if (team == 2) {
            pts2 = document.getElementById("pts2");
            games2 = document.getElementById("games2");
            ptsTeam2++;
            // alert("Los puntos del team 2 son: " + ptsTeam2);
            switch (ptsTeam2) {
                case 1:
                    pts2.innerHTML = "15";
                    break;
                case 2:
                    pts2.innerHTML = "30";
                    break;
                case 3:
                    pts2.innerHTML = "40";
                    break;
                case 4:
                    pts2.innerHTML = "0";
                    ptsTeam2 = 0;
                    gamesTeam2++;
                    games2.innerHTML = gamesTeam2.toString();
                    break;
                default:
                    break;
            }
        }
    }
}

function capturarEvento(e) {
    e.preventDefault(); 
}

function evitar(e) {
    e.preventDefault();
    e.stopPropagation();
}

/**
 * Clase 2 Cap 6
 */
//Probando: open, write, close
function testOpen() {
    document.open();
    document.write("<h1>Hola Mundo</h1>");
    document.close();
}
function inner() {
    let auxInner = document.body.innerHTML;
    document.body.innerHTML = "<h1>Hola Mundo</h1>" + auxInner;
}
/**
 * Clase 2 Cap 7
 */
function manejarApertura() {
    if(window.opener != null){
        document.body.innerHTML += '\n <button onclick="window.close()" class="btnHeader">Cerrar</button><br><button onclick="window.opener.location=`https://www.cadif1.com`;window.close();" class="btnHeader">Cambiar index</button>'
    }
}

// Clase 4
var funcion = function () {
    console.log("algo");
}
//Elemento section: id: seccion2
var seccion2 = document.getElementById("seccion2");
var resultado = [];

seccion2.onclick = () => {
    console.log("click en seccion 2");
}
window.addEventListener("DOMContentLoaded", () => {
    fetch("https://rickandmortyapi.com/api/character").
    then(r => r.json()).
    then(data => {
      console.log(data);
      resultado = data.results;
      console.log(resultado);
    }).
    then(() => {
        //crear la interfaz
        resultado.forEach(e => {
            let vida = (e.status == "Alive") ? 'green' : 'red';
            if(e.origin.name == 'unknown'){
                e.origin.name = 'Desconocido'
            }
            // if (e.origin.name == 'unknown') {
            //     e.origin.name = 'Desconocido'
            // }
            seccion2.innerHTML += `
            <div class="tarjetas">
                <div class="tarj-title">${e.name}</div>
                <div class="tarj-foto">
                    <img src="${e.image}" style="width: 100%; height: 100%;">
                </div>
                <div class="tarj-contenido">
                    <h5>Especie: ${e.species}</h5>
                    <h5>Genero: ${e.gender}</h5>
                    <h5 style="color: ${vida}">Status: ${e.status}</h5>
                    <h5>Origen: ${e.origin.name}</h5>
                </div>
            </div>
            `
        });
    })
})

document.getElementById("busqueda").addEventListener("keyup", (ev) => {
    console.log(ev.target.value);
    console.log(resultado);
    let filtrado = resultado.filter(e => e.name.includes(ev.target.value));
    console.log(filtrado);
    if(filtrado.length > 0){
        seccion2.innerHTML = '';
        filtrado.forEach(e => {
            let vida = (e.status == "Alive") ? 'green' : 'red';
            if(e.origin.name == 'unknown'){
                e.origin.name = 'Desconocido'
            }
            // if (e.origin.name == 'unknown') {
            //     e.origin.name = 'Desconocido'
            // }
            seccion2.innerHTML += `
            <div class="tarjetas">
                <div class="tarj-title">${e.name}</div>
                <div class="tarj-foto">
                    <img src="${e.image}" style="width: 100%; height: 100%;">
                </div>
                <div class="tarj-contenido">
                    <h5>Especie: ${e.species}</h5>
                    <h5>Genero: ${e.gender}</h5>
                    <h5 style="color: ${vida}">Status: ${e.status}</h5>
                    <h5>Origen: ${e.origin.name}</h5>
                </div>
            </div>
            `
        });
    }
})
