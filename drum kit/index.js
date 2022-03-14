drumKeys = document.querySelectorAll(".drum")

for (n = 0; n < drumKeys.length; n++) {
  drumKeys[n].addEventListener("click", function() {
    var buttonText = this.innerHTML;
    makeSound(buttonText);

    buttonAnimation(buttonText);
  });
}

document.addEventListener("keyup", function(event){
  makeSound(event.key);

  buttonAnimation(event.key);
});




function makeSound(key){

  switch (key) {
    case "w":
      var tom1 = new Audio("sounds/tom-1.mp3");
      tom1.play();
      break;
    case "a":
      var tom2 = new Audio("sounds/tom-2.mp3");
      tom2.play();
      break;
    case "s":
      var tom3 = new Audio("sounds/tom-3.mp3");
      tom3.play();
      break;
    case "d":
      var tom4 = new Audio("sounds/tom-4.mp3");
      tom4.play();
      break;
    case "j":
      var snare = new Audio("sounds/snare.mp3");
      snare.play();
      break;
    case "k":
      var crash = new Audio("sounds/crash.mp3");
      crash.play();
      break;
    case "l":
      var kick = new Audio("sounds/kick-bass.mp3");
      kick.play();
      break;

    default:
      console.log(key);
  }
}

function buttonAnimation(key){
  activeKey = document.querySelector("." + key);
  activeKey.classList.add("pressed");
  setTimeout(function(){
    activeKey.classList.remove("pressed");
  }, 100);
}