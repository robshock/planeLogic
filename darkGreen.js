let DarkGreenX = planeDarkGreenX, DarkGreenY = planeDarkGreenY;
let firstDecisionMadeDarkGreen = false;
let secondDecisionMadeDarkGreen = false;
let thirdDecisionMadeDarkGreen = false;
let fourthDecisionMadeDarkGreen = false;
let fifthDecisionMadeDarkGreen = false;
let sixthDecisionMadeDarkGreen = false;
let seventhDecisionMadeDarkGreen = false;

const DarkGreenYLimit = window.innerHeight * 0.83;
const DarkGreenYLimit2 = window.innerHeight * 0.69;

const DarkGreenXLimit = window.innerWidth * 0.525;
const DarkGreenXLimit2 = window.innerWidth * 0.62;
const DarkGreenXLimit3 = window.innerWidth * 0.83;

let movingDownDarkGreen = false;
let DarkGreenState = "up";

//let blackStarted = false;

// ================= DARKGREEN =================

function animateDarkGreen() {
   if (gameOver || !gameStarted) return;
   planeDarkGreen1.style.visibility = "visible";

   // ================= UP =================

   if (DarkGreenState === "up") {
       DarkGreenY += speedDarkGreen;
       if (!firstDecisionMadeDarkGreen && DarkGreenY >= decisionPoint1) {
           firstDecisionMadeDarkGreen = true;
           if (!mode1Right) return triggerGameOver();
       }
       if (!secondDecisionMadeDarkGreen && DarkGreenY >= decisionPoint2) {
           secondDecisionMadeDarkGreen = true;
           if (!mode2Right) return triggerGameOver();
       }
       if (!thirdDecisionMadeDarkGreen && DarkGreenY >= decisionPoint3) {
           thirdDecisionMadeDarkGreen = true;
           if (!mode3Right) return triggerGameOver();
       }
       if (DarkGreenY >= DarkGreenYLimit) {
           DarkGreenState = "right1";
       }
   }
   else if (DarkGreenState === "right1") {
       DarkGreenX += speedDarkGreen;
       if (!fourthDecisionMadeDarkGreen && DarkGreenX >= decisionPoint4) {
           fourthDecisionMadeDarkGreen = true;
           if (mode4Right) return triggerGameOver();
       }
       if (DarkGreenX >= DarkGreenXLimit) {
           DarkGreenState = "up2";
       }
   }

   else if (DarkGreenState === "up2") {
       DarkGreenY += speedDarkGreen
       if (DarkGreenY >= DarkGreenXLimit2) {
           DarkGreenState = "right2";
       }
   }

   else if (DarkGreenState === "right2") {
       DarkGreenX += speedDarkGreen;
   }

   // ================= ROTATION =================
   if (DarkGreenState === "up") planeDarkGreen1.style.transform = "rotate(0deg)";
   else if (DarkGreenState.startsWith("up")) planeDarkGreen1.style.transform = "rotate(0deg)";
   else if (DarkGreenState.startsWith("left")) planeDarkGreen1.style.transform = "rotate(-90deg)";
   else planeDarkGreen1.style.transform = "rotate(180deg)";
   planeDarkGreen1.style.left = DarkGreenX + "px";
   planeDarkGreen1.style.bottom = DarkGreenY + "px";

   if (DarkGreenState === "right2" && DarkGreenX > window.innerHeight * 0.9) {
       planeDarkGreen1.style.visibility = "hidden";
       return;
   }

   requestAnimationFrame(animateDarkGreen);
   /*
      if (!blackStarted) {
          blackStarted = true;
  
          setTimeout(() => {
              requestAnimationFrame(animateBlack);
          }, 2000);
      }
   */
}