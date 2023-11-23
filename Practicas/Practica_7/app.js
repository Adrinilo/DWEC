window.addEventListener("DOMContentLoaded", e => {

    // Capturamos el elemento que contendrá el nombre de usuario
    const inputEmail = document.getElementById("floatingInput");

    // Capturamos el elemento que contendrá la contraseña
    const inputPassword = document.getElementById("floatingPassword");

    // Recogemos distintos elementos del codigo para añadirle informacion posteriormente
    const formulario = document.getElementById("formulario");
    const diverror = document.getElementById("diverror");
    const table = document.getElementById("table");
    const divlista = document.getElementById("lista");

    // Recogemos los distintos botones
    const btnusers = document.getElementById("btnusers");
    const btnposts = document.getElementById("btnposts");
    const btnsigPag = document.getElementById("btnsigPag");
    const btnprevPag = document.getElementById("btnprevPag");

    // Creamos una variable para controlar la paginacion 
    // (la variable será modificada despues)
    var paginaActual = 1;

    //Función asincrona para inicio de sesion del usuario
    const fetchUsername = async () => {
        urlapi = "https://jsonplaceholder.typicode.com/users?email=" + inputEmail.value;
        try {
            const res = await fetch(urlapi);
            console.log(res);
            const data = await res.json();
            console.log(data);
            //Comprobamos que exista el usuario
            if (data.length > 0) {
                const user = data[0];
                const userPassword = user.address.zipcode;
                // Comparamos las contraseñas
                if (userPassword === inputPassword.value) {
                    // Contraseña correcta redirigimos a la página blog
                    window.open('./blog.html', '_self');
                } else {
                    showerror();
                    console.log("Credenciales incorrectos");
                }
            } else {
                showerror()
                console.log("Usuario no encontrado en JSON");
            }
        } catch (error) {
            showerror()
            console.log(error);
            console.log("Error de lectura JSON en sign-in");
        }
    }

    //Función asincrona para recoger todos los usuarios
    const accedeUsers = async () => {
        urlapi = "https://jsonplaceholder.typicode.com/users";
        try {
            const res = await fetch(urlapi);
            //console.log(res);
            const listausers = await res.json();
            //console.log("Usuario 1: " + listausers[0]);
            //console.log("Usuarios: " + listausers);
            // Pasamos la lista de usuario al metodo encargado de mostrarlos
            pintaUsuarios(listausers)
        } catch (error) {
            showerror()
            console.log("Error de lectura JSON en listusers");
        }
    }

    // Funcion para mostrar un listado de todos los usuarios
    const pintaUsuarios = async (listausers) => {
        // Limpiar tabla
        clearTable();
        // Limpiar lista
        clearList();
        // Mostrar tabla
        table.classList.remove("d-none");
        // Ocultar botones paginacion
        ocultarBotones();
        // Cambiamos la cabecera de la tabla
        changeTableHead("users");

        // Recorremos el array con los datos de cada usuario y los sacamos en pantalla
        listausers.forEach((user, index) => {
            // Creamos una nueva fila
            //console.log(user)

            var tablerow = table.insertRow(index + 1);

            // Añadimos las celdas
            var numberCell = tablerow.insertCell(0);
            var nameCell = tablerow.insertCell(1);
            var emailCell = tablerow.insertCell(2);
            var postsCell = tablerow.insertCell(3);

            // Añadimos contenido a las celdas
            numberCell.innerHTML = index + 1;
            // Configurar el enlace "nombre"
            const enlacename = document.createElement("a");
            enlacename.href = "#";
            enlacename.onclick = function () {
                pintaUsuario(user);
                return false;
            }
            enlacename.textContent = user.name;
            enlacename.classList.add("text-dark");
            nameCell.appendChild(enlacename);
            // Informacion del email
            emailCell.innerHTML = user.email;
            // Configurar el enlace posts
            const enlaceposts = document.createElement("a");
            enlaceposts.href = "#";
            enlaceposts.onclick = function () {
                fetchUserPosts(user.id);
                return false;
            }
            enlaceposts.textContent = "Mostrar Posts";
            postsCell.appendChild(enlaceposts);
        });
    };

    // Funcion para mostrar los datos de un usuario
    const pintaUsuario = async (user) => {
        clearTable();
        // Ocultamos la tabla
        table.classList.add("d-none");
        // Creamos un array con todos los datos del usuario
        const elements = Object.entries(user);
        // Creamos una lista con los primeros elementos
        const listFirstLevel = document.createElement("ul");
        // Recorremos el array con los datos de cada usuario y los sacamos en pantalla
        elements.forEach((element) => {
            // Creamos un elemento en la lista por cada dato del usuario
            const elementFirstLevel = document.createElement("li");
            // Si el dato es un objeto creamos un segundo nivel de lista 
            if (typeof element[1] === "object") {
                // Indicamos la informacion a mostrar en el primer nivel 
                // en caso de que el elemento sea un objeto
                elementFirstLevel.innerHTML = element[0];
                // Creamos una lista con los subelementos
                const listSecondLevel = document.createElement("ul");
                // Creamos un array con los subelementos
                const elementsSecondLevel = Object.entries(element[1]);
                // Recorremos el array
                elementsSecondLevel.forEach(subelement => {
                    const elementSecondLevel = document.createElement("li");
                    // Si el dato es un objeto creamos un tercer nivel de lista y repetimos el proceso
                    if (typeof subelement[1] === "object") {
                        const elementsThirdLevel = Object.entries(subelement[1]);
                        const listThirdLevel = document.createElement("ul");
                        elementsThirdLevel.forEach(subelementThird => {
                            const elementThirdLevel = document.createElement("li");
                            elementThirdLevel.innerHTML = subelementThird[0] + ": " + subelementThird[1];
                            listThirdLevel.appendChild(elementThirdLevel);
                        })
                        elementSecondLevel.innerHTML = subelement[0];
                        elementSecondLevel.appendChild(listThirdLevel);
                    } else {
                        // Si el dato no es un objeto lo mostramos directamente
                        elementSecondLevel.innerHTML = subelement[0] + ": " + subelement[1];
                    }
                    // Añadimos cada elemento a la lista
                    listSecondLevel.appendChild(elementSecondLevel);
                })
                // Añadimos la lista de segundo nivel al elemento de primer nivel
                elementFirstLevel.appendChild(listSecondLevel);
            } else {
                // Indicamos la informacion a mostrar en el primer nivel 
                // en caso de que el elemento no sea un objeto
                elementFirstLevel.innerHTML = element[0] + ": " + element[1];
            }
            listFirstLevel.appendChild(elementFirstLevel);
        });
        divlista.appendChild(listFirstLevel);
    };

    //Función asincrona para recoger todos los posts
    const fetchPosts = async () => {
        urlapi = "https://jsonplaceholder.typicode.com/posts";
        try {
            const res = await fetch(urlapi);
            //console.log(res);
            const listposts = await res.json();
            //console.log(listposts);
            // Control de limites de paginas
            const postsPorPagina = 5;
            mostrarBotones(listposts.length, postsPorPagina);
            const startIndex = (paginaActual - 1) * postsPorPagina;
            const endIndex = startIndex + postsPorPagina;
            const postsPagina = listposts.slice(startIndex, endIndex);
            pintaPosts(postsPagina);
        } catch (error) {
            showerror()
            console.log(error);
            console.log("Error de lectura JSON en posts");
        }
    };

    //Función asincrona para recoger todos los posts de un usuario
    const fetchUserPosts = async (userId) => {
        urlapi = "https://jsonplaceholder.typicode.com/posts?userId=" + userId;
        try {
            const res = await fetch(urlapi);
            //console.log(res);
            const listposts = await res.json();
            //console.log(listposts);
            //Comprobamos que el usuario tenga posts
            if (listposts.length > 0) {
                //const post = listposts[0];
                //console.log("First post: " + post);
                pintaPosts(listposts);
            } else {
                showerror()
                console.log("El usuario no ha realizado ningun post");
            }
        } catch (error) {
            showerror()
            console.log("Error de lectura JSON en posts user");
        }
    }

    // Funcion para mostrar un listado de todos los post
    const pintaPosts = async (listaposts) => {
        // Limpiar tabla
        clearTable();
        // Limpiar lista
        clearList();
        // Mostrar tabla
        table.classList.remove("d-none");
        // Cambiamos la cabecera de la tabla
        changeTableHead("posts");

        // Recorremos el array con los datos de cada usuario y los sacamos en pantalla
        listaposts.forEach((post, index) => {
            // Creamos una nueva fila
            //console.log(user)

            var tablerow = table.insertRow(index + 1);

            // Añadimos las celdas
            var numberCell = tablerow.insertCell(0);
            var userIdCell = tablerow.insertCell(1);
            var titleCell = tablerow.insertCell(2);
            var bodyCell = tablerow.insertCell(3);

            // Añade contenido a las celdas
            numberCell.innerHTML = index + 1;
            userIdCell.innerHTML = post.userId;
            titleCell.innerHTML = post.title;
            bodyCell.innerHTML = post.body;
        });
    };


    // Función para limpiar contenido de la tabla
    const clearTable = () => {
        const rowCount = table.rows.length;
        for (let i = rowCount - 1; i > 0; i--) {
            table.deleteRow(i);
        }
    };

    // Función para limpiar contenido de la lista
    const clearList = () => {
        divlista.innerHTML = "";
    };

    // Función para mostrar botones paginacion controlando el numero de pagina
    const mostrarBotones = (longitudLista, postsPorPagina) => {
        const maxpagina = longitudLista / postsPorPagina;
        if (paginaActual <= 1) {
            paginaActual = 1;
            btnprevPag.classList.add("d-none");
            btnsigPag.classList.remove("d-none");
        } else if (paginaActual == maxpagina) {
            btnsigPag.classList.add("d-none");
            btnprevPag.classList.remove("d-none");
        } else {
            btnprevPag.classList.remove("d-none");
            btnsigPag.classList.remove("d-none");
        }
    };

    // Función para ocultar botones paginacion
    const ocultarBotones = () => {
        btnprevPag.classList.add("d-none");
        btnsigPag.classList.add("d-none");
    };

    const changeTableHead = (changetable) => {
        const tableHead = table.querySelector("thead").querySelector("tr");
        tableHead.innerHTML = "";
        // Array con los textos de los encabezados
        var encabezados = [];
        if (changetable == "users") {
            encabezados = ["#", "Username", "Email", "Posts"];
        } else {
            encabezados = ["#", "UserID", "Title", "Body"];
        }
        // Recorrer el array y crear celdas de encabezado
        encabezados.forEach((encabezado, index) => {
            const th = document.createElement("th");
            th.textContent = encabezado;
            // Agregar el atributo scope
            th.setAttribute("scope", "col");
            tableHead.appendChild(th);
        });
    }

    // Control para evitar errores en funcion de la pagina en la que nos encontramos
    if (formulario) {
        //Evento del boton submit: llamada al metodo de inicio sesion
        formulario.addEventListener("submit", e => {
            e.preventDefault();
            fetchUsername();
        });
    } else {
        accedeUsers();
        btnusers.addEventListener("click", e => {
            e.preventDefault();
            accedeUsers();
            btnposts.classList.remove("active")
            btnusers.classList.add("active");
        });
        btnposts.addEventListener("click", e => {
            e.preventDefault();
            paginaActual = 1;
            fetchPosts();
            btnusers.classList.remove("active")
            btnposts.classList.add("active");
        });
        // Función para manejar el botón "Anterior" de la paginacion
        btnprevPag.addEventListener("click", e => {
            e.preventDefault();
            paginaActual--;
            fetchPosts();
        });

        // Función para manejar el botón "Siguiente" de la paginacion
        btnsigPag.addEventListener("click", e => {
            e.preventDefault();
            paginaActual++;
            fetchPosts();
        });
    }

    //Indicar al usuario que ha ocurrido un error
    const showerror = () => {
        if (formulario) {
            diverror.classList.remove("d-none")
            diverror.classList.add("d-block");
        } else {
            console.log("Error");
        }
    }
});