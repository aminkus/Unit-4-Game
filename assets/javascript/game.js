$(document).ready(function() {

//Generate random number for target score
var getRandomNumber = Math.floor(Math.random() * (120-19 + 1)) + 19;

//Display randomized number to HTML
$("#scoreToMatch").text(getRandomNumber);

//Generate random number for each crystal
var num1 = Math.floor(Math.random() * 12+1);
var num2 = Math.floor(Math.random() * 12+1);
var num3 = Math.floor(Math.random() * 12+1);
var num4 = Math.floor(Math.random() * 12+1);

//create variable to track wins, losses, players total
var wins = 0;
var losses = 0;
var playerTotal = 0;

//Display wins, losses, and player total
$("#wins-text").text(wins);
$("#losses-text").text(losses);
$("#totalScore-text").text(playerTotal);

//Build function to reset game
function reset () {
    getRandomNumber = Math.floor(Math.random() * (120-19 + 1)) + 19;
    $("#scoreToMatch").text(getRandomNumber);
    var num1 = Math.floor(Math.random() * 12+1);
    var num2 = Math.floor(Math.random() * 12+1);
    var num3 = Math.floor(Math.random() * 12+1);
    var num4 = Math.floor(Math.random() * 12+1);
    playerTotal = 0;
    $("#totalScore").text(playerTotal);
}

//Build function when there is a winner, increases counter and displays to HTML

function playerWins () {
    alert ("Good Job! You Won!");
    wins++;
    $("#wins-text").text(wins);
    reset();
}

//Build function when there is a loser, increases counter and displays to HTML

function playerLoses () {
    alert("You Lose. Try Again");
    losses++;
    $("#losses-text").text(losses);
    reset ();
}

//Set up event listener for cystals and add random number to playerTotal
$(".red").on("click", function () {
    playerTotal = playerTotal + num1;
    $("#totalScore").text(playerTotal);
})






























})