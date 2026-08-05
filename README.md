# Etch-a-Sketch

A browser-based, interactive Etch-a-Sketch application built with vanilla HTML, CSS, and JavaScript. This project is a fun, interactive grid drawing pad where users can customize the grid size and paint on hover with dynamic shades of grayscale.

## Live Demo

You can play and sketch here:
**[Live Demo on GitHub Pages](https://carnocentaurus.github.io/etch-a-sketch/)**

---

## Features

- **Custom Grid Size**: Dynamically generate grid sizes between $1 \times 1$ and $100 \times 100$ squares.
- **Grayscale Shading Effect**: Hovering over grid cells fills them with randomly generated grayscale values (`rgb(X, X, X)`).
- **Responsive Controls**: Clear validation feedback if grid inputs are out of bounds (below 1 or above 100).
- **Clean UI**: Uses the modern Roboto font and a soft, minimalist palette designed for distraction-free sketching.

---

## Built With

- **HTML5**: Semantic tags for structuring the controls and canvas space.
- **CSS3**: Flexbox layout for flexible grids and crisp alignment.
- **Vanilla JavaScript**: Pure JS for DOM manipulation, input validation, and hover listener effects.

---

## How to Run Locally

Since this project consists of standard frontend files, you can run it instantly without compiling:

1. **Clone the repository**:
   ```bash
   git clone https://github.com/carnocentaurus/etch-a-sketch.git
   cd etch-a-sketch
   ```

2. **Open in browser**:
   Simply double-click the `index.html` file or run a simple local server:
   ```bash
   # Python 3
   python3 -m http.server 8000
   ```
   Then open `http://localhost:8000` in your browser.