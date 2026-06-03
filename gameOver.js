// GAME OVER FUNCTION
let gameOver = false;
let gameStarted = false;

function triggerGameOver() {
  if (gameOver) return;

  gameOver = true;
  planeYellow1.style.visibility = "hidden";
  planeGreen1.style.visibility = "hidden";
  planeBlue1.style.visibility = "hidden";
  planeOrange1.style.visibility = "hidden";
  planePurple1.style.visibility = "hidden";
  planePink1.style.visibility = "hidden";
  planeRed1.style.visibility = "hidden";
  planeDarkBlue1.style.visibility = "hidden";
  planeDarkGreen1.style.visibility = "hidden";
  planeBlack1.style.visibility = "hidden";

  gameOverScreen.style.display = "flex";
  restartBtn.style.display = "block";

}