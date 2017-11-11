// Creates an array with all possible words
var wordChoices = ["calamity", "cataclysm", "catastrophe", "disaster", "downfall", "annihilation",
    "condemnation", "death", "sentence", "tragedy"];

// Creates an array that holds the alphabet
var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

// Creates variables to keep track of wins and losses
var wins = 0;
var losses = 0;

// This function is run whenever the user presses a key.
document.onkeyup = function(event) {

    // Determines which key was pressed.
    var userGuess = event.key;

    // Randomly picks a word from our array
    	var wordPick = wordChoices[Math.floor(Math.random() * wordChoices.length)];

    //function wordPick() {
    //    return wordChoices[Math.floor(Math.random() * wordChoices.length)];
    //}
}



function resetUI () {
    $('.guessed-letter').remove();
    $('.shown-letter').remove();
}



function resetGame() {
    resetUI();
    gameAnswer = wordPick;
    gameShownAnswer = blanksFromAnswer(gameAnswer);
    hangmanState = 0;
    drawWord(gameShownAnswer);
}

$(document).ready(resetGame);

function win() { wins++; }

function lose() { losses++; }

function doKeypress() {
    var tempChar = $('#letter-input').val().toLowerCase();
    var tempString = "";
    $('#letter-input').val("");

    var htmlWins =
        "<p>Wins " + wins + "</p>" +
        "<p>Losses " + losses + "</p>";

    document.querySelector("#scoreboard").innerHTML = htmlWins;
}