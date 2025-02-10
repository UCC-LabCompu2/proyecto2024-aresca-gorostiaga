let animationFrame = null; // Variable global para manejar la animación

document.addEventListener("DOMContentLoaded", function() {

    const textInputs = document.querySelectorAll('input[type="text"]');

    textInputs.forEach(input => {
        input.addEventListener("input", function() {

            if (/[^a-zA-Z\s]/.test(this.value)) {
                alert("Solo se permiten letras en este campo.");
                this.value = "";
            }
        });
    });
});

/**
 * Descripción de que hace la función
 * @method Nombre de la función
 * @param {string} ParámetroA - Explicación de que valor almacena ParámetroA
 * @param {number} ParámetroB - Explicación de que valor almacena ParámetroB
 * @return Valor que retorna
 */

const evaluateQuiz = () => {
    const correctAnswers = [2, 3, 2, 1, 2, 2]; // respuestas correctas
    let score = 0;

    // Verificar si hay respuestas no seleccionadas
    for (let i = 0; i < correctAnswers.length; i++) {
        const question = document.querySelector(`input[name="p${i}"]:checked`);
        if (!question) {
            alert(`Por favor, responda todas las preguntas antes de corregir.`);
            return; // Detener la función si falta una respuesta
        }
    }

    correctAnswers.forEach((answer, i) => {
        const question = document.querySelector(`input[name="p${i}"]:checked`);
        if (question) {
            if (parseInt(question.value) === answer) {
                score++;
                question.parentElement.style.backgroundColor = "#2BDE9D";
            } else {
                question.parentElement.style.backgroundColor = "#C9416A";
            }
        }

        const correctOption = document.querySelector(`input[name="p${i}"][value="${answer}"]`);
        correctOption.parentElement.style.backgroundColor = "#2BDE9D";
    });

    document.querySelectorAll('input[type="radio"]').forEach(button => button.disabled = true);

    setTimeout(() => {
        showResults(score, correctAnswers.length); // Mostrar resultados después de la animación
    }, 500);
};


/**
 * Descripción de que hace la función
 * @method Nombre de la función
 * @param {string} ParámetroA - Explicación de que valor almacena ParámetroA
 * @param {number} ParámetroB - Explicación de que valor almacena ParámetroB
 * @return Valor que retorna
 */

const evaluateQuiz2 = () => {
    const correctAnswers = [1, 2, 1, 2, 1, 3]; // respuestas correctas
    let score = 0;

    // Verificar si hay respuestas no seleccionadas
    for (let i = 0; i < correctAnswers.length; i++) {
        const question = document.querySelector(`input[name="p${i}"]:checked`);
        if (!question) {
            alert(`Por favor, responda todas las preguntas antes de corregir.`);
            return; // Detener la función si falta una respuesta
        }
    }

    correctAnswers.forEach((answer, i) => {
        const question = document.querySelector(`input[name="p${i}"]:checked`);
        if (question) {
            if (parseInt(question.value) === answer) {
                score++;
                question.parentElement.style.backgroundColor = "#2BDE9D";
            } else {
                question.parentElement.style.backgroundColor = "#C9416A";
            }
        }

        const correctOption = document.querySelector(`input[name="p${i}"][value="${answer}"]`);
        correctOption.parentElement.style.backgroundColor = "#2BDE9D";
    });

    document.querySelectorAll('input[type="radio"]').forEach(button => button.disabled = true);


    setTimeout(() => {
        showResults(score, correctAnswers.length); // Mostrar resultados después de la animación
    }, 500);
};

/**
 * Descripción de que hace la función
 * @method Nombre de la función
 * @param {string} ParámetroA - Explicación de que valor almacena ParámetroA
 * @param {number} ParámetroB - Explicación de que valor almacena ParámetroB
 * @return Valor que retorna
 */

