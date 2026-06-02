// ORANGE PLANE
let OrangeX = planeOrangeX, OrangeY = planeOrangeY;
//let verticalLockOrange = false;
//let horizontalLockOrange = false;
let firstDecisionMadeOrange = false;
let secondDecisionMadeOrange = false;
let thirdDecisionMadeOrange = false;
let fourthDecisionMadeOrange = false;
let fifthDecisionMadeOrange = false;
let sixthDecisionMadeOrange = false;
let seventhDecisionMadeOrange = false;
const OrangeYLimit = window.innerHeight * 0.84;
const OrangeYLimit2 = window.innerHeight * 0.6;
const OrangeYLimit3 = window.innerHeight * 0.5;
const OrangeYLimit4 = window.innerHeight * 0.44;
const OrangeXLimit = window.innerWidth * 0.525;
const OrangeXLimit2 = window.innerWidth * 0.62;
const OrangeXLimit3 = window.innerWidth * 0.815;

let movingDownOrange = false;
let OrangeState = "up"; // "up" → "right1" → "right2" → "down1" → "down2" → "down3" → "down4"
let purpleStarted = false;
// ================= ORANGE =================
function animateOrange() {
    if (gameOver || !gameStarted) return;
    planeOrange1.style.visibility = "visible";
    // ================= UP =================
    if (OrangeState === "up") {
        OrangeY += speedOrange;
        if (!firstDecisionMadeOrange && OrangeY >= decisionPoint1) {
            firstDecisionMadeOrange = true;
            if (!mode1Right) return triggerGameOver();
        }
        if (!secondDecisionMadeOrange && OrangeY >= decisionPoint2) {
            secondDecisionMadeOrange = true;
            if (!mode2Right) return triggerGameOver();
        }
        if (!thirdDecisionMadeOrange && OrangeY >= decisionPoint3) {
            thirdDecisionMadeOrange = true;
            if (!mode3Right) return triggerGameOver();
        }
        if (OrangeY >= OrangeYLimit) {
            OrangeState = "right1";
        }
    }
    else if (OrangeState === "right1") {
        OrangeX += speedOrange;
        if (!fourthDecisionMadeOrange && OrangeX >= decisionPoint4) {
            fourthDecisionMadeOrange = true;
            if (!mode4Right) return triggerGameOver();
        }
        if (OrangeX >= OrangeXLimit) {
            OrangeState = "right2";
        }
    }
    // ================= RIGHT (segment 2) =================
    else if (OrangeState === "right2") {
        OrangeX += speedOrange;
        if (OrangeX >= OrangeXLimit2) {
            OrangeState = "down1";
        }
    }
    // ================= DOWN (segment 1) =================
    else if (OrangeState === "down1") {
        OrangeY -= speedOrange;
        // FIRST: state transition
        if (OrangeY <= OrangeYLimit2) {
            OrangeState = "down2";
        }
        // SECOND: decision check (must not depend on transition logic)
        if (!fifthDecisionMadeOrange && OrangeY <= decisionPoint5) {
            fifthDecisionMadeOrange = true;
            if (!mode5Right) return triggerGameOver();
        }
    }
    // ================= DOWN (segment 2) =================
    else if (OrangeState === "down2") {
        OrangeY -= speedOrange;
        if (!sixthDecisionMadeOrange && OrangeY <= decisionPoint6) {
            sixthDecisionMadeOrange = true;
            if (!mode6Right) return triggerGameOver();
        }
        if (OrangeY <= OrangeYLimit3) {
            OrangeState = "down3";
        }
    }
    // ================= DOWN (segment 3) =================
    else if (OrangeState === "down3") {
        OrangeY -= speedOrange;
        if (!seventhDecisionMadeOrange && OrangeY <= decisionPoint7) {
            seventhDecisionMadeOrange = true;
            if (mode7Right) return triggerGameOver();
        }
        if (OrangeY <= OrangeYLimit4) {
            OrangeState = "right3";
            score++;
            updateScore();
        }
    }

    else if (OrangeState === "right3") {
        OrangeX += speedOrange;
        if (OrangeX >= OrangeXLimit3) {
            OrangeState = "down4";
        }
    }

    else if (OrangeState === "down4") {
        OrangeY -= speedOrange;
    }


    // ================= ROTATION =================
    if (OrangeState === "up") planeOrange1.style.transform = "rotate(0deg)";
    else if (OrangeState.startsWith("up")) planeOrange1.style.transform = "rotate(0deg)";
    else if (OrangeState.startsWith("right")) planeOrange1.style.transform = "rotate(90deg)";
    else if (OrangeState.startsWith("down")) planeOrange1.style.transform = "rotate(180deg)";
    else planeOrange1.style.transform = "rotate(180deg)";
    planeOrange1.style.left = OrangeX + "px";
    planeOrange1.style.bottom = OrangeY + "px";

    if (OrangeState === "down4" && OrangeY < window.innerHeight * 0.25) {
        planeOrange1.style.visibility = "hidden";
        return;
    }

    requestAnimationFrame(animateOrange);

    if (!purpleStarted) {
        purpleStarted = true;

        setTimeout(() => {
            //requestAnimationFrame(animatePurple);
        }, 2000);
    }

}
