import ancientsData from "./data/ancients.js";
import cardsDataBlue from "./data/mythicCards/blue/index.js";
import cardsDataBrown from "./data/mythicCards/brown/index.js";
import cardsDataGreen from "./data/mythicCards/green/index.js";
let ancient;
let amountGreenCard;
let amountBrownCard;
let amountBlueCard;
let greenDesk = [];
let brownDesk = [];
let blueDesk = [];
let OneStageDesk = [];
let TwoStageDesk = [];
let ThreeStageDesk = [];

function getAmmountCard(element) {
  console.log("Выбрано имя древнего:", element.id);
  switch (element.id) {
    case "azathoth":
      amountGreenCard = ancientsData[0].firstStage.greenCards + ancientsData[0].secondStage.greenCards + ancientsData[0].thirdStage.greenCards;
      amountBlueCard = ancientsData[0].firstStage.blueCards + ancientsData[0].secondStage.blueCards + ancientsData[0].thirdStage.blueCards;
      amountBrownCard = ancientsData[0].firstStage.brownCards + ancientsData[0].secondStage.brownCards + ancientsData[0].thirdStage.brownCards;
      ancient = 0;
      break;
    case "cthulhu":
      amountGreenCard = ancientsData[1].firstStage.greenCards + ancientsData[1].secondStage.greenCards + ancientsData[1].thirdStage.greenCards;
      amountBlueCard = ancientsData[1].firstStage.blueCards + ancientsData[1].secondStage.blueCards + ancientsData[1].thirdStage.blueCards;
      amountBrownCard = ancientsData[1].firstStage.brownCards + ancientsData[1].secondStage.brownCards + ancientsData[1].thirdStage.brownCards;
      ancient = 1;
      break;
    case "iogSothoth":
      amountGreenCard = ancientsData[2].firstStage.greenCards + ancientsData[2].secondStage.greenCards + ancientsData[2].thirdStage.greenCards;
      amountBlueCard = ancientsData[2].firstStage.blueCards + ancientsData[2].secondStage.blueCards + ancientsData[2].thirdStage.blueCards;
      amountBrownCard = ancientsData[2].firstStage.brownCards + ancientsData[2].secondStage.brownCards + ancientsData[2].thirdStage.brownCards;
      ancient = 2;
      break;
    case "shubNiggurath":
      amountGreenCard = ancientsData[3].firstStage.greenCards + ancientsData[3].secondStage.greenCards + ancientsData[3].thirdStage.greenCards;
      amountBlueCard = ancientsData[3].firstStage.blueCards + ancientsData[3].secondStage.blueCards + ancientsData[3].thirdStage.blueCards;
      amountBrownCard = ancientsData[3].firstStage.brownCards + ancientsData[3].secondStage.brownCards + ancientsData[3].thirdStage.brownCards;
      ancient = 3;
      break;
  }
}

