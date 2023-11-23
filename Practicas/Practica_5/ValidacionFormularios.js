window.addEventListener("load", function() {
    const formulario = document.querySelector("#formulario");
    const nombre = document.querySelector("#nombre");
    const apellidos = document.getElementById("apellidos");
    const dni = document.getElementById("dni");
    const fecha = document.getElementById("fecha");
    const email = document.getElementById("email");
    const cp = document.getElementById("cp");
    const tlf = document.getElementById("telefono");
    const tlfint = document.getElementById("tlfint");
    const user = document.getElementById("user");

    formulario.addEventListener("submit", e=> {
        e.preventDefault(); //evita que el formulario se envíe de forma predeterminada

        const nombreValue = nombre.value.trim();
        const apellidosValue = apellidos.value.trim();
        const dniValue = dni.value.trim();
        const fechaValue = fecha.value.trim();
        const emailValue = email.value.trim();
        const cpValue = cp.value.trim();
        const tlfValue = tlf.value.trim();
        const tlfintValue = tlfint.value.trim();
        const userValue = user.value.trim();


        let valido = true;

        if (!validaNombre(nombreValue)) { //Si el nombre no es valido marca false
            valido = false;
        }

        if (!validaApellidos(apellidosValue)) {
            valido = false;
        }

        if (!validaDNI(dniValue)) {
            valido = false;
        }

        if (!validaFecha(fechaValue)) {
            valido = false;
        };

        if (!validaEmail(emailValue)) {
            valido = false;
        };

        if (!validaCP(cpValue)) {
            valido = false;
        };

        if (!validaTlf(tlfValue)) {
            valido = false;
        };

        if (!validaTlfInt(tlfintValue)) {
            valido = false;
        };

        if (!validaUser(userValue)) {
            valido = false;
        };

        if (valido) {
            formulario.submit();
        };
    });

    function validaNombre(param) {
        if (!param.value) {
            marcarError(param, "Campo obligatorio, no puede quedar vacio");
            return false;
        } else {
            marcarValido(param);
            return true;
        }
    }

    function validaApellidos(param) {
        const erApellidos = /^\S+\s\S+.*$/i;//Comprueba si hay 2 cadenas (apellidos)
        if (!erApellidos.test(param)) {
            marcarError(param, "Campo obligatorio, introduce tus dos apellidos");
            return false;
        } else {
            marcarValido(param);
            return true;
        }
    }

    function validaDNI(param) {
        const erdni = /^[0-9]{8}[TRWAGMYFPDXBNJZSQVHLCKE]$/i;
        if (!erdni.test(param)) {
            marcarError(param, "El dni no es correcto")
            return false;
        } else {
            marcarValido(param);
            return true;
        }
    }

    function validaFecha(param) {
        if (!param.value) {
            marcarError(param, "Campo obligatorio, no puede quedar vacio");
            return false;
        } else {
            marcarValido(param);
            return true;
        }
    }

    function validaEmail(param) {
        const erMail = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
        if (!erMail.test(param)) {
            marcarError(param, "El email no tiene formato válido");
            return false;
        } else {
            marcarValido(param);
            return true;
        }
    }

    function validaCP(param) {
        const erCp = /^[0-5][0-9]{4}$/;
        if (!erCp.test(param)) {
            marcarError(param, "El código postal no es correcto")
            return false;
        } else {
            marcarValido(param);
            return true;
        }
    }

    function validaTlf(param) {
        const ertlf = /^[679]{1}[0-9]{8}$/;
        if (!ertlf.test(param)) {
            marcarError(param, "El número de teléfono no es correcto");
            return false;
        } else {
            marcarValido(param);
            return true;
        }
    }

    function validaTlfInt(param) {
        const ertlfint = /^\+\d{1,4}\s?\d{1,14}$/;

        if (!ertlfint.test(param)) {
            marcarError(param, "El número internacional no es correcto");
            return false;
        } else {
            marcarValido(param);
            return true;
        }
    }
    
    function validaUser(param) {
        if (!param.value) {
            marcarError(param, "Campo obligatorio, no puede quedar vacio");
            return false;
        } else {
            marcarValido(param);
            return true;
        }
    }

    function marcarError(param, mensaje) {
        param.parentNode.querySelector(".error-feedback").textContent=mensaje;
        param.parentNode.classList.add("error");
    }

    function marcarValido(el) {
        el.parentNode.querySelector(".error-feedback").textContent = ""
        el.parentNode.classList.remove("error");
    }
})