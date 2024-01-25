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
        document.getElementById("message-container").innerHTML = `<p>Enhorabuena! Adivinaste la palabra!</p>`;showApplause()
    } else {
        document.getElementById("message-container").innerHTML = `<p>Buen trabajo!</p>`;
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
        document.getElementById("message-container").innerHTML = `<p >Por favor introduzca una letra única válida.</p>`;
        return;
    }

    const expectedLetter = correctWord[currentLetterIndex];

    if (userInput === expectedLetter) {
        updateLetterBox(expectedLetter);
        document.getElementById("guess-input").focus();
    } else {
        document.getElementById("message-container").innerHTML = `<p>Letra incorrecta. Intenta otra vez.</p>`;
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