function getDifficulty(element) {
  console.log("Выбран уровень сложности:", element.id);
  switch (element.id) {
    case "very-easy":
      const maxEasyBlueCard = 4;
      const maxEasyBrownCard = 5;
      const maxEasyGreenCard = 5;
      for (let index = 0; blueDesk.length < amountBlueCard; index++) {
        let link = cardsDataBlue[getRandomIntInclusive(0, cardsDataBlue.length - 1)];
        if (amountBlueCard <= maxEasyBlueCard) {
          if (!blueDesk.includes(link.cardFace) && link.difficulty === "easy") {
            blueDesk.push(link.cardFace);
          }
        } else {
          if (!blueDesk.includes(link.cardFace) && link.difficulty === "easy" && blueDesk.length < maxEasyBlueCard) {
            blueDesk.push(link.cardFace);
          } else {
            if (!blueDesk.includes(link.cardFace) && link.difficulty === "normal") {
              blueDesk.push(link.cardFace);
            }
          }
        }
      }
      for (let index = 0; brownDesk.length < amountBrownCard; index++) {
        let link = cardsDataBrown[getRandomIntInclusive(0, cardsDataBrown.length - 1)];
        if (amountBrownCard <= maxEasyBrownCard) {
          if (!brownDesk.includes(link.cardFace) && link.difficulty === "easy") {
            brownDesk.push(link.cardFace);
          }
        } else {
          if (!brownDesk.includes(link.cardFace) && link.difficulty === "easy" && brownDesk.length < maxEasyBrownCard) {
            brownDesk.push(link.cardFace);
          } else {
            if (!brownDesk.includes(link.cardFace) && link.difficulty === "normal") {
              brownDesk.push(link.cardFace);
            }
          }
        }
      }

      for (let index = 0; greenDesk.length < amountGreenCard; index++) {
        let link = cardsDataGreen[getRandomIntInclusive(0, cardsDataGreen.length - 1)];
        if (amountGreenCard <= maxEasyGreenCard) {
          if (!greenDesk.includes(link.cardFace) && link.difficulty === "easy") {
            greenDesk.push(link.cardFace);
          }
        } else {
          if (!greenDesk.includes(link.cardFace) && link.difficulty === "easy" && greenDesk.length < maxEasyGreenCard) {
            greenDesk.push(link.cardFace);
          } else {
            if (!greenDesk.includes(link.cardFace) && link.difficulty === "normal") {
              greenDesk.push(link.cardFace);
            }
          }
        }
      }

      break;
    case "easy":
      for (let index = 0; blueDesk.length < amountBlueCard; index++) {
        let link = cardsDataBlue[getRandomIntInclusive(0, cardsDataBlue.length - 1)];
        if (!blueDesk.includes(link.cardFace) && link.difficulty !== "hard") {
          blueDesk.push(link.cardFace);
        }
      }
      for (let index = 0; brownDesk.length < amountBrownCard; index++) {
        let link = cardsDataBrown[getRandomIntInclusive(0, cardsDataBrown.length - 1)];
        if (!brownDesk.includes(link.cardFace) && link.difficulty !== "hard") {
          brownDesk.push(link.cardFace);
        }
      }
      for (let index = 0; greenDesk.length < amountGreenCard; index++) {
        let link = cardsDataGreen[getRandomIntInclusive(0, cardsDataGreen.length - 1)];
        if (!greenDesk.includes(link.cardFace) && link.difficulty !== "hard") {
          greenDesk.push(link.cardFace);
        }
      }

      break;

    case "normal":
      for (let index = 0; blueDesk.length < amountBlueCard; index++) {
        let link = cardsDataBlue[getRandomIntInclusive(0, cardsDataBlue.length - 1)].cardFace;
        if (!blueDesk.includes(link)) {
          blueDesk.push(link);
        }
      }
      for (let index = 0; brownDesk.length < amountBrownCard; index++) {
        let link = cardsDataBrown[getRandomIntInclusive(0, cardsDataBrown.length - 1)].cardFace;
        if (!brownDesk.includes(link)) {
          brownDesk.push(link);
        }
      }
      for (let index = 0; greenDesk.length < amountGreenCard; index++) {
        let link = cardsDataGreen[getRandomIntInclusive(0, cardsDataGreen.length - 1)].cardFace;
        if (!greenDesk.includes(link)) {
          greenDesk.push(link);
        }
      }
      break;
    case "hard":
      for (let index = 0; blueDesk.length < amountBlueCard; index++) {
        let link = cardsDataBlue[getRandomIntInclusive(0, cardsDataBlue.length - 1)];
        if (!blueDesk.includes(link.cardFace) && link.difficulty !== "easy") {
          blueDesk.push(link.cardFace);
        }
      }
      for (let index = 0; brownDesk.length < amountBrownCard; index++) {
        let link = cardsDataBrown[getRandomIntInclusive(0, cardsDataBrown.length - 1)];
        if (!brownDesk.includes(link.cardFace) && link.difficulty !== "easy") {
          brownDesk.push(link.cardFace);
        }
      }
      for (let index = 0; greenDesk.length < amountGreenCard; index++) {
        let link = cardsDataGreen[getRandomIntInclusive(0, cardsDataGreen.length - 1)];
        if (!greenDesk.includes(link.cardFace) && link.difficulty !== "easy") {
          greenDesk.push(link.cardFace);
        }
      }
      break;
    case "very-hard":
      const maxHardBlueCard = 4;
      const maxHardBrownCard = 5;
      const maxHardGreenCard = 5;
      for (let index = 0; blueDesk.length < amountBlueCard; index++) {
        let link = cardsDataBlue[getRandomIntInclusive(0, cardsDataBlue.length - 1)];
        if (amountBlueCard <= maxHardBlueCard) {
          if (!blueDesk.includes(link.cardFace) && link.difficulty === "hard") {
            blueDesk.push(link.cardFace);
          }
        } else {
          if (!blueDesk.includes(link.cardFace) && link.difficulty === "hard" && blueDesk.length < maxHardBlueCard) {
            blueDesk.push(link.cardFace);
          } else {
            if (!blueDesk.includes(link.cardFace) && link.difficulty === "normal") {
              blueDesk.push(link.cardFace);
            }
          }
        }
      }
      for (let index = 0; brownDesk.length < amountBrownCard; index++) {
        let link = cardsDataBrown[getRandomIntInclusive(0, cardsDataBrown.length - 1)];
        if (amountBrownCard <= maxHardBrownCard) {
          if (!brownDesk.includes(link.cardFace) && link.difficulty === "hard") {
            brownDesk.push(link.cardFace);
          }
        } else {
          if (!brownDesk.includes(link.cardFace) && link.difficulty === "hard" && brownDesk.length < maxHardBrownCard) {
            brownDesk.push(link.cardFace);
          } else {
            if (!brownDesk.includes(link.cardFace) && link.difficulty === "normal") {
              brownDesk.push(link.cardFace);
            }
          }
        }
      }

      for (let index = 0; greenDesk.length < amountGreenCard; index++) {
        let link = cardsDataGreen[getRandomIntInclusive(0, cardsDataGreen.length - 1)];
        if (amountGreenCard <= maxHardGreenCard) {
          if (!greenDesk.includes(link.cardFace) && link.difficulty === "hard") {
            greenDesk.push(link.cardFace);
          }
        } else {
          if (!greenDesk.includes(link.cardFace) && link.difficulty === "hard" && greenDesk.length < maxHardGreenCard) {
            greenDesk.push(link.cardFace);
          } else {
            if (!greenDesk.includes(link.cardFace) && link.difficulty === "normal") {
              greenDesk.push(link.cardFace);
            }
          }
        }
      }
      break;

    default:
      break;
  }
}

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min; //Максимум и минимум включаются
}
function getMixStageDesk() {
  OneStageDesk.push(...greenDesk.splice(0, ancientsData[ancient].firstStage.greenCards));
  OneStageDesk.push(...blueDesk.splice(0, ancientsData[ancient].firstStage.blueCards));
  OneStageDesk.push(...brownDesk.splice(0, ancientsData[ancient].firstStage.brownCards));

  TwoStageDesk.push(...greenDesk.splice(0, ancientsData[ancient].secondStage.greenCards));
  TwoStageDesk.push(...blueDesk.splice(0, ancientsData[ancient].secondStage.blueCards));
  TwoStageDesk.push(...brownDesk.splice(0, ancientsData[ancient].secondStage.brownCards));

  ThreeStageDesk.push(...greenDesk.splice(0, ancientsData[ancient].thirdStage.greenCards));
  ThreeStageDesk.push(...blueDesk.splice(0, ancientsData[ancient].thirdStage.blueCards));
  ThreeStageDesk.push(...brownDesk.splice(0, ancientsData[ancient].thirdStage.brownCards));
  console.log("Колода первого этапа:", OneStageDesk, "\nКолода второго этапа:", TwoStageDesk, "\nКолода третьего этапа:", ThreeStageDesk);
}

