function suma(valor1, valor2) {
    return Number(valor1) + Number(valor2);
}

function resta(valor1, valor2) {
    return Number(valor1) - Number(valor2);
}

function multiplicacion(valor1, valor2) {
    return Number(valor1) * Number(valor2);
}

function division(valor1, valor2) {
    return Number(valor1) / Number(valor2);
}

let valor1;
let valor2;
let operacion = "";

do {  //usando 'do...while', ya que la primera vez siempre vamos a entrar
    
    operacion = prompt(`¿Qué operación quieres realizar? Responde 'suma', 'resta', 'multiplicación', 'división' o 'salir'.`);
    while (operacion != "suma" && operacion != "resta" && operacion != "multiplicación" && operacion != "división" && operacion != "salir") {  //mientras el texto leído sea diferente de "suma", "resta", "multiplicación", "división" y "salir", mostrar que no fue reconocido y preguntar nuevamente
        alert(`¡Operación no reconocida!`);
        operacion = prompt(`¿Qué operación quieres realizar? Responde 'suma', 'resta', 'multiplicación', 'división' o 'salir'.`);
    }
    
    if (operacion === "salir") {  //si el texto leído es "salir", salir del loop y de la calculadora
        break;
    }
    
    valor1 = prompt(`Ingresa el primer valor:`);
    valor2 = prompt(`Ingresa el segundo valor:`);
    switch (operacion) {
        case 'suma':
            alert(`El resultado de la ${operacion} es ${suma(valor1, valor2)}`);
            break;
        case 'resta':
            alert(`El resultado de la ${operacion} es ${resta(valor1, valor2)}`);
            break;
        case 'multiplicación':
            alert(`El resultado de la ${operacion} es ${multiplicacion(valor1, valor2)}`);
            break;
        case 'división':
            alert(`El resultado de la ${operacion} es ${division(valor1, valor2)}`);
            break;
    }
} while (operacion === "suma" || operacion === "resta" || operacion === "multiplicación" || operacion === "división")
alert(`¡Hasta la próxima!`);