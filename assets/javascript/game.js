var wins = 0;
var losses = 0;
var guessesLeft = 9;

var possible = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

var guessSoFarp = document.getElementById("guesses-so-far");
var guessLeftp = document.getElementById("guesses-left");

var computerKey = possible[Math.floor(Math.random() * possible.length)];

function computerChoice() {
  computerKey = possible[Math.floor(Math.random() * possible.length)];
 };

var reset = function() {
  guessesLeft = 9;
  guessLeftp.textContent = "Guesses left: " + guessesLeft;
  guessSoFarp.textContent = "Your Guesses so far: ";
  computerChoice();
}

document.onkeyup = function(event) {
  var userLetter = String.fromCharCode(event.keyCode).toLowerCase();

  if (possible.includes(userLetter)) {

    if (computerKey === userLetter)  {
	    wins++;
      var winsP = document.getElementById("wins");
      winsP.textContent = "Wins: " + wins;
      reset();
    }

    else if (guessesLeft>0) {
	    guessSoFarp.textContent += userLetter + " ";
	    guessesLeft--;
	    guessLeftp.textContent = "Guesses left: " + guessesLeft;
    }

    else {
  	  losses++;
  	  var lossP = document.getElementById("losses");
	    lossP.textContent = "Losses: " + losses;
      reset();
    }
  }

  else {
    alert("You pressed a wrong key! Please select an 'a' through a 'z' key only");
  };
};