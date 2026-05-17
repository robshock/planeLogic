const button1 = document.getElementById("arrowBtn");
const img1 = document.getElementById("arrowImg");

const button2 = document.getElementById("arrowBtn2");
const img2 = document.getElementById("arrowImg2");

const plane = document.getElementById("plane");
const plane2 = document.getElementById("plane2");
const plane3 = document.getElementById("plane3");

let mode1Right = false;
let mode2Right = false;

let mode1Right_2 = false;
let mode2Right_2 = false;

const countdownEl = document.getElementById("countdown");

let gameOver = false;
let gameStarted = false;

// GAME OVER FUNCTION
function triggerGameOver() {
  if (gameOver) return;
  gameOver = true;

  document.getElementById("gameOverScreen").style.display = "flex";
}

// BUTTONS
button1.addEventListener("click", () => {
  mode1Right = !mode1Right;

  img1.src = mode1Right
    ? "pngs/arrowRight.png"
    : "pngs/arrowUp.png";

  mode1Right_2 = mode1Right;
});

button2.addEventListener("click", () => {
  mode2Right = !mode2Right;

  img2.src = mode2Right
    ? "pngs/arrowRight.png"
    : "pngs/arrowUp.png";

  mode2Right_2 = mode2Right;
});

// SETTINGS
const speed = 2;
const decisionPoint1 = window.innerWidth * 0.4;
const decisionPoint2 = window.innerWidth * 0.75;

// GREEN PLANE
let x = 0, y = 0;
let verticalLock = false;
let firstDecisionMade = false;
let secondDecisionMade = false;

// YELLOW PLANE
let x2 = -250, y2 = 0;
let verticalLock2 = false;
let firstDecisionMade2 = false;
let secondDecisionMade2 = false;

// BLUE PLANE
let x3 = -250, y3 = 0;
let verticalLock3 = false;
let firstDecisionMade3 = false;
let secondDecisionMade3 = false;

/* ================= GREEN ================= */
function animate() {
  if (gameOver || !gameStarted) return;

  if (!verticalLock) {
    x += speed;

    if (!firstDecisionMade && x >= decisionPoint1) {
      firstDecisionMade = true;

      if (!mode1Right) {
        triggerGameOver();
        return;
      }
    }

    if (!secondDecisionMade && x >= decisionPoint2) {
      secondDecisionMade = true;

      if (!mode2Right) {
        triggerGameOver();
        return;
      }
    }

  } else {
    y += speed;
  }

  plane.style.transform = verticalLock ? "rotate(-90deg)" : "rotate(0deg)";
  plane.style.left = x + "px";
  plane.style.bottom = y + "px";

  requestAnimationFrame(animate);
}

/* ================= YELLOW ================= */
function animate2() {
  if (gameOver || !gameStarted) return;

  plane2.style.visibility = "visible";

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

  plane2.style.transform = verticalLock2 ? "rotate(-90deg)" : "rotate(0deg)";
  plane2.style.left = x2 + "px";
  plane2.style.bottom = y2 + "px";

  requestAnimationFrame(animate2);
}

/* ================= BLUE ================= */
function animate3() {
  if (gameOver || !gameStarted) return;

  plane3.style.visibility = "visible";

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

  plane3.style.transform = verticalLock3 ? "rotate(-90deg)" : "rotate(0deg)";
  plane3.style.left = x3 + "px";
  plane3.style.bottom = y3 + "px";

  requestAnimationFrame(animate3);
}



/* ================= START GAME ================= */
function startGame() {
  gameStarted = true;

  animate();

  // KEEP YOUR ORIGINAL STAGGERING
  setTimeout(() => animate2(), 3000);
  setTimeout(() => animate3(), 7000);
}

/* ================= COUNTDOWN ================= */
let count = 3;

const interval = setInterval(() => {
  count--;

  if (count > 0) {
    countdownEl.textContent = count;
  } else if (count === 0) {
    countdownEl.textContent = "GO!";
  } else {
    clearInterval(interval);
    countdownEl.style.display = "none";
    startGame();
  }
}, 1000);