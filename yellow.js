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

const YellowYLimit = window.innerHeight * 0.68;
const YellowYLimit2 = window.innerHeight * 0.72;

const YellowXLimit = window.innerWidth * 0.245;

let YellowState = "up";
let blueStarted = false;

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
            if (mode3Right) return triggerGameOver();
        }

        if (YellowY >= YellowYLimit) {
            YellowState = "left";
        }
    }

    // ================= LEFT (segment 1) =================

    else if (YellowState === "left") {
        YellowX -= speedYellow;
        if (YellowX <= YellowXLimit) {
            YellowState = "up2";
        }
    }

    // ================= Up (segment 2) =================

    else if (YellowState === "up2") {
        YellowY += speedYellow;
        if (!fourthDecisionMadeYellow && YellowY >= decisionPoint4yellow) {
            fourthDecisionMadeYellow = true;
            if (!mode8Right) return triggerGameOver();
        }
        if (YellowY >= YellowYLimit2) {
            YellowState = "up3";
            score++;
            updateScore();
        }
    }
    else if (YellowState === "up3") {
        YellowY += speedYellow;
    }

    // ================= ROTATION =================
    if (YellowState === "up") planeYellow1.style.transform = "rotate(0deg)";
    else if (YellowState.startsWith("left")) planeYellow1.style.transform = "rotate(-90deg)";
    else if (YellowState.startsWith("up")) planeYellow1.style.transform = "rotate(0deg)";
    else planeYellow1.style.transform = "rotate(180deg)";

    planeYellow1.style.left = YellowX + "px";
    planeYellow1.style.bottom = YellowY + "px";

    if (YellowState === "up3" && YellowY > window.innerHeight * 0.9) {
        planeYellow1.style.visibility = "hidden";
        return;
    }

    requestAnimationFrame(animateYellow);

    if (!blueStarted) {
        blueStarted = true;

        setTimeout(() => {
            requestAnimationFrame(animateBlue);
        }, 4000);
    }

}