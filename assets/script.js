// Variable global para almacenar el color según la tecla presionada
let currentColor = '';

// Función para cambiar el color del div al hacer clic
function changeColor(event) {
  event.target.style.backgroundColor = 'black';
}

// Asignar evento clic a cada color-box
document.getElementById('blue').addEventListener('click', changeColor);
document.getElementById('red').addEventListener('click', changeColor);
document.getElementById('green').addEventListener('click', changeColor);
document.getElementById('yellow').addEventListener('click', changeColor);

// Función para manejar el cambio de color del div "key" según la tecla presionada
function handleKeyPress(event) {
  switch (event.key) {
    case 'a':
      document.getElementById('key').style.backgroundColor = 'pink';
      currentColor = 'pink';
      break;
    case 's':
      document.getElementById('key').style.backgroundColor = 'orange';
      currentColor = 'orange';
      break;
    case 'd':
      document.getElementById('key').style.backgroundColor = 'lightblue';
      currentColor = 'lightblue';
      break;
    case 'q':
      createColorBox('purple');
      break;
    case 'w':
      createColorBox('gray');
      break;
    case 'e':
      createColorBox('brown');
      break;
    default:
      break;
  }
}

// Función para crear un nuevo color-box con el color especificado
function createColorBox(color) {
  let newDiv = document.createElement('div');
  newDiv.className = 'color-box';
  newDiv.style.backgroundColor = color;
  newDiv.style.width = '200px';
  newDiv.style.height = '200px';
  newDiv.style.cursor = 'pointer';
  newDiv.style.margin = '10px';
  newDiv.addEventListener('click', changeColor);
  document.body.appendChild(newDiv);
}

// Agregar evento de escucha para las teclas presionadas
document.addEventListener('keydown', handleKeyPress);