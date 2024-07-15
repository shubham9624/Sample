// Create eventListener to all the button 
// All button should be able to play a different sound.
const sounds = {
    "w": "https://files.codingninjas.in/tom-1-28537.mp3?_ga=2.98291610.442762858.1720876691-985253971.1714720719",
    "a": "https://files.codingninjas.in/tom-2-28541.mp3?_ga=2.31049274.442762858.1720876691-985253971.1714720719",
    "s": "https://files.codingninjas.in/tom-3-28542.mp3?_ga=2.31049274.442762858.1720876691-985253971.1714720719",
    "d": "https://files.codingninjas.in/tom-4-28543.mp3?_ga=2.93505048.442762858.1720876691-985253971.1714720719",
    "j": "https://files.codingninjas.in/snare-28545.mp3?_ga=2.93505048.442762858.1720876691-985253971.1714720719",
    "k": "https://files.codingninjas.in/crash-28546.mp3?_ga=2.93505048.442762858.1720876691-985253971.1714720719",
    "l": "https://files.codingninjas.in/kick-bass-28547.mp3?_ga=2.93505048.442762858.1720876691-985253971.1714720719"
}

// Create and append audio elements for each sound
for (let key in sounds) {
    const audio = document.createElement('audio');
    audio.id = key;
    audio.src = sounds[key];
    document.body.appendChild(audio);
}

// Select all drum buttons
const drumButtons = document.querySelectorAll(".set button");

// Adding event listeners to all drum buttons
drumButtons.forEach(button => {
    button.addEventListener('click', () => {
        makeSound(button.textContent);
    });
});

// Function to play sound based on button pressed
function makeSound(key) {
    const audioElement = document.getElementById(key);
    if (audioElement) {
        audioElement.currentTime = 0; // Rewind to the start
        audioElement.play();
    }
}

// Adding event listeners to detect keyboard presses
document.addEventListener('keydown', (event) => {
    makeSound(event.key);
});
