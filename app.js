// Replay hover-style animations on tap/click for touch devices.
const buttons = document.querySelectorAll('.demo-btn');

buttons.forEach((button) => {
  button.addEventListener('click', () => {
    button.classList.remove('is-playing');
    // Force a reflow so the animation can replay on consecutive clicks.
    void button.offsetWidth;
    button.classList.add('is-playing');
    window.setTimeout(() => button.classList.remove('is-playing'), 1300);
  });
});
