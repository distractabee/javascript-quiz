// Questions for the quiz:

const questions = [
    {
        question: "Which of the following is not a commonly used data type?",
        choices: ["Boolean", "Integer", "Number", "String"],
        answer: "Number"
    },
    {
        question: "Arrays in JavaScript can be used to store:",
        choices: ["Numbers and Strings", "Other Arrays", "Booleans", "All of the Above"],
        answer: "All of the Above"
    },
    {
        question: "What kind of loop runs a section of code repeatedly until a certain condition has been satisfied?",
        choices: ["If Loop", "For Loop", "While Loop", "None of These"],
        answer: "For Loop"
    },
    {
        question: "The condition in an if/else statement is enclosed in: ",
        choices: ["Parentheses", "Curly Brackets", "Square Brackets", "Quotation Marks"],
        answer: "Parentheses"
    },
    {
        question: "A very useful tool for debugging code is: ",
        choices: ["console.log()", "JavaScript", "Phoning a Friend", "For Loops"],
        answer: "console.log()"
    },
]

// variables to fill in with the question and answer choices text
const introEl = document.getElementById("intro");
const quizConEl = document.getElementById("quizContainer");
const questionEl = document.querySelector(".questionText");
const btnAEl = document.getElementById("buttonA");
const btnBEl = document.getElementById("buttonB");
const btnCEl = document.getElementById("buttonC");
const btnDEl = document.getElementById("buttonD");

// game countdown
var score;
var secondsLeft = 75;
var qIndex = 0;

function countdown() {
    var timerText = document.getElementById("timer");
    var timeLeft = setInterval(function () {
        secondsLeft--;
        timerText.textContent = `Time Left: ${secondsLeft}`;
        if (secondsLeft <= 0) {
            clearInterval(timeLeft);
            gameOver();
        }
    }, 1000);
};

const startBtn = document.getElementById("startButton");

function startGame() {
    score = 0;
    countdown();
    introEl.setAttribute("style", "display: none");
    quizConEl.setAttribute("style", "display: block");
    askAway();
};

// loads the questions into the text containers on the page
function askAway() {
    questionEl.textContent = questions[qIndex].question;
    btnAEl.textContent = questions[qIndex].choices[0];
    btnBEl.textContent = questions[qIndex].choices[1];
    btnCEl.textContent = questions[qIndex].choices[2];
    btnDEl.textContent = questions[qIndex].choices[3];
}

// Add event listener that starts the game

startBtn.addEventListener("click", startGame);
