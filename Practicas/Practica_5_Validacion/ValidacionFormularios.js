window.addEventListener("load", function() {
    const formulario = document.getElementById("formulario");
    const nombre = document.getElementById("nombre");
    const apellidos = document.getElementById("apellidos");
    const dni = document.getElementById("dni");
    const fecha = document.getElementById("fecha");
    const email = document.getElementById("email");
    const cp = document.getElementById("cp");
    const tlf = document.getElementById("telefono");
    const tlfint = document.getElementById("tlfint");
    const user = document.getElementById("user");
    const passwd = document.getElementById("passwd");
    const url = document.getElementById("url");
    const numreal = document.getElementById("numreal");
    const numentero = document.getElementById("numentero");

    formulario.addEventListener("submit", e=> {
        e.preventDefault(); //evita que el formulario se envíe de forma predeterminada

        let valido = true;

        if (!validaNombre(nombre)) { //Si el nombre no es valido marca false
            valido = false;
        } else if (!validaApellidos(apellidos)) {
            valido = false;
        } else if (!validaDNI(dni)) {
            valido = false;
        } else if (!validaFecha(fecha)) {
            valido = false;
        } else if (!validaEmail(email)) {
            valido = false;
        } else if (!validaCP(cp)) {
            valido = false;
        } else if (!validaTlf(tlf)) {
            valido = false;
        } else if (!validaTlfInt(tlfint)) {
            valido = false;
        } else if (!validaUser(user)) {
            valido = false;
        } else if (!validaPasswd(passwd)) {
            valido = false;
        } else if (!validaUrl(url)) {
            valido = false;
        } else if (!validaReal(numreal)) {
            valido = false;
        } else if (!validaEntero(numentero)) {
            valido = false;
        };

        if (valido) {
            formulario.submit();
        };
    });

    function validaNombre(param) {
        if (!param.value.trim()) {
            marcarError(param, "Campo obligatorio, no puede quedar vacio");
            return false;
        } else {
            marcarValido(param);
            return true;
        }
    }

    function validaApellidos(param) {
        const erApellidos = /^\S+\s\S+.*$/i;//Comprueba si hay 2 cadenas (apellidos)
        if (!erApellidos.test(param.value.trim())) {
            marcarError(param, "Campo obligatorio, introduce tus dos apellidos");
            return false;
        } else {
            marcarValido(param);
            return true;
        }
    }

    function validaDNI(param) {
        const erdni = /^[0-9]{8}[TRWAGMYFPDXBNJZSQVHLCKE]$/i;
        if (!erdni.test(param.value.trim())) {
            marcarError(param, "El dni no es correcto")
            return false;
        } else {
            marcarValido(param);
            return true;
        }
    }

    function validaFecha(param) {
        if (!param.value.trim()) {
            marcarError(param, "Campo obligatorio, no puede quedar vacio");
            return false;
        } else {
            marcarValido(param);
            return true;
        }
    }

    function validaEmail(param) {
        const erMail = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
        if (!erMail.test(param.value.trim())) {
            marcarError(param, "El email no tiene formato válido");
            return false;
        } else {
            marcarValido(param);
            return true;
        }
    }

    function validaCP(param) {
        const erCp = /^[0-5][0-9]{4}$/;
        if (!erCp.test(param.value.trim())) {
            marcarError(param, "El código postal no es correcto")
            return false;
        } else {
            marcarValido(param);
            return true;
        }
    }

    function validaTlf(param) {
        const ertlf = /^[679]{1}[0-9]{8}$/;
        if (!ertlf.test(param.value.trim())) {
            marcarError(param, "El número de teléfono no es correcto");
            return false;
        } else {
            marcarValido(param);
            return true;
        }
    }

    function validaTlfInt(param) {
        const ertlfint = /^\+\d{1,4}\s?\d{1,14}$/;
        if (!ertlfint.test(param.value.trim())) {
            marcarError(param, "El número internacional no es correcto");
            return false;
        } else {
            marcarValido(param);
            return true;
        }
    }
    
    function validaUser(param) {
        if (!param.value.trim()) {
            marcarError(param, "Campo obligatorio, no puede quedar vacio");
            return false;
        } else {
            marcarValido(param);
            return true;
        }
    }

    function validaPasswd(param) {
        const erPasswd = /^(?=.*[0-9a-zA-Z])([a-zA-Z0-9]{8,10})$/;
        if (!erPasswd.test(param.value.trim())) {
            marcarError(param, "La contraseña debe tener de 8 a 10 caracteres y al menos un digito o un alfanumérico");
            return false;
        } else {
            marcarValido(param);
            return true;
        }
    }

    function validaUrl(param) {
        var erURL=/^(?:([A-Za-z]+):)?(\/{0,3})([0-9.\-A-Za-z]+)(?::(\d+))?(?:\/([^?#]*))?(?:\?([^#]*))?(?:#(.*))?$/;
        if (!erURL.test(param.value.trim())) {
            marcarError(param, "Debe introducir una URL");
            return false;
        } else {
            marcarValido(param);
            return true;
        }
    }
    function validaReal(param) {
        const erNumeroReal = /^[-+]?\d*\.?\d+$/;
        if (!erNumeroReal.test(param.value.trim())) {
            marcarError(param, "Debe introducir un numero Real");
            return false;
        } else {
            marcarValido(param);
            return true;
        }
    }

    function validaEntero(param) {
        var erNumEntero=/^-?\d*(\.\d+)?$/;
        if (!erNumEntero.test(param.value.trim())) {
            marcarError(param, "Debe introducir un numero Entero");
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