const wordEl = document.getElementById('word');
const wrongLettersEl = document.getElementById('wrong-letters');
const playAgainBtn = document.getElementById('play-button');
const popup = document.getElementById('popup-container');
const notification = document.getElementById('notification-container');
const finalMessage = document.getElementById('final-message');

const figureParts = document.querySelectorAll('.figure-part');

const words = ['application', 'programming', 'interface', 'wizard'];

const randomWord = words[Math.floor(Math.random() * words.length)];

const correctLetters = [];
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

function showNotification() {
  notification.classList.add('show');

  setTimeout(() => {
    notification.classList.remove('show');
  }, 1500);
}

function updateWrongLetters() {
  console.log('wrong letters array')
}

window.addEventListener('keydown', e => {
  const inputLetter = e.key.toUpperCase().charCodeAt(0);
  if (inputLetter >=65 && inputLetter <= 90) {
    const letter = e.key.toLowerCase();

    if (randomWord.includes(letter)) {
      if (!correctLetters.includes(letter)) {
        correctLetters.push(letter);
      } else {
        showNotification();
      }
    } else {
      if (!wrongLetters.includes(letter)) {
        wrongLetters.push(letter);

        updateWrongLetters();
      } else {
        showNotification();
      }
    }
  }
  displayWord();
});


displayWord();