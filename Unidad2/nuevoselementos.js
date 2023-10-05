const contenedor=document.querySelector(".container");

//Creamos un nuevo elemento
const nuevo_div= document.createElement("div");
//Creamos el nodo texto
let nodoTexto=document.createTextNode("Este es el nodo texto");
//Añadimos el nodo de texto dentro del div
nuevo_div.appendChild(nodoTexto);
console.log(nuevo_div);

const encabezado=document.createElement("h1");
nodoTexto=document.createTextNode("Titulo de la página");
encabezado.appendChild(nodoTexto);

contenedor.appendChild(encabezado);
contenedor.appendChild(nuevo_div);

function addElement(){
    let newDiv=document.createElement("div");
    let newContent=document.createTextNode("Hola, que tal");

    newDiv.appendChild(newContent);
    let currentDiv=document.getElementById("div1");
    document.body.insertBefore(newDiv,currentDiv)
}

//querySelector("#divisor") == getElementById("divisor")