// Function to generate a random string of letters, numbers, and symbols
function getRandomString(length) {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_-+=<>?';
    let result = '';
    const charactersLength = characters.length;
    for (let i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
}

// Update title with random string every millisecond
function updateTitle() {
    document.title = getRandomString(10);  // Change 10 to any length you want for the title
}

// Set interval to change title every 1 millisecond
setInterval(updateTitle, 1);
