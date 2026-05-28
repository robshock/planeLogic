// YELLOW PLANE
let YellowX = planeYellowX, YellowY = planeYellowY;
let verticalLockYellow = false;
let horizontalLockYellow = false;
let firstDecisionMadeYellow = false;
let secondDecisionMadeYellow = false;
let thirdDecisionMadeYellow = false;
let fourthDecisionMadeYellow = false;
let fifthDecisionMadeYellow = false;
let sixthDecisionMadeYellow = false;
let seventhDecisionMadeYellow = false;


const YellowYLimit = window.innerHeight * 0.8;
const YellowYLimit2 = window.innerHeight * 0.6;
const YellowYLimit3 = window.innerHeight * 0.5;
const YellowYLimit4 = window.innerHeight * 0.39;
const YellowXLimit = window.innerWidth * 0.525;
const YellowXLimit2 = window.innerWidth * 0.6;
let movingDownYellow = false;
let YellowState = "up"; // "up" → "right1" → "right2" → "down1" → "down2" → "down3" → "down4"


// ================= YELLOW =================
function animateYellow() {
 if (gameOver || !gameStarted) return;


 planeYellow1.style.visibility = "visible";


 // ================= UP =================
 if (YellowState === "up") {
   YellowY += speedYellow;


   if (!firstDecisionMadeYellow && YellowY >= decisionPoint1) {
     firstDecisionMadeYellow = true;
     if (!mode1Right) return triggerGameOver();
   }


   if (!secondDecisionMadeYellow && YellowY >= decisionPoint2) {
     secondDecisionMadeYellow = true;
     if (!mode2Right) return triggerGameOver();
   }


   if (!thirdDecisionMadeYellow && YellowY >= decisionPoint3) {
     thirdDecisionMadeYellow = true;
     if (!mode3Right) return triggerGameOver();
   }


   if (YellowY >= YellowYLimit) {
     YellowState = "right1";
   }
 }


 // ================= RIGHT (segment 1) =================
 else if (YellowState === "right1") {
   YellowX += speedYellow;


   if (!fourthDecisionMadeYellow && YellowX >= decisionPoint4) {
     fourthDecisionMadeYellow = true;
     if (!mode4Right) return triggerGameOver();
   }


   if (YellowX >= YellowXLimit) {
     YellowState = "right2";
   }
 }


 // ================= RIGHT (segment 2) =================
 else if (YellowState === "right2") {
   YellowX += speedYellow;


   if (YellowX >= YellowXLimit2) {
     YellowState = "down1";
   }
 }


 // ================= DOWN (segment 1) =================
 else if (YellowState === "down1") {


   YellowY -= speedYellow;


   // FIRST: state transition
   if (YellowY <= YellowYLimit2) {
     YellowState = "down2";
   }


   // SECOND: decision check (must not depend on transition logic)
   if (!fifthDecisionMadeYellow && YellowY <= decisionPoint5) {
     fifthDecisionMadeYellow = true;


     if (!mode5Right) return triggerGameOver();
   }
 }


 // ================= DOWN (segment 2) =================
 else if (YellowState === "down2") {
   YellowY -= speedYellow;


   if (!sixthDecisionMadeYellow && YellowY <= decisionPoint6) {
     sixthDecisionMadeYellow = true;
     if (!mode6Right) return triggerGameOver();
   }


   if (YellowY <= YellowYLimit3) {
     YellowState = "down3";
   }
 }
  // ================= DOWN (segment 3) =================
 else if (YellowState === "down3") {
   YellowY -= speedYellow;
    if (!seventhDecisionMadeYellow && YellowY <= decisionPoint7) {
     seventhDecisionMadeYellow = true;
     if (!mode7Right) return triggerGameOver();
   }
    if (YellowY <= YellowYLimit4) {
     YellowState = "down4";
   }
 }
  // ================= DOWN (segment 4) =================
 else if (YellowState === "down4") {
   YellowY -= speedYellow;
 }


 // ================= ROTATION =================
 if (YellowState === "up") planeYellow1.style.transform = "rotate(0deg)";
 else if (YellowState.startsWith("right")) planeYellow1.style.transform = "rotate(90deg)";
 else planeYellow1.style.transform = "rotate(180deg)";


 planeYellow1.style.left = YellowX + "px";
 planeYellow1.style.bottom = YellowY + "px";


 //requestAnimationFrame(animateYellow);
}

