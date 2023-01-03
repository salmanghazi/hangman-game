const wordEl = document.getElementById('word');
const wrongLettersEl = document.getElementById('wrong-letters');
const playAgainBtn = document.getElementById('play-button');
const popup = document.getElementById('popup-container');
const notification = document.getElementById('notification-container');
const finalMessage = document.getElementById('final-message');

const figureParts = document.querySelectorAll('.figure-part');

const words = ['application', 'programming', 'interface', 'wizard'];

const randomWord = words[Math.floor(Math.random() * words.length)];

const correctLetters = ['w', 'i', 'z', 'a', 'r', 'd'];
const wrongLetters = [];

console.log(randomWord);

function displayWord() {
  wordEl.innerHTML = `
    ${randomWord.split('').map(letter => `
      <span class="letter">
        ${correctLetters.includes(letter) ? letter : ''}
      </span>
    `)
    .join('')
    }
  `;

  const innerWord = wordEl.innerText.replace(/\n/g, '');

  if (innerWord === randomWord) {
    finalMessage.innerText = 'You won, Congrats!!';
    popup.style.display = 'flex';
  }
}


displayWord();