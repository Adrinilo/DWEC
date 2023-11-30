window.addEventListener("load", function () {
    const inputTarjeta = document.querySelector("#numTarjeta")
    const btnValidar = document.querySelector("#btn-validar");

    btnValidar.addEventListener("click", e => {
        const valorTarjeta = inputTarjeta.value.trim();
        const opt = document.querySelector("input[name='tipocard']:checked").value;
        if (!ValidarTarjeta(valorTarjeta, opt)) {
            inputTarjeta.setCustomValidity("Error en el número de tarjeta");
            console.log("Error en la tarjeta tipo: " + opt);
        } else {
            inputTarjeta.setCustomValidity("");
            console.log("Tarjeta válida tipo: " + opt);
        }
        formulario.classList.add("was-validated");
    });

    //también lo aplicamos al evento keyup
    inputTarjeta.addEventListener("keyup", e => {
        const valorTarjeta = inputTarjeta.value.trim();
        const opt = document.querySelector("input[name='tipocard']:checked").value;

        //si la tecla pulsada es intro prevenimos hacer el submit
        if (e.keyCode === 13) {
            e.preventDefault();
        }

        if (!ValidarTarjeta(valorTarjeta, opt)) {
            inputTarjeta.setCustomValidity("Error en el número de tarjeta");
            console.log("Error en la tarjeta tipo: " + opt);
        } else {
            inputTarjeta.setCustomValidity("");
            console.log("Tarjeta válida tipo: " + opt);
        }
        formulario.classList.add("was-validated");
    });

    function ValidarTarjeta(codigo, opt) {
        var msg = "Valor incorrecto";
        VISA = /^4[0-9]{3}-?[0-9]{4}-?[0-9]{4}-?[0-9]{4}$/;
        MASTERCARD = /^5[1-5][0-9]{2}-?[0-9]{4}-?[0-9]{4}-?[0-9]   {4}$/;
        AMEX = /^3[47][0-9-]{16}$/;
        CABAL = /^(6042|6043|6044|6045|6046|5896){4}[0-9]{12}$/;
        NARANJA = /^(589562|402917|402918|527571|527572|0377798|0377799)[0-9]*$/;

        if (luhn(codigo)) {
            if (opt == "VISA" && !codigo.match(VISA)) {
                alert(msg);
            }
            if (opt == "MASTERCARD" && !codigo.match(MASTERCARD)) {
                alert(msg);
            }
            if (opt == "NARANJA" && !codigo.match(NARANJA)) {
                alert(msg);
            }
            if (opt == "CABAL" && !codigo.match(CABAL)) {
                alert(msg);
            }
            if (opt == "AMEX" && !codigo.match(AMEX)) {
                alert(msg);
            }
        } else {
            alert(msg);
        }
    }

    function luhn(value) {
        // Accept only digits, dashes or spaces
        if (/[^0-9-\s]+/.test(value)) return false;
        // The Luhn Algorithm. It's so pretty.
        let nCheck = 0, bEven = false;
        value = value.replace(/\D/g, "");
        for (var n = value.length - 1; n >= 0; n--) {
            var cDigit = value.charAt(n),
                nDigit = parseInt(cDigit, 10);
            if (bEven && (nDigit *= 2) > 9) nDigit -= 9; nCheck += nDigit; bEven = !bEven;
        }
        return (nCheck % 10) == 0;
    }

});