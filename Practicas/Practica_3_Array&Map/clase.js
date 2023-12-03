class Persona {
  constructor(nombre, apellidos, poblacion, edad, estudios, carnet_conducir) {
    this.nombre = nombre;
    this.apellidos = apellidos;
    this.poblacion = poblacion;
    this._edad = edad;
    this._estudios = estudios;
    this.carnet_conducir = carnet_conducir;
  }


  get edad() {
    return this._edad;
  }

  set edad(param) {
    if (typeof param === 'number' && param >= 0) {
      this._edad = param;
    } else {
      alert("La edad debe ser un número mayor o igual a 0");
    }
  }

  get estudios() {
    return this._estudios;
  }

  set estudios(param) {
    if (typeof param === 'string') {
      this._estudios = param;
    } else {
      alert("Parametro introducido para los estudios no valido");
    }
  }
}

/*
// Crear array
const personas = [
    new Persona("Jose", "Garcia", "Toledo", 25, "ESO", false),
    new Persona("Ana", "Ruiz", "Madrid", 30, "FP", true)
];

// Mostrar datos por consola
personas.forEach(persona => {
    console.log(`Nombre: ${persona.nombre}`);
    console.log(`Apellidos: ${persona.apellidos}`);
    console.log(`Poblacion: ${persona.poblacion}`);
    console.log(`Edad: ${persona.edad}`);
    console.log(`Estudios: ${persona.estudios}`);
    console.log(`Dispone de carnet conducir: ${persona.carnet_conducir}`);
});

// Ordenar datos
personas.sort((p1, p2) => p1.nombre.localeCompare(p2.nombre));

// Mostrar por pantalla
personas.forEach(persona => {
    document.write(
        `Nombre: ${persona.nombre} <br>
        Apellidos: ${persona.apellidos} <br>
        Poblacion: ${persona.poblacion} <br>
        Edad: ${persona.edad} <br>
        Estudios: ${persona.estudios} <br>
        Dispone de carnet conducir: ${persona.carnet_conducir ? 'Sí' : 'No'} <br>
        <hr>`);
});
*/


// Crear map
const personasMap = new Map();
personasMap.set('12345678A', new Persona("Jose", "Garcia", "Toledo", 20, "ESO", false));
personasMap.set('87654321B', new Persona("Ana", "Ruiz", "Madrid", 19, "FP", true));

// Ordenar el Map por clave
const personasMapClave = Array.from(personasMap);
personasMapClave.sort((a, b) => {
  return a[0].localeCompare(b[0]);
});

// Crear una tabla en la página web para mostrar los detalles de cada alumno
const tablaClave = document.createElement('table');
tablaClave.innerHTML = `
  <thead>
    <tr>
      <th>DNI</th>
      <th>Nombre</th>
      <th>Apellidos</th>
      <th>Población</th>
      <th>Edad</th>
      <th>Estudios</th>
      <th>Carnet de conducir</th>
    </tr>
  </thead>
  <tbody>
    ${personasMapClave.map(([clave, persona]) => `
      <tr>
        <td>${clave}</td>
        <td>${persona.nombre}</td>
        <td>${persona.apellidos}</td>
        <td>${persona.poblacion}</td>
        <td>${persona.edad}</td>
        <td>${persona.estudios}</td>
        <td>${persona.carnet_conducir ? 'Sí' : 'No'}</td>
      </tr>
    `).join('')}
  </tbody>`;

// Agregar la tabla al cuerpo del documento
document.body.appendChild(tablaClave);



// Ordenar el Map por edad
const personasMapEdad = Array.from(personasMap);
personasMapEdad.sort((a, b) => {
  //console.log(a[1].edad);
  return (a[1].edad) - (b[1].edad);
});

// Crear una tabla en la página web para mostrar los detalles de cada alumno
const tablaEdad = document.createElement('table');
tablaEdad.innerHTML = `
  <thead>
    <tr>
      <th>DNI</th>
      <th>Nombre</th>
      <th>Apellidos</th>
      <th>Población</th>
      <th>Edad</th>
      <th>Estudios</th>
      <th>Carnet de conducir</th>
    </tr>
  </thead>
  <tbody>
  ${personasMapEdad.map(([clave, persona]) => `
  <tr>
    <td>${clave}</td>
    <td>${persona.nombre}</td>
    <td>${persona.apellidos}</td>
    <td>${persona.poblacion}</td>
    <td>${persona.edad}</td>
    <td>${persona.estudios}</td>
    <td>${persona.carnet_conducir ? 'Sí' : 'No'}</td>
  </tr>
`).join('')}
  </tbody>
`;

// Agregar la tabla al cuerpo del documento
document.body.appendChild(tablaEdad);
