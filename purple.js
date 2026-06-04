let PurpleX = planePurpleX, PurpleY = planePurpleY;
let verticalLockPurple = false;
let horizontalLockPurple = false;
let firstDecisionMadePurple = false;
let secondDecisionMadePurple = false;
let thirdDecisionMadePurple = false;
let fourthDecisionMadePurple = false;
let fifthDecisionMadePurple = false;
let sixthDecisionMadePurple = false;
let seventhDecisionMadePurple = false;

const PurpleYLimit = window.innerHeight * 0.68;
const PurpleYLimit2 = window.innerHeight * 0.8;

const PurpleXLimit = window.innerWidth * 0.245;
const PurpleXLimit2 = window.innerWidth * 0.05;

let PurpleState = "up";
let pinkStarted = false;

// ================= PURPLE =================

function animatePurple() {

    if (gameOver || !gameStarted) return;

    planePurple1.style.visibility = "visible";

    // ================= UP =================

    if (PurpleState === "up") {
        PurpleY += speedPurple;

        if (!firstDecisionMadePurple && PurpleY >= decisionPoint1) {
            firstDecisionMadePurple = true;
            if (!mode1Right) return triggerGameOver();
        }

        if (!secondDecisionMadePurple && PurpleY >= decisionPoint2) {
            secondDecisionMadePurple = true;
            if (!mode2Right) return triggerGameOver();
        }

        if (!thirdDecisionMadePurple && PurpleY >= decisionPoint3) {
            thirdDecisionMadePurple = true;
            if (mode3Right) return triggerGameOver();
        }

        if (PurpleY >= PurpleYLimit) {
            PurpleState = "left";
        }
    }

    // ================= LEFT (segment 1) =================

    else if (PurpleState === "left") {
        PurpleX -= speedPurple;
        if (PurpleX <= PurpleXLimit) {
            PurpleState = "up2";
        }
    }

    // ================= Up (segment 2) =================

    else if (PurpleState === "up2") {
        PurpleY += speedPurple;
        if (!fourthDecisionMadePurple && PurpleY >= decisionPoint4purple) {
            fourthDecisionMadePurple = true;
            if (mode8Right) return triggerGameOver();
        }
        if (PurpleY >= PurpleYLimit2) {
            PurpleState = "left2";
            score++;
            updateScore();
        }
    }

    // ================= Left (segment 2) =================

    else if (PurpleState === "left2") {
        PurpleX -= speedPurple;
        if (PurpleX <= PurpleXLimit2)
            PurpleState = "down";

    }

    // ================= DOWN =================

    else if (PurpleState === "down") {
        PurpleY -= speedPurple;
    }

    // ================= ROTATION =================
    if (PurpleState === "up") planePurple1.style.transform = "rotate(0deg)";
    else if (PurpleState.startsWith("left")) planePurple1.style.transform = "rotate(-90deg)";
    else if (PurpleState.startsWith("up")) planePurple1.style.transform = "rotate(0deg)";
    else if (PurpleState.startsWith("down")) planePurple1.style.transform = "rotate(-180deg)";
    else planePurple1.style.transform = "rotate(180deg)";

    planePurple1.style.left = PurpleX + "px";
    planePurple1.style.bottom = PurpleY + "px";

    if (PurpleState === "down" && PurpleY < window.innerHeight * 0.60) {
        planePurple1.style.visibility = "hidden";
        return;
    }

    requestAnimationFrame(animatePurple);

    if (!pinkStarted) {
        pinkStarted = true;

        setTimeout(() => {
            requestAnimationFrame(animatePink);
        }, 2000);
    }

}