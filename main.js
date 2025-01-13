const evaluateQuiz = () => {
    const correctAnswers = [2, 3, 2, 1, 2, 2]; // respuestas correctas
    let score = 0;

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

    document.getElementById('resultado').textContent = score;
};

const evaluateQuiz2 = () => {
    const correctAnswers = [1, 2, 1, 2, 1, 3]; // respuestas correctas
    let score = 0;

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

    document.getElementById('resultado').textContent = score;
};

const evaluateQuiz3 = () => {
    const correctAnswers = ["Freddie Mercury", "Piratas del Caribe", "Nirvana", "El Señor de los Anillos", "Avatar", "Siglo XIX"]; // respuestas correctas
    let score = 0;

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

    document.getElementById('resultado').textContent = score;
};