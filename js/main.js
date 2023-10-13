const num1 = 15
    const num2 = 10

    for(let contador = 1; contador <= 100; contador=contador+3) {
        console.log('iteracion' + ' ' + contador)
    }

    function cambiarTexto(){
        document.getElementById("Principal").innerHTML = "Segundo"
    }

    function cambiarRegreso(){
        document.getElementById("Principal").innerHTML = "Titulo de algo"
    }