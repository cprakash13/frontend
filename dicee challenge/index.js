var player1 = Math.floor(Math.random()*6) + 1;
var player2 = Math.floor(Math.random()*6) + 1;

document.querySelector(".img1").setAttribute("src","images/dice" + player1 + ".png");
document.querySelector(".img2").setAttribute("src","images/dice" + player2 + ".png");
console.log(player1 + " + " + player2);

if(player1 > player2){
  document.querySelector("h1").innerHTML = "✌ Player 1 wins";
}
else if(player1 < player2){
  document.querySelector("h1").innerHTML = "Player 2 wins ✌";
}
else{
  document.querySelector("h1").innerHTML = "DRAW";
}
