/* Estructura del condicinal */
const flight = 100;
const hotel = 50;
const tour = 30;
const total= flight+hotel+tour;
const budget=300;

if(budget > total){
    console.log('Si me voy de viaje');
}else if(budget===total){
    console.log('Si puedo ir, pero muy ajustado');
}else{
    console.log('No puedo ir');
}

/* OPERADORES TERNARIOS */
const result = budget > total ? console.log('Si me voy'):console.log('No me voy');
const newresult = budget > total ?100:200;


const NUM = "30" + 3;