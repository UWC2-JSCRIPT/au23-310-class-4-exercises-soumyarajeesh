
// Create a function to getdeck 
function getDeck() {
    const suits = ['Hearts', 'Diamonds', 'Clubs', 'Spades'];
    const vals = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'Jack', 'Queen', 'King', 'Ace'];
    const deck = [];
  
    for (const suit of suits) {
        for (const val of vals) {
          deck.push(`${val} of ${suit}`);
      }
    }
    return shuffleDeck(deck);
  }
  
  // Create function to shuffle a deck of cards
  function shuffleDeck(deck) {
    for (let i = deck.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [deck[i], deck[j]] = [deck[j], deck[i]];
    }
    return deck;
  }
  
  // Define the CardPlayer class
  class CardPlayer {
    constructor(name) {
      this.name = name;
      this.hand = [];
    }
  
    // Method to add a card to the player's hand
    addCard(card) {
      this.hand.push(card);
    }
  
    // Create function to calculate the total points of the player's hand
    calcPoints() {
      let points = 0;
      let numAces = 0;
  
      for (const card of this.hand) {
        const val = card.split(' ')[0];
  
        if (val === 'Ace') {  
          numAces++;
          points += 11;
        } else if (['King', 'Queen', 'Jack'].includes(val)) {
          points += 10;
        } else {
        points += parseInt(val);
        }
      }
  
      while (numAces > 0 && points > 21) {
        points -= 10;
        numAces--;
      }
  
      return points;
    }
  }
  
  // Create player and dealer instances
  const player = new CardPlayer('Player');
  const dealer = new CardPlayer('Dealer');
  
  // Create Function to determine if the dealer should draw another card
  function dealerShouldDraw(dealerPoints) {
    return dealerPoints < 17; // Dealer must draw if points are less than 17
  }
  
  // Function to determine the winner of the game
  function determineWinner(playerPoints, dealerPoints) {
    if (playerPoints > 21) {
      return 'Dealer';
    } else if (dealerPoints > 21) {
      return 'Player';
    } else if (playerPoints > dealerPoints) {
      return 'Player';
    } else if (dealerPoints > playerPoints) {
      return 'Dealer';
    } else {
      return 'Tie';
    }
  }
  
   const deck = getDeck();
   
  // Deal two initial cards to the player and dealer
  
  player.addCard(deck.pop());
  dealer.addCard(deck.pop());
  player.addCard(deck.pop());
  dealer.addCard(deck.pop());
  
  console.log(`Player's Hand: ${player.hand}`);
  console.log(`Dealer's Hand: ${dealer.hand}`);
  console.log(`Player's Points: ${player.calcPoints()}`);
  console.log(`Dealer's Points: ${dealer.calcPoints()}`);
  
  // Play the game
  while (dealerShouldDraw(dealer.calcPoints())) {
    dealer.addCard(deck.pop());
  }

  
  console.log('--- After Dealer Draws ---');
  console.log(`Player's Hand: ${player.hand}`);
  console.log(`Dealer's Hand: ${dealer.hand}`);
  console.log(`Player's Points: ${player.calcPoints()}`);
  console.log(`Dealer's Points: ${dealer.calcPoints()}`);
  
  const winner = determineWinner(player.calcPoints(), dealer.calcPoints());
  console.log(`The winner is: ${winner}`);
  

//===============================================================================================================//
// /**
//  * Creates user prompt to ask if they'd like to draw a card
//  * @param {number} count 
//  * @param {string} dealerCard 
//  */
//const getMessage = (count, dealerCard) => {
//return `Dealer showing ${dealerCard.displayVal}, your count is ${count}.  Draw card?`
// }

// /**
//  * Logs the player's hand to the console
//  * @param {CardPlayer} player 
//  */
//const showHand = (player) => {
//   const displayHand = player.hand.map((card) => card.displayVal);
//   console.log(`${player.name}'s hand is ${displayHand.join(', ')} (${calcPoints(player.hand).total})`);
// }

// /**
//  * Runs Blackjack Game
//  */
 //const startGame = function() {
 //  player.drawCard();
 //  dealer.drawCard();
 //  player.drawCard();
 //  dealer.drawCard();

 // let playerScore = calcPoints(player.hand).total;
 //  showHand(player);
 //  while (playerScore < 21 && confirm(getMessage(playerScore, dealer.hand[0]))) {
 //    player.drawCard();
 //    playerScore = calcPoints(player.hand).total;
 //    showHand(player);
 //  }
 //  if (playerScore > 21) {
 //    return 'You went over 21 - you lose!';
 //  }
 //  console.log(`Player stands at ${playerScore}`);

 //  let dealerScore = calcPoints(dealer.hand).total;
 //  while (dealerScore < 21 && dealerShouldDraw(dealer.hand)) {
 //    dealer.drawCard();
 //    dealerScore = calcPoints(dealer.hand).total;
 //    showHand(dealer);
 //  }
 //  if (dealerScore > 21) {
 //    return 'Dealer went over 21 - you win!';
 //  }
 //  console.log(`Dealer stands at ${dealerScore}`);

 //  return determineWinner(playerScore, dealerScore);
 //}
 //console.log(startGame());