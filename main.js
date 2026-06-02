const restartBtn = document.getElementById("restartBtn");
const gameOverScreen = document.getElementById("gameOverScreen");

const planeGreen1 = document.getElementById("planeGreen1");
const planeYellow1 = document.getElementById("planeYellow1");
const planeBlue1 = document.getElementById("planeBlue1");
const planeOrange1 = document.getElementById("planeOrange1");
const planePurple1 = document.getElementById("planePurple1");
const planePink1 = document.getElementById("planePink1");

/*
const planeRed1 = document.getElementById("planeBlue1");
const planeBlack1 = document.getElementById("planeBlue1");
const planeDarkBlue1 = document.getElementById("planeBlue1");
const planeDarkGreen1 = document.getElementById("planeBlue1");
*/
const planeX1 = window.innerWidth * 0.43;
const planeY1 = window.innerHeight * 0.001;
const planeYellowX = window.innerWidth * 0.43;
const planeYellowY = window.innerHeight * 0.001;
const planeBlueX = window.innerWidth * 0.43;
const planeBlueY = window.innerHeight * 0.001;
const planeOrangeX = window.innerWidth * 0.43;
const planeOrangeY = window.innerHeight * 0.001;
const planePurpleX = window.innerWidth * 0.43;
const planePurpleY = window.innerHeight * 0.001;
const planePinkX = window.innerWidth * 0.43;
const planePinkY = window.innerHeight * 0.001;
/*
const planeRedX = window.innerWidth * 0.43;
const planeRedY = window.innerHeight * 0.001;
const planeDarkGreeX = window.innerWidth * 0.43;
const planeDarkBlueY = window.innerHeight * 0.001;
const planeDarkGreeX = window.innerWidth * 0.43;
const planeDarkBlueY = window.innerHeight * 0.001;
const planeBlackX = window.innerWidth * 0.43;
const planeBlackY = window.innerHeight * 0.001;
*/
const speed = 1.5;
const speedYellow = 1.5;
const speedBlue = 1.5;
const speedOrange = 1.5;
const speedPurple = 1.5;
const speedPink = 1.5;

