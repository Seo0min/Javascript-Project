userPlay = () => {
  const playerSelection = prompt('Please enter your choice - rock, scissors, paper ').toLocaleLowerCase();
  if (playerSelection === 'rock' || 'scissors' || 'paper') {
    console.log('Your choice:' + `${playerSelection}`);
    return playerSelection;
  } else {
    console.log('Try again');
  }
};
const playerSelection = userPlay();

computerPlay = () => {
  const choices = ['rock', 'scissors', 'paper'];
  const computerSelection = Math.floor(Math.random() * choices.length);
  console.log('Computer choice:' + `${choices[computerSelection]}`);
  if (computerSelection === 1) {
    return 'rock';
  } else if (computerSelection === 2) {
    return 'scissors';
  } else {
    return 'paper';
  }
};
const computerSelection = computerPlay();

playRound = (playerSelection, computerSelection) => {
  if (
    (playerSelection === 'rock' && computerSelection === 'paper') ||
    (playerSelection === 'scissors' && computerSelection === 'rock') ||
    (playerSelection === 'paper' && computerSelection === 'scissors')
  ) {
    return 'You Lose!';
  } else if (
    (playerSelection === 'rock' && computerSelection === 'scissors') ||
    (playerSelection === 'scissors' && computerSelection === 'paper') ||
    (playerSelection === 'paper' && computerSelection === 'rock')
  ) {
    return 'You Win';
  } else if (playerSelection === computerSelection) {
    return 'Tie';
  } else {
    return 'Try again';
  }
};
playRound();
console.log('Result:', playRound(playerSelection, computerSelection));

game = () => {
  let playerWins = 0;
  let computerWins = 0;
  let ties = 0;

  for (let i = 0; i < 5; i++) {
    const playerSelection = userPlay();
    const computerSelection = computerPlay();
    const result = playRound(playerSelection, computerSelection);

    if (result === 'Player') {
      playerWins++;
    } else if (result === 'Computer') {
      computerWins++;
    } else if (result === 'Tie') {
      ties++;
    }

    console.log(`Result of round ${i + 1}: ${result}`);
  }

  console.log(`Player Wins: ${playerWins}`);
  console.log(`Computer Wins: ${computerWins}`);
  console.log(`Ties: ${ties}`);
};

game();
