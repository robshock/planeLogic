let BlackX = planeBlackX, BlackY = planeBlackY;
let firstDecisionMadeBlack = false;
let secondDecisionMadeBlack = false;
let thirdDecisionMadeBlack = false;
let fourthDecisionMadeBlack = false;
let fifthDecisionMadeBlack = false;
let sixthDecisionMadeBlack = false;
let seventhDecisionMadeBlack = false;
const BlackYLimit = window.innerHeight * 0.83;
const BlackYLimit2 = window.innerHeight * 0.69;
const BlackYLimit3 = window.innerHeight * 0.56;

const BlackXLimit = window.innerWidth * 0.525;
const BlackXLimit2 = window.innerWidth * 0.62;

let movingDownBlack = false;
let BlackState = "up"; 

//let purpleStarted = false;

// ================= BLACK =================

function animateBlack() {
    if (gameOver || !gameStarted) return;
    planeBlack1.style.visibility = "visible";

    // ================= UP =================

    if (BlackState === "up") {
        BlackY += speedBlack;
        if (!firstDecisionMadeBlack && BlackY >= decisionPoint1) {
            firstDecisionMadeBlack = true;
            if (!mode1Right) return triggerGameOver();
        }
        if (!secondDecisionMadeBlack && BlackY >= decisionPoint2) {
            secondDecisionMadeBlack = true;
            if (!mode2Right) return triggerGameOver();
        }
        if (!thirdDecisionMadeBlack && BlackY >= decisionPoint3) {
            thirdDecisionMadeBlack = true;
            if (!mode3Right) return triggerGameOver();
        }
        if (BlackY >= BlackYLimit) {
            BlackState = "right1";
        }
    }
    else if (BlackState === "right1") {
        BlackX += speedBlack;
        if (!fourthDecisionMadeBlack && BlackX >= decisionPoint4) {
            fourthDecisionMadeBlack = true;
            if (!mode4Right) return triggerGameOver();
        }
        if (BlackX >= BlackXLimit) {
            BlackState = "right2";
        }
    }

    // ================= RIGHT (segment 2) =================

    else if (BlackState === "right2") {
        BlackX += speedBlack;
        if (BlackX >= BlackXLimit2) {
            BlackState = "down1";
        }
    }

    // ================= DOWN (segment 1) =================

    else if (BlackState === "down1") {
        BlackY -= speedBlack;


        if (BlackY <= BlackYLimit2) {
            if (!fifthDecisionMadeBlack && BlackY >= decisionPoint5) {
                fifthDecisionMadeBlack = true;
                if (!mode5Right) return triggerGameOver();
            }
            BlackState = "down2";
        }
    }

    // ================= DOWN (segment 2) =================

    else if (BlackState === "down2") {
        BlackY -= speedBlack;
        if (BlackY <= BlackYLimit3) {
            if (!sixthDecisionMadeBlack && BlackY >= decisionPoint6) {
                sixthDecisionMadeBlack = true;
                if (mode6Right) return triggerGameOver();
            }
            BlackState = "right3";
            score++;
            updateScore();
        }
    }

    // =================  (Right segment 3) =================

    else if (BlackState === "right3") {
        BlackX += speedBlack;
    }

    // ================= ROTATION =================
    if (BlackState === "up") planeBlack1.style.transform = "rotate(0deg)";
    else if (BlackState.startsWith("up")) planeBlack1.style.transform = "rotate(0deg)";
    else if (BlackState.startsWith("right")) planeBlack1.style.transform = "rotate(90deg)";
    else if (BlackState.startsWith("down")) planeBlack1.style.transform = "rotate(180deg)";
    else planeBlack1.style.transform = "rotate(180deg)";
    planeBlack1.style.left = BlackX + "px";
    planeBlack1.style.bottom = BlackY + "px";

    if (BlackState === "right3" && BlackX >= window.innerWidth * 0.9) {
        planeBlack1.style.visibility = "hidden";
        return;
    }

    requestAnimationFrame(animateBlack);
    /*
        if (!purpleStarted) {
            purpleStarted = true;
   
            setTimeout(() => {
                //requestAnimationFrame(animatePurple);
            }, 2000);
        }
    */
}