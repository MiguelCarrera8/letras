function importarScript(nombre) {
    var s = document.createElement("script");
    s.src = nombre;
    document.querySelector("head").appendChild(s);
}

function noJugar() {
    importarScript("soloMostrarPalabras.js")
}

function difEasy() {
    importarScript("difEasy.js");
}

function difMedium() {
    importarScript("difMedium.js");
}

function difHard() {
    importarScript("difHard.js");
}

function jugar() {
    tipoJuego = true;
    document.getElementById("dif").innerHTML = "Seleccione la dificultad : <br> <br>\
    <button onclick=\"difEasy()\">Fácil -> Longitud máxima : 5 </button><br> <br>\
    <button onclick=\"difMedium()\">Medio -> Longitud máxima : 7 </button><br> <br>\
    <button onclick=\"difHard()\">Difícil -> Longitud máxima : 9 </button><br> <br>"
}

function menuPrincipal() {
    nLetras = 1;
    letras = [];
    palabraUsuario = []
    document.getElementById("dif").innerHTML = "Seleccione el modo de juego : <br> <br>\
    <button onclick=\"jugar()\">Mostrar e introducir palabras</button> <br> <br>\
    <button onclick=\"noJugar()\">Mostrar palabras</button> <br> <br>\
    <button onclick=\"ayudaMenu()\">Ayuda</button>"
}

function ayudaMenu() {
    document.getElementById("dif").innerHTML = "En el modo de <strong>'Mostrar e introducir palabras'</strong> deberá pulsar los botones <strong>'VOCAL'</strong> y <strong>'CONSONANTE'</strong> para imprimir en pantalla <br> \
    vocales y consonantes aleatorias seleccionando la dificultad, y en el cuadro de texto <br>\
     del final deberá introducir las palabras que crea oportunas una por una,<br> pulsando enter cuando haya escrito la palabra y quiera introducirla. Para finalizar el juego y mostrar las soluciones deberá pulsar el botón <strong>'Mostrar soluciones'</strong><br> <br>\
    <button onclick=\"jugar()\">Mostrar e introducir palabras</button> <br> <br>\
    En el modo <strong>'Mostrar palabras'</strong> solamente deberá pulsar aleatoriamente los botones <strong>'VOCAL'</strong> y <strong>'CONSONANTE'</strong> y cuando <br>\
    esté el máximo de letras impresas en pantalla deberá pulsar el botón de <strong>'Mostrar Soluciones'</strong><br> <br>\
    <button onclick=\"noJugar()\">Mostrar palabras</button> <br> <br>";
}

function wait(dificultad, letras, callback) {
    setTimeout(function () {
        callback(dificultad, letras);
    }, 0);
}

function vocal(dificultad) {
    numero = Math.floor(Math.random() * 45);
    if (numero > 13) {
        letraVocal = 'a';
    } else if (12 > numero && numero < 26) {
        letraVocal = 'e';
    } else if (25 > numero && numero < 34) {
        letraVocal = 'o';
    } else if (33 > numero && numero < 40) {
        letraVocal = 'i'
    } else if (39 > numero) {
        letraVocal = 'u';
    }
    letras.push(letraVocal);
    letraVocal = letraVocal.toUpperCase();
    document.getElementById("letras").value += letraVocal;
    if (nLetras == dificultad) {
        document.getElementById("consonante").disabled = true;
        document.getElementById("vocal").disabled = true;
        document.getElementById("reset").disabled = false;
        wait(dificultad, letras, function (dificultad) {
            cargarSolucion(dificultad, letras);
        });
    }
    nLetras++;
}


