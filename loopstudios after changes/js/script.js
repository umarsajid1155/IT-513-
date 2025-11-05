const btn = document.getElementById('menu-btn')
const menu = document.getElementById('menu')

btn.addEventListener('click', navToggle)

function navToggle() {
  btn.classList.toggle('open')
  menu.classList.toggle('flex')
  menu.classList.toggle('hidden')
}
// Read More functionality
const readMoreBtn = document.getElementById('read-more-btn');
const shortText = document.getElementById('short-text');
const fullText = document.getElementById('full-text');

readMoreBtn.addEventListener('click', toggleText);

function toggleText() {
  const isHidden = fullText.classList.contains('hidden');
  
  if (isHidden) {
    // Show full text
    fullText.classList.remove('hidden');
    shortText.classList.add('hidden');
    readMoreBtn.textContent = 'Read Less';
  } else {
    // Show short text
    fullText.classList.add('hidden');
    shortText.classList.remove('hidden');
    readMoreBtn.textContent = 'Read More';
  }
}