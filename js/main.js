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
 * Funcion para la logica de suma de puntos
 */
function sumarPunto(e, team) {
    e.stopPropagation();
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