// generate computer choice
function getComputerChoice(arr) {

  // get random index value
  const randomIndex = Math.floor(Math.random() * arr.length);

  // get random item
  const item = arr[randomIndex];

  return item;
}

const array = ['rock', 'paper', 'scissors'];

const result = getComputerChoice(array);

function userRock() {
  if (result == 'rock') {
    results.innerHTML = "Rock vs. Rock<br> DRAW!"
  } else if (result == 'paper') {
      results.innerHTML = "Rock vs. Paper<br> You LOSE!"
  } else {
      results.innerHTML = "Rock vs. Scissors<br> You WIN!"
  }
};

function userPaper() {
  if (result == 'rock') {
    results.innerHTML = "Paper vs. Rock<br> You WIN!"
  } else if (result == 'paper') {
      results.innerHTML = "Paper vs. Paper<br> DRAW!"
  } else {
      results.innerHTML = "Paper vs. Scissors<br> You LOSE!"
  }
};

function userScissors() {
  if (result == 'rock') {
    results.innerHTML = "Scissors vs. Rock<br> You LOSE!"
  } else if (result == 'paper') {
      results.innerHTML = "Scissors vs. Paper<br> You WIN!"
  } else {
      results.innerHTML = "Scissors vs. Scissors<br> DRAW!"
  }
};