// variables
const theWord = document.getElementById("the-word");
const userAnswer = document.getElementById("user-answer");
let currentScore = document.getElementById("score");
let currentLevel = document.getElementById("level");
let currentAttempts = document.getElementById("attempts");
let randomWord;
let correctAnswer;
let answerCounter;
let score;
let attempts;
let level;

// modal variables
let winModal = document.getElementById("win-modal");
let lostModal = document.getElementById("lost-modal");
let correctModal = document.getElementById("correct-modal");
let incorrectModal = document.getElementById("incorrect-modal");
let noAnswerModal = document.getElementById("no-answer-modal");
let closeButton = document.getElementById("close")[0];

// modal functions
/** Switches the win modal display from none (as per css) to block so that it is visible */
function displayWinModal() {
    winModal.style.display = "block";
}

/** Switches the lost modal display from none (as per css) to block so that it is visible */
function displayLostModal() {
    lostModal.style.display = "block";
}

/** Switches the correct modal display from none (as per css) to block so that it is visible */
function displayCorrectModal() {
    correctModal.style.display = "block";
}

/** Switches the incorrect modal display from none (as per css) to block so that it is visible */
function displayIncorrectModal() {
    incorrectModal.style.display = "block";
}

/** Switches the no answer modal display from none (as per css) to block so that it is visible */
function displayNoAnswerModal() {
    noAnswerModal.style.display = "block";
}

/** On clicking the close button in the modal this will start a new game and switch the modal display back to none */
function closeModalNewGame() {
    startGame();
    winModal.style.display = "none";
    lostModal.style.display = "none";
}

/** Switches the display of the modal back to none when the close button is clicked */
function closeModalContinue() {
    correctModal.style.display = "none";
    incorrectModal.style.display = "none";
    noAnswerModal.style.display = "none";
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

/** Check the users answer against the correct word */
function checkAnswer() {
    // Get the word that the user inputs
    let inputAnswer = userAnswer.ariaValueMax.toLocaleLowerCase();
    correctAnswer = randomWord.toLowerCasee();

    // Checks the users answer against the correct word and if correct then increases the score, if no answer then show error message, or if incorrect then increases attempts
    if (inputAnswer === correctAnswer) {
        score += 1;
        answerCounter += 1;
        displayCorrectModal();
    } else if (!inputAnswer) {
        displayNoAnswerModal();
    } else {
        attempts += 1;
    }

    // if the answer is correct 3 times then move to the next level and reset the answer counter to 0
    if (answerCounter === 3) {
        level += 1;
        answerCounter = 0;
    }

    resetAnswerBox();
    displayStats();
}

/** Update the score, level and attempts displayed to the user */
function displayStats() {

}

/** Clear the user's answer from the answer box */
function resetAnswerBox() {

}