/*
const speedRed = 1.5;
const speedBlack = 1.5;
const speedDarkGreen = 1.5;
const speedDarkBlue = 1.5;
*/
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
let decisionPoint1 = window.innerHeight * 0.39;
let decisionPoint2 = window.innerHeight * 0.52;
let decisionPoint3 = window.innerHeight * 0.63;
let decisionPoint4 = window.innerWidth * 0.525;
let decisionPoint5 = window.innerHeight * 0.63;
let decisionPoint6 = window.innerHeight * 0.52;
let decisionPoint7 = window.innerHeight * 0.41;
let decisionPoint4yellow = window.innerHeight * 0.72;
let decisionPoint5yellow = window.innerHeight * 0.61;
let decisionPoint6yellow = window.innerHeight * 0.50;
let decisionPoint7yellow = window.innerHeight * 0.39;
let decisionPoint2blue = window.innerHeight * 0.3;
let decisionPoint4purple = window.innerHeight * 0.72;
let decisionPoint5purple = window.innerHeight * 0.61;
let decisionPoint6purple = window.innerHeight * 0.50;
let decisionPoint7purple = window.innerHeight * 0.39;
//let decisionPoint?red = window.innerHeight * 0.72;
//let decisionPoint?pink = window.innerHeight * 0.72;
//let decisionPoint?purple = window.innerHeight * 0.72;
//let decisionPoint?orange = window.innerHeight * 0.72;
//let decisionPoint?black = window.innerHeight * 0.72;
//let decisionPoint?darkBlue = window.innerHeight * 0.72;
//let decisionPoint?darkGreen = window.innerHeight * 0.72;
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
  decisionPoint2blue = window.innerHeight * 0.3
  decisionPoint4purple = window.innerHeight * 0.72;
  decisionPoint5purple = window.innerHeight * 0.61;
  decisionPoint6purple = window.innerHeight * 0.50;
  decisionPoint7purple = window.innerHeight * 0.39;
  //let decisionPoint?red = window.innerHeight * 0.72;
  //let decisionPoint?pink = window.innerHeight * 0.72;
  //let decisionPoint?purple = window.innerHeight * 0.72;
  //let decisionPoint?orange = window.innerHeight * 0.72;
  //let decisionPoint?black = window.innerHeight * 0.72;
  //let decisionPoint?darkBlue = window.innerHeight * 0.72;
  //let decisionPoint?darkGreen = window.innerHeight * 0.72;
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
button1.addEventListener("pointerdown", () => {
  mode1Right = !mode1Right;
  img1.src = mode1Right
    ? "pngs/arrowUp.png"
    : "pngs/arrowLeft.png";
  mode1Right_2 = mode1Right;
});
button2.addEventListener("pointerdown", () => {
  mode2Right = !mode2Right;
  img2.src = mode2Right
    ? "pngs/arrowUp.png"
    : "pngs/arrowLeft.png";
  mode2Right_2 = mode2Right;
});
button3.addEventListener("pointerdown", () => {
  mode3Right = !mode3Right;
  img3.src = mode3Right
    ? "pngs/arrowUp.png"
    : "pngs/arrowLeft.png";
  mode3Right_2 = mode3Right;
});
button4.addEventListener("pointerdown", () => {
  mode4Right = !mode4Right;
  img4.src = mode4Right
    ? "pngs/arrowRight.png"
    : "pngs/arrowUp.png";
  mode4Right_2 = mode4Right;
});
button5.addEventListener("pointerdown", () => {
  mode5Right = !mode5Right;
  img5.src = mode5Right
    ? "pngs/arrowDown.png"
    : "pngs/arrowRight.png";
  mode5Right_2 = mode5Right;
});
button6.addEventListener("pointerdown", () => {
  mode6Right = !mode6Right;
  img6.src = mode6Right
    ? "pngs/arrowDown.png"
    : "pngs/arrowRight.png";
  mode6Right_2 = mode6Right;
});
button7.addEventListener("pointerdown", () => {
  mode7Right = !mode7Right;
  img7.src = mode7Right
    ? "pngs/arrowDown.png"
    : "pngs/arrowRight.png";
  mode7Right_2 = mode7Right;
});
button8.addEventListener("pointerdown", () => {
  mode8Right = !mode8Right;
  img8.src = mode8Right
    ? "pngs/arrowUp.png"
    : "pngs/arrowLeft.png";
  mode8Right_2 = mode8Right;
});
button9.addEventListener("pointerdown", () => {
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
  blueStarted = false;
  orangeStarted = false;
  purpleStarted = false;
  pinkStarted = false;
  //redStarted = false;
  score = 0;
  // CORE STATE
  gameOver = false;
  gameStarted = true;
  // POSITION RESET
  greenX = planeX1;
  greenY = planeY1;
  BlueX = planeBlueX;
  BlueY = planeBlueY;
  YellowX = planeYellowX;
  YellowY = planeYellowY;
  OrangeX = planeOrangeX;
  OrangeY = planeOrangeY;
  PurpleX = planePurpleX;
  PurpleY = planePurpleY;
  PinkX = planePinkX;
  PinkY = planePinkY;
  greenState = "up";
  YellowState = "up";
  BlueState = "up";
  OrangeState = "up";
  PurpleState = "up";
  PinkState = "up";
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
  firstDecisionMadeBlue = false;
  secondDecisionMadeBlue = false;
  thirdDecisionMadeBlue = false;
  fourthDecisionMadeBlue = false;
  fifthDecisionMadeBlue = false;
  sixthDecisionMadeBlue = false;
  seventhDecisionMadeBlue = false;
  firstDecisionMadeOrange = false;
  secondDecisionMadeOrange = false;
  thirdDecisionMadeOrange = false;
  fourthDecisionMadeOrange = false;
  fifthDecisionMadeOrange = false;
  sixthDecisionMadeOrange = false;
  seventhDecisionMadeOrange = false;
  firstDecisionMadePurple = false;
  secondDecisionMadePurple = false;
  thirdDecisionMadePurple = false;
  fourthDecisionMadePurple = false;
  fifthDecisionMadePurple = false;
  sixthDecisionMadePurple = false;
  seventhDecisionMadePurple = false;
  firstDecisionMadePink = false;
  secondDecisionMadePink = false;
  thirdDecisionMadePink = false;
  fourthDecisionMadePink = false;
  fifthDecisionMadePink = false;
  sixthDecisionMadePink = false;
  seventhDecisionMadePink = false;


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
  planeBlue1.style.transform = "rotate(0deg)";
  planeBlue1.style.left = BlueX + "px";
  planeBlue1.style.bottom = BlueY + "px";
  planeOrange1.style.transform = "rotate(0deg)";
  planeOrange1.style.left = OrangeX + "px";
  planeOrange1.style.bottom = OrangeY + "px";
  planePurple1.style.transform = "rotate(0deg)";
  planePurple1.style.left = PurpleX + "px";
  planePurple1.style.bottom = PurpleY + "px";
  planePink1.style.transform = "rotate(0deg)";
  planePink1.style.left = PinkX + "px";
  planePink1.style.bottom = PinkY + "px";
  // START CLEAN LOOP (IMPORTANT)
  //requestAnimationFrame(animate);
  //requestAnimationFrame(animateYellow);
  requestAnimationFrame(animateOrange);
  //requestAnimationFrame(animateBlue);
  //requestAnimationFrame(animatePurple);
  //requestAnimationFrame(animatePink);
}
function triggerGameOver() {
  gameOver = true;
  gameOverScreen.style.display = "flex";
  restartBtn.style.display = "block";
}