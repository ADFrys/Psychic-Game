

var wins = 0;

var losses = 0;

var guessesLeft = 9;

var possible = "abcdefghijklmnopqrstuvwxyz"

var computerKey = function computerChoice() {
  var computerLetter = possible.charAt(Math.floor(Math.random() * possible.length));
  return computerLetter;
 };
  console.log(computerKey());

document.onkeyup = function(event) {
  var userLetter = String.fromCharCode(event.keyCode).toLowerCase();
  console.log(userLetter);

  if (possible.includes(userLetter)) {


  if (computerKey() === userLetter){
	wins++;
    var winsP = document.getElementById("wins");
    winsP.textContent = "Wins: " + wins;
  }

  else if (guessesLeft>0) {
	var guessSoFarp = document.getElementById("guesses-so-far");
	guessSoFarp.textContent += userLetter + ", ";
	guessesLeft--;
	var guessLeftp = document.getElementById("guesses-left");
	guessLeftp.textContent = "Guesses left: " + guessesLeft;
  }

  else {
  	losses++;
  	var lossP = document.getElementById("losses");
	lossP.textContent = "Losses: " + losses;
  }
}

else {
  alert("You pressed the wrong key!");

};


};


