let lastStatus = null;
const targetWord = "Migrating"; 
const selector = "#app > div > main > div > div.grid.h-full.grid-cols-1.divide-gray-800.overflow-hidden.lg\\:grid-cols-3.lg\\:divide-x > div:nth-child(2)";

function checkForWord() {
    const targetElement = self.document?.querySelector(selector);
    if (targetElement) {
        const found = targetElement.innerText.includes(targetWord);
        if (found && found !== lastStatus) {
            self.postMessage({ found: true });
            lastStatus = found;
        }
    }
}

// Sprawdzanie co sekundę
setInterval(checkForWord, 1000);
