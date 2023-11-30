class Coche {
    constructor(marca, modelo, precio, annomatriculacion, url) {
        this._marca = marca;
        this._modelo = modelo;
        this._precio = precio;
        this._annomatriculacion = annomatriculacion;
        this._url = url;
    }

    get marca() {
        return this._marca;
    }

    get modelo() {
        return this._modelo;
    }

    get precio() {
        return this._precio;
    }

    get annomatriculacion() {
        return this._annomatriculacion;
    }

    get url() {
        return this._url;
    }
}

const c1 = new Coche("Opel", "Astra", "25.300", "2022", "img/astra.png");
const c2 = new Coche("Opel", "Corsa", "36.400", "2022", "img/corsa-e.png");
const c3 = new Coche("Opel", "Crossland", "24.850", "2022", "img/crossland.png");
const c4 = new Coche("Opel", "Grandland", "31.380", "2022", "img/grandland.png");
const c5 = new Coche("Opel", "Mokka", "26.685", "2022", "img/mokka-e.png");

const listaCoches = new Array(c1, c2, c3, c4, c5);
listaCoches.forEach(coche => {
    console.log(coche._marca, coche._modelo, coche._precio, coche._annomatriculacion, coche._url);
});

// Mostrar datos mediante tabla
const tabla = document.getElementById("tabla-container");
const cuerpoTabla = document.getElementById("contenido-tabla");

listaCoches.forEach(coche => {
    var fila = cuerpoTabla.insertRow();

    var celda1 = fila.insertCell(0);
    var celda2 = fila.insertCell(1);
    var celda3 = fila.insertCell(2);
    var celda4 = fila.insertCell(3);
    var celda5 = fila.insertCell(4);

    // Rellena las celdas con los datos
    celda1.innerHTML = coche.marca;
    celda2.innerHTML = coche.modelo;
    celda3.innerHTML = coche.precio;
    celda4.innerHTML = coche.annomatriculacion;
    celda5.innerHTML = `<img src="${coche.url}" style="height: 5vw">`;

    var encabezados = tabla.getElementsByTagName("th");
    for (var i = 0; i < encabezados.length; i++) {
        encabezados[i].classList.add("p-2");
      }
      
    var celdas = tabla.getElementsByTagName("td");
    for (var i = 0; i < celdas.length; i++) {
        celdas[i].classList.add("p-2");
      }
});

// Mostrar datos mediante cards
const contenedor = document.querySelector(".row");
listaCoches.forEach(coche => {
    const card = document.createElement("div");
    card.className = "card text-left m-3";
    const contenido =
        `<img class="card-img-top" src="${coche.url}" alt="" />
    <div class="card-body">
        <h4 class="card-title">${coche.modelo}</h4>
        <p class="card-text">${coche.marca}</p>
        <p class="card-text">${coche.annomatriculacion}</p>
        <p class="card-text">${coche.precio}</p>
    </div>`
    card.innerHTML = contenido;
    contenedor.appendChild(card)
});