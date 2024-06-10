document.addEventListener('DOMContentLoaded', () => {
  const wordList = document.getElementById('wordList');

  chrome.storage.sync.get('words', (data) => {
    const words = data.words || [];
    words.forEach((word) => {
      const li = document.createElement('li');
      li.textContent = word;
      wordList.appendChild(li);
    });
  });
});