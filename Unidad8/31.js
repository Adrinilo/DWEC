// Fetch API - Async Await (Multiples llamados)

const url = "https://jsonplaceholder.typicode.com/comments"
const url2 = "https://jsonplaceholder.typicode.com/photos"

const consultarAPI = async () => {

    const inicio = performance.now()

    const respuesta = await fetch(url)
    //console.log("Ha finalizado el primer fetch")
    const resultado = await respuesta.json()
    console.log(resultado)
    
    console.log('Iniciando 2da consulta')
    
    const respuesta2 = await fetch(url2)
    console.log(respuesta2);
    //console.log("Ha finalizado el segundo fetch");
    const resultado2 = await respuesta2.json()
    console.log(resultado2)

    const fin = performance.now()

    console.log(`Ejecucción PRIMER Async: ${fin - inicio} ms`)
}
//consultarAPI();

const consultarAPI2 = async () => {

    const inicio = performance.now()

    const [respuesta, respuesta2] = await Promise.all([ fetch(url), fetch(url)])
    const resultado2 = await respuesta2.json()
    const resultado = await respuesta.json()
    
    console.log(resultado)
    console.log(resultado2)

    const fin = performance.now()

    console.log(`Ejecucción SEGUNDO Async: ${fin - inicio} ms`)
}
consultarAPI2();