document.getElementById("dif").innerHTML = "<button onclick='vocal(9)' id='vocal'>Vocal</button> \
<button onclick='consonante(9)' id='consonante'>Consonante</button>\
<br> <br>\
<input type='text' id='letras' readonly>\
<br> <br>\
<button onclick='buscarSoluciones(9)'id='buscarSoluciones' disabled>Mostrar Soluciones</button>\
<button onclick='reset(9)' id='reset' disabled>Reiniciar Juego</button>\
<br> <br>\
<button onclick='cambiarDificultad()'>Cambiar Dificultad</button> \
<button onclick='menuPrincipal()'>Menú Principal</button>\
<br> <br>\
<div id='noPalabras'>\
<p id='nueve'>De 9 letras : </p>\
<p id='ocho'>De 8 letras : </p>\
<p id='siete'>De 7 letras : </p>\
<p id='seis'>De 6 letras : </p>\
<p id='cinco'>De 5 letras : </p>\
<p id='cuatro'>De 4 letras : </p>\
</div>\
<div id=\"usuario\">\
Introduzca las palabras que pueda formar: \
<input type=\"text\" name=\"palabraUsuario\" id=\"palabraUsuario\" onclick=\"comprobarTeclas()\" maxlength=\"9\" minlength=\"4\" readonly><br>\
<span id='fallo'></span>\
<h3 id=\"palabrasUsuario\"></h3>\
</div>\
<div id='palabrasAcertadas'>\
</div>\
<div id=\"puntuacion\"</div>";