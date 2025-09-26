const canvas = document.getElementById('bg-canvas');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const letters = '01';
const fontSize = 14;
const columns = canvas.width / fontSize;
const drops = Array(Math.floor(columns)).fill(1);

function draw() {
    ctx.fillStyle = 'rgba(0,0,0,0.05)';
    ctx.fillRect(0,0,canvas.width,canvas.height);
    ctx.fillStyle = '#00fff0';
    ctx.font = fontSize + 'px monospace';
    for(let i=0;i<drops.length;i++){
        const text = letters.charAt(Math.floor(Math.random()*letters.length));
        ctx.fillText(text, i*fontSize, drops[i]*fontSize);
        if(drops[i]*fontSize>canvas.height && Math.random()>0.975){
            drops[i]=0;
        }
        drops[i]++;
    }
}

setInterval(draw,35);

window.addEventListener('resize',()=>{
    canvas.width=window.innerWidth;
    canvas.height=window.innerHeight;
});
// Select the toggle switch input
const modeToggle = document.getElementById("mode-toggle");

// Check for saved theme in localStorage
if (localStorage.getItem("theme") === "light") {
  document.body.classList.add("light-mode");
  modeToggle.checked = true; // set switch ON
}

// Event listener for toggle
modeToggle.addEventListener("change", () => {
  if (modeToggle.checked) {
    // Enable light mode
    document.body.classList.add("light-mode");
    localStorage.setItem("theme", "light");
  } else {
    // Back to dark mode
    document.body.classList.remove("light-mode");
    localStorage.setItem("theme", "dark");
  }
});
