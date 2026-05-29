const planeGreen1 = document.getElementById("planeGreen1");
const planeYellow1 = document.getElementById("planeYellow1");
const planeBlue1 = document.getElementById("planeBlue1");
const planeX1 = window.innerWidth * 0.45;
const planeY1 = window.innerHeight * 0.001;
const planeYellowX = window.innerWidth * 0.45;
const planeYellowY = window.innerHeight * 0.001;

const speed = 2;
const speedYellow = 2;

const restartBtn = document.getElementById("restartBtn");
const gameOverScreen = document.getElementById("gameOverScreen");

const button1 = document.getElementById("arrowBtn");
const img1 = document.getElementById("arrowImg");

const button2 = document.getElementById("arrowBtn2");
const img2 = document.getElementById("arrowImg2");

const button3 = document.getElementById("arrowBtn3");
const img3 = document.getElementById("arrowImg3");

const button4 = document.getElementById("arrowBtn4");
const img4 = document.getElementById("arrowImg4");

const button5 = document.getElementById("arrowBtn5");
const img5 = document.getElementById("arrowImg5");

const button6 = document.getElementById("arrowBtn6");
const img6 = document.getElementById("arrowImg6");

const button7 = document.getElementById("arrowBtn7");
const img7 = document.getElementById("arrowImg7");

const button8 = document.getElementById("arrowBtn8");
const img8 = document.getElementById("arrowImg8");

const button9 = document.getElementById("arrowBtn9");
const img9 = document.getElementById("arrowImg9");

let score = 0;
function updateScore() {
  scoreDisplay.textContent = `Score: ${score}`;
}

// SETTINGS
let decisionPoint1 = window.innerHeight * 0.37;
let decisionPoint2 = window.innerHeight * 0.5;
let decisionPoint3 = window.innerHeight * 0.61;
let decisionPoint4 = window.innerWidth * 0.525;
let decisionPoint5 = window.innerHeight * 0.61;
let decisionPoint6 = window.innerHeight * 0.50;
let decisionPoint7 = window.innerHeight * 0.39;

let decisionPoint4yellow = window.innerHeight * 0.72;
let decisionPoint5yellow = window.innerHeight * 0.61;
let decisionPoint6yellow = window.innerHeight * 0.50;
let decisionPoint7yellow = window.innerHeight * 0.39;

function updateDecisionPoints() {
  decisionPoint1 = window.innerHeight * 0.37;
  decisionPoint2 = window.innerHeight * 0.5;
  decisionPoint3 = window.innerHeight * 0.61;
  decisionPoint4 = window.innerWidth * 0.525;
  decisionPoint5 = window.innerHeight * 0.61;
  decisionPoint6 = window.innerHeight * 0.50;
  decisionPoint7 = window.innerHeight * 0.39;

  decisionPoint4yellow = window.innerHeight * 0.72;
  decisionPoint5yellow = window.innerHeight * 0.61;
  decisionPoint6yellow = window.innerHeight * 0.50;
  decisionPoint7yellow = window.innerHeight * 0.39;
}

// BUTTONS
let mode1Right = false;
let mode1Right_2 = false;
let mode2Right = false;
let mode2Right_2 = false;
let mode3Right = false;
let mode3Right_2 = false;
let mode4Right = false;
let mode4Right_2 = false;
let mode5Right = false;
let mode5Right_2 = false;
let mode6Right = false;
let mode6Right_2 = false;
let mode7Right = false;
let mode7Right_2 = false;
let mode8Right = false;
let mode8Right_2 = false;
let mode9Right = false;
let mode9Right_2 = false;

button1.addEventListener("click", () => {
  mode1Right = !mode1Right;

  img1.src = mode1Right
    ? "pngs/arrowUp.png"
    : "pngs/arrowLeft.png";

  mode1Right_2 = mode1Right;
});

button2.addEventListener("click", () => {
  mode2Right = !mode2Right;

  img2.src = mode2Right
    ? "pngs/arrowUp.png"
    : "pngs/arrowLeft.png";

  mode2Right_2 = mode2Right;
});

button3.addEventListener("click", () => {
  mode3Right = !mode3Right;

  img3.src = mode3Right
    ? "pngs/arrowUp.png"
    : "pngs/arrowLeft.png";

  mode3Right_2 = mode3Right;
});

