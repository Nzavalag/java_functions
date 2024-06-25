// Variable global para almacenar el color seleccionado
let currentColor = "";

// Función para cambiar el color de un div al negro
function changeColorToBlack(event) {
    event.target.style.backgroundColor = "black";
}

// Añadir evento de click a cada div
document.getElementById("div1").addEventListener("click", function() {
    changeColorToBlack(event);
    currentColor = "pink"; // Color rosado
});
document.getElementById("div2").addEventListener("click", function() {
    changeColorToBlack(event);
    currentColor = "orange"; // Color naranjo
});
document.getElementById("div3").addEventListener("click", function() {
    changeColorToBlack(event);
    currentColor = "cyan"; // Color celeste
});
document.getElementById("div4").addEventListener("click", function() {
    changeColorToBlack(event);
    currentColor = "black"; // Color negro
});

// Evento para cambiar el color del div "key" al presionar teclas
document.addEventListener("keydown", function(event) {
    if (event.key === "a") {
        document.getElementById("key").style.backgroundColor = "pink";
    } else if (event.key === "s") {
        document.getElementById("key").style.backgroundColor = "orange";
    } else if (event.key === "d") {
        document.getElementById("key").style.backgroundColor = "cyan";
    } else if (event.key === "q") {
        createNewDiv("purple");
    } else if (event.key === "w") {
        createNewDiv("gray");
    } else if (event.key === "e") {
        createNewDiv("brown");
    }
});

// Función para crear un nuevo div con el color especificado
function createNewDiv(color) {
    let newDiv = document.createElement("div");
    newDiv.className = "color-div";
    newDiv.style.backgroundColor = color;
    newDiv.style.width = "200px";
    newDiv.style.height = "200px";
    newDiv.style.cursor = "pointer";
    newDiv.addEventListener("click", changeColorToBlack);
    document.body.appendChild(newDiv);
}