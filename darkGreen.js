let DarkGreenX = planeDarkGreenX, DarkGreenY = planeDarkGreenY;
let firstDecisionMadeDarkGreen = false;
let secondDecisionMadeDarkGreen = false;
let thirdDecisionMadeDarkGreen = false;
let fourthDecisionMadeDarkGreen = false;
let fifthDecisionMadeDarkGreen = false;
let sixthDecisionMadeDarkGreen = false;
let seventhDecisionMadeDarkGreen = false;

const DarkGreenYLimit = window.innerHeight * 0.55;

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
            if (mode2Right) return triggerGameOver();
        }
        if (DarkGreenY >= DarkGreenYLimit)
        DarkGreenState = "left";
    }

    else if (DarkGreenState === "left") {
        DarkGreenX -= speedDarkGreen;
    }

    // ================= ROTATION =================
    if (DarkGreenState === "up") planeDarkGreen1.style.transform = "rotate(0deg)";
    else if (DarkGreenState.startsWith("up")) planeDarkGreen1.style.transform = "rotate(0deg)";
    else if (DarkGreenState.startsWith("left")) planeDarkGreen1.style.transform = "rotate(-90deg)";
    else planeDarkGreen1.style.transform = "rotate(180deg)";
    planeDarkGreen1.style.left = DarkGreenX + "px";
    planeDarkGreen1.style.bottom = DarkGreenY + "px";

    if (DarkGreenState === "left" && DarkGreenX < window.innerWidth * 0.3) {
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