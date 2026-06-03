let DarkBlueX = planeDarkBlueX, DarkBlueY = planeDarkBlueY;
let firstDecisionMadeDarkBlue = false;
let secondDecisionMadeDarkBlue = false;
let thirdDecisionMadeDarkBlue = false;
let fourthDecisionMadeDarkBlue = false;
let fifthDecisionMadeDarkBlue = false;
let sixthDecisionMadeDarkBlue = false;
let seventhDecisionMadeDarkBlue = false;

const DarkBlueYLimit = window.innerHeight * 0.83;
const DarkBlueYLimit2 = window.innerHeight * 0.69;

const DarkBlueXLimit = window.innerWidth * 0.525;
const DarkBlueXLimit2 = window.innerWidth * 0.62;
const DarkBlueXLimit3 = window.innerWidth * 0.83;

let movingDownDarkBlue = false;
let DarkBlueState = "up";

//let redStarted = false;

// ================= DARKBLUE =================
function animateDarkBlue() {
    if (gameOver || !gameStarted) return;
    planeDarkBlue1.style.visibility = "visible";

    // ================= UP =================

    if (DarkBlueState === "up") {
        DarkBlueY += speedDarkBlue;
        if (!firstDecisionMadeDarkBlue && DarkBlueY >= decisionPoint1) {
            firstDecisionMadeDarkBlue = true;
            if (!mode1Right) return triggerGameOver();
        }
        if (!secondDecisionMadeDarkBlue && DarkBlueY >= decisionPoint2) {
            secondDecisionMadeDarkBlue = true;
            if (!mode2Right) return triggerGameOver();
        }
        if (!thirdDecisionMadeDarkBlue && DarkBlueY >= decisionPoint3) {
            thirdDecisionMadeDarkBlue = true;
            if (!mode3Right) return triggerGameOver();
        }
        if (DarkBlueY >= DarkBlueYLimit) {
            DarkBlueState = "right1";
        }
    }
    else if (DarkBlueState === "right1") {
        DarkBlueX += speedDarkBlue;
        if (!fourthDecisionMadeDarkBlue && DarkBlueX >= decisionPoint4) {
            fourthDecisionMadeDarkBlue = true;
            if (mode4Right) return triggerGameOver();
        }
        if (DarkBlueX >= DarkBlueXLimit) {
            DarkBlueState = "up2";
        }
    }

    else if (DarkBlueState === "up2") {
        DarkBlueY += speedDarkBlue
        if (DarkBlueY >= DarkBlueXLimit2) {
            DarkBlueState = "right2";
        }
    }

    else if (DarkBlueState === "right2") {
        DarkBlueX += speedDarkBlue;
    }

    // ================= ROTATION =================
    if (DarkBlueState === "up") planeDarkBlue1.style.transform = "rotate(0deg)";
    else if (DarkBlueState.startsWith("up")) planeDarkBlue1.style.transform = "rotate(0deg)";
    else if (DarkBlueState.startsWith("right")) planeDarkBlue1.style.transform = "rotate(90deg)";
    else if (DarkBlueState.startsWith("down")) planeDarkBlue1.style.transform = "rotate(180deg)";
    else planeDarkBlue1.style.transform = "rotate(180deg)";
    planeDarkBlue1.style.left = DarkBlueX + "px";
    planeDarkBlue1.style.bottom = DarkBlueY + "px";

    if (DarkBlueState === "right2" && DarkBlueX > window.innerHeight * 0.9) {
        planeDarkBlue1.style.visibility = "hidden";
        return;
    }

    requestAnimationFrame(animateDarkBlue);
    /*
       if (!redStarted) {
           redStarted = true;
    
           setTimeout(() => {
               requestAnimationFrame(animateRed);
           }, 2000);
       }
    */
}