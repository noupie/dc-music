var numberOfDrumButtons = document.querySelectorAll(".instrument").length;

for (var i = 0; i < numberOfDrumButtons; i++) {

  document.querySelectorAll(".instrument")[i].addEventListener("click", function() {

    var buttonInnerHTML = this.innerHTML;

    makeSound(buttonInnerHTML);
    

    buttonAnimation(buttonInnerHTML);

  });

}

document.addEventListener("keypress", function(event) {

  makeSound(event.key);
  

  buttonAnimation(event.key);
});


function makeSound(key) {

  switch (key) {
    case "w":
      var drum = new Audio("sounds/drum.wav");
      drum.play();
      break;

    case "a":
      var guitar1 = new Audio("sounds/guitar.mp3");
      guitar1.play();
      break;

    case "s":
      var guitar2 = new Audio('sounds/electric guitar.mp3');
      guitar2.play();
      break;

    case "d":
      var piano = new Audio('sounds/piano.mp3');
      piano.play();
      break;

    case "j":
      var saxophone = new Audio('sounds/saxophone.mp3');
      saxophone.play();
      break;

    case "k":
      var violin1 = new Audio('sounds/violin.mp3');
      violin1.play();
      break;

    case "l":
      var violin2 = new Audio('sounds/violin2');
      violin2.play();
      break;


    default: console.log(key);

  }
}
function buttonAnimation(currentKey) {

  var activeButton = document.querySelector("." + currentKey);

  activeButton.classList.add("pressed");

  setTimeout(function() {
    activeButton.classList.remove("pressed");
  }, 100);

}

