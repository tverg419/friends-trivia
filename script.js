//  Question Banks
/*
Format of question with four responses
    {
        question: '',
        answers: [
            {answer: '', correct: false},
            {answer: '', correct: false},
            {answer: '', correct: false},
            {answer: '', correct: false}
        ]
    },
*/
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
    // {
    //     question: 'What two pets does Joey give Chandler?',
    //     answers: [
    //         {answer: 'A cat and a mouse',   correct: false},
    //         {answer: 'A cat and a dog',     correct: false},
    //         {answer: 'A chick and a duck',  correct: true},
    //         {answer: 'A cat and a chick',   correct: false}
    //     ]
    // },
    // {
    //     question: 'How many seasons did Friends run for?',
    //     answers: [
    //         {answer: '4',  correct: false},
    //         {answer: '6',  correct: false},
    //         {answer: '8',  correct: false},
    //         {answer: '10', correct: true}
    //     ]
    // },
    // {
    //     question: "What is the name of Joey's stuffed penguin?",
    //     answers: [
    //         {answer: 'Hugsy',   correct: true},
    //         {answer: 'Flipper', correct: false},
    //         {answer: 'Pengy',   correct: false},
    //         {answer: 'Gunther', correct: false}
    //     ]
    // },
    // {
    //     question: 'Which character has twin sibling?',
    //     answers: [
    //         {answer: 'Rachel',   correct: false},
    //         {answer: 'Joey',     correct: false},
    //         {answer: 'Phoebe',   correct: true},
    //         {answer: 'Chandler', correct: false}
    //     ]
    // },
    // {
    //     question: "Which character said 'PIVOT!'?",
    //     answers: [
    //         {answer: 'Ross',     correct: true},
    //         {answer: 'Chandler', correct: false},
    //         {answer: 'Monica',   correct: false},
    //         {answer: 'Joey',     correct: false}
    //     ]
    // }
]

const startButton = document.querySelector('#start-button')
const startScreen = document.querySelector('#start-screen')

const gameStats = document.querySelector('#game-stats')
const gameScreen = document.querySelector('#game-screen')
const questionImage = document.querySelector('#question-image')
const questionField = document.querySelector('#question')
const answers = document.querySelectorAll('.response')
const backButton = document.querySelector('#back-button')
const nextButton = document.querySelector('#next-button')
const counter = document.querySelector('#counter')

const gameOverScreen = document.querySelector('#game-over-screen')
const modal = document.querySelector('#modal')
const restartButton = document.querySelector('#restart-button')

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
        updateScore()
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
function updateScore() {
    counter.innerHTML = `You answered ${count} questions correctly`
}
function openGameOverScreen() {
    modal.style.display = 'block'
    gameOverScreen.style.display = 'block'
}

startButton.addEventListener('click', function () {
        startScreen.classList.add('hide')
        gameScreen.classList.remove('hide')
        gameStats.classList.remove('hide')
        changePage(currentQuestion)
        updateScore()
})
backButton.addEventListener('click', function () {
    if(currentQuestion === 0){
        return null
    } else {
        currentQuestion--;
        changePage(currentQuestion)
        answers.forEach(button => button.disabled = false)
    }
})
nextButton.addEventListener('click', function () {
    if(currentQuestion === questions.length - 1){
        gameScreen.classList.add('hide')
        gameStats.classList.add('hide')
        openGameOverScreen()
        updateScore()
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
        answers.forEach(button => button.disabled = false)
    }
})
answers.forEach(answer => answer.addEventListener('click', function(e) {
    checkAnswer(currentQuestion, e.target.value)
    showAnswers(currentQuestion)
    answers.forEach(button => button.disabled = true)
}))
restartButton.addEventListener('click', function () {
    currentQuestion = 0;
    count = 0;
    for (let i = 0; i < questions.length; i++) {
        for (let j = 0; j < answers.length; j++) {
            if (questions[i].answers[j].correct == true) {
                answers[j].classList.remove('correct')
            } else {
                answers[j].classList.remove('incorrect')      
            }
        }
    }
    modal.style.display = 'none'
    gameOverScreen.style.display = 'none'
    gameScreen.classList.remove('hide')
    gameStats.classList.remove('hide')
    startScreen.classList.remove('hide')
    gameScreen.classList.add('hide')
    gameStats.classList.add('hide')
})

console.log('Working')