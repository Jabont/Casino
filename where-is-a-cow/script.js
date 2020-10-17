const cardName = ["card1-inner", "card2-inner", "card3-inner"];

const resultList = ["result1", "result2", "result3"];

const shuffle = () => {
  let prize = ["cow", "nope", "nope"];

  prize = arr_shuffle(prize);

  let randomPrize;
  // random prize into back of card
  resultList.map((record, index) => {
    // const index = Math.floor(random(1, prize.length)) - 1;
    const text = prize[index];
    randomPrize = text;
    const result = document.getElementById(record);
    console.log(result)
    console.log(text)
    if(text == "cow") {
      result.className += " flip-card-cow";
    } else {
      result.className += " flip-card-nope";
    }
  });

  prize.filter((rec) => {
    return rec != randomPrize;
  });
};

const random = (mn, mx) => {
  return Math.random() * (mx - mn) + mn;
};

function arr_shuffle(array) {
  var currentIndex = array.length,
    temporaryValue,
    randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}

const handleClick = (cardInnerId) => {
  const cardInnder = document.getElementById(cardInnerId);
  if (!cardInnder.classList.contains("fliped")) {
    cardInnder.className += " upSize";
    openAll();
  } else {
    cardInnder.classList.remove("fliped");
    cardInnder.classList.remove("upSize");
  }
};

const resetAll = () => {
  // shuffle();
  cardName.map((card) => {
    const cardInner = document.getElementById(card);
    if (cardInner.classList.contains("fliped")) {
      cardInner.classList.remove("fliped");
      cardInner.classList.remove("upSize");
    }
  });

  resultList.map((result) => {
    const cardBox = document.getElementById(result);
    if (cardBox.classList.contains("flip-card-cow")) {
      cardBox.classList.remove("flip-card-cow");
    }
    if (cardBox.classList.contains("flip-card-nope")) {
      cardBox.classList.remove("flip-card-nope");
    }
  });

  setTimeout(shuffle, 500);
};

const openAll = () => {
  cardName.map((card) => {
    const cardInner = document.getElementById(card);
    console.log(cardInner.classList);
    if (!cardInner.classList.contains("fliped")) {
      cardInner.classList += " fliped";
    }
  });
};
