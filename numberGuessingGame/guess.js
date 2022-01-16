// STEP 1: Initialize game variables
// STEP 1a: Pick random number
let rdNum = Math.floor(Math.random() * 50 + 1);
let guessesLeft;

// STEP 1b: Create variables to represent the three paragraphs above that will contain user feedback
const guesses = document.getElementById("guesses");
const lastResult = document.getElementById("lastResult");
const lowOrHi = document.getElementById("lowOrHi");

// STEP 1c: Create variables to represent the guessing form
const submitGuess = document.getElementById("submitGuess");
const guessField = document.getElementById("guessField");

// STEP 1d: Create variables to initialize counter for number of guesses
let guessCount = 1;

// STEP 2: Put focus on the field that allows user to type in guesses
guessField.focus();
submitGuess.addEventListener("click", checkGuess);

// STEP 3: Build a function to check the user's guess
function checkGuess() {
// STEP 3b: Create a variable to contain what number the user entered
    let userGuess = Number(guessField.value);
    // Somehow output a message that indicates how many guesses the player has left.
    console.log(10 - guessCount);
    guessesLeft = document.querySelector("#guessesLeft");
    guessesLeft.textContent = `You have ${10 - guessCount} guess(es) left`;

    if (guessCount === 1) {
        /* needs to be executed once...  */
        guesses.textContent = `Previous guesses: `;
    }
    /* ...and keep adding userGuess to that */
    guesses.textContent += userGuess + " ";

    if (userGuess === rdNum) {
        lastResult.textContent = `Congrats! You got it right!!`;
        lastResult.style.backgroundColor = "green";
        gameOver();
    } else if (guessCount === 10) {
        lastResult.textContent = `Game Over!!!`;
        lastResult.style.backgroundColor = "red";
        gameOver();
    } else if (userGuess !== rdNum) {
        lastResult.textContent = `Wrong!!`;
        lastResult.style.backgroundColor = "orange";
        if (userGuess > rdNum) {
        lowOrHi.textContent = `Too High`;
        } else {
        lowOrHi.textContent = `Too Low`;
        }
    }
    guessCount++;
    guessField.value = "";
    guessField.focus();
}
// Game over
function gameOver() {
    submitGuess.disabled = true;
    guessField.disabled = true;
    lowOrHi.textContent = ``;
    let resetBtn = document.createElement("button");
    resetBtn.textContent = `Start New Game`;
    document.body.appendChild(resetBtn);
    resetBtn.addEventListener("click", resetGame);
}
// Reset all the datas typed
function resetGame() {
    guessCount = 1;
    guesses.textContent = "";
    lastResult.textContent = "";
    lowOrHi.textContent = "";
    submitGuess.disabled = false;
    guessField.disabled = false;
    guessField.focus();
    lastResult.style.backgroundColor = "white";
    guessesLeft.textContent = "";
    let resetBtn = document.querySelectorAll("button")[1];
    //element.parentNode.removeChild(element)
    resetBtn.parentNode.removeChild(resetBtn);
    //resetBtn.remove(); -> Simpler Way
    rdNum = Math.floor(Math.random() * 50 + 1);
}

// This page inspired by and adapted from https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps/A_first_splash