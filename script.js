const parrafoUno = document.getElementById("p1");
parrafoUno.textContent = "sistemático, cuantificable y disciplinado";

const parrafoDos = document.querySelectorAll(".parrafo");
parrafoDos[1].textContent = "Saul Suarez";

const perrito = document.querySelector("#perrito");
perrito.remove();

const botonDos = document.createElement('button');
botonDos.textContent = "botón 2";
botonUno = document.querySelector("#btn-1");
botonUno.after(botonDos);

