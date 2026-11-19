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
    // Smoke particles are staggered; wait for the final particle before cleanup.
    if (button.classList.contains("smoking")) {
      const lastParticle = button.querySelector(".smoke-cloud i:last-child");
      if (event.target === lastParticle) button.classList.remove("is-playing");
      return;
    }

    // Animation events bubble from labels and decorative elements.
    if (event.target.closest(".demo-btn") === button) {
      button.classList.remove("is-playing");
    }
  });
});

const year = document.querySelector("#year");
if (year) year.textContent = String(new Date().getFullYear());
