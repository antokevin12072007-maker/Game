const dino = document.getElementById("dino");
const cactus = document.getElementById("cactus");
const scoreDisplay = document.getElementById("score");
let score = 0;

// Jump function
document.addEventListener("keydown", function(event) {
  if (event.code === "Space" && !dino.classList.contains("jump")) {
    dino.classList.add("jump");
    setTimeout(() => {
      dino.classList.remove("jump");
    }, 600);
  }
});

// Game loop
setInterval(() => {
  let dinoBottom = parseInt(window.getComputedStyle(dino).getPropertyValue("bottom"));
  let cactusRight = parseInt(window.getComputedStyle(cactus).getPropertyValue("right"));

  // Check collision
  if (cactusRight > 520 && cactusRight < 570 && dinoBottom < 40) {
    alert("Game Over! Your Score: " + score);
    score = 0;
    scoreDisplay.textContent = "Score: " + score;
  } else {
    score++;
    scoreDisplay.textContent = "Score: " + score;
  }
}, 100);
