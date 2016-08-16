// Wins/Losses tally declaration set to 0.
var wins = 0;
var losses = 0;
// Variable for computerNumberGuess
var computerNumberGuess;

// Function that sets computerNumberGuess from a ranged number of 19-120.
function randomIntFromComputer(){
    computerNumberGuess = Math.floor(Math.random() * 101 + 19);
}

// Calls the random function above to give a computerNumberGuess a value.
randomIntFromComputer();
console.log("Computer number guess: " + computerNumberGuess);

// Resets the entire game, excluding wins/loss tallies.
function resetGame(){
	computerNumberGuess = Math.floor(Math.random() * 101 + 19);
	$(".compGuessBox").html(computerNumberGuess);
	imgOneValue =  Math.floor(Math.random() * 12 + 1);
	imgTwoValue =  Math.floor(Math.random() * 12 + 1);
	imgThreeValue =  Math.floor(Math.random() * 12 + 1);
	imgFourValue =  Math.floor(Math.random() * 12 + 1);
	crystalOne.attr("value", imgOneValue);
	crystalTwo.attr("value", imgTwoValue);
	crystalThree.attr("value", imgThreeValue);
	crystalFour.attr("value", imgFourValue);
	imgNumberSum = 0;
	$(".scoreText").html(imgNumberSum);
}

// Creates an headers div contaning the text Crystals Collector!
var headerDiv = $("<div>");
headerDiv.html("Crystals Collector!");
$("#crystalsCollector").append(headerDiv);
headerDiv.attr("class", "topHeader");

// Contains the content of how to play the game
var gameInfo = $("<div>");
gameInfo.html("You will be given a random number at the start of the game." +
	"<br><br>" + 
	"There are four crystals below. By clicking on a crystal you" +
	"<br>" +
	"will add a specific amount of points to your total sorce." +
	"<br><br>" +
	"You win the game by matching your total sore to random" +
	"<br>" +
	"number, you lose the game if your total score goes above" +
	"<br>" +
	"the random number." +
	"<br><br>" +
	"The value of each crystal is hidden from you until you click on it." +
	"<br><br>" +
	"Each time when the game starts, the game will change the" +
	"<br>" +
	"values of each crystal.");
$("#crystalsCollector").append(gameInfo);
gameInfo.attr("class", "midInfo");

// Container of the computerGuess value.
var computerGuessBox = $("<div>");
computerGuessBox.html(computerNumberGuess);
$("#crystalsCollector").append(computerGuessBox);
computerGuessBox.attr("class", "compGuessBox");

// Container of the text You win! You Loss!
winLossPTag = $("<p>");
winLossPTag.html("&nbsp;");
$("#winsLossBox").append(winLossPTag);
winLossPTag.attr("class", "winLossPTag");

// Container of the wins tally.
winsBox = $("<p>");
winsBox.html("Wins: " + wins);
$("#winsLossBox").append(winsBox);
winsBox.attr("class", "winsContent");

// Container of the losses tally.
lossesBox = $("<p>");
lossesBox.html("Losses: " + losses);
$("#winsLossBox").append(lossesBox);
lossesBox.attr("class", "lossContent");

// Sets the value of the 4 crystals images from 1-12.
var imgOneValue =  Math.floor(Math.random() * 12 + 1);
var imgTwoValue =  Math.floor(Math.random() * 12 + 1);
var imgThreeValue =  Math.floor(Math.random() * 12 + 1);
var imgFourValue =  Math.floor(Math.random() * 12 + 1);

// Creates/Appends the img tags with a set value from the function above.
var crystalOne = $("<img>");
$("#crystalImg").append(crystalOne);
crystalOne.attr("src", "assets/images/1-crystal.png");
crystalOne.attr("class", "imgOne crystalImages");
crystalOne.attr("value", imgOneValue);


var crystalTwo = $("<img>");
$("#crystalImg").append(crystalTwo);
crystalTwo.attr("src", "assets/images/2-crystal.png");
crystalTwo.attr("class", "imgTwo crystalImages");
crystalTwo.attr("value", imgTwoValue);


var crystalThree = $("<img>");
$("#crystalImg").append(crystalThree);
crystalThree.attr("src", "assets/images/3-crystal.png");
crystalThree.attr("class", "imgThree crystalImages");
crystalThree.attr("value", imgThreeValue);


var crystalFour = $("<img>");
$("#crystalImg").append(crystalFour);
crystalFour.attr("src", "assets/images/4-crystal.png");
crystalFour.attr("class", "imgFour crystalImages");
crystalFour.attr("value", imgFourValue);

// Provides the text Your total score is:.
total = $("<div>");
total.html("Your total score is: ");
$("#totalScore").append(total);
total.attr("class", "totalScoreText");

// Score box container that has a set width/height to contain the score p-tag.
var scoreBox = $("<div>");
$("#score").append(scoreBox);
scoreBox.attr("class", "scoreBox");

var score = $("<p>");
$(".scoreBox").append(score);
score.attr("class", "scoreText");


// Set the sum of the imgs to 0 and increases the value upon clicking.
// Wins if the sum of the value is = to the computerNumberGuess.
// Else if the value of the sum of the imgs is greater. Loss.
// Increment wins/loss accordingly and resets the game.
var imgNumberSum = 0;

// Prints the score valid into the the html page.
score = imgNumberSum;
document.querySelector(".scoreText").innerHTML = score;

$(".crystalImages").on("click", function(){
	imgNumberSum += parseInt($(this).attr('value'));
	console.log("Value of the img clicked: " + $(this).attr('value'));
	console.log("Sum of values: " + imgNumberSum);

	score = imgNumberSum;
	document.querySelector(".scoreText").innerHTML = score;
	
	if (computerNumberGuess == imgNumberSum){
		wins++
		$(".winLossPTag").html("You win!");
		resetGame();
		alert("You win");
	}else if(computerNumberGuess < imgNumberSum){
		losses++
		$(".winLossPTag").html("You Loss!");
		resetGame();
		alert("You Lose");
	}

	winsCounter = ("Wins: " + wins);
	document.querySelector(".winsContent").innerHTML = winsCounter;

	lossCounter = ("Losses: " + losses);
	document.querySelector(".lossContent").innerHTML = lossCounter;

})

