const fullscreenBtn = document.getElementById('fullscreen-btn');
const gameIframe = document.getElementById('game');

fullscreenBtn.addEventListener('click', () => {
    if (gameIframe.requestFullscreen) {
        gameIframe.requestFullscreen();
    }
    else if (gameIframe.webkitRequestFullscreen) {
        gameIframe.webkitRequestFullscreen();
    }
    else if (gameIframe.msRequestFullscreen) {
        gameIframe.msRequestFullscreen();
    }
});