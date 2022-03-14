// const cardArray = [
//     {
//       name: 'fries',
//       img: 'images/fries.png'
//     },
//     {
//       name: 'cheeseburger',
//       img: 'images/cheeseburger.png'
//     },
//     {
//       name: 'ice-cream',
//       img: 'images/ice-cream.png'
//     },
//     {
//       name: 'pizza',
//       img: 'images/pizza.png'
//     },
//     {
//       name: 'milkshake',
//       img: 'images/milkshake.png'
//     },
//     {
//       name: 'hotdog',
//       img: 'images/hotdog.png'
//     },
//     {
//       name: 'fries',
//       img: 'images/fries.png'
//     },
//     {
//       name: 'cheeseburger',
//       img: 'images/cheeseburger.png'
//     },
//     {
//       name: 'ice-cream',
//       img: 'images/ice-cream.png'
//     },
//     {
//       name: 'pizza',
//       img: 'images/pizza.png'
//     },
//     {
//       name: 'milkshake',
//       img: 'images/milkshake.png'
//     },
//     {
//       name: 'hotdog',
//       img: 'images/hotdog.png'
//     }
//   ]
// // total 12 cards, some repeat to complete the grid layout
// const grid=document.querySelectorAll('.grid');

// function createBoard() {
//     for (let i = 0; i < cardArray.length; i++) {
//         var card=document.createElement('img');
//         card.setAttribute('data-id',i);
//         card.setAttribute('src','images/blank.png');
//         // card.eventlistener('click',flipcard());
//         grid.appendChild(card);
// this is not working, problem is with loading of DOM
// so , adding an event listener is an alternative to this
        
//     }
// }
// createBoard();

document.addEventListener('DOMContentLoaded', () => {
  //card options
  const cardArray = [
    {
      name: 'fries',
      img: 'images/fries.png'
    },
    {
      name: 'cheeseburger',
      img: 'images/cheeseburger.png'
    },
    {
      name: 'ice-cream',
      img: 'images/ice-cream.png'
    },
    {
      name: 'pizza',
      img: 'images/pizza.png'
    },
    {
      name: 'milkshake',
      img: 'images/milkshake.png'
    },
    {
      name: 'hotdog',
      img: 'images/hotdog.png'
    },
    {
      name: 'fries',
      img: 'images/fries.png'
    },
    {
      name: 'cheeseburger',
      img: 'images/cheeseburger.png'
    },
    {
      name: 'ice-cream',
      img: 'images/ice-cream.png'
    },
    {
      name: 'pizza',
      img: 'images/pizza.png'
    },
    {
      name: 'milkshake',
      img: 'images/milkshake.png'
    },
    {
      name: 'hotdog',
      img: 'images/hotdog.png'
    }
  ]

  // to randomize the cards after a game
  cardArray.sort(() => 0.5 - Math.random())

  const grid = document.querySelector('.grid')
  const resultDisplay = document.querySelector('#result')
  // for chosen card details
  let cardsChosen = []
  let cardsChosenId = []
  let cardsWon = []

  //create your board
  function createBoard() {
    for (let i = 0; i < cardArray.length; i++) {
      const card = document.createElement('img')
      card.setAttribute('src', 'images/blank.png')
      card.setAttribute('data-id', i)
      card.addEventListener('click', flipCard)
      grid.appendChild(card)
    }
  }

  //check for matches
  function checkForMatch() {
    const cards = document.querySelectorAll('img')
    const optionOneId = cardsChosenId[0]
    const optionTwoId = cardsChosenId[1]
    
    if(optionOneId == optionTwoId) {
      cards[optionOneId].setAttribute('src', 'images/blank.png')
      cards[optionTwoId].setAttribute('src', 'images/blank.png')
      alert('You have clicked the same image!')
    }
    else if (cardsChosen[0] === cardsChosen[1]) {
      alert('You found a match')
      cards[optionOneId].setAttribute('src', 'images/white.png')
      cards[optionTwoId].setAttribute('src', 'images/white.png')
      cards[optionOneId].removeEventListener('click', flipCard)
      cards[optionTwoId].removeEventListener('click', flipCard)
      cardsWon.push(cardsChosen)
    } else {
      cards[optionOneId].setAttribute('src', 'images/blank.png')
      cards[optionTwoId].setAttribute('src', 'images/blank.png')
      alert('Sorry, try again')
    }
    // empty the chosen cards list
    cardsChosen = []
    cardsChosenId = []
    resultDisplay.textContent = cardsWon.length
    if  (cardsWon.length === cardArray.length/2) {
      resultDisplay.textContent = 'Congratulations! You found them all!'
    }
  }

  //flip your card
  function flipCard() {
    // take the id no. of the clicked card to display the card
    let cardId = this.getAttribute('data-id')
    //  name is used to compare cards(consecutive)
    cardsChosen.push(cardArray[cardId].name)
    cardsChosenId.push(cardId)
    this.setAttribute('src', cardArray[cardId].img)
    // when two cards get chosen
    if (cardsChosen.length ===2) {
      // to give some buffer time so that rest execution is done
      setTimeout(checkForMatch, 500)
    }
  }

  createBoard()
})