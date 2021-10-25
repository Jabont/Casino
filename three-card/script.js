const cardName = ["card1-inner", "card2-inner", "card3-inner"];
const resultList = ["result1", "result2", "result3"];

const shuffle = () => {
  let prize = ["ได้รับเงินรางวัล", "เสียเงินรางวัล", "เสียเงินรางวัล"];

  prize = arr_shuffle(prize);

  let randomPrize;
  // random prize into back of card
  resultList.map((record, index) => {
    // const index = Math.floor(random(1, prize.length)) - 1;
    const text = prize[index];
    randomPrize = text;
    const result = document.getElementById(record);
    result.innerHTML = text;
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
    cardInnder.className += " fliped";
  } else {
    cardInnder.classList.remove("fliped");
  }
};

const resetAll = () => {
  // shuffle();
  cardName.map((card) => {
    const cardInner = document.getElementById(card);
    if (cardInner.classList.contains("fliped")) {
      cardInner.classList.remove("fliped");
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
