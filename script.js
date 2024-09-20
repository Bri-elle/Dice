// Generate random numbers
var diceNumber = Math.floor(Math.random() * 6 + 1);

var diceNumber2 = Math.floor(Math.random() * 6 + 1);

// get elements
var dice1 = document.getElementById("dice1");
var dice2 = document.getElementById("dice2");

// change dice image
dice1.src = "images/dice" + diceNumber + ".png";

dice2.src = "images/dice" + diceNumber2 + ".png";

// check and display winner
var h1Text = document.getElementById("heading-text");

if (diceNumber > diceNumber2) {
	h1Text.innerText = "🚩Player 1 Wins!";
} else if (diceNumber2 > diceNumber) {
	h1Text.innerText = "Player 2 Wins!🚩";
} else {
	h1Text.innerText = "Draw!";
}

// function mode() {
// 	var body = document.body;
// 	body.classList.toggle("dark-mode");

//   var header = document.getElementById("text");
//   header.classList.toggle("dark");

//   var playerText = document.getElementById("text2");
//   playerText.classList.toggle("dark2");

//   var playerText2 = document.getElementById("text3");
//   playerText2.classList.toggle("dark2");

//   var playerText2 = document.getElementById("author");
//   playerText2.classList.toggle("light");

// }