function consonante(dificultad) {
    numero = Math.floor(Math.random() * 55);
    if (numero < 38) {
        if (numero < 8) {
            letraConsonante = 's';
        } else if (numero > 7 && numero < 15) {
            letraConsonante = 'r';
        } else if (numero > 14 && numero < 22) {
            letraConsonante = 'n';
        } else if (numero > 21 && numero < 28) {
            letraConsonante = 'd';
        } else if (numero > 27 && numero < 33) {
            letraConsonante = 'l';
        } else if (numero > 32) {
            letraConsonante = 'c';
        }
    } else if (numero > 37 && numero < 44) {
        consonantes = ['z', 'j', 'ñ', 'x', 'k', 'w', 'f', 'h', 'b', 'g', 'q', 'v', 'y'];
        number = Math.floor(Math.random() * consonantes.length);
        letraConsonante = consonantes[number];
    } else if (numero > 43 && 47) {
        letraConsonante = 'm';
    } else if (numero > 46 && 50) {
        letraConsonante = 'p';
    } else if (numero > 49) {
        letraConsonante = 't';
    }
    letras.push(letraConsonante);
    letraConsonante = letraConsonante.toUpperCase();
    document.getElementById("letras").value += letraConsonante;
    if (nLetras == dificultad) {
        document.getElementById("consonante").disabled = true;
        document.getElementById("vocal").disabled = true;
        document.getElementById("reset").disabled = false;
        wait(dificultad, letras, function (dificultad) {
            cargarSolucion(dificultad, letras);
        });
    }
    nLetras++;
}

function vaciarArray(array) {
    for (let i = 0; i < array.length;) {
        array.splice(i, 1);
    }
    return array;
}

function cargarSolucion(dificultad, letras) {
    soluciones = [];
    palabraUsuario = [];
    if (soluciones.length != 0) {
        vaciarArray(soluciones);
    }
    diccionario.forEach(element => {
        let j = 0;
        letras = letras.sort();
        let palabra = element.split("");
        palabra = palabra.sort();
        for (let i = 0; i < letras.length; i++) {
            if (i == 0) {
                j = i;
                if (letras[i] == palabra[j]) {
                    j++;;
                }
            } else {
                if (letras[i] == palabra[j]) {
                    j++;
                }
            }
        }
        if (j == palabra.length) {
            soluciones.push(element);
        }
    });
    if (soluciones.length == 0) {
        document.getElementById("buscarSoluciones").disabled = true;
        document.getElementById("noPalabras").innerHTML = "<h2>Lo siento, no hay palabras con esas letras, por favor reinicie el juego.<h2/>";
    } else {
        document.getElementById("buscarSoluciones").disabled = false;
    }
    vaciarArray(letras);
}

