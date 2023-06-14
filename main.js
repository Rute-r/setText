const story = document.querySelector('.story');

const setText = document.querySelector('#set-story');

setText.addEventListener('click', () => {
  story.textContent = 'Essa é uma historia que começa assim...';
});

const clearText = document.querySelector('#clear-story');

clearText.addEventListener('click', () => {
  story.textContent = '';
});
