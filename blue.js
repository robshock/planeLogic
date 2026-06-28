let BlueX = planeBlueX, BlueY = planeBlueY;
let verticalLockBlue = false;
let horizontalLockBlue = false;
let firstDecisionMadeBlue = false;
let secondDecisionMadeBlue = false;
let thirdDecisionMadeBlue = false;
let fourthDecisionMadeBlue = false;
let fifthDecisionMadeBlue = false;
let sixthDecisionMadeBlue = false;
let seventhDecisionMadeBlue = false;


const BlueYLimit = window.innerHeight * 0.42;
const BlueYLimit2 = window.innerHeight * 0.3;
const BlueYLimit3 = window.innerHeight * 0.61;
const BlueYLimit4 = window.innerHeight * 0.39;

const BlueXLimit = window.innerWidth * 0.245;
const BlueXLimit2 = window.innerWidth * 0.6;

let BlueState = "up";
let orangeStarted = false;

// ================= BLUE =================

function animateBlue() {
    if (gameOver || !gameStarted) return;

    planeBlue1.style.visibility = "visible";

    // ================= UP =================

    if (BlueState === "up") {
        BlueY += speedBlue;
        if (!firstDecisionMadeBlue && BlueY >= decisionPoint1) {
            firstDecisionMadeBlue = true;
            if (mode1Right) return triggerGameOver();
        }
        if (BlueY >= BlueYLimit) {
            BlueState = "left";
        }
    }

    // ================= LEFT =================

    else if (BlueState === "left") {
        BlueX -= speedBlue;
        if (BlueX <= BlueXLimit) {
            BlueState = "down";
        }
    }

    // ================= DOWN =================

    else if (BlueState === "down") {
        BlueY -= speedBlue;

        if (!secondDecisionMadeBlue && BlueY <= decisionPoint2blue) {
            secondDecisionMadeBlue = true;
            if (!mode9Right) return triggerGameOver();
        }
        if (BlueY <= BlueYLimit2) {
            BlueState = "down2";
            score++;
            updateScore();
        }
    }

    else if (BlueState === "down2") {
        BlueY -= speedBlue;
    }

    // ================= ROTATION =================
    if (BlueState === "up") planeBlue1.style.transform = "rotate(0deg)";
    else if (BlueState.startsWith("left")) planeBlue1.style.transform = "rotate(-90deg)";
    else if (BlueState.startsWith("up")) planeBlue1.style.transform = "rotate(0deg)";
    else if (BlueState.startsWith("down")) planeBlue1.style.transform = "rotate(-180deg)";
    else planeBlue1.style.transform = "rotate(180deg)";

    planeBlue1.style.left = BlueX + "px";
    planeBlue1.style.bottom = BlueY + "px";

    if (BlueState === "down2" && BlueY < window.innerHeight * 0.15) {
        planeBlue1.style.visibility = "hidden";
        return;
    }

    requestAnimationFrame(animateBlue);

    if (!orangeStarted) {
        orangeStarted = true;

        setTimeout(() => {
            requestAnimationFrame(animateOrange);
        }, 4000);
    }
        
}