// GAME OVER FUNCTION
let gameOver = false;
let gameStarted = false;

function triggerGameOver() {
  if (gameOver) return;

  gameOver = true;

  gameOverScreen.style.display = "flex";
  restartBtn.style.display = "block";
}