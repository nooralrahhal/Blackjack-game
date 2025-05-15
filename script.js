let player = {
  name: "Noor Alrahhal",
  chips: 500,
};
let cards = [];
let sum = 0;
let hasBlackJack = false;
let isAlive = false;
let strMessage = "";
let messageEl = document.getElementById("message-el");
let sumEl = document.getElementById("sum-el");
let cardsEl = document.getElementById("cards-el");

let playerEl = document.getElementById("player-el");
playerEl.textContent = player.name + ": $" + player.chips;

function getRandomCard() {
  let randomCard = Math.floor(Math.random() * 13) + 1;
  if (randomCard > 10) {
    return 10;
  } else if (randomCard === 1) {
    return 11;
  } else {
    return randomCard;
  }
}

function renderGame() {
  resetInitialStyles();
  sumEl.textContent = "Sum: " + sum;
  cardsEl.textContent = "Crads: ";
  for (let i = 0; i < cards.length; i++) {
    cardsEl.textContent += cards[i] + " ";
  }
  if (sum <= 20) {
    strMessage = "Do you want to draw a new card?";
  } else if (sum === 21) {
    strMessage = "you've got Blackjack!";
    messageEl.style.color = "yellow";
    sumEl.style.color = "yellow";
    playerEl.style.display = "block";
    hasBlackJack = true;
  } else {
    strMessage = "You're out of the game!";
    messageEl.style.color = "red";
    sumEl.style.color = "red";
    isAlive = false;
  }
  messageEl.textContent = strMessage;
}

function startGame() {
  resetInitialStyles();
  sum = 0;
  cards = [];
  isAlive = true;
  let firstCard = getRandomCard();
  cards.push(firstCard);
  sum += firstCard;

  renderGame();
}

function newCard() {
  if (isAlive === true && hasBlackJack === false) {
    let card = getRandomCard();
    sum += card;
    cards.push(card);
    renderGame();
  }
}

function resetInitialStyles() {
  messageEl.style.color = "white";
  sumEl.style.color = "white";
  playerEl.style.display = "none";
}
