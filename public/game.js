const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');
// Define the properties of the circle
const circle = {
  x: canvas.width / 2,
  y: canvas.height / 2,
  radius: 5,
  speed: 5
};

const positionHistory = [];
// Function to draw the circle on the canvas
function drawCircle() {
  ctx.beginPath();
  ctx.arc(circle.x, circle.y, circle.radius, 0, Math.PI * 2);
  ctx.fillStyle = 'red';
  ctx.fill();
  ctx.closePath();
}
function drawPathCircle() {
    ctx.beginPath();
    ctx.arc(20, 20, 5, 0, 360);
    ctx.fillStyle = 'blue';
    ctx.fill();
    ctx.closePath();
  }
// Function to clear the canvas

function clearCanvas() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
  }
// Function to update the game state
function update() {
    clearCanvas();
    drawCircle();
    drawPathCircle();
  
    // Store the current position in the position history array
    positionHistory.push({ x: circle.x, y: circle.y });
  
    // Remove the oldest position if the history size exceeds 5
    if (positionHistory.length > 5) {
      positionHistory.shift();
    }
  }
  
  function drawHistory() {
    ctx.fillStyle = 'rgba(1, 0, 0, 0.2)';
  
    // Iterate over the position history and draw circles at each position
    positionHistory.forEach((position) => {
      ctx.beginPath();
      ctx.arc(position.x, position.y, circle.radius, 0, Math.PI * 2);
      ctx.fill();
      ctx.closePath();
    });
  }

// Function to handle keydown events
function handleKeyDown(event) {
  const keyPressed = event.key;
// Update the circle's position based on arrow key presses
  if (keyPressed === 'ArrowUp') {
    circle.y -= circle.speed;
  } else if (keyPressed === 'ArrowDown') {
    circle.y += circle.speed;
  } else if (keyPressed === 'ArrowLeft') {
    circle.x -= circle.speed;
  } else if (keyPressed === 'ArrowRight') {
    circle.x += circle.speed;
  }
}
// Listen for keydown events
document.addEventListener('keydown', handleKeyDown);
// Game loop
function gameLoop() {
  update();
  requestAnimationFrame(gameLoop);
}
// Start the game loop
gameLoop();
console.log(positionHistory);
