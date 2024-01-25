const correctWord = "comparte";
let currentLetterIndex = 0;

document.addEventListener("DOMContentLoaded", function() {
    initializeLetterBoxes();
});

function initializeLetterBoxes() {
    const letterBoxesContainer = document.getElementById("letter-boxes");
    for (let i = 0; i < correctWord.length; i++) {
        const box = document.createElement("div");
        box.className = "box";
        letterBoxesContainer.appendChild(box);
    }
}

function updateLetterBox(letter) {
    const letterBoxes = document.getElementsByClassName("box");
    letterBoxes[currentLetterIndex].textContent = letter;
    if (letter === correctWord[currentLetterIndex]) {
        // Si la letra es correcta, aplica el efecto de escala
        letterBoxes[currentLetterIndex].classList.add("correct-letter");
    }
    
    currentLetterIndex++;

    if (currentLetterIndex === correctWord.length) {
        document.getElementById("message-container").innerText = `Enhorabuena! Adivinaste la palabra!`;showApplause();
        
         // Ocultar el botón "Siguiente" después de un breve tiempo (por ejemplo, 1000ms)
         setTimeout(function() {
            ocultarSiguienteButton();
        }, 100);

    } else {
        document.getElementById("message-container").innerText = `Buen trabajo!`;
    }
}

function showApplause() {

    const sound = new Howl({
        src: ['sounds/applause.mp3'], // Reemplaza 'path/to/applause.mp3' con la ruta correcta a tu archivo de sonido
        volume: 0.5, // Puedes ajustar el volumen según tus necesidades
    });

    sound.play();
}


function checkLetter() {
    const userInput = document.getElementById("guess-input").value.toLowerCase();

    if (userInput.length !== 1 || !/^[a-z]$/.test(userInput)) {
        document.getElementById("message-container").innerText = `Por favor introduzca una letra única válida.`;
        return;
    }

    const expectedLetter = correctWord[currentLetterIndex];

    if (userInput === expectedLetter) {
        updateLetterBox(expectedLetter);
        document.getElementById("guess-input").focus();
    } else {
        document.getElementById("message-container").innerText = `Letra incorrecta. Intenta otra vez.`;
    }

    document.getElementById("guess-input").value = "";
}



function actualizarYVolverAlInicio() {
    // Recargar la página
    location.reload();

    // Volver al inicio después de recargar (opcional)
    // Puedes ajustar el tiempo de espera según tus necesidades
    setTimeout(function () {
        window.scrollTo(0, 0);
    }, 500);
}


function ocultarSiguienteButton() {
    // Obtener el botón por su ID (cambia "siguienteBtn" al ID de tu botón)
    var siguienteButton = document.getElementById("siguienteBtn");

    // Verificar si el botón existe antes de intentar ocultarlo
    if (siguienteButton) {
        // Aplicar la propiedad display: none al estilo del botón
        siguienteButton.style.display = "none";
    } else {
        console.error("El botón no se encontró.");
    }
}
