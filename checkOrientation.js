function checkOrientation() {
  const overlay = document.getElementById("rotateOverlay");
  const game = document.getElementById("game");

  const isMobile = window.innerWidth <= 900;
  const isLandscape = window.innerWidth > window.innerHeight;

  if (isMobile && isLandscape) {
    overlay.style.display = "flex";
    game.style.display = "none";
  } else {
    overlay.style.display = "none";
    game.style.display = "block";
  }
}

window.addEventListener("resize", checkOrientation);
window.addEventListener("orientationchange", checkOrientation);

checkOrientation();