const num = prompt('Introduce un numero');
const alerta = document.querySelector(".alert");

const contenedor=document.querySelector(".container");
//Creamos un nuevo elemento
const div= document.createElement("div");
//Creamos el nodo texto
let nodoTexto=document.createTextNode("Este es el nodo texto");
//Añadimos el nodo de texto dentro del div
div.appendChild(nodoTexto);
console.log(div);

if(!isNaN(num)){
    const encabezado=document.createElement("h1");
    nodoTexto=document.createTextNode("Tabla de multiplicar de " +num);
    encabezado.appendChild(nodoTexto);

    contenedor.appendChild(encabezado);
    contenedor.appendChild(div);

    for (let i = 0; i <= 10; i++) {
        const multi=document.createElement("h2");
        let resultado = i * num
        nodoTexto=document.createTextNode(num + " * " + i + " = " + resultado);
        multi.appendChild(nodoTexto);
        div.appendChild(multi);
    }
}else {
    alert.classList='alert alert-danger'
    alerta.innerHTML=`No has introducido un numero`
}