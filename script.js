const quizData = [
    {
        question: 'What is the capital of France?',
        answers: [
            { text: 'New York', correct: false },
            { text: 'London', correct: false },
            { text: 'Paris', correct: true },
            { text: 'Dublin', correct: false }
        ]
    },
    {
        question: 'Who wrote Hamlet?',
        answers: [
            { text: 'Charles Dickens', correct: false },
            { text: 'Jane Austen', correct: false },
            { text: 'William Shakespeare', correct: true },
            { text: 'Leo Tolstoy', correct: false }
        ]
    },
    {
        question: 'What is the largest planet in our solar system?',
        answers: [
            { text: 'Earth', correct: false },
            { text: 'Jupiter', correct: true },
            { text: 'Saturn', correct: false },
            { text: 'Mars', correct: false }
        ]
    }
];

const quizContainer = document.getElementById('quiz');
const resultsContainer = document.getElementById('results');
const submitButton = document.getElementById('submit');

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
    loadQuestion();
}

function loadQuestion() {
    resetState();
    showQuestion(quizData[currentQuestionIndex]);
}

function showQuestion(question) {
    const questionElement = document.createElement('div');
    questionElement.classList.add('question');
    questionElement.innerHTML = `<h2>${question.question}</h2>`;
    quizContainer.appendChild(questionElement);

    question.answers.forEach(answer => {
        const button = document.createElement('button');
        button.innerText = answer.text;
        button.classList.add('btn');
        button.addEventListener('click', () => {
            selectAnswer(answer);
        });
        questionElement.appendChild(button);
    });
}

function resetState() {
    while (quizContainer.firstChild) {
        quizContainer.removeChild(quizContainer.firstChild);
    }
    submitButton.style.display = 'none';
}

function selectAnswer(answer) {
    const correct = answer.correct;
    if (correct) {
        score++;
    }
    if (currentQuestionIndex < quizData.length - 1) {
        currentQuestionIndex++;
        loadQuestion();
    } else {
        showResults();
    }
}

function showResults() {
    resultsContainer.innerHTML = `<h2>Your Score: ${score} out of ${quizData.length}</h2>`;
    resultsContainer.style.display = 'block';
    submitButton.style.display = 'none';
}

submitButton.addEventListener('click', showResults);

startQuiz();
