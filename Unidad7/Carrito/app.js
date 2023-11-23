window.addEventListener("load", e => {

    //capturamos el elemento que contendrá los card
    const cards = document.getElementById("cards");

    //capturamos el CONTENT de la plantilla de la card
    const templateCard = document.getElementById("template-card").content;

    const templateCarrito = document.getElementById("template-carrito").content;
    const templateFooter = document.getElementById("template-footer").content;

    //Creamos un fragmento que nos será de utilidad
    const fragment = document.createDocumentFragment();
    const itemsCarrito = document.querySelector("#items");

    //El carrito
    let carrito = {};

    cards.addEventListener("click", e => {
        e.stopPropagation();
        addCarrito(e);
    })

    items.addEventListener("click", e => {
        btnAccion(e);
    });

    //Función asincrona
    const fetchData = async () => {
        try {
            const res = await fetch("./productos.json");
            console.log(res);
            const data = await res.json();
            console.log(data);
            pintarCards(data);
        } catch (error) {
            console.log("Error de lectura JSON");
        }
    }

    //declaramos una funcion que pintara los cards con los productos que le pasamos en el array data
    const pintarCards = data => {
        //recorremos el array data
        data.forEach(producto => {
            //cambiamos partes de la plantilla para cada producto
            templateCard.querySelector("h5").textContent = producto.title;
            templateCard.querySelector("p").textContent = producto.precio;
            templateCard.querySelector("img").setAttribute("src", producto.thumbnailUrl);
            templateCard.querySelector("img").setAttribute("alt", producto.title);

            templateCard.querySelector(".btn").dataset.idProducto = producto.id;
            //clonamos la plantilla y la agregamos a un fragmento
            const clone = templateCard.cloneNode(true);
            fragment.appendChild(clone);
        });
        //añadimos el fragmento con todas las cards al contenedor de las cards
        cards.appendChild(fragment);
    }

    const addCarrito = e => {
        if (e.target.classList.contains("btn-dark")) {
            setCarrito(e);
        }
    }

    const setCarrito = e => {
        const idProducto = e.target.dataset.idProducto;
        console.log(idProducto);

        //preguntamos si hay algún producto con idProducto en el carrito
        if (carrito.hasOwnProperty(idProducto)) {
            carrito[idProducto].cantidad++;
        } else {
            //creamos un nuevo producto para el carrito
            const producto = {
                id: idProducto,
                nombre: e.target.parentNode.querySelector("h5").textContent,
                precio: e.target.parentNode.querySelector(".precio").textContent,
                cantidad: 1
            }

            //metemos el producto a la coleccion
            carrito[idProducto] = producto;
        }

        pintarCarrito();
        console.log(carrito);
    }

    const pintarFooter = () => {
        footer.innerHTML = "";
        if (Object.keys(carrito).length === 0)//carrito vacio
        {
            footer.innerHTML = '<th scope="row" colspan="5">Carrito vacío. Comience a comprar!!</th>'
        } else {

            //https://medium.com/@xadrijo/un-vistazo-a-la-función-reduce-en-javascript-f4459bc4e3aa
            const nCantidad = Object.values(carrito).reduce((acc, {
                cantidad
            }) => acc + cantidad, 0);
            const nTotal = Object.values(carrito).reduce((acc, {
                cantidad,
                precio
            }) => acc + cantidad * precio, 0);

            templateFooter.querySelectorAll("td")[0].textContent = nCantidad;
            templateFooter.querySelector("span").textContent = nTotal;

            const clone = templateFooter.cloneNode(true);
            fragment.appendChild(clone);
            footer.appendChild(fragment);

            document.getElementById("vaciar-carrito").addEventListener("click", () => {
                console.log("Carrito Vacío")
                carrito = {};
                pintarCarrito();
            });
        }
    }

    const pintarCarrito = () => {
        itemsCarrito.innerHTML = "";

        items.innerHTML = "";
        Object.values(carrito).forEach(producto => {
            templateCarrito.querySelector("th").textContent = producto.id;
            templateCarrito.querySelectorAll("td")[0].textContent = producto.nombre;
            templateCarrito.querySelectorAll("td")[1].textContent = producto.cantidad;
            templateCarrito.querySelector(".btn-info").dataset.id = producto.id;
            templateCarrito.querySelector(".btn-danger").dataset.id = producto.id;
            templateCarrito.querySelector("span").textContent = producto.precio * producto.cantidad;

            const clone = templateCarrito.cloneNode(true); //true hace que se copien descendientes del nodo
            fragment.appendChild(clone);
        });
        //console.log(items);
        items.appendChild(fragment);
        pintarFooter();
    }

    const btnAccion = (e => {
        e.stopPropagation();
        if (e.target.classList.contains("btn-info")) //opción de aumentar objeto
        {
            carrito[e.target.dataset.id].cantidad++;
            pintarCarrito();
        } else if (e.target.classList.contains("btn-danger")) //si es el btn disminuir
        {
            carrito[e.target.dataset.id].cantidad--;

            if (carrito[e.target.dataset.id].cantidad === 0) {
                delete carrito[e.target.dataset.id];
            }
            pintarCarrito();
        }
    });

    fetchData();
});