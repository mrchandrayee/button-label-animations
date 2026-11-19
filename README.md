# Button Label Animations

**A focused UI microinteraction lab by IAPFSAI Technologies Private Limited.**

Explore six expressive button-label animations built with semantic HTML, modern CSS and vanilla JavaScript. This project demonstrates how small, intentional motion details can make product interfaces feel more responsive and memorable.

<p align="center">
  <a href="https://mrchandrayee.github.io/button-label-animations/"><img src="https://img.shields.io/badge/Live%20Demo-Explore%20Animations-7187ff?style=for-the-badge&logo=github&logoColor=white" alt="Live demo"></a>
  <a href="./LICENSE"><img src="https://img.shields.io/badge/License-MIT-75c9b2?style=for-the-badge" alt="MIT License"></a>
  <img src="https://img.shields.io/badge/Dependencies-Zero-9aa8bd?style=for-the-badge" alt="Zero dependencies">
</p>

## Live Demo

**[Open Button Label Animations](https://mrchandrayee.github.io/button-label-animations/)**

Try each interaction with a mouse, keyboard or touch screen.

## Interaction Gallery

| # | Animation | Interaction concept |
|---|---|---|
| 01 | Jump & Land | Spring motion, squash and a landing shadow |
| 02 | Smoke Trail | Soft particles that rise, expand and fade |
| 03 | Drive Away | Accelerating label with trailing speed lines |
| 04 | Flip Label | 3D rotation on the label |
| 05 | Elastic Press | Stretch-and-settle button motion |
| 06 | Shine Through | A light sweep across the button surface |

## Features

- Six self-contained CSS animation patterns.
- Hover, keyboard focus and click/tap replay states.
- Semantic native buttons with visible focus indicators.
- Responsive layout for desktop, tablet and mobile.
- Reduced-motion support through the prefers-reduced-motion media query.
- Vanilla JavaScript with no framework or runtime dependency.
- Search and social metadata, plus WebApplication structured data.

## Technology Stack

- **HTML5** — semantic structure and accessible controls.
- **CSS3** — keyframes, transforms, transitions, gradients and responsive layout.
- **Vanilla JavaScript** — replay handling and small progressive enhancements.

No package manager, build step or external JavaScript library is required.

## Run Locally

Clone the repository:

```bash
git clone https://github.com/mrchandrayee/button-label-animations.git
cd button-label-animations
```

Open index.html directly, or start a local static server:

```bash
python3 -m http.server 8000
```

Then visit http://localhost:8000.

## Project Structure

```text
button-label-animations/
├── index.html   # Semantic page structure and SEO metadata
├── style.css    # Design system, responsive layout and animations
├── app.js       # Interaction replay and page enhancement
├── README.md
└── LICENSE
```

## Accessibility & Motion

- All demos use native button elements and can be activated using Enter or Space.
- Focus states are visible for keyboard navigation.
- Decorative particles and speed lines are hidden from assistive technology.
- The stylesheet respects the user's prefers-reduced-motion setting.

## Engineering Notes

The animation effects are CSS-driven; JavaScript only restarts an animation when a user activates a demo. This keeps the implementation lightweight and makes the motion patterns straightforward to reuse in product interfaces.

For production use, adapt the timing, contrast, labels and motion intensity to the surrounding design system and interaction context.

## Built by IAPFSAI Technologies

**IAPFSAI Technologies Private Limited** builds AI products and production-ready software for businesses that need to build, automate and scale.

Our engineering capabilities include:

- AI & automation, including LLM integrations and intelligent workflows.
- SaaS and enterprise platforms.
- Web and mobile application development.
- UI/UX design and digital product engineering.
- ERP, API integration, cloud and DevOps.

**Need a custom interaction, website or software product?**

- **Company website:** [https://iapfsai.com](https://iapfsai.com)
- **Explore services:** [https://iapfsai.com/services](https://iapfsai.com/services)
- **Start a project enquiry:** [https://iapfsai.com](https://iapfsai.com)
- **GitHub:** [https://github.com/mrchandrayee](https://github.com/mrchandrayee)

We work with startups, growing businesses and enterprises to turn requirements into maintainable, production-ready digital systems.

## License

This project is released under the [MIT License](./LICENSE).
