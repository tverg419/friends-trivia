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
]
// const questionsMedium = [
//     {
//         question: 'What two pets does Joey give Chandler?',
//         answers: [
//             {answer: 'A cat and a mouse',   correct: false},
//             {answer: 'A cat and a dog',     correct: false},
//             {answer: 'A chick and a duck',  correct: true},
//             {answer: 'A cat and a chick',   correct: false}
//         ]
//     },
//     {
//         question: 'How many seasons did Friends run for?',
//         answers: [
//             {answer: '4',  correct: false},
//             {answer: '6',  correct: false},
//             {answer: '8',  correct: false},
//             {answer: '10', correct: true}
//         ]
//     },
//     {
//         question: "What is the name of Joey's stuffed penguin?",
//         answers: [
//             {answer: 'Hugsy',   correct: true},
//             {answer: 'Flipper', correct: false},
//             {answer: 'Pengy',   correct: false},
//             {answer: 'Gunther', correct: false}
//         ]
//     },
//     {
//         question: 'Which character has twin sibling?',
//         answers: [
//             {answer: 'Rachel',   correct: false},
//             {answer: 'Joey',     correct: false},
//             {answer: 'Phoebe',   correct: true},
//             {answer: 'Chandler', correct: false}
//         ]
//     },
//     {
//         question: "Which character said 'PIVOT!'?",
//         answers: [
//             {answer: 'Ross',     correct: true},
//             {answer: 'Chandler', correct: false},
//             {answer: 'Monica',   correct: false},
//             {answer: 'Joey',     correct: false}
//         ]
//     }
// ]

const startScreen = document.querySelector('#start-screen')
const gameScreen = document.querySelector('#game-screen')

const startButton = document.querySelector('#easy-button')
// const mediumButton = document.querySelector('#medium-button')
// const hardButton = document.querySelector('#hard-button')
// const startButtons = [easyButton, mediumButton, hardButton]

const questionImage = document.querySelector('#question-image')
const questionField = document.querySelector('#question')
const answers = document.querySelectorAll('.response')

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
function changePage() {
    getImage(0)
    getQuestion(0)
    getAnswers(0)
}

let timer = setInterval(changePage, 2000)

startButton.addEventListener('click', function () {
        startScreen.classList.add('hide')
        gameScreen.classList.remove('hide')
})

    // startButtons.forEach(button => button.addEventListener('click', function () {
// }))
console.log(answers[0].innerHTML)
console.log('Working')