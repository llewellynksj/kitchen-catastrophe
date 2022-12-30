// variables
const theWord = document.getElementById("the-word");
const userAnswer = document.getElementById("user-answer");
let randomWord;

function startGame() {

}

// get a random word from the array. Passing a parameter so that different arrays can be used dependent on level
function getWord(array) {
    randomWord = array[Math.floor(Math.random() * array.length)];
    return randomWord;
}

function jumbleLetters() {

}

function checkLevel() {

}

function checkAnswer() {

}

function displayStats() {

}

function resetAnswerBox() {

}
