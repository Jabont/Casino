const card_type = ['_of_clubs', '_of_diamonds', '_of_hearts', '_of_spades']
const card_role = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'jack', 'queen', 'king', 'ace']
const card_image = document.getElementById('cardImage')
const status = document.getElementById('status')

let fristTime = true
let prev_number = null

const randomInt = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const randomCard = () => {
  const random_type = randomInt(0, 3)
  const random_card = randomInt(0, 12)

  if (!fristTime) {
    // status display
    if (random_card === prev_number) randomCard()
    if (random_card > prev_number) status.innerText = "สูงกว่า (Higher) 📈"
    if (random_card < prev_number) status.innerText = "ต่ำกว่า (Lower) 📉"
  }
  

  prev_number = random_card

  // set card image
  console.log(`assets/${card_role[random_card]}${card_type[random_type]}.png`)
  card_image.src = `assets/${card_role[random_card]}${card_type[random_type]}.png`

  // set firstTime to false
  fristTime = false
}

const keypress = (e) => {
  // console.log(e.code)
  if (e.code === 'Space') {
    e.preventDefault()
    randomCard()
  }
}

const gameLoad = () => {
  console.log('load')
  document.addEventListener('keypress', keypress);
} 

window.onload = gameLoad;
