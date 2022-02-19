document.getElementById("dif").innerHTML = "<button onclick='vocal(5)' id='vocal'>Vocal</button> \
<button onclick='consonante(5)' id='consonante'>Consonante</button>\
<br> <br>\
<input type='text' id='letras' readonly>\
<br> <br>\
<button onclick='buscarSoluciones(5)'id='buscarSoluciones' disabled>Mostrar Soluciones</button>\
<button onclick='reset(5)' id='reset' disabled>Reiniciar Juego</button>\
<br> <br>\
<button onclick='cambiarDificultad()'>Cambiar Dificultad</button> \
<button onclick='menuPrincipal()'>Menú Principal</button>\
<br> <br>\
<div id='noPalabras'>\
<p id='cinco'>De 5 letras : </p>\
<p id='cuatro'>De 4 letras : </p>\
</div>\
<div id=\"usuario\">\
Introduzca las palabras que pueda formar: \
<input type=\"text\" name=\"palabraUsuario\" id=\"palabraUsuario\" onclick=\"comprobarTeclas()\" maxlength=\"5\" minlength=\"4\"><br>\
<span id='fallo'></span>\
<h3 id=\"palabrasUsuario\"></h3>\
</div>\
<div id='palabrasAcertadas'>\
</div>\
<div id=\"puntuacion\"</div>";