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

    canvas.style.display = 'block'; // Mostrar canvas
    animateLoading(); // Iniciar animación

    setTimeout(() => {
        showResults(score, correctAnswers.length); // Mostrar resultados después de la animación
    }, 500);
};

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

    canvas.style.display = 'block'; // Mostrar canvas
    animateLoading(); // Iniciar animación

    setTimeout(() => {
        showResults(score, correctAnswers.length); // Mostrar resultados después de la animación
    }, 500);
};

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

    canvas.style.display = 'block'; // Mostrar canvas
    animateLoading(); // Iniciar animación

    setTimeout(() => {
        showResults(score, correctAnswers.length); // Mostrar resultados después de la animación
    }, 500);
};

// Canvas y contexto
const canvas = document.getElementById('loadingCanvas');
const ctx = canvas ? canvas.getContext('2d') : null;
let animationFrame;

// Función para dibujar la rueda de carga
const drawLoadingWheel = (progress) => {
    const x = canvas.width / 2;
    const y = canvas.height / 2;
    const radius = 40;

    // Limpiar canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Círculo de fondo
    ctx.beginPath();
    ctx.arc(x, y, radius, 0, Math.PI * 2);
    ctx.fillStyle = '#ddd';
    ctx.fill();

    // Rueda de progreso
    ctx.beginPath();
    ctx.arc(x, y, radius, -Math.PI / 2, -Math.PI / 2 + (Math.PI * 2 * progress));
    ctx.lineWidth = 10;
    ctx.strokeStyle = '#2BDE9D';
    ctx.stroke();
};

// Animación
const animateLoading = () => {
    let progress = 0;

    const animate = () => {
        progress += 0.05;
        if (progress >= 1) progress = 0;
        drawLoadingWheel(progress);
        animationFrame = requestAnimationFrame(animate);
    };

    animate();
};

// Mostrar resultados
const showResults = (score, total) => {
    cancelAnimationFrame(animationFrame); // Detener la animación
    canvas.style.display = 'none'; // Ocultar canvas
    const resultadoText = document.getElementById('resultadoText');
    resultadoText.style.display = 'block'; // Mostrar resultados
    resultadoText.textContent = `¡Respuestas correctas: ${score}/${total}!`;
};
