// START GAME
function startGame() {
  gameStarted = true;

  //animate();
  requestAnimationFrame(animate);

  // KEEP YOUR ORIGINAL STAGGERING
  setTimeout(() => animate2(), 3000);
  setTimeout(() => animate3(), 7000);
}