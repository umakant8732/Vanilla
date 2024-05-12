const questions = [
    {
        question: "Which is the largest animal in the world ?",
        answers: [
            { text: "Shark", Correct: false },
            { text: "Blue Whale", Correct: true },
            { text: "Elephant", Correct: false },
            { text: "Tiger", Correct: false }
        ]
    },

    {
        question: "India Got Independence on ?",
        answers: [
            { text: "15 Aug 1947", Correct: true },
            { text: "1 jan 1988", Correct: false },
            { text: "14 apr 1965", Correct: false },
            { text: "21 sept 1976", Correct: false }
        ]
    },

    {
        question: "Largest Continent in the world ?",
        answers: [
            { text: "Africa", Correct: false },
            { text: "Australia", Correct: false },
            { text: "Europe", Correct: false },
            { text: "Asia", Correct: true }
        ]
    },


];


const questionElement = document.querySelector('#question');
const answerButton = document.querySelector('#answerButtons');
const nextButton = document.querySelector('#next-btn')


let currentQuestionIndex = 0;
let score = 0;




function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}


function showQuestion() {
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNumber = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNumber + ". " + currentQuestion.question;

    currentQuestion.answers.forEach((answer) => {
        const button = document.createElement('button');
        button.classList.add('btn');
        button.innerHTML = answer.text;
        answerButton.appendChild(button);

        if (answer.Correct) {
            button.dataset.Correct = answer.Correct;
        }
        button.addEventListener("click", selectAnswer);


    })

}


function resetState() {
    nextButton.style.display = "none";
    while (answerButton.firstElementChild) {
        answerButton.removeChild(answerButton.firstElementChild);
    }
}

function selectAnswer(e) {
    const selectBtn = e.target;
    const isCorrect = selectBtn.dataset.Correct === "true";
    if (isCorrect) {
        selectBtn.classList.add('correct');
        score++;
    }
    else {
        selectBtn.classList.add('inCorrect');
    }

    Array.from(answerButton.children).forEach((button) => {
        if (button.dataset.Correct === 'true') {
            button.classList.add('correct');
        }
        button.disabled = true;

    });

    nextButton.style.display = 'block';

}

function showScore() {
    resetState();
    questionElement.innerHTML = `you scored ${score} out of ${questions.length}`;
    nextButton.innerHTML = "play again";
    nextButton.style.display = 'block';
}


function handleNextButton() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion();
    }
    else {
        showScore();
    }
}

nextButton.addEventListener('click', () => {
    if (currentQuestionIndex < questions.length) {
        handleNextButton();
    }
    else {
        startQuiz();
    }
})



startQuiz();

while(nextButton.firstElementChild){
    nextButton.removeChild(nextButton.firstElementChild);
}






