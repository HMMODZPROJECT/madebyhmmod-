const canvas = document.getElementById("matrix-bg");
const ctx = canvas.getContext("2d");

function resizeCanvas(){
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}
resizeCanvas();

const letters = "hmmodzチームです、逃げないでください";
const matrix = letters.split("");
const fontSize = 16;
let columns = Math.floor(canvas.width / fontSize);
let drops = new Array(columns).fill(1);

function resetDrops(){
  columns = Math.floor(canvas.width / fontSize);
  drops = new Array(columns).fill(1);
}

function draw(){
  ctx.fillStyle = "rgba(0, 8, 26, 0.05)";
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  ctx.fillStyle = "#00aaff";
  ctx.font = fontSize + "px monospace";

  for (let i = 0; i < drops.length; i++) {
    const text = matrix[Math.floor(Math.random() * matrix.length)];
    ctx.fillText(text, i * fontSize, drops[i] * fontSize);

    if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) drops[i] = 0;
    drops[i]++;
  }
}

let loop = setInterval(draw, 40);

window.addEventListener("resize", () => {
  resizeCanvas();
  resetDrops();
});