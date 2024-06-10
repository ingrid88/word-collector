document.addEventListener('dblclick', (event) => {
  const selection = window.getSelection().toString().trim();
  if (selection) {
    chrome.storage.sync.get('words', (data) => {
      const words = data.words || [];
      if (!words.includes(selection)) {
        words.push(selection);
        chrome.storage.sync.set({ words });
      }
    });
  }
});