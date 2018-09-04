let card = document.getElementsByClassName("cards");
let background = document.getElementsByClassName("background-card");
let memoryCard = ["img/death.png", "img/runes_fire.png", "img/runes_plants.png", "img/runes_water.png", "img/sun.png", "img/death.png", "img/runes_fire.png", "img/runes_plants.png", "img/runes_water.png", "img/sun.png"];
let stockage = [];
let cardPush = [];
let memoryClick = [];



const MAXCLICK = 2;
let minClick = 0;


for (let i = 0; i < background.length; i++) {
  let randomCard = Math.floor(Math.random() * memoryCard.length);
  stockage = Array(memoryCard[randomCard]);
  cardPush.push(stockage);
  memoryCard.splice(randomCard, 1);
  background[i].addEventListener("click", function () {
    memoryClick += " " + card[i].getAttribute("src");

    console.log(memoryClick);
    card[i].style.display = "block";
    let timerReset = setInterval(resetCard, 2000);
    function resetCard() {
      clearInterval(timerReset);
      card[i].style.display = "none";
      if (memoryClick.includes("img/sun.png img/sun.png")) {
        console.log("Sun");
        memoryClick = [];
        card[i].style.display = "block";
        card[i].style.display = "block";
      } else if (memoryClick.includes("img/runes_water.png img/runes_water.png")) {
        console.log("Water");
        card[i].style.display = "block";
        memoryClick = [];
      } else if (memoryClick.includes("img/death.png img/death.png")) {
        console.log("Death");
        card[i].style.display = "block";
        memoryClick = [];
      } else if (memoryClick.includes("img/runes_fire.png img/runes_fire.png")) {
        card[i].style.display = "block";
        console.log("Fires");
        memoryClick = [];
      } else if (memoryClick.includes("img/runes_plants.png img/runes_plants.png")) {
        card[i].style.display = "block";
        console.log("Plants");
        memoryClick = [];
      } else {
        memoryClick = [];
      }
    }
  });
}


for (let x = 0; x < 10; x++) {
  card[x].src = cardPush[x];
}
