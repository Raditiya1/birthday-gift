const message = `I don’t know if you’ll ever read this.\nBut if you do, I want to sincerely apologize.\n\nI realize that my actions may have added to your burdens, and that was never my intention.\nI never wanted to make your days heavier or harder. I hope you can believe that my intentions were never to hurt you.\n\nI genuinely wish for your well-being and peace of mind. I hope you’re surrounded by support, care, and everything you need to heal and move forward.`;

function showLetter() {
  document.getElementById("introText").style.opacity = 0;
  document.querySelector(".btn").style.display = "none";

  setTimeout(() => {
    const letterBox = document.getElementById("letterBox");
    const typedText = document.getElementById("typedText");
    letterBox.style.display = "block";
    let i = 0;

    function typeWriter() {
      if (i < message.length) {
        typedText.innerHTML += message.charAt(i);
        i++;
        setTimeout(typeWriter, 30);
      }
    }

    typeWriter();
  }, 600);
}
