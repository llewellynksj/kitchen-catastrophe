// variables
const theWord = document.getElementById("the-word");
const userAnswer = document.getElementById("user-answer");
let randomWord;

// modal variables
let winModal = document.getElementById("win-modal");
let lostModal = document.getElementById("lost-modal");
let correctModal = document.getElementById("correct-modal");
let incorrectModal = document.getElementById("incorrect-modal");
let noAnswerModal = document.getElementById("no-answer-modal");
let closeButton = document.getElementById("close")[0];

// modal functions
function displayWinModal() {

}

function displayLostModal() {

}

function displayCorrectModal() {

}

function displayIncorrectModal() {

}

function displayNoAnswerModal() {

}

function closeModalNewGame() {

}

function closeModalContinue() {

}

/** Starts the game
 * Called when script is loaded
 */
function startGame() {

}

/** Get a random word from the array. Passing a parameter so that different arrays can be used dependent on level */
function getWord(array) {
    randomWord = array[Math.floor(Math.random() * array.length)];
    return randomWord;
}

/** Scramble the letters of the word that has been taken at random from the array  */
function jumbleLetters(randomWord) {

    // splitting the letters of the random word
    let letterMix = randomWord.split("");

    // shuffling the letters using Fisher-Yates algorithm (code taken from James Bubb: https://bit.ly/3XZ3S6y)
    for (let i = letterMix.length - 1; i > 0; i--) {
       let j = Math.floor(Math.random() * (i + 1));
       const temp = letterMix[i];
       letterMix[i] = letterMix[j];
       letterMix[j] = temp;
    }
    
    return letterMix.join("");

}

/** Check which level the user is at and run the getWord function to draw a word from the appropriate array by passing the array name as a parameter */
function checkLevel() {
if (level === 1) {
    getWord(threeFourLetters);
} else if (level === 2) {
    getWord(fiveSixLetters);
} else if (level === 3) {
    getWord(sevenEightLetters);
} else if (level === 4) {
    getWord(tenLetters);
} else {
    displayWinModal();
}

theWord.innerHTML = jumbleLetters(randomWord);
}

/** Check the users answer against the correct word
 * If correct then increase score
 * If no answer then show error message
 * If incorrect then increase attempts
 */
function checkAnswer() {

}

/** Update the score, level and attempts displayed to the user */
function displayStats() {

}

/** Clear the user's answer from the answer box */
function resetAnswerBox() {

}
