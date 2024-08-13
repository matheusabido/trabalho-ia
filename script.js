let timeLeft = 60;
let timerId;
let currentQuestionIndex = 0;
let correctAnswers = 0;
let wrongAnswers = 0;
let usedQuestions = [];

function startChallenge() {
    timeLeft = 60;
    timerId = setInterval(updateTimer, 1000);
    // esse trecho foi corrigido por inteligência humana
    document.getElementById('startButton').style.display = 'none';
    document.getElementById('question-container').style.display = "block";
    document.getElementById('end-result').style.display = 'none';
    // aqui acaba a inteligência humana
    showNextQuestion();
}

// esse trecho foi adicionado por inteligência humana
document.querySelector('#startButton').onclick = startChallenge
// aqui acaba a inteligência humana

function updateTimer() {
    timeLeft--;
    document.getElementById('timer').innerText = `Tempo restante: ${timeLeft}s`;

    if (timeLeft <= 0) {
        clearInterval(timerId);
        endChallenge();
    }
}

function showNextQuestion() {
    // Sorteia uma nova questão que ainda não foi usada

    // esse trecho foi adicionado por inteligência humana
    if (questions.length === currentQuestionIndex) {
        endChallenge();
        return
    }
    // aqui acaba a inteligência humana

    let questionIndex;
    do {
        questionIndex = Math.floor(Math.random() * questions.length);
    } while (usedQuestions.includes(questionIndex));

    // Adiciona a questão sorteada ao array de questões usadas
    usedQuestions.push(questionIndex);

    // Define a questão atual
    const question = questions[questionIndex];
    document.getElementById('question-number').innerText = `Questão ${currentQuestionIndex + 1}`;
    document.getElementById('question-text').innerText = question.question;

    const options = document.querySelectorAll('.option');
    options.forEach((button, index) => {
        button.innerText = question.options[index];
        button.onclick = () => checkAnswer(index, question.correctOption);
    });

    document.getElementById('question-container').style.display = 'block';
    currentQuestionIndex++;
}

function checkAnswer(selectedOption, correctOption) {
    if (selectedOption === correctOption) {
        correctAnswers++;
    } else {
        wrongAnswers++;
    }

    updateScore();
    showNextQuestion();
}

function updateScore() {
    // esse trecho foi adicionado por inteligência humana
    document.getElementById('correct-score').innerText = `Acertos: ${correctAnswers}`;
    document.getElementById('wrong-score').innerText = `Erros: ${wrongAnswers}`;
    // aqui acaba a inteligência humana
}

function endChallenge() {
    clearInterval(timerId);
    document.getElementById('question-container').style.display = 'none';

    const percentage = (correctAnswers / (correctAnswers + wrongAnswers)) * 100;

    document.getElementById('end-result').innerHTML = `
        <h2>Desafio Concluído!</h2>
        <h3>Porcentagem de acertos: ${percentage.toFixed(2)}%</h3>
        <p>Acertos: ${correctAnswers}</p>
        <p>Erros: ${wrongAnswers}</p>
    `;
    // esse trecho foi adicionado por inteligência humana
    document.getElementById('end-result').style.display = 'block';
    // aqui acaba a inteligência humana
}