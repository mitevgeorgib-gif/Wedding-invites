const openButton = document.getElementById('openInvite');
const intro = document.getElementById('intro');
const stage = document.getElementById('inviteStage');
const card = document.getElementById('card');
const cardWrap = document.getElementById('cardWrap');
const flipButton = document.getElementById('flipButton');

function flipCard() {
  card.classList.toggle('is-flipped');
}

function petals(count = 26) {
  for (let i = 0; i < count; i++) {
    const petal = document.createElement('span');
    petal.className = 'petal';
    petal.textContent = i % 3 === 0 ? '♥' : '•';
    petal.style.left = Math.random() * 100 + 'vw';
    petal.style.fontSize = 10 + Math.random() * 16 + 'px';
    petal.style.animationDuration = 2.8 + Math.random() * 2.2 + 's';
    petal.style.animationDelay = Math.random() * 0.4 + 's';
    document.body.appendChild(petal);
    setTimeout(() => petal.remove(), 5600);
  }
}

openButton?.addEventListener('click', () => {
  intro.classList.add('hidden');
  stage.classList.remove('hidden');
  petals();
});

cardWrap?.addEventListener('click', flipCard);
flipButton?.addEventListener('click', flipCard);
cardWrap?.addEventListener('keydown', (event) => {
  if (event.key === 'Enter' || event.key === ' ') {
    event.preventDefault();
    flipCard();
  }
});
