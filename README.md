# 🎡 Anime Spinning Carousel Animation

An interactive, circular rotating carousel featuring popular anime series (One Piece, Naruto, Dragon Ball Z, and Demon Slayer). The carousel features an animated circular pagination wheel with thumbnails, smooth text transitions, autoplay with pause-on-hover, and manual navigation.

---

## 📸 Preview & Features

- **Circular Wheel Animation**: Interactive rotating dial that rotates smoothly when navigating slides.
- **Pure Native JavaScript**: Zero external JS dependencies (no jQuery, no third-party carousel libraries).
- **Autoplay with Hover Pause**: Automatically advances slides every 6 seconds and pauses when hovering over navigation controls.
- **Manual Navigation**: Next/Prev navigation buttons and directly clickable thumbnail dots on the rotating wheel.
- **Lightweight & Clean**: Minimal assets and self-contained structure.

---

## 📁 Project Structure

```
spinning aniamtion/
├── index.html       # Main HTML markup and circular carousel engine
├── style.css        # Layout, carousel, and circular rotation styling
├── script.js        # Scroll entrance animation observer (native JS)
├── asset/           # Carousel image thumbnails
│   ├── op.jpg       # One Piece
│   ├── n.jpg        # Naruto
│   ├── g.jpg        # Dragon Balls
│   └── ds.jpg       # Demon Slayer
└── README.md        # Documentation
```

---

## 🚀 How to Run

1. Open the project folder:
   ```bash
   cd "spinning aniamtion"
   ```
2. Double-click [`index.html`](./index.html) to open it in any modern browser (Chrome, Edge, Firefox, Safari).
3. Alternatively, serve with VS Code's **Live Server** extension or Python:
   ```bash
   python -m http.server 8000
   ```
   Then open `http://localhost:8000` in your browser.

---

## ⚙️ Configuration & Customization

### 1. Adjust Animation Speed & Autoplay
In [`index.html`](./index.html), find the `.circle-carousel` element:
```html
<div class="circle-carousel py-5 ksfe-anim-text" data-speed="1000" data-autoplay="6000">
```
- `data-speed`: Transition duration in milliseconds (default: `1000` ms).
- `data-autoplay`: Autoplay interval in milliseconds (default: `6000` ms). Set to `0` or remove to disable autoplay.

### 2. Adding or Modifying Slides
- **Slide Text**: Edit or add `<div class="slide">` blocks inside `.slides`.
- **Thumbnail Dots**: Edit or add matching `<div class="item">` elements inside `.pagination`. The script automatically calculates angles based on the total number of dots.
- **Images**: Place your image in the `asset/` folder and update the `src` attribute in [`index.html`](./index.html).

---

## 🛠️ Built With

- **HTML5** & **CSS3** (CSS transforms, CSS animations)
- **Vanilla JavaScript** (ES6+)
