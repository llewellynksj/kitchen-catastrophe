// variables
const theWord = document.getElementById("the-word");
const userAnswer = document.getElementById("user-answer");
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
let closeButton = document.getElementsByClassName("close")[0];

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

/** On clicking the close button in this modal the checkLevel function will run and the modal will switch back to a display of none */
function closeCorrectModal() {
    correctModal.style.display = "none";
    checkLevel();
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
    score = 0;
    level = 1;
    attempts = 0;
    answerCounter = 0;
    checkLevel();
    loadButtons();
    displayStats();
    displayIcon();
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
    getWord(levelOneFood);
} else if (level === 2) {
    getWord(levelOneDrink);
} else if (level === 3) {
    getWord(levelTwoFood);
} else if (level === 4) {
    getWord(levelTwoDrink);
} else if (level === 5) {
    getWord(methods);
} else if (level === 6) {
    getWord(tenLetters);
} else if (level === 7) {
    displayWinModal();
}

theWord.innerHTML = jumbleLetters(randomWord);
}

/** Check the users answer against the correct word */
function checkAnswer() {
    // Get the word that the user inputs
    let inputAnswer = userAnswer.value.toLocaleLowerCase();
    correctAnswer = randomWord.toLowerCase();

    // Checks the users answer against the correct word and if correct then increases the score, if no answer then show error message, or if incorrect then check attempts
    if (inputAnswer === correctAnswer) {
        score += 1;
        answerCounter += 1;
        displayCorrectModal();
    } else if (!inputAnswer) {
        displayNoAnswerModal();
    } else {
        checkAttempts();
    }

    // if the answer is correct 3 times then move to the next level and reset the answer counter to 0
    if (answerCounter === 2) {
        level += 1;
        answerCounter = 0;
    }

    resetAnswerBox();
    displayStats();
    displayIcon();
}

// If users answer is incorrect function checks number of attempts and displays relevent modal
function checkAttempts() {
    if (attempts <= 1) {
        attempts += 1;
        displayIncorrectModal();
    } else {
        displayLostModal();
        startGame();
    }
}

/** Update the score, level and attempts displayed to the user */
function displayStats() {
    let currentScore = document.getElementById("score");
    let currentLevel = document.getElementById("level");
    let currentAttempts = document.getElementById("attempts");

    currentScore.innerHTML = score;
    currentLevel.innerHTML = level;
    currentAttempts.innerHTML = attempts; 
}

/** Clear the user's answer from the answer box */
function resetAnswerBox() {
    userAnswer.value = "";
}

/** Event listeners for the check answer and new game buttons */
function loadButtons() {
    let newGameButton = document.getElementById("new-game");
    newGameButton.addEventListener("click", startGame)

    let checkAnswerButton = document.getElementById("check-answer");
    checkAnswerButton.addEventListener("click", checkAnswer)
}

/** Displays the category icon dependent on the level */
function displayIcon() {
    let foodIcon = document.getElementById("food-icon");
    let drinkIcon = document.getElementById("drink-icon");
    let methodsIcon = document.getElementById("methods-icon");

    if (level === 1) {
        foodIcon.style.display = "block";
    } else if (level === 2) {
        foodIcon.style.display = "none";
        drinkIcon.style.display = "block";
    } else if (level === 3) {
        drinkIcon.style.display = "none";
        foodIcon.style.display = "block";
    } else if (level === 4) {
        foodIcon.style.display = "none";
        drinkIcon.style.display = "block";
    } else if (level === 5) {
        drinkIcon.style.display = "none";
        methodsIcon.style.display = "block";
    } else if (level === 6) {
        methodsIcon.style.display = "none";
    }
}

startGame();
