$(document).ready(function() {

	 
	 /*Function that create the start button and initail screen?*/
	function initialScreen() {
startScreen = "<p class='text-center main-button-container'><a class='btn btn-primary btn-lg btn-block start-button' href='#' role='button'>Start Quiz</a></p>";
 $(".mainArea").html(startScreen);
}
initialScreen();

/*Function that generates HTML when start button is clicked*/
	$("body").on("click", ".start-button", function(event){
	event.preventDefault();  
	clickSound.play();
generateHTML();
timerWrapper();
}); 


$("body").on("click", ".answer", function(event){

	clickSound.play();
	selectedAnswer = $(this).text();
if(selectedAnswer === correctAnswers[questionCounter]) {
/*alerts "correct"*/
clearInterval(theClock);
generateWin();
}

else {
/*Alerts "Wrong"*/
clearInterval(theClock);
generateLoss();
}
}); 
$("body").on("click", ".reset-button", function(event){
clickSound.play();
resetGame();
}); 
});  


	function generateLossDueToTimeOut() {
	unansweredTally++;
gameHTML = "<p class='text-center timer-p'>Time Remaining: <span class='timer'>" + counter + "</span></p>" + "<p class='text-center'>You ran out of time!  The correct answer was: " + correctAnswers[questionCounter] + "</p>" + "<img class='center-block img-wrong' src='img/x.png'>";
$(".mainArea").html(gameHTML);
setTimeout(wait, 4000);  
}


function generateWin() {
correctTally++;
gameHTML = "<p class='text-center timer-p'>Time Remaining: <span class='timer'>" + counter + "</span></p>" + "<p class='text-center'>Correct! The answer is: " + correctAnswers[questionCounter] + "</p>" + imageArray[questionCounter];
$(".mainArea").html(gameHTML);
setTimeout(wait, 4000);  
}


function generateLoss() {
incorrectTally++;
gameHTML = "<p class='text-center timer-p'>Time Remaining: <span class='timer'>" + counter + "</span></p>" + "<p class='text-center'>Wrong! The correct answer is: "+ correctAnswers[questionCounter] + "</p>" + "<img class='center-block img-wrong' src='img/x.png'>";
$(".mainArea").html(gameHTML);
setTimeout(wait, 4000); //  
}


function generateHTML() {
gameHTML = "<p class='text-center timer-p'>Time Remaining: <span class='timer'>30</span></p><p class='text-center'>" + questionArray[questionCounter] + "</p><p class='first-answer answer'>A. " + answerArray[questionCounter][0] + "</p><p class='answer'>B. "+answerArray[questionCounter][1]+"</p><p class='answer'>C. "+answerArray[questionCounter][2]+"</p><p class='answer'>D. "+answerArray[questionCounter][3]+"</p>";
$(".mainArea").html(gameHTML);
}

	function wait() {
	if (questionCounter < 10) {
	questionCounter++;
generateHTML();
counter = 15;
timerWrapper();
}


else {
finalScreen();
}


}
/*Timer set for 15 sec*/
function timerWrapper() {
theClock = setInterval(thirtySeconds, 1000);
function thirtySeconds() {
if (counter === 0) {
clearInterval(theClock);
generateLossDueToTimeOut();
}
if (counter > 0) {
counter--;
}
$(".timer").html(counter);
}
}
function finalScreen() {
gameHTML = "<p class='text-center timer-p'>Time Remaining: <span class='timer'>" + counter + "</span></p>" + "<p class='text-center'>All done, here's how you did!" + "</p>" + "<p class='summary-correct'>Correct Answers: " + correctTally + "</p>" + "<p>Wrong Answers: " + incorrectTally + "</p>" + "<p>Unanswered: " + unansweredTally + "</p>" + "<p class='text-center reset-button-container'><a class='btn btn-primary btn-lg btn-block reset-button' href='#' role='button'>Reset The Quiz!</a></p>";
$(".mainArea").html(gameHTML);
}
/*Timer Reset and Score Reset*/
function resetGame() {
questionCounter = 0;
correctTally = 0;
incorrectTally = 0;
unansweredTally = 0;
counter = 15;
generateHTML();
timerWrapper();
}


var startScreen;
var gameHTML;
var counter = 15;

var questionArray = ["Which instrument did Ted steal for Robin in the first episode and appears in Robin’s apartment for the rest of the series?", "What is tattooed on Ted's lower back?", "Barney, Ted, and Marshall all worked for GNB at some point. What does GNB stand for?", "What did Barney have to wear for a year after losing a bet?", "Which of these is NOT one of Barney’s theories?", "Which character was NOT one of Ted’s serious girlfriends?", "Who is Robin’s arch-enemy at work?", "What is the name of Lily’s high school boyfriend, to whom she ~technically~ lost her virginity?", "What is Marshall and Lily’s theory on how to be a happy couple?", "What is the name of the fancy aged scotch that keeps coming up throughout the series?"];

var answerArray = [["Trumpet", "Tuba", "French Horn", "Clarinet"], ["Butterfly", "Rainbow", "Dolphin", "Eagle"], 
["Gigantic National Bank", "Global Nutritional Brands", "Grant National Brands", "Goliath National Bank"], 
["Kitten Underwear", "Ducky Tie", "Bunny Socks", "Monkey Shoes"], ["The Mermaid Theory", "The Daddy Rule", "The Platinum Rule", "The Freeway Theory"], 
["Quinn", "Stella", "Zoey", "Victoria"], ["Clarice", "Patrice", "Nora", "Jess"], ["Shooter", "Skeeter", "Scooter", "Skippy"], ["Lemon Theory", "Olive Theory", "Pickle Theory", "Pineapple Theory"], ["Glen McKinney", "Glen McDonald", "Glen McKenna", "Glen McKinley"]];

var correctAnswers = ["C. French Horn", "D. Goliath National Bank", "B. Ducky Tie", "B. The Daddy Rule", "A. Quinn", "B. Patrice", "C. Scooter", "B. Olive Theory", "C. Glen McKenna"];

var questionCounter = 0;
var selecterAnswer;
var theClock;
var correctTally = 0;
/*Number Incorrect Answers*/
var incorrectTally = 0;
/* Variable for queston gone unanswered*/
var unansweredTally = 0;
var clickSound = new Audio("sound/button-click.mp3");