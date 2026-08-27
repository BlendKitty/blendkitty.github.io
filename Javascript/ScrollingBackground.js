document.addEventListener('DOMContentLoaded', () => {
  const htmlElement = document.documentElement;
  
  let positionX = 0;
  let lastTime = performance.now();
  const pixelsPerSecond = 150; 

  function scrollBackground(currentTime) {
    const deltaTime = (currentTime - lastTime) / 1000;
    lastTime = currentTime;

    positionX += pixelsPerSecond * deltaTime;
    
    htmlElement.style.backgroundPosition = `${positionX}px 0px`;
    
    requestAnimationFrame(scrollBackground);
  }

  requestAnimationFrame(scrollBackground);
});