function playRandomKey() {
    const randomKeyCode = Math.floor(Math.random() * 26) + 65; // Generate a random key code between 65 (A) and 90 (Z)
    const audio = document.querySelector(`audio[data-key="${randomKeyCode}"]`);
    const key = document.querySelector(`.key[data-key="${randomKeyCode}"]`);
    
    if (!audio) {
        return;
    }
    
    audio.currentTime = 0;
    audio.play();
    key.classList.add('play');

    setTimeout(() => {
        key.classList.remove('play');
    }, 300); // Remove the 'play' class after 300ms (same duration as the transition)
}

document.addEventListener('DOMContentLoaded', function() {
    setInterval(playRandomKey, 300); // Play a random key every 3 seconds
});
