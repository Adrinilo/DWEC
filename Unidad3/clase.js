class Persona {
    constructor(nombre, apellidos, anno, poblacion, estudios) {
        this._nombre = nombre;
        this._apellidos = apellidos;
        this._year = anno;
        this._poblacion = poblacion;
        this._estudios = estudios;
    }

    get nombre() {
        return this._nombre;
    }

    get apellidos() {
        return this._apellidos;
    }

    get annoNacimiento() {
        return this._year;
    }

    get poblacion() {
        return this._poblacion;
    }

    get estudios() {
        return this._estudios;
    }
}

const p1 = new Persona("Jose", "Garcia", "1999", "Toledo", "ESO");
const p2 = new Persona("Ana", "Ruiz", "1992", "Madrid", "Bachillerato");


const mostrarpersona = (lista) => {
    let contador = 0;
    lista.forEach((elemento) => {
        console.log(`Nombre: ${elemento.nombre}`);
        console.log(`Apellido: ${elemento.apellidos}`);
        console.log(`Estudios: ${elemento.estudios}`);
        console.log(`Poblacion: ${elemento.poblacion}`);
        contador++;
    });
    return contador;
};

document.write("Nº Personas: "+mostrarpersona([p1,p2]));

//Bucle con funcion flecha para obtener dos de los atributos del objeto persona