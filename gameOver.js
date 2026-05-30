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

  gameOverScreen.style.display = "flex";
  restartBtn.style.display = "block";

}