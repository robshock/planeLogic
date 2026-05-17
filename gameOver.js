// GAME OVER FUNCTION
let gameOver = false;
let gameStarted = false;

function triggerGameOver() {
  if (gameOver) return;
  gameOver = true;
  document.getElementById("gameOverScreen").style.display = "flex";
}