function buscarSoluciones(dificultad) {
    let cuatro = "";
    let cinco = "";
    let seis = "";
    let siete = "";
    let ocho = "";
    let nueve = "";
    for (let i = 0; i < soluciones.length; i++) {
        switch (soluciones[i].length) {
            case 4:
                if(cuatro.length == 0){
                    cuatro = soluciones[i];
                }else{
                    cuatro += ` , ${soluciones[i]}`;
                }
                break;
            case 5:
                if(cinco.length == 0){
                    cinco = soluciones[i];
                }else{
                    cinco += ` , ${soluciones[i]}`;
                }
                break;
            case 6:
                if(seis.length == 0){
                    seis = soluciones[i];
                }else{
                    seis += ` , ${soluciones[i]}`;
                }
                break;
            case 7:
                if(siete.length == 0){
                    siete = soluciones[i];
                }else{
                    siete += ` , ${soluciones[i]}`;
                }
                break;
            case 8:
                if(ocho.length == 0){
                    ocho = soluciones[i];
                }else{
                    ocho += ` , ${soluciones[i]}`;
                }
                break;
            case 9:
                if(nueve.length == 0){
                    nueve = soluciones[i];
                }else{
                    nueve += ` , ${soluciones[i]}`;
                }
                break;
        }
    }
    if (tipoJuego == false) {
        if (dificultad == 5) {
            document.getElementById("cuatro").innerHTML += cuatro;
            document.getElementById("cinco").innerHTML += cinco;
        } else if (dificultad == 7) {
            document.getElementById("cuatro").innerHTML += cuatro;
            document.getElementById("cinco").innerHTML += cinco;
            document.getElementById("seis").innerHTML += seis;
            document.getElementById("siete").innerHTML += siete;
        } else if (dificultad == 9) {
            document.getElementById("cuatro").innerHTML += cuatro;
            document.getElementById("cinco").innerHTML += cinco;
            document.getElementById("seis").innerHTML += seis;
            document.getElementById("siete").innerHTML += siete;
            document.getElementById("ocho").innerHTML += ocho;
            document.getElementById("nueve").innerHTML += nueve;
        }
        document.getElementById("buscarSoluciones").disabled = true;
    } else if (tipoJuego == true) {

        if (dificultad == 5) {
            document.getElementById("cuatro").innerHTML += cuatro;
            document.getElementById("cinco").innerHTML += cinco;

            document.getElementById("palabrasAcertadas").innerHTML = "<p id='Ucinco'>De 5 letras : </p>\
                                                                    <p id='Ucuatro'>De 4 letras : </p>";

        } else if (dificultad == 7) {
            document.getElementById("cuatro").innerHTML += cuatro;
            document.getElementById("cinco").innerHTML += cinco;
            document.getElementById("seis").innerHTML += seis;
            document.getElementById("siete").innerHTML += siete;

            document.getElementById("palabrasAcertadas").innerHTML = "<p id='Usiete'>De 7 letras : </p>\
                                                                    <p id='Useis'>De 6 letras : </p>\
                                                                    <p id='Ucinco'>De 5 letras : </p>\
                                                                    <p id='Ucuatro'>De 4 letras : </p>";
        
        } else if (dificultad == 9) {
            document.getElementById("cuatro").innerHTML += cuatro;
            document.getElementById("cinco").innerHTML += cinco;
            document.getElementById("seis").innerHTML += seis;
            document.getElementById("siete").innerHTML += siete;
            document.getElementById("ocho").innerHTML += ocho;
            document.getElementById("nueve").innerHTML += nueve;

            document.getElementById("palabrasAcertadas").innerHTML = "<p id='Unueve'>De 9 letras : </p>\
                                                                    <p id='Uocho'>De 8 letras : </p>\
                                                                    <p id='Usiete'>De 7 letras : </p>\
                                                                    <p id='Useis'>De 6 letras : </p>\
                                                                    <p id='Ucinco'>De 5 letras : </p>\
                                                                    <p id='Ucuatro'>De 4 letras : </p>";

        }
        document.getElementById("buscarSoluciones").disabled = true;

        let aciertos = 0;
        let acertadas = [];
        for (let i = 0; i< palabraUsuario.length;i++){
            for(let j = 0; j < soluciones.length; j++){
                if(palabraUsuario[i] == soluciones[j]){
                    aciertos++;
                    acertadas.push(palabraUsuario[i]);
                }
            }
        }

        document.getElementById("usuario").innerHTML = `<h3 id="palabrasUsuario">Las palabras introducidas son : ${stringPalabraUsuario}</h3>`;

        let usuario_cuatro = "";
        let usuario_cinco = "";
        let usuario_seis = "";
        let usuario_siete = "";
        let usuario_ocho = "";
        let usuario_nueve = "";
        for (let i = 0; i < acertadas.length; i++) {
            switch (acertadas[i].length) {
                case 4:
                    if(usuario_cuatro.length == 0){
                        usuario_cuatro = acertadas[i];
                    }else{
                        usuario_cuatro += ` , ${acertadas[i]}`;
                    }
                    break;
                case 5:
                    if(usuario_cinco.length == 0){
                        usuario_cinco = acertadas[i];
                    }else{
                        usuario_cinco += ` , ${acertadas[i]}`;
                    }
                    break;
                case 6:
                    if(usuario_seis.length == 0){
                        usuario_seis = acertadas[i];
                    }else{
                        usuario_seis += ` , ${acertadas[i]}`;
                    }
                    break;
                case 7:
                    if(usuario_siete.length == 0){
                        usuario_siete = acertadas[i];
                    }else{
                        usuario_siete += ` , ${acertadas[i]}`;
                    }
                    break;
                case 8:
                    if(usuario_ocho.length == 0){
                        usuario_ocho = acertadas[i];
                    }else{
                        usuario_ocho += ` , ${acertadas[i]}`;
                    }
                    break;
                case 9:
                    if(usuario_nueve.length == 0){
                        usuario_nueve = acertadas[i];
                    }else{
                        usuario_nueve += ` , ${acertadas[i]}`;
                    }
                    break;
            }
        }

        

        if (dificultad == 5) {
            document.getElementById("Ucuatro").innerHTML += usuario_cuatro;
            document.getElementById("Ucinco").innerHTML += usuario_cinco;
        } else if (dificultad == 7) {
            document.getElementById("Ucuatro").innerHTML += usuario_cuatro;
            document.getElementById("Ucinco").innerHTML += usuario_cinco;
            document.getElementById("Useis").innerHTML += usuario_seis;
            document.getElementById("Usiete").innerHTML += usuario_siete;
        } else if (dificultad == 9) {
            document.getElementById("Ucuatro").innerHTML += usuario_cuatro;
            document.getElementById("Ucinco").innerHTML += usuario_cinco;
            document.getElementById("Useis").innerHTML += usuario_seis;
            document.getElementById("Usiete").innerHTML += usuario_siete;
            document.getElementById("Uocho").innerHTML += usuario_ocho;
            document.getElementById("Unueve").innerHTML += usuario_nueve;
        }
        if(palabraUsuario < aciertos){
            document.getElementById("puntuacion").innerHTML = `<h4>De ${palabraUsuario.length} palabras introducidas has acertado un total de ${aciertos}`;
        }
    }
}

