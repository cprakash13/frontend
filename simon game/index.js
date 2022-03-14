buttonColors = ["green", "red", "yellow", "blue"];
var gamePattern = [];
var userPattern = [];
var gameStart = false;
var playerLevel = 0;

$(document).on("keypress",function(){
  if(gameStart === false){
    gameStart = true;
    nextSequence();
  }
});

function nextSequence(){
  playerLevel++;
  $("h1").text("Level " + playerLevel);
  var randNum = Math.floor(Math.random()*4);
  var randColor = buttonColors[randNum];
  gamePattern.push(randColor);
  var btnSound = new Audio("sounds/" + randColor + ".mp3");
  btnSound.play();
  $("." + randColor).fadeOut(100).fadeIn(100);
}


$(".btn").on("click",function(){
  var userColor = $(this).attr("id");
  var userSound = new Audio("sounds/" + userColor + ".mp3");
  userSound.play();
  animatePress(userColor);
  userPattern.push(userColor);
  checkAnswer();
})

function animatePress(chosenColor){
  $("." + chosenColor).addClass("pressed")
  setTimeout(function(){
    $("." + chosenColor).removeClass("pressed");
  },100);
}

function checkAnswer(){
  var userClicks = userPattern.length;
  if(userPattern[userClicks - 1] != gamePattern[userClicks - 1]){
    var gameOver = new Audio("sounds/wrong.mp3")
    gameOver.play();
    $("body").addClass("game-over");
    $("h1").text("Game Over, Press Any Key to Restart");
    setTimeout(function(){
      $("body").removeClass("game-over");
    }, 200);
    startOver();
    return;
  }
  if(userClicks === gamePattern.length){
    userPattern = [];
    setTimeout(nextSequence,1000);
  }
}

function startOver(){
  gamePattern = [];
  userPattern = [];
  gameStart = false;
  playerLevel = 0;
}
