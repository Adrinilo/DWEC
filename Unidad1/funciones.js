
/*Funciones anonimas*/
let funcion=function(parametro){
    return parametro+":)";
}

console.log(funcion("HOla"));

/*CALLBACK*/

function getIdentificacion(numero,letra,callback){
    let identificacion=callback(numero,letra);
    return identificacion;
}

let formatoNIF=function(numero,letra){
   return numero+"-"+letra;
}

let formatoNIE=function(numero,letra){
    return letra+"-"+numero;
}

console.log(getIdentificacion("34389474","S",formatoNIF))


/*FORMA MAS UTILIZADA DE CALLBACKS*/ 

function getIdentificacion2(numero,letra,callback){
    let identificacion=callback(numero,letra);
    return identificacion;
}

getIdentificacion2("45674","R",function(numero,letra){
     console.log(numero+"-"+letra);
     return numero+"-"+letra;
});

/*Funciones autoinvocadas */
(function(numero,letra){
    console.log(numero+"-"+letra);
})("8394739","T");