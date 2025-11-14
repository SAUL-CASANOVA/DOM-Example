# Equipo 4. Clase práctica

# Uso del DOM con Javascript

El DOM(Document Object Model) es una estructura de objetos que representa el documento HTML en memoria.

Por ejemplo:

```javascript
document; // Objeto raíz del DOM
document.body; // Otro objeto (el <body>)
document.querySelector("h1"); // Devuelve un objeto <h1>
```

Los nodos, elementos y atributos son objetos con propiedades y métodos.

Por ejemplo:

```javascript
const titulo = document.querySelector("h1");
console.log(titulo.textContent); // Propiedad
titulo.textContent = "Nuevo título"; // Modificación
```

Los métodos son las funciones que exponen los objetos.

Por ejemplo:

```javascript
document.createElement("div"); // Crear un elemento
element.appendChild(nuevoDiv); // Insertar en el DOM
element.remove(); // Eliminarlo
```

Eventos son la parte interactiva. Permiten responder a acciones del usuario o del sistema.

Ejemplo:

```javascript
const boton = document.querySelector("button");
boton.addEventListener("click", () => {
  alert("¡Clic detectado!");
});
```

A continuación se muestra la estructura simplificada del DOM.

![diagrama](/images/image.png)

---

## Métodos de selección del DOM.

- ### document.getElementById()

Obtiene un elemento por su atributo id.
Devuelve un único elemento.

Ejemplo:

```html
html

<h1 id="titulo">Hola Mundo</h1>
```

```javascript
const titulo = document.getElementById("titulo");
console.log(titulo.textContent); // "Hola Mundo"
```

- ### document.querySelector()

Devuelve el primer elemento que coincida con un selector de CSS.
Devuelve un solo elemento.

```javascript
const titulo = document.querySelector("#titulo");
const primerParrafo = document.querySelector(".texto");
```

- ### document.querySelectorAll()

Devuelve todos los elementos que coincidan con un selector de CSS.

Retorna un NodeList.
Útil para obtener varios elementos al mismo tiempo.

```javascript
const parrafos = document.querySelectorAll("p.texto");
parrafos.forEach((p) => console.log(p.textContent));
```

## Cambiar el contenido de un nodo.

- ### textContent

  Cambia o devuelve el texto dentro de un elemento (sin interpretar HTML).

  Ejemplo:

```html
<p id="mensaje">Hola Mundo</p>
```

```javascript
const p = document.getElementById("mensaje");
p.textContent = "¡Texto cambiado!";
```

- ### innerHTML
  Permite cambiar el contenido HTML completo de un elemento(no solo el texto)

```javascript
p.innerHTML = "<strong>Mensaje en negrita</strong>";
```

- ### innerText
  Similar a textContent, pero respeta el estilo visible (por ejemplo, no muestra texto oculto por CSS).

## Crear nuevos elementos

- document.createElement()
  Crea un nuevo nodo vacío.

```javascript
const nuevoParrafo = document.createElement("p");
nuevoParrafo.textContent = "Este párrafo fue agregado con after()";
```

## Agregar elementos

- element.after()
  Permite insertar un nuevo nodo o texto inmediatamente después del nodo actual.

```javascript
const titulo = document.getElementById("titulo");

titulo.after(nuevoParrafo);
```

## Eliminar elementos

- element.remove()
  Elimina el elemento del DOM completamente.

```javascript
const texto = document.getElementById("texto"); //<p id="texto">párrafo<p>
texto.remove();
```

---

# Tarea propuesta.

1. Utilizando el archivo html recibido y **_modificando solamente el archivo script.js_**, realizar las siguientes tareas:

- Modifica el texto del párrafo 1 y escribe tu definición de Ingeniería de Software, usando el método getElementById().

Paso 1. Seleccionar el elemento con su id

```javascript
const parrafoUno = document.getElementById("p1");
```

Paso 2. Utilizar la propiedad textContent para modificar el texto

```javascript
parrafoUno.textContent = "sistemático, cuantificable y disciplinado";
```

- Modifica el texto del párrafo 2 y escribe tu nombre, utilizando el método querySelectorAll().

Paso 1. Seleccionar los párrafos con su clase.

```javascript
const parrafoDos = document.querySelectorAll(".parrafo");
```

Paso 2. modificar el texto utilizando textContent y el índice de párrafo.

```javascript
parrafoDos[1].textContent = "Tu nombre";
```

- Elimina la imagen del perrito. Puedes utiliza el método remove().

Paso 1. Seleccionar la imagen con su id

```javascript
const perrito = document.querySelector("#perrito");
```

Paso 2. Utilizar remove() para quitar la imagen

```javascript
perrito.remove();
```

- Crea un botón que se localice en medio de los dos botones que se muestran en la página. El botón muestra el texto "botón 2".
  Puedes utilizar el método after() o before().

  Paso 1. crear el elemento boton 2

```javascript
const botonDos = document.createElement("button");
```

Paso 2. Generar texto del botón

```javascript
botonDos.textContent = "botón 2";
```

Paso 3. Seleccionar el botón 1 para usar como referencia.

```javascript
botonUno = document.querySelector("#btn-1");
```

Paso 4. Agregar el boton 2 al html después del botón 1.

```javascript
botonUno.after(botonDos);
```

Resultado deseado.

![resultado](/images/image2.PNG)

- Envía el archivo script.js y una captura de la página web.
