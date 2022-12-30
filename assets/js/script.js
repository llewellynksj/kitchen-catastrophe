// variables
const theWord = document.getElementById("the-word");
const userAnswer = document.getElementById("user-answer");
let randomWord;

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

function checkLevel() {

}

function checkAnswer() {

}

function displayStats() {

}

function resetAnswerBox() {

}
