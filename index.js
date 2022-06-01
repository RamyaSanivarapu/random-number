let gameResult = document.getElementById("gameResult");
let userInput = document.getElementById("userInput");
let buttonCheck = document.getElementById("check");
let randomNumber = Math.ceil(Math.random() * 10);

buttonCheck.onclick=function(){

  let guessedNumber = parseInt(userInput.value);

  if (guessedNumber > randomNumber) {
    gameResult.textContent = "Not Matched";
    gameResult.style.backgroundColor = "#1e217c";
  }
  else if (guessedNumber < randomNumber) {
    gameResult.textContent = "Not Matched";
    gameResult.style.backgroundColor = "#1e217c";
  }
  else if (guessedNumber === randomNumber) {
    gameResult.textContent = "Good Work";
    gameResult.style.backgroundColor = "green";
  }
  else {
    gameResult.textContent = "Please provide a valid input.";
    gameResult.style.backgroundColor = "#1e217c";
  }
}