document.querySelector(".ancient-row").addEventListener("click", (e) => {
  getAmmountCard(e.target);
  document.querySelector(".ancient-row").classList.remove("active");
  document.querySelector(".difficulty").classList.add("active");
});

document.querySelector(".start-button").addEventListener("click", (e) => {
  document.querySelector(".ancient-row").classList.add("active");
  e.target.style.visibility = "hidden";
});

document.querySelector(".difficulty").addEventListener("click", (e) => {
  getDifficulty(e.target.closest("li"));
  document.querySelector(".difficulty").classList.remove("active");
  document.querySelector(".select-deck").classList.add("active");
  getMixStageDesk();
});
document.querySelector(".desk__close").addEventListener("click", (e) => {
  if (OneStageDesk.length > 0) {
    let randomNum = getRandomIntInclusive(0, OneStageDesk.length - 1);
    document.querySelector(".desk__open").src = `${OneStageDesk.splice(randomNum, 1)[0]}`;
  } else if (TwoStageDesk.length > 0) {
    let randomNum = getRandomIntInclusive(0, TwoStageDesk.length - 1);
    document.querySelector(".desk__open").src = `${TwoStageDesk.splice(randomNum, 1)[0]}`;
  } else if (ThreeStageDesk.length > 0) {
    let randomNum = getRandomIntInclusive(0, ThreeStageDesk.length - 1);
    document.querySelector(".desk__open").src = `${ThreeStageDesk.splice(randomNum, 1)[0]}`;
  } else {
    document.querySelector(".desk__open").src = "./assets/mythicCardBackground.jpg";
    document.querySelector(".again").classList.add("active");
  }
  console.log("Колода первого этапа:", OneStageDesk, "\nКолода второго этапа:", TwoStageDesk, "\nКолода третьего этапа:", ThreeStageDesk);
});
document.querySelector(".again").addEventListener("click", () => {
  document.querySelector(".again").classList.remove("active");
  document.querySelector(".ancient-row").classList.add("active");
  document.querySelector(".select-deck").classList.remove("active");
});
