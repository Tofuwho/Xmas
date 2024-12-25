let snowEnabled = true;

const createSnowflake = () => {
    if (!snowEnabled) return;

    const snowflake = document.createElement('div');
    snowflake.classList.add('snowflake');
    snowflake.style.left = Math.random() * 100 + 'vw';
    snowflake.style.animationDuration = Math.random() * 3 + 2 + 's';
    snowflake.textContent = '❄';
    document.body.appendChild(snowflake);

    setTimeout(() => {
        snowflake.remove();
    }, 5000);
};

setInterval(createSnowflake, 200);

const surpriseButton = document.getElementById('surprise-button');
const backgroundMusic = document.getElementById('background-music');

// Ensure music starts with lower volume
backgroundMusic.volume = 0.2;

surpriseButton.addEventListener('click', () => {
    alert('🎉 Wishing you a warm and cozy Christmas! 🎉');
    if (backgroundMusic.paused) {
        backgroundMusic.play();
    } else {
        backgroundMusic.pause();
    }
});
