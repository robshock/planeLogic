// PINK PLANE
let PinkX = planePinkX, PinkY = planePinkY;
//let verticalLockPink = false;
//let horizontalLockPink = false;
let firstDecisionMadePink = false;
let secondDecisionMadePink = false;
let thirdDecisionMadePink = false;
let fourthDecisionMadePink = false;
let fifthDecisionMadePink = false;
let sixthDecisionMadePink = false;
let seventhDecisionMadePink = false;
const PinkYLimit = window.innerHeight * 0.84;
const PinkYLimit2 = window.innerHeight * 0.6;
const PinkYLimit3 = window.innerHeight * 0.5;
const PinkYLimit4 = window.innerHeight * 0.44;
const PinkXLimit = window.innerWidth * 0.525;
const PinkXLimit2 = window.innerWidth * 0.62;
const PinkXLimit3 = window.innerWidth * 0.8;


let movingDownPink = false;
let PinkState = "up"; // "up" → "right1" → "right2" → "down1" → "down2" → "down3" → "down4"
let redStarted = false;

// ================= PINK =================
function animatePink() {
    if (gameOver || !gameStarted) return;
    planePink1.style.visibility = "visible";
    // ================= UP =================
    if (PinkState === "up") {
        PinkY += speedPink;
        if (!firstDecisionMadePink && PinkY >= decisionPoint1) {
            firstDecisionMadePink = true;
            if (!mode1Right) return triggerGameOver();
        }
        if (!secondDecisionMadePink && PinkY >= decisionPoint2) {
            secondDecisionMadePink = true;
            if (!mode2Right) return triggerGameOver();
        }
        if (!thirdDecisionMadePink && PinkY >= decisionPoint3) {
            thirdDecisionMadePink = true;
            if (!mode3Right) return triggerGameOver();
        }
        if (PinkY >= PinkYLimit) {
            PinkState = "right1";
        }
    }
    else if (PinkState === "right1") {
        PinkX += speedPink;
        if (!fourthDecisionMadePink && PinkX >= decisionPoint4) {
            fourthDecisionMadePink = true;
            if (!mode4Right) return triggerGameOver();
        }
        if (PinkX >= PinkXLimit) {
            PinkState = "right2";
        }
    }
    // ================= RIGHT (segment 2) =================
    else if (PinkState === "right2") {
        PinkX += speedPink;
        if (PinkX >= PinkXLimit2) {
            PinkState = "down1";
        }
    }
    // ================= DOWN (segment 1) =================
    else if (PinkState === "down1") {
        PinkY -= speedPink;
        if (!fifthDecisionMadePink && PinkY <= decisionPoint5) {
            fifthDecisionMadePink = true;
            if (mode5Right) return triggerGameOver();
        }
        if (PinkY <= PinkYLimit2) {
            PinkState = "right3";
            score++;
            updateScore();
        }
    }

    else if (PinkState === "right3") {
        PinkX += speedPink;
        if (PinkX >= PinkXLimit3) {
            PinkState = "up2"
        }
    }

    else if (PinkState === "up2") {
        PinkY += speedPink;
    }

    /*
    // ================= DOWN (segment 2) =================
    else if (PinkState === "down2") {
        PinkY -= speedPink;
        if (!sixthDecisionMadePink && PinkY <= decisionPoint6) {
            sixthDecisionMadePink = true;
            if (!mode6Right) return triggerGameOver();
        }
        if (PinkY <= PinkYLimit3) {
            PinkState = "down3";
        }
    }
    // ================= DOWN (segment 3) =================
    else if (PinkState === "down3") {
        PinkY -= speedPink;
        if (!seventhDecisionMadePink && PinkY <= decisionPoint7) {
            seventhDecisionMadePink = true;
            if (mode7Right) return triggerGameOver();
        }
        if (PinkY <= PinkYLimit4) {
            PinkState = "right3";
            score++;
            updateScore();
        }
    }
 
 
    else if (PinkState === "right3") {
        PinkX += speedPink;
        if (PinkX >= PinkXLimit3) {
            PinkState = "down4";
        }
    }
 
 
    else if (PinkState === "down4") {
        PinkY -= speedPink;
    }
 */

    // ================= ROTATION =================
    if (PinkState === "up") planePink1.style.transform = "rotate(0deg)";
    else if (PinkState.startsWith("up")) planePink1.style.transform = "rotate(0deg)";
    else if (PinkState.startsWith("right")) planePink1.style.transform = "rotate(90deg)";
    else if (PinkState.startsWith("down")) planePink1.style.transform = "rotate(180deg)";
    else planePink1.style.transform = "rotate(180deg)";
    planePink1.style.left = PinkX + "px";
    planePink1.style.bottom = PinkY + "px";

    
        if (PinkState === "up2" && PinkY > window.innerHeight * 0.8) {
            planePink1.style.visibility = "hidden";
            return;
        }
    

    requestAnimationFrame(animatePink);

    
       if (!redStarted) {
           redStarted = true;
    
    
           setTimeout(() => {
               requestAnimationFrame(animateRed);
           }, 2000);
       }
    

}




