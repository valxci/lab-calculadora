const formulario = document.getElementById('formulario')

formulario.addEventListener('submit', function (event) {
    event.preventDefault();

    let operador1 = parseInt(document.getElementById('operador1').value)

    let signo = document.getElementById('signo').value
    let operador2 = parseInt(document.getElementById('operador2').value);
    let resultado = 0
    let textofinal = ''

    console.log(signo);


    if (signo == "+") {
        textofinal = `tu resultado es  ${resultado}`
        resultado = operador1 + operador2
    }

    else if (signo == "-") {
        textofinal = `tu resultado es  ${resultado}`
        resultado = operador1 - operador2
    }

    else if (signo == "/") {
        if (operador2 == 0) {
            resultado = "ERROR No se puede dividir por 0"
            textofinal = resultado
        } else {
            resultado = operador1 / operador2
            textofinal = `tu resultado es  ${resultado}`
        }
    }

    else if (signo == "*") {
        resultado = operador1 * operador2
        textofinal = `tu resultado es  ${resultado}`
    }

    else if (signo == "**") {
        resultado = operador1 ** operador2
        textofinal = `tu resultado es  ${resultado}`
    }

    else if (signo == "%") {

        if (operador2 == 0) {
            resultado = "ERROR No se puede dividir por 0"
            textofinal = resultado
        }
        else {
            resultado = operador1 % operador2
            textofinal = `tu resultado es  ${resultado}`
        }
    }

    else {
        resultado = "ERROR Operador no valido"
        textofinal = resultado
    }

    document.getElementById('resultado').textContent = textofinal;

})