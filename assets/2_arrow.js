//let suma = function(a, b){
//  return a + b
//}

const suma = (a, b) => a + b;

document.getElementById('calcularBtn').addEventListener('click', function () {
    // Obtener los valores de los inputs
    const num1 = parseFloat(document.getElementById('numero1').value);
    const num2 = parseFloat(document.getElementById('numero2').value);

    // Calcular la suma usando la función arrow
    const resultado2 = suma(num1, num2);

    // Mostrar el resultado
    document.getElementById('resultado2').textContent = `La suma es: ${resultado2}`;
});