//  Question Banks

const questions = [
    {
        question: 'How many main characters are in Friends?',
        answers: [
            {answer: '2', correct: false},
            {answer: '4', correct: false},
            {answer: '6', correct: true},
            {answer: '8', correct: false}
        ],
    },
    {
        question: 'Which one of these is NOT a main male character?',
        answers: [
            {answer: 'Chandler', correct: false},
            {answer: 'Ross' ,    correct: false},
            {answer: 'Joey' ,    correct: false},
            {answer: 'Dennis',   correct: true}
        ]
    },
    {
        question: 'Which one of these is NOT a main female character?',
        answers: [
            {answer: 'Rachel',  correct: false},
            {answer: 'Monica',  correct: false},
            {answer: 'Nicole',  correct: true},
            {answer: 'Phoebe',  correct: false}
        ]
    },
    {
        question: 'What city does the show take place in?',
        answers: [
            {answer: 'New York City',   correct: true},
            {answer: 'Miami',           correct: false},
            {answer: 'Boston',          correct: false},
            {answer: 'San Francisco',   correct: false}
        ]
    },
    {
        question: 'What is the name of the cafe the gang hangs out in?',
        answers: [
            {answer: 'Coffeehouse',  correct: false},
            {answer: 'Central Perk', correct: true},
            {answer: 'Cafe NYC',     correct: false},
            {answer: 'Beans',        correct: false}
        ]
    }
]

const startScreen = document.querySelector('#start-screen')
const gameScreen = document.querySelector('#game-screen')

const startButton = document.querySelector('#start-button')

const questionImage = document.querySelector('#question-image')
const questionField = document.querySelector('#question')
const answers = document.querySelectorAll('.response')
const backButton = document.querySelector('#back-button')
const nextButton = document.querySelector('#next-button')
const counter = document.querySelector('#counter')
let currentQuestion = 0;
let count = 0;

function getImage(index) {
    let source = `assets/q${index}.jpeg`
    questionImage.src = source
}
function getQuestion(index) {
    questionField.innerHTML = questions[index].question
}
function getAnswers(index) {
        for (let i = 0; i < answers.length; i++) {
            answers[i].innerHTML = questions[index].answers[i].answer
        }
}
function changePage(currentQuestion) {
    getImage(currentQuestion)
    getQuestion(currentQuestion)
    getAnswers(currentQuestion)
}
function checkAnswer(question, index) {
    if (questions[question].answers[index].correct == true) {
        count++
    }
}
function showAnswers(question) {
    for (let i = 0; i < answers.length; i++) {
        if (questions[question].answers[i].correct == true) {
            answers[i].classList.add('correct')
        } else {
            answers[i].classList.add('incorrect')      
        }
    }
}

startButton.addEventListener('click', function () {
        startScreen.classList.add('hide')
        gameScreen.classList.remove('hide')
        changePage(currentQuestion)
})
backButton.addEventListener('click', function () {
    if(currentQuestion === 0){
        return null
    } else {
        currentQuestion--;
        changePage(currentQuestion)
    }
})
nextButton.addEventListener('click', function () {
    if(currentQuestion === questions.length - 1){
        return null
    } else {
        for (let i = 0; i < answers.length; i++) {
            if (questions[currentQuestion].answers[i].correct == true) {
                answers[i].classList.remove('correct')
            } else {
                answers[i].classList.remove('incorrect')      
            }
        }
        currentQuestion++;
        changePage(currentQuestion)
    }
})

answers.forEach(answer => answer.addEventListener('click', function(e) {
    checkAnswer(currentQuestion, e.target.value)
    showAnswers(currentQuestion)
    answers.forEach(button => button.disabled == true)
}))