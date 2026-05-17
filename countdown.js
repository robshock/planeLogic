// COUNTDOWN 
let count = 3;
const countdownEl = document.getElementById("countdown");
const interval = setInterval(() => {
  count--;

  if (count > 0) {
    countdownEl.textContent = count;
  } else if (count === 0) {
    countdownEl.textContent = "GO!";
  } else {
    clearInterval(interval);
    countdownEl.style.display = "none";
    startGame();
  }
}, 1000);