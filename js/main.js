let card = document.getElementsByClassName("cards");
let background = document.getElementsByClassName("background-card");
let memoryCard = ["img/death.png", "img/runes_fire.png", "img/runes_plants.png", "img/runes_water.png", "img/sun.png", "img/death.png", "img/runes_fire.png", "img/runes_plants.png", "img/runes_water.png", "img/sun.png"];
let stockage = [];
let cardPush = [];
let memoryClick = [];



const MAXCLICK = 1;
let minClick = 0;

for (let i = 0; i < background.length; i++) {
  let randomCard = Math.floor(Math.random() * memoryCard.length);
  stockage = Array(memoryCard[randomCard]);
  cardPush.push(stockage);
  memoryCard.splice(randomCard, 1);
  background[i].addEventListener("click", function () {
    if (minClick <= MAXCLICK) {
      minClick++;
      memoryClick.push(card[i].getAttribute('src'));
      card[i].style.display = "block";
      console.log(minClick);
    }
    
    let timerReset = setInterval(resetCard, 2000);
    function resetCard() {






      clearInterval(timerReset);
      card[i].style.display = "none";
      if (memoryClick[0] == memoryClick[1]) {
        card[i].style.display = "block";
        memoryClick = [];
        minClick = 0;
      } else if (memoryClick[0] != card[i].getAttribute('src')) {
        minClick = 0;
        memoryClick = [];
      }
    }
  });
}


for (let x = 0; x < 10; x++) {
  card[x].src = cardPush[x];
}
