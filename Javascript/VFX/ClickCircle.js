// Source - https://stackoverflow.com/a/78349169
// Posted by Mr. Polywhirl
// Retrieved 2026-06-02, License - CC BY-SA 4.0

const handleClick = (event) => {
  const
    el = event.target,
    radius = 10,
    x = event.pageX - radius,
    y = event.pageY - radius,
    duration = 500;
  showClick(el, x, y, duration);
};

document.addEventListener('click', handleClick);

const showClick = (el, x, y, duration) => {
  const circle = document.createElement('div');
  circle.classList.add('click-circle');
  el.appendChild(circle);

  // Set initial position of the circle to the cursor position
  Object.assign(circle.style, { left: `${x}px`, top: `${y}px` });

  // Add animation class to start the animation
  circle.classList.add('click-animation');

  // Remove the circle after animation completes
  setTimeout(function() {
    el.removeChild(circle);
  }, duration);
};