button4.addEventListener("click", () => {
  mode4Right = !mode4Right;

  img4.src = mode4Right
    ? "pngs/arrowRight.png"
    : "pngs/arrowUp.png";

  mode4Right_2 = mode4Right;
});

button5.addEventListener("click", () => {
  mode5Right = !mode5Right;

  img5.src = mode5Right
    ? "pngs/arrowDown.png"
    : "pngs/arrowRight.png";

  mode5Right_2 = mode5Right;
});

button6.addEventListener("click", () => {
  mode6Right = !mode6Right;

  img6.src = mode6Right
    ? "pngs/arrowDown.png"
    : "pngs/arrowRight.png";

  mode6Right_2 = mode6Right;
});

button7.addEventListener("click", () => {
  mode7Right = !mode7Right;

  img7.src = mode7Right
    ? "pngs/arrowDown.png"
    : "pngs/arrowRight.png";

  mode7Right_2 = mode7Right;
});

button8.addEventListener("click", () => {
  mode8Right = !mode8Right;

  img8.src = mode8Right
    ? "pngs/arrowUp.png"
    : "pngs/arrowLeft.png";

  mode8Right_2 = mode8Right;
});

button9.addEventListener("click", () => {
  mode9Right = !mode9Right;

  img9.src = mode9Right
    ? "pngs/arrowDown.png"
    : "pngs/arrowLeft.png";

  mode9Right_2 = mode9Right;
});

restartBtn.addEventListener("click", restartGame);


updateDecisionPoints();
window.addEventListener("resize", updateDecisionPoints);


function restartGame() {
  gameOverScreen.style.display = "none";
  restartBtn.style.display = "none";

yellowStarted = false;

  score = 0;
  // CORE STATE
  gameOver = false;
  gameStarted = true;

  // POSITION RESET
  greenX = planeX1;
  greenY = planeY1;
  YellowX = planeYellowX;
  YellowY = planeYellowY;

  greenState = "up";
  YellowState = "up";

  // RESET ALL DECISIONS
  firstDecisionMadeGreen = false;
  secondDecisionMadeGreen = false;
  thirdDecisionMadeGreen = false;
  fourthDecisionMadeGreen = false;
  fifthDecisionMadeGreen = false;
  sixthDecisionMadeGreen = false;
  seventhDecisionMadeGreen = false;

  firstDecisionMadeYellow = false;
  secondDecisionMadeYellow = false;
  thirdDecisionMadeYellow = false;
  fourthDecisionMadeYellow = false;
  fifthDecisionMadeYellow = false;
  sixthDecisionMadeYellow = false;
  seventhDecisionMadeYellow = false;


  // RESET ALL BUTTON LOGIC (IMPORTANT)
  mode1Right = false;
  mode2Right = false;
  mode3Right = false;
  mode4Right = false;
  mode5Right = false;
  mode6Right = false;
  mode7Right = false;
  mode8Right = false;
  mode9Right = false;

  mode1Right_2 = false;
  mode2Right_2 = false;
  mode3Right_2 = false;
  mode4Right_2 = false;
  mode5Right_2 = false;
  mode6Right_2 = false;
  mode7Right_2 = false;
  mode8Right_2 = false;
  mode9Right_2 = false;



  // RESET VISUALS
  img1.src = "pngs/arrowLeft.png";
  img2.src = "pngs/arrowLeft.png";
  img3.src = "pngs/arrowLeft.png";
  img4.src = "pngs/arrowUp.png";
  img5.src = "pngs/arrowRight.png";
  img6.src = "pngs/arrowRight.png";
  img7.src = "pngs/arrowRight.png";
  img8.src = "pngs/arrowLeft.png";
  img9.src = "pngs/arrowLeft.png";

  // RESET ROTATION + POSITION
  planeGreen1.style.transform = "rotate(0deg)";
  planeGreen1.style.left = greenX + "px";
  planeGreen1.style.bottom = greenY + "px";

  planeYellow1.style.transform = "rotate(0deg)";
  planeYellow1.style.left = YellowX + "px";
  planeYellow1.style.bottom = YellowY + "px";

  // START CLEAN LOOP (IMPORTANT)
  requestAnimationFrame(animate);
  //requestAnimationFrame(animateYellow);
}
//*/

function triggerGameOver() {
  gameOver = true;

  gameOverScreen.style.display = "flex";

  restartBtn.style.display = "block";
}