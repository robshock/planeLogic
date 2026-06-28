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
const RedYLimit2 = window.innerHeight * 0.33;

const RedXLimit = window.innerWidth * 0.245;
const RedXLimit2 = window.innerWidth * 0.07;

let RedState = "up";
let darkBlueStarted = false;

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
        if (RedY <= RedYLimit2) {
            if (!secondDecisionMadeRed && RedY <= decisionPoint2red) {
                secondDecisionMadeRed = true;
                if (mode9Right) return triggerGameOver();
            }
            RedState = "left2";
            score++;
            updateScore();
        }
    }

    else if (RedState === "left2") {
        RedX -= speedRed;
        if (RedX <= RedXLimit2) {
            RedState = "up2";
        }
    }

    else if (RedState === "up2") {
        RedY += speedRed;
    }

    // ================= ROTATION =================
    if (RedState === "up") planeRed1.style.transform = "rotate(0deg)";
    else if (RedState.startsWith("left")) planeRed1.style.transform = "rotate(-90deg)";
    else if (RedState.startsWith("up")) planeRed1.style.transform = "rotate(0deg)";
    else if (RedState.startsWith("down")) planeRed1.style.transform = "rotate(-180deg)";
    else planeRed1.style.transform = "rotate(180deg)";

    planeRed1.style.left = RedX + "px";
    planeRed1.style.bottom = RedY + "px";

    if (RedState === "up2" && RedY > window.innerHeight * 0.5) {
        planeRed1.style.visibility = "hidden";
        darkBlueStarted = false;
        return;
    }

    requestAnimationFrame(animateRed);

    if (!darkBlueStarted) {
        darkBlueStarted = true;
        DarkBlueX = planeDarkBlueX;
        DarkBlueY = planeDarkBlueY;
        DarkBlueState = "up";
        firstDecisionMadeDarkBlue = false;
        secondDecisionMadeDarkBlue = false;
        thirdDecisionMadeDarkBlue = false;
        fourthDecisionMadeDarkBlue = false;
        fifthDecisionMadeDarkBlue = false;
        sixthDecisionMadeDarkBlue = false;
        seventhDecisionMadeDarkBlue = false;
        planeDarkBlue1.style.transform = "rotate(0deg)";
        planeDarkBlue1.style.left = DarkBlueX + "px";
        planeDarkBlue1.style.bottom = DarkBlueY + "px";


        setTimeout(() => { requestAnimationFrame(animateDarkBlue); }, 4000);
    }

}