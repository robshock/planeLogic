

// ORANGE PLANE
let OrangeX = planeOrangeX, OrangeY = planeOrangeY;
let verticalLockOrange = false;
let horizontalLockOrange = false;
let firstDecisionMadeOrange = false;
let secondDecisionMadeOrange = false;
let thirdDecisionMadeOrange = false;
let fourthDecisionMadeOrange = false;
let fifthDecisionMadeOrange = false;
let sixthDecisionMadeOrange = false;
let seventhDecisionMadeOrange = false;


const OrangeYLimit = window.innerHeight * 0.37;
const OrangeYLimit2 = window.innerHeight * 0.3;
const OrangeYLimit3 = window.innerHeight * 0.61;
const OrangeYLimit4 = window.innerHeight * 0.39;
const OrangeXLimit = window.innerWidth * 0.245;
const OrangeXLimit2 = window.innerWidth * 0.6;
let movingDownOrange = false;
let OrangeState = "up"; // "up" → "right1" → "right2" → "down1" → "down2" → "down3" → "down4"

let OrangeStarted = false;

// ================= ORANGE =================


function animateOrange() {
   if (gameOver || !gameStarted) return;


   planeOrange1.style.visibility = "visible";


   // ================= UP =================


   if (OrangeState === "up") {
       OrangeY += speedOrange;


       if (!firstDecisionMadeOrange && OrangeY >= decisionPoint1) {
           firstDecisionMadeOrange = true;
           if (mode1Right) return triggerGameOver();
       }
       if (OrangeY >= OrangeYLimit) {
           OrangeState = "left";
       }
   }

   // ================= LEFT =================

   else if (OrangeState === "left") {
       OrangeX -= speedOrange;
       if (OrangeX <= OrangeXLimit) {
           OrangeState = "down";
       }
   }

   // ================= DOWN =================

   else if (OrangeState === "down") {
       OrangeY -= speedOrange;

       if (!secondDecisionMadeOrange && OrangeY <= decisionPoint2blue) {
           secondDecisionMadeOrange = true;
           if (!mode9Right) return triggerGameOver();
       }
       if (OrangeY <= OrangeYLimit2) {
           OrangeState = "down2";
           score++;
           updateScore();
       }
   }

   else if (OrangeState === "down2") {
       OrangeY -= speedOrange;
   }

   // ================= ROTATION =================
   if (OrangeState === "up") planeOrange1.style.transform = "rotate(0deg)";
   else if (OrangeState.startsWith("left")) planeOrange1.style.transform = "rotate(-90deg)";
   else if (OrangeState.startsWith("up")) planeOrange1.style.transform = "rotate(0deg)";
   else if (OrangeState.startsWith("down")) planeOrange1.style.transform = "rotate(-180deg)";
   else planeOrange1.style.transform = "rotate(180deg)";

   planeOrange1.style.left = OrangeX + "px";
   planeOrange1.style.bottom = OrangeY + "px";

   if (OrangeY < -100) {
       return;
   }

   requestAnimationFrame(animateOrange);
/*
   if (!OrangeStarted) {
       OrangeStarted = true;

       setTimeout(() => {
           requestAnimationFrame(animateOrange);
       }, 2000);
   }
       */
}




