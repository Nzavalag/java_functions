//Transforma esta declaración de función a una función de expresión. El ejercicio debe quedar en un archivo nombrado  `1_funcion.js`

// function example(a, b, c){
//     return a+b+c
//     }

//Transforma esta declaración de función a una función de expresión
// function example(a, b, c){
//     return a+b+c
//     }


// Definimos la función de expresión example
const example = (a, b, c) => {
    return a + b + c;
};

// Función para calcular la suma y mostrar el resultado
function calcularSuma() {
    // Obtener los valores de los inputs
    let a = parseFloat(document.getElementById('inputA').value);
    let b = parseFloat(document.getElementById('inputB').value);
    let c = parseFloat(document.getElementById('inputC').value);

    // Calcular la suma usando la función example
    let resultado = example(a, b, c);

    // Mostrar el resultado en el elemento con id 'resultado'
    document.getElementById('resultado').innerText = `La suma de ${a}, ${b} y ${c} es: ${resultado}`;
}
