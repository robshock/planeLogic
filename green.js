// GREEN PLANE
let greenX = planeX1, greenY = planeY1;
let verticalLockGreen = false;
let horizontalLockGreen = false;
let firstDecisionMadeGreen = false;
let secondDecisionMadeGreen = false;
let thirdDecisionMadeGreen = false;
let fourthDecisionMadeGreen = false;
let fifthDecisionMadeGreen = false;
let sixthDecisionMadeGreen = false;
let seventhDecisionMadeGreen = false;

const greenYLimit = window.innerHeight * 0.8;
const greenYLimit2 = window.innerHeight * 0.6;
const greenYLimit3 = window.innerHeight * 0.5;
const greenYLimit4 = window.innerHeight * 0.39;
const greenXLimit = window.innerWidth * 0.525;
const greenXLimit2 = window.innerWidth * 0.6;
let movingDownGreen = false;
let greenState = "up"; // "up" → "right1" → "right2" → "down1" → "down2" → "down3" → "down4"

let yellowStarted = false;


// ================= GREEN ================= 

function animate() {
  if (gameOver || !gameStarted) return;

  planeGreen1.style.visibility = "visible";

  // ================= UP =================

  if (greenState === "up") {
    greenY += speed;

    if (!firstDecisionMadeGreen && greenY >= decisionPoint1) {
      firstDecisionMadeGreen = true;
      if (!mode1Right) return triggerGameOver();
    }

    if (!secondDecisionMadeGreen && greenY >= decisionPoint2) {
      secondDecisionMadeGreen = true;
      if (!mode2Right) return triggerGameOver();
    }

    if (!thirdDecisionMadeGreen && greenY >= decisionPoint3) {
      thirdDecisionMadeGreen = true;
      if (!mode3Right) return triggerGameOver();
    }

    if (greenY >= greenYLimit) {
      greenState = "right1";
    }
  }

  // ================= RIGHT (segment 1) =================

  else if (greenState === "right1") {
    greenX += speed;

    if (!fourthDecisionMadeGreen && greenX >= decisionPoint4) {
      fourthDecisionMadeGreen = true;
      if (!mode4Right) return triggerGameOver();
    }

    if (greenX >= greenXLimit) {
      greenState = "right2";
    }
  }

  // ================= RIGHT (segment 2) =================

  else if (greenState === "right2") {
    greenX += speed;

    if (greenX >= greenXLimit2) {
      greenState = "down1";
    }
  }

  // ================= DOWN (segment 1) =================

  else if (greenState === "down1") {

    greenY -= speed;

    // FIRST: state transition
    if (greenY <= greenYLimit2) {
      greenState = "down2";
    }

    // SECOND: decision check (must not depend on transition logic)
    if (!fifthDecisionMadeGreen && greenY <= decisionPoint5) {
      fifthDecisionMadeGreen = true;

      if (!mode5Right) return triggerGameOver();
    }
  }

  // ================= DOWN (segment 2) =================

  else if (greenState === "down2") {
    greenY -= speed;

    if (!sixthDecisionMadeGreen && greenY <= decisionPoint6) {
      sixthDecisionMadeGreen = true;
      if (!mode6Right) return triggerGameOver();
    }

    if (greenY <= greenYLimit3) {
      greenState = "down3";
    }
  }

  // ================= DOWN (segment 3) =================

  else if (greenState === "down3") {
    greenY -= speed;

    if (!seventhDecisionMadeGreen && greenY <= decisionPoint7) {
      seventhDecisionMadeGreen = true;
      if (!mode7Right) return triggerGameOver();
    }

    if (greenY <= greenYLimit4) {
      greenState = "down4";
      score += 1;
      updateScore();
    }
  }

  // ================= DOWN (segment 4) =================

  else if (greenState === "down4") {
    greenY -= speed;
  }

  // ================= ROTATION =================
  if (greenState === "up") planeGreen1.style.transform = "rotate(0deg)";
  else if (greenState.startsWith("right")) planeGreen1.style.transform = "rotate(90deg)";
  else planeGreen1.style.transform = "rotate(180deg)";

  planeGreen1.style.left = greenX + "px";
  planeGreen1.style.bottom = greenY + "px";

  if (greenY < -100) {
  planeGreen1.style.visibility = "hidden";
  return;
}

  requestAnimationFrame(animate);

  if (!yellowStarted) {
    yellowStarted = true;

    setTimeout(() => {
      requestAnimationFrame(animateYellow);
    }, 2000);
  }


}