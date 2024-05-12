const words = ['FULL STACK DEVELOPER', 'WEB DESIGNER', 'DATA SCIENTIST', 'UI/UX DESIGNER', 'SOFTWARE ENGINEER', 'MACHINE LEARNING ENGINEER'];

let wordIndex = 0;
let charIndex = 0;
const typingAnimation = document.getElementById('typing-animation');

function typeWord() {
  if (charIndex < words[wordIndex].length) {
    typingAnimation.textContent += words[wordIndex].charAt(charIndex);
    charIndex++;
    setTimeout(typeWord, 100);
  } else {
    setTimeout(eraseWord, 1500);
  }
}

function eraseWord() {
  if (charIndex > 0) {
    typingAnimation.textContent = words[wordIndex].substring(0, charIndex - 1);
    charIndex--;
    setTimeout(eraseWord, 50);
  } else {
    wordIndex = (wordIndex + 1) % words.length;
    setTimeout(typeWord, 500);
  }
}

setTimeout(typeWord, 500);
