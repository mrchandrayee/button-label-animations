// Replay demo animations on click or tap. Native buttons also support Enter and Space.
const demoButtons = document.querySelectorAll(".demo-btn");

demoButtons.forEach((button) => {
  button.addEventListener("click", () => {
    button.classList.remove("is-playing");
    // Force a reflow so consecutive activations restart the CSS animation.
    void button.offsetWidth;
    button.classList.add("is-playing");
  });

  button.addEventListener("animationend", (event) => {
    if (event.target === button || event.target.classList.contains("label")) {
      button.classList.remove("is-playing");
    }
  });
});

const year = document.querySelector("#year");
if (year) year.textContent = String(new Date().getFullYear());