const evaluateQuiz3 = () => {
    const correctAnswers = ["Freddie Mercury", "Piratas del Caribe", "Nirvana", "El Señor de los Anillos", "Avatar", "Siglo XIX"]; // respuestas correctas
    let score = 0;

    // Verificar si todas las preguntas tienen respuesta
    for (let i = 0; i < correctAnswers.length; i++) {
        const questionInput = document.getElementById(`p${i}`);

        // Verificar si es un campo de texto
        if (questionInput.tagName === "INPUT" && questionInput.type === "text") {
            if (questionInput.value.trim() === "") {
                alert(`Por favor, responda todas las preguntas antes de corregir.`);
                return; // Detener la función si falta una respuesta
            }
        }

        // Verificar si es un campo de tipo select
        if (questionInput.tagName === "SELECT") {
            if (questionInput.value === "") {
                alert(`Por favor, responda todas las preguntas antes de corregir.`);
                return; // Detener la función si falta una respuesta
            }
        }
    }

    // Pregunta 1
    const p0 = document.getElementById('p0').value.trim();
    if (p0.toLowerCase() === correctAnswers[0].toLowerCase()) {
        score++;
        document.getElementById('p0').style.backgroundColor = "#2BDE9D";
    } else {
        document.getElementById('p0').style.backgroundColor = "#C9416A";
    }

    // Pregunta 2
    const p1 = document.getElementById('p1').value.trim();
    if (p1.toLowerCase() === correctAnswers[1].toLowerCase()) {
        score++;
        document.getElementById('p1').style.backgroundColor = "#2BDE9D";
    } else {
        document.getElementById('p1').style.backgroundColor = "#C9416A";
    }

    // Pregunta 3
    const p2 = document.getElementById('p2').value;
    if (p2 === correctAnswers[2]) {
        score++;
        document.getElementById('p2').style.backgroundColor = "#2BDE9D";
    } else {
        document.getElementById('p2').style.backgroundColor = "#C9416A";
    }

    // Pregunta 4
    const p3 = document.getElementById('p3').value.trim();
    if (p3.toLowerCase() === correctAnswers[3].toLowerCase()) {
        score++;
        document.getElementById('p3').style.backgroundColor = "#2BDE9D";
    } else {
        document.getElementById('p3').style.backgroundColor = "#C9416A";
    }

    // Pregunta 5
    const p4 = document.getElementById('p4').value;
    if (p4 === correctAnswers[4]) {
        score++;
        document.getElementById('p4').style.backgroundColor = "#2BDE9D";
    } else {
        document.getElementById('p4').style.backgroundColor = "#C9416A";
    }

    // Pregunta 6
    const p5 = document.getElementById('p5').value;
    if (p5 === correctAnswers[5]) {
        score++;
        document.getElementById('p5').style.backgroundColor = "#2BDE9D";
    } else {
        document.getElementById('p5').style.backgroundColor = "#C9416A";
    }

    document.querySelectorAll('input[type="text"], select').forEach(input => input.disabled = true);

    setTimeout(() => {
        showResults(score, correctAnswers.length); // Mostrar resultados después de la animación
    }, 500);
};

/**
 * Descripción de que hace la función
 * @method Nombre de la función
 * @param {string} ParámetroA - Explicación de que valor almacena ParámetroA
 * @param {number} ParámetroB - Explicación de que valor almacena ParámetroB
 * @return Valor que retorna
 */

const lanzarConfeti = () => {
    const canvas = document.getElementById("confettiCanvas");
    const ctx = canvas.getContext("2d");

    // Ajustar tamaño del canvas solo sobre las preguntas
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight * 0.4; // Solo la parte superior

    const confetti = [];

    for (let i = 0; i < 100; i++) {
        confetti.push({
            x: Math.random() * canvas.width,
            y: Math.random() * (canvas.height) + (window.innerHeight * 0.15), // Solo sobre las preguntas
            radius: Math.random() * 5 + 2,
            color: `hsl(${Math.random() * 360}, 100%, 50%)`,
            speedY: Math.random() * 3 + 2, // Movimiento hacia abajo
            speedX: (Math.random() - 0.5) * 2 // Movimiento horizontal aleatorio
        });
    }

    const drawConfetti = () => {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        confetti.forEach(particle => {
            ctx.beginPath();
            ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
            ctx.fillStyle = particle.color;
            ctx.fill();
            particle.y += particle.speedY;
            particle.x += particle.speedX;

            // Si el confetti sale del área, lo reiniciamos arriba
            if (particle.y > canvas.height) {
                particle.y = 0;
                particle.x = Math.random() * canvas.width;
            }
        });

        requestAnimationFrame(drawConfetti);
    };

    drawConfetti();

    setTimeout(() => {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
    }, 5000);
};


/**
 * Esta funcion muestra los resultados obtenidos de las preguntas.
 * @method showResults
 * @param {number} score - Explicación de que valor almacena ParámetroA
 * @param {number} total - Explicación de que valor almacena ParámetroB
 */

const showResults = (score, total) => {
    console.log(`Ejecutando showResults(): score=${score}, total=${total}`);
    if (animationFrame) {
        cancelAnimationFrame(animationFrame);
        animationFrame = null; // Reiniciar la variable después de cancelar
    }

    const resultadoText = document.getElementById('resultadoText');

    if (resultadoText) {
        resultadoText.style.display = 'block'; // Mostrar el resultado
        resultadoText.textContent = `¡Respuestas correctas: ${score}/${total}!`;
    } else {
        console.error("No se encontró el elemento #resultadoText en el DOM.");
    }

    // Asegurarse de que ambos valores sean números para la comparación
    if (parseInt(score) === parseInt(total)) {
        console.log("¡Todas las respuestas son correctas! Lanzando confetti...");
        lanzarConfeti(); // Solo se ejecuta si todas son correctas
    } else {
        console.log("No se alcanzó el puntaje máximo. No se lanza confetti.");
    }
};

