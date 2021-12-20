nLetras = 1;
document.getElementById("dif").innerHTML = "<button onclick='vocal(9)' id='vocal'>Vocal</button> \
<button onclick='consonante(9)' id='consonante'>Consonante</button>\
<br> <br>\
<input type='text' id='letras' readonly>\
<br> <br>\
<button onclick='buscarSoluciones(9)'id='buscarSoluciones' disabled>Buscar Soluciones</button>\
<br> <br>\
<button onclick='noJugar()' id='reset' disabled>Reiniciar Juego</button>\
<br> <br>\
<button onclick='menuPrincipal()'>Menú Principal</button>\
<br> <br>\
<div id='noPalabras'>\
<p id='nueve'>De 9 letras : </p>\
<p id='ocho'>De 8 letras : </p>\
<p id='siete'>De 7 letras : </p>\
<p id='seis'>De 6 letras : </p>\
<p id='cinco'>De 5 letras : </p>\
<p id='cuatro'>De 4 letras : </p>\
</div>";