function reset(dificultad) {
    if (dificultad == 5) {
        difEasy();
        nLetras = 1;
    } else if (dificultad == 7) {
        difMedium();
        nLetras = 1;
    } else if (dificultad == 9) {
        difHard();
        nLetras = 1;
    }
}

function cambiarDificultad() {
    palabraUsuario = [];
    nLetras = 1
    document.getElementById("dif").innerHTML = "Seleccione la dificultad : <br> <br>\
    <button onclick=\"difEasy()\">Fácil -> Longitud máxima : 5 </button><br> <br>\
    <button onclick=\"difMedium()\">Medio -> Longitud máxima : 7 </button><br> <br>\
    <button onclick=\"difHard()\">Dificil -> Longitud máxima : 9 </button><br> <br>";
}

function introPalabra(valor) {
    let repetida = false;
    for (let i = 0; i < palabraUsuario.length; i++) {
        if (valor.value == palabraUsuario[i]) {
            repetida = true;
        }
    }
    if (repetida == false) {
        let palabra = valor.value.toLowerCase();
        if(palabra.length < 4){
            document.getElementById("fallo").innerHTML = "La palabra debe tener una longitud mínima de 4 caracteres";
        }else{
            document.getElementById("fallo").innerHTML = "";
            if(palabraUsuario.length == 0){
                document.getElementById("palabrasUsuario").innerHTML = palabra;
                stringPalabraUsuario = palabra;  
            }else{
                document.getElementById("palabrasUsuario").innerHTML += ` , ${palabra}`;
                stringPalabraUsuario += ` , ${palabra}`;
            }
            palabraUsuario.push(palabra);
        }
    }
    valor.value = "";
    console.log(palabraUsuario);
}

function comprobarTeclas() {
    var tecla = document.getElementById("palabraUsuario");
    tecla.addEventListener('keypress', function (keyboardEvent) {
        let code = keyboardEvent.key;//.key
        if (code == "Enter") {
            introPalabra(tecla);
        }
    });
};
