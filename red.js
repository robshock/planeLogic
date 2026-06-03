let RedX = planeRedX, RedY = planeRedY;
let verticalLockRed = false;
let horizontalLockRed = false;
let firstDecisionMadeRed = false;
let secondDecisionMadeRed = false;
let thirdDecisionMadeRed = false;
let fourthDecisionMadeRed = false;
let fifthDecisionMadeRed = false;
let sixthDecisionMadeRed = false;
let seventhDecisionMadeRed = false;


const RedYLimit = window.innerHeight * 0.42;
const RedYLimit2 = window.innerHeight * 0.3;
const RedYLimit3 = window.innerHeight * 0.61;
const RedYLimit4 = window.innerHeight * 0.39;

const RedXLimit = window.innerWidth * 0.245;
const RedXLimit2 = window.innerWidth * 0.6;

let movingDownRed = false;
let RedState = "up"; 

//let darkBlueStarted = false;

// ================= RED =================

function animateRed() {
   if (gameOver || !gameStarted) return;

   planeRed1.style.visibility = "visible";

   // ================= UP =================

   if (RedState === "up") {
       RedY += speedRed;
       if (!firstDecisionMadeRed && RedY >= decisionPoint1) {
           firstDecisionMadeRed = true;
           if (mode1Right) return triggerGameOver();
       }
       if (RedY >= RedYLimit) {
           RedState = "left";
       }
   }

   // ================= LEFT =================

   else if (RedState === "left") {
       RedX -= speedRed;
       if (RedX <= RedXLimit) {
           RedState = "down";
       }
   }

   // ================= DOWN =================

   else if (RedState === "down") {
       RedY -= speedRed;

       if (!secondDecisionMadeRed && RedY <= decisionPoint2red) {
           secondDecisionMadeRed = true;
           if (!mode9Right) return triggerGameOver();
       }
       if (RedY <= RedYLimit2) {
           RedState = "down2";
           score++;
           updateScore();
       }
   }

   else if (RedState === "down2") {
       RedY -= speedRed;
   }

   // ================= ROTATION =================
   if (RedState === "up") planeRed1.style.transform = "rotate(0deg)";
   else if (RedState.startsWith("left")) planeRed1.style.transform = "rotate(-90deg)";
   else if (RedState.startsWith("up")) planeRed1.style.transform = "rotate(0deg)";
   else if (RedState.startsWith("down")) planeRed1.style.transform = "rotate(-180deg)";
   else planeRed1.style.transform = "rotate(180deg)";

   planeRed1.style.left = RedX + "px";
   planeRed1.style.bottom = RedY + "px";

   if (RedState === "down2" && RedY < window.innerHeight * 0.15) {
       planeRed1.style.visibility = "hidden";
       return;
   }

   requestAnimationFrame(animateRed);
/*
   if (!darkBlueStarted) {
       darkBlueStarted = true;

       setTimeout(() => {
           requestAnimationFrame(animateDarkBlue);
       }, 2000);
   }
       */
}