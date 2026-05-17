const planeGreen1 = document.getElementById("planeGreen1");
const planeYellow1 = document.getElementById("planeYellow1");
const planeBlue1 = document.getElementById("planeBlue1");
const planeX = window.innerWidth * 0.08;
//const planeY = window.innerWidth * 0.08;
const speed = 2;

const button1 = document.getElementById("arrowBtn");
const img1 = document.getElementById("arrowImg");

const button2 = document.getElementById("arrowBtn2");
const img2 = document.getElementById("arrowImg2");

// GREEN PLANE
let x = planeX, y = 0; 
let verticalLock = false;
let firstDecisionMade = false;
let secondDecisionMade = false;

// YELLOW PLANE
let x2 = -250, y2 = 0; //!
let verticalLock2 = false;
let firstDecisionMade2 = false;
let secondDecisionMade2 = false;

// BLUE PLANE
let x3 = -250, y3 = 0; //!
let verticalLock3 = false;
let firstDecisionMade3 = false;
let secondDecisionMade3 = false;

// SETTINGS
let decisionPoint1;
let decisionPoint2;

function updateDecisionPoints() {
  decisionPoint1 = window.innerHeight * 0.3; //!
  decisionPoint2 = window.innerHeight * 0.7; //!
}


// BUTTONS
let mode1Right = false;
let mode2Right = false;
let mode1Right_2 = false;
let mode2Right_2 = false;

button1.addEventListener("click", () => {
  mode1Right = !mode1Right;

  img1.src = mode1Right
    ? "pngs/arrowUp.png"
    : "pngs/arrowRight.png";

  mode1Right_2 = mode1Right;
});

button2.addEventListener("click", () => {
  mode2Right = !mode2Right;

  img2.src = mode2Right
    ? "pngs/arrowUp.png"
    : "pngs/arrowRight.png";

  mode2Right_2 = mode2Right;
});

updateDecisionPoints();

window.addEventListener("resize", updateDecisionPoints);


// ================= GREEN ================= 
function animate() {
  if (gameOver || !gameStarted) return;

    planeGreen1.style.visibility = "visible";

  if (!verticalLock) {
    y += speed;

    if (!firstDecisionMade && y >= decisionPoint1) {
      firstDecisionMade = true;

      if (!mode1Right) {
        triggerGameOver();
        return;
      }
    }

    if (!secondDecisionMade && y >= decisionPoint2) {
      secondDecisionMade = true;

      if (!mode2Right) {
        triggerGameOver();
        return;
      }
    }

  } else {
    x += speed;
  }

  planeGreen1.style.transform = verticalLock ? "rotate(90deg)" : "rotate(0deg)";
  planeGreen1.style.left = x + "px";
  planeGreen1.style.bottom = y + "px";
  requestAnimationFrame(animate);
}

// ================= YELLOW =================
function animate2() {
  if (gameOver || !gameStarted) return;

  planeYellow1.style.visibility = "visible";

  if (!verticalLock2) {
    x2 += speed;

    if (!firstDecisionMade2 && x2 >= decisionPoint1) {
      firstDecisionMade2 = true;

      if (!mode1Right_2) {
        verticalLock2 = true;
      }
      else if (mode1Right_2) {        
        triggerGameOver();
      }
    }

    if (!secondDecisionMade2 && x2 >= decisionPoint2) {
      secondDecisionMade2 = true;

      if (!mode2Right_2) {
        verticalLock2 = true;
      }
    }

  } else {
    y2 += speed;
  }

   planeYellow1.style.transform = verticalLock2 ? "rotate(-90deg)" : "rotate(0deg)";
   planeYellow1.style.left = x2 + "px";
   planeYellow1.style.bottom = y2 + "px";
  requestAnimationFrame(animate2);
}

// ================= BLUE =================
function animate3() {
  if (gameOver || !gameStarted) return;

  planeBlue1.style.visibility = "visible";

  if (!verticalLock3) {
    x3 += speed;

    if (!firstDecisionMade3 && x3 >= decisionPoint1) {
      firstDecisionMade3 = true;

      if (!mode1Right_2) {
        verticalLock3 = true;
        triggerGameOver();
      }
    }

    if (!secondDecisionMade3 && x3 >= decisionPoint2) {
      secondDecisionMade3 = true;

      if (!mode2Right_2) {
        verticalLock3 = true;
      }
      else if (mode2Right_2) {
        triggerGameOver();
      }
    }

  } else {
    y3 += speed;
  }

  planeBlue1.style.transform = verticalLock3 ? "rotate(-90deg)" : "rotate(0deg)";
  planeBlue1.style.left = x3 + "px";
  planeBlue1.style.bottom = y3 + "px";
  requestAnimationFrame(animate3);
}
