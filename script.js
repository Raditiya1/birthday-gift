// MATRIX RAIN
const canvas = document.getElementById("matrix");
const ctx = canvas.getContext("2d");

canvas.height = window.innerHeight;
canvas.width = window.innerWidth;

let letters = "HAPPY BIRTHDAY AZiQHA ".split("");
let fontSize = 26;
let columns = Math.floor(canvas.width / fontSize);
let drops = Array(columns).fill(1);

function drawMatrix() {
  ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  ctx.fillStyle = "#ff69b4";
  ctx.font = fontSize + "px monospace";

  for (let i = 0; i < drops.length; i++) {
    let text = letters[Math.floor(Math.random() * letters.length)];
    ctx.fillText(text, i * fontSize, drops[i] * fontSize);

    if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
      drops[i] = 0;
    }
    drops[i]++;
  }
}
setInterval(drawMatrix, 35);

// COUNTDOWN
const countdown = document.getElementById("countdown");
const numbers = ["3", "2", "1"];
let index = 0;

function showNextNumber() {
  countdown.textContent = numbers[index];
  anime({
    targets: "#countdown",
    scale: [0, 1.5, 1],
    opacity: [0, 1],
    duration: 1000,
    easing: "easeOutElastic(1, .5)",
    complete: () => {
      setTimeout(() => {
        index++;
        if (index < numbers.length) {
          showNextNumber();
        } else {
          countdown.style.display = "none";
          showTypingWords();
        }
      }, 1000);
    },
  });
}
showNextNumber();

// TYPING WORDS + SHOW BOOK
function showTypingWords() {
  const words = ["HAPPY", "BIRTHDAY", "TO", "AZHIQHA DEANDRA GUMAY","sehat selalu,panjang umur,semoga Bisa mearaih Cita-Cita di masa depan 𝜗𝜚",];
  const typingContainer = document.getElementById("typing");
  const typedSpan = document.getElementById("typed-text");
  const book = document.getElementById("book");
  typingContainer.classList.remove("hidden");

  let i = 0;
  function showWord() {
    typedSpan.textContent = words[i];
    typedSpan.style.opacity = 0;
    typedSpan.style.transform = "scale(0.5)";
    typedSpan.style.textShadow = "0 0 0 #f9f9f9ff";

    anime({
      targets: "#typed-text",
      opacity: [0, 1],
      scale: [0.5, 1.2, 1],
      duration: 1000,
      easing: "easeOutExpo",
      update: function(anim) {
        const glow = Math.floor(anim.progress * 2.5);
        typedSpan.style.textShadow = `
          0 0 ${glow}px #ff69b4,
          0 0 ${glow * 2}px #ff5fb4ff,
          0 0 ${glow * 3}px #ff5fb4ff
        `;
      }
    });

    i++;
    if (i < words.length) {
      setTimeout(showWord, 1800);
    } else {
      setTimeout(() => {
        book.classList.remove("hidden");
      }, 2000);
    }
  }

  showWord();
}
