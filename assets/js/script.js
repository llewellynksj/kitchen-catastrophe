// variables
const theWord = document.getElementById("the-word");
let rawUserAnswer = document.getElementById("user-answer");
let randomWord;
let correctAnswer;
let answerCounter;
let score;
let attempts;
let level;

// modal variables
const winModal = document.getElementById("win-modal");
const lostModal = document.getElementById("lost-modal");
const correctModal = document.getElementById("correct-modal");
const incorrectModal = document.getElementById("incorrect-modal");
const noAnswerModal = document.getElementById("no-answer-modal");
const closeButton = document.getElementsByClassName("close")[0];

// modal display functions
function displayWinModal() {
    winModal.style.display = "block";
    winModal.addEventListener("click", closeModalNewGame)
}

function displayLostModal() {
    lostModal.style.display = "block";
    lostModal.addEventListener("click", closeModalNewGame)
}

function displayCorrectModal() {
    correctModal.style.display = "block";
    correctModal.addEventListener("click", closeCorrectModal)
}

function displayIncorrectModal() {
    incorrectModal.style.display = "block";
    incorrectModal.addEventListener("click", closeModalContinue)
}

function displayNoAnswerModal() {
    noAnswerModal.style.display = "block";
    noAnswerModal.addEventListener("click", closeModalContinue)
}

// modal close functions
function closeModalNewGame() {
    startGame();
    winModal.style.display = "none";
    lostModal.style.display = "none";
}

function closeCorrectModal() {
    correctModal.style.display = "none";
    checkLevel();
    displayIcon();
}

function closeModalContinue() {
    correctModal.style.display = "none";
    incorrectModal.style.display = "none";
    noAnswerModal.style.display = "none";
    document.getElementById("user-answer").focus();
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
    let letterMix = randomWord.word.split("");

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
    getWord(levelTwoDrink);
} else if (level === 3) {
    getWord(levelThreeFood);
} else if (level === 4) {
    getWord(levelFourDrink);
} else if (level === 5) {
    getWord(levelFiveMethods);
} else if (level === 6) {
    getWord(levelSixTenLetters);
} else if (level === 7) {
    checkWinner();
}

theWord.innerHTML = jumbleLetters(randomWord);

let theClue = document.getElementById("clue");
theClue.innerHTML = randomWord.clue;

document.getElementById("user-answer").focus();
}

/** Check the users answer against the correct word */
function checkAnswer() {
    // Get the word that the user inputs - implement regex to remove space characters and convert string to lowercase
    let userAnswer = rawUserAnswer.value.replace(/\s/g, "");
    let inputAnswer = userAnswer.toLocaleLowerCase();
    correctAnswer = randomWord.word.toLowerCase();

    // Checks the users answer against the correct word and if correct then increases the score, if no answer then show error message, or if incorrect then check attempts
    if (inputAnswer === correctAnswer) {
        checkWinner();
    } else if (!inputAnswer) {
        displayNoAnswerModal();
    } else {
        checkAttempts();
    }

    // if the answer is correct 2 times then move to the next level and reset the answer counter to 0
    if (answerCounter === 2) {
        level += 1;
        answerCounter = 0;
    }

    resetAnswerBox();
    displayStats();
}

/** If users answer is correct function checks if user has reached the end of the game */
function checkWinner() {
    if (score === 11) {
        score += 1;
        answerCounter += 1;
        displayWinModal();
    } else if (score < 11) {
        score += 1;
        answerCounter += 1;
        displayCorrectModal();
}}

/**  If users answer is incorrect function checks number of attempts and displays relevent modal */
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
    rawUserAnswer.value = "";
}

/** Event listeners for the check answer and new game buttons */
function loadButtons() {
    let newGameButton = document.getElementById("new-game");
    newGameButton.addEventListener("click", startGame)

    let checkAnswerButton = document.getElementById("check-answer");
    checkAnswerButton.addEventListener("click", checkAnswer)

    // Enable user to press enter to check answer
    // code taken from Code Institute Love Maths project walkthrough: https://bit.ly/3Z9GuUs
    document.getElementById("user-answer").addEventListener("keydown", function(event) {
        if (event.key === "Enter") {
            checkAnswer();
        }})
}

/** Displays the category icon dependent on the level */
function displayIcon() {
    let foodIcon = document.getElementById("food-icon");
    let drinkIcon = document.getElementById("drink-icon");
    let methodsIcon = document.getElementById("methods-icon");
    let tenCategory = document.getElementById("ten-letters");

    if (level === 1) {
        foodIcon.style.display = "block";
        drinkIcon.style.display = "none";
        methodsIcon.style.display = "none";
        tenCategory.style.display = "none";
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
        tenCategory.style.display = "block";
    } else if (level === 7) {
        tenCategory.style.display = "none";
    }
}

startGame();
