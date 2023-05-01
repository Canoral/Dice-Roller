// Créer un élément div pour représenter le dealer et l'ajouter au DOM
const dealer = document.createElement("div"); // Créer un nouvel élément div pour le dealer
dealer.id = "dealer"; // Définir l'identifiant de l'élément div en tant que "dealer"
dealer.classList.add("board"); // Ajouter la classe "board" à l'élément div pour styliser la zone de jeu du dealer
const appElement = document.querySelector("#app"); // Sélectionner l'élément ayant l'identifiant "app" dans le DOM
appElement.appendChild(dealer); // Ajouter l'élément div du dealer en tant qu'enfant de l'élément avec l'identifiant "app"

// Demander à l'utilisateur combien de dés il veut lancer, puis lancer les dés
let numberOfDiceToRoll = parseInt(prompt("Combien de dés voulez-vous lancer ?")); // Demander à l'utilisateur combien de dés il veut lancer, puis convertir la réponse en un nombre entier
for (let index = 0; index < numberOfDiceToRoll; index++) {
  // Répéter le nombre de fois spécifié par l'utilisateur pour lancer les dés
  rollUserDice(); // Appeler la fonction pour lancer un dé pour le joueur
  rollDealerDice(); // Appeler la fonction pour lancer un dé pour le dealer
}

// Fonction pour lancer un dé pour le joueur
function rollUserDice() {
  const diceElement = document.createElement("div"); // Créer un nouvel élément div pour représenter le dé
  diceElement.classList.add("dice"); // Ajouter la classe "dice" à l'élément div pour styliser l'apparence du dé
  const playerElement = document.querySelector("#player"); // Sélectionner l'élément ayant l'identifiant "player" dans le DOM
  playerElement.appendChild(diceElement); // Ajouter l'élément div du dé en tant qu'enfant de l'élément avec l'identifiant "player"
  const userDiceRoll = generateRandomNumber(); // Appeler la fonction pour générer un nombre aléatoire pour déterminer l'image du dé pour le joueur
  diceElement.style.backgroundPositionX = `${-userDiceRoll}px`; // Définir la position d'arrière-plan de l'élément div du dé pour afficher l'image appropriée
}

// Fonction pour lancer un dé pour le dealer
function rollDealerDice() {
  const diceElement = document.createElement("div"); // Créer un nouvel élément div pour représenter le dé
  diceElement.classList.add("dice"); // Ajouter la classe "dice" à l'élément div pour styliser l'apparence du dé
  const dealer = document.querySelector("#dealer"); // Sélectionner l'élément ayant l'identifiant "dealer" dans le DOM
  dealer.appendChild(diceElement); // Ajouter l'élément div du dé en tant qu'enfant de l'élément avec l'identifiant "dealer"
  const dealerDiceRoll = generateRandomNumber(); // Appeler la fonction pour générer un nombre aléatoire pour déterminer l'image du dé pour le dealer
  diceElement.style.backgroundPositionX = `${-dealerDiceRoll}px`; // Définir la position d'arrière-plan de l'élément div du dé pour afficher l'image appropriée
}

// Fonction pour générer un numéro aléatoire entre 1 et 6 ensuite multiplier par 100
function generateRandomNumber() {
  return (Math.floor(Math.random() * 6) + 1) * 100;
}
//
