const planeGreen1 = document.getElementById("planeGreen1");
const planeYellow1 = document.getElementById("planeYellow1");
const planeBlue1 = document.getElementById("planeBlue1");
const planeX1 = window.innerWidth * 0.45;
const planeY1 = window.innerWidth * 0.001
const planeX2 = window.innerWidth * 0.43;
const planeY2 = window.innerWidth * 0.001
const speed = 2;

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


// GREEN PLANE
let greenX = planeX1, greenY = planeY1; 
let verticalLockGreen = false;
let horizontalLockGreen = false;
let firstDecisionMadeGreen = false;
let secondDecisionMadeGreen = false;
let thirdDecisionMadeGreen = false;
let fourthDecisionMadeGreen = false;
let fifthDecisionMadeGreen = false;
let sixDecisionMadeGreen = false;
let seventhDecisionMadeGreen = false;
let eighthDecisionMadeGreen = false;
let ninthDecisionMadeGreen = false;

const greenYLimit = window.innerHeight * 0.8;
const greenXLimit = window.innerWidth * 0.525;

// YELLOW PLANE
let yellowX = planeX2, yellowY = planeY2; 
let verticalLockYellow = false;
let horizontalLockYellow = false;
let firstDecisionMadeYellow = false;
let secondDecisionMadeYellow = false;
let thirdDecisionMadeYellow = false;
let fourthDecisionMadeYellow = false;
let fifthDecisionMadeYellow = false;
let sixDecisionMadeYellow = false;
let seventhDecisionMadeYellow = false;
let eighthDecisionMadeYellow = false;
let ninthDecisionMadeYellow = false;


// SETTINGS
let decisionPoint1;
let decisionPoint2;
let decisionPoint3;
let decisionPoint4;
let decisionPoint5;
let decisionPoint6;
let decisionPoint7;
let decisionPoint8;
let decisionPoint9;


function updateDecisionPoints() {
  decisionPoint1 = window.innerHeight * 0.4;
  decisionPoint2 = window.innerHeight * 0.5;
  decisionPoint3 = window.innerHeight * 0.6;
  decisionPoint4 = window.innerWidth * 0.52;
  decisionPoint5 = window.innerHeight * 0.7;
  decisionPoint6 = window.innerHeight * 0.7;
  decisionPoint7 = window.innerHeight * 0.7;
  decisionPoint8 = window.innerHeight * 0.7;
  decisionPoint9 = window.innerHeight * 0.7;
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

updateDecisionPoints();

window.addEventListener("resize", updateDecisionPoints);

///*
// ================= GREEN ================= 
function animate() {
  if (gameOver || !gameStarted) return;

    planeGreen1.style.visibility = "visible";

    if (!verticalLockGreen) {
      if (greenY < greenYLimit) {
        greenY += speed;
        }     else {
        verticalLockGreen = true;
        }   

    if (!firstDecisionMadeGreen && greenY >= decisionPoint1) {
      firstDecisionMadeGreen = true;

      if (!mode1Right) {
        triggerGameOver();
        return;
      }
    }

    if (!secondDecisionMadeGreen && greenY >= decisionPoint2) {
      secondDecisionMadeGreen = true;

      if (!mode2Right) {
        triggerGameOver();
        return;
      }
    }

    if (!thirdDecisionMadeGreen && greenY >= decisionPoint3) {
      thirdDecisionMadeGreen = true;

      if (!mode3Right) {
        triggerGameOver();
        return;
      }
    }

    if (!fourthDecisionMadeGreen && greenY >= decisionPoint4) {
      fourthDecisionMadeGreen = true;

      if (!mode4Right) {
        triggerGameOver();
        return;
      }
    }

  } else {
  if (greenX < greenXLimit) {
    greenX += speed;
  }
}

  planeGreen1.style.transform = verticalLockGreen ? "rotate(90deg)" : "rotate(0deg)";
  planeGreen1.style.left = greenX + "px";
  planeGreen1.style.bottom = greenY + "px";
  requestAnimationFrame(animate);
}
