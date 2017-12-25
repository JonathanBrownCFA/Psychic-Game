var wins = 0;
var losses = 0;
var left = 10;

var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

var userGuesses = [];

var computerGuess = (letters[Math.floor(Math.random() * letters.length)]);

console.log("computer guess: " + computerGuess);

var winsText = document.getElementById("wins-text");

var lossesText = document.getElementById("losses-text");

var leftText = document.getElementById("left-text");

var guessesText = document.getElementById("guesses-text");

document.onkeyup = function(event) {
    var userGuess = event.key;
    console.log(userGuess);

    userGuesses.push(userGuess);
    console.log(userGuesses);

    guessesText.textContent = userGuesses;
    if (userGuess === computerGuess) {
        console.log("You guessed right");
        wins++;
        winsText.textContent = wins;
        computerGuess = (letters[Math.floor(Math.random() * letters.length)]);
        console.log("computer guess: " + computerGuess);
        left = 10
        userGuesses = [];
    } else {
        console.log("You guessed wrong");
        left--;
        console.log(left);
        leftText.textContent = left;

    }

    if (left === 0) {
        losses++;
        lossesText.textContent = losses;
        computerGuess = (letters[Math.floor(Math.random() * letters.length)]);
        console.log("computer guess: " + computerGuess);
        left = 10;
        userGuesses = [];

        document.querySelector('#game').innerHTML = html;
    }

}
