# 🚀 CodePen Clone

A lightweight **CodePen-inspired online code editor** built with **React** and **Vite**. This application allows users to write **HTML**, **CSS**, and **JavaScript** code in separate editors and instantly preview the output in real time. Users can also download their project as a **ZIP file** containing `index.html`, `style.css`, and `script.js`.

---

## 📸 Project Preview

Example:

```md
![Project Screenshot](/src/assets/codepen-clone.png)
```

---

# ✨ Features

- 📝 Separate editors for HTML, CSS, and JavaScript
- ⚡ Live preview with automatic updates
- 💾 Auto-save using Local Storage
- 📦 Download the complete project as a ZIP file
- 📱 Responsive interface
- 🎨 Syntax highlighting for all three languages
- 🔽 Expand/Collapse editor panels
- ⚙️ Lightweight and fast with Vite

---

# 🛠️ Tech Stack

### Frontend

- React 19
- Vite
- JavaScript (ES6+)
- HTML5
- CSS3

### Code Editor

- CodeMirror 6
- @uiw/react-codemirror

### Icons

- Font Awesome

### File Download

- JSZip
- FileSaver.js

### Browser APIs

- Local Storage API
- iframe (Live Preview)

---

# 📂 Project Structure

```
codepen-clone/
│
├── public/
│
├── src/
│   ├── assets/
│   │
│   ├── components/
│   │   ├── DownloadButton.jsx
│   │   └── Editor.jsx
│   │
│   ├── hooks/
│   │   └── useLocalStorage.jsx
│   │
│   ├── App.jsx
│   ├── App.css
│   ├── index.css
│   └── main.jsx
│
├── package.json
├── vite.config.js
└── README.md
```

---

# ⚙️ Installation

Clone the repository

```bash
git clone https://github.com/shuvomdhar/codepen-clone.git
```

Go inside the project

```bash
cd codepen-clone
```

Install dependencies

```bash
npm install
```

Start the development server

```bash
npm run dev
```

Open your browser and visit

```
http://localhost:5173
```

---

# 📦 Dependencies

```bash
npm install @uiw/react-codemirror
npm install @codemirror/lang-html
npm install @codemirror/lang-css
npm install @codemirror/lang-javascript

npm install jszip
npm install file-saver

npm install @fortawesome/react-fontawesome
npm install @fortawesome/free-solid-svg-icons
```

---

# 🚀 How to Use

## Step 1

Start the application.

You'll see three code editors.

- HTML
- CSS
- JavaScript

---

## Step 2

Write your HTML.

Example

```html
<h1>Hello World</h1>

<p>Welcome to my CodePen Clone.</p>
```

---

## Step 3

Write your CSS.

```css
body{
    background:#282c34;
    color:white;
    text-align:center;
}

h1{
    color:tomato;
}
```

---

## Step 4

Write your JavaScript.

```javascript
document.querySelector("h1").onclick = () => {
    alert("Hello!");
}
```

---

## Step 5

The output will be displayed instantly in the preview panel.

No page refresh is required.

---

## Step 6

Click the **Download ZIP** button.

The application downloads

```
codepen-project.zip
│
├── index.html
├── style.css
└── script.js
```

Extract the ZIP file and open `index.html` in your browser.

---

# 💾 Auto Save

The application automatically stores your code in the browser using **Local Storage**.

This means:

- Refreshing the page won't erase your work.
- Closing and reopening the browser keeps your code.
- No manual save button is required.

---

# 🎨 Live Preview

The preview updates automatically while you type.

The generated page is rendered inside an **iframe**, providing a safe and isolated environment for running your HTML, CSS, and JavaScript.

---

# 📥 Export Project

The Download ZIP feature creates a complete web project containing

- index.html
- style.css
- script.js

The HTML file is automatically linked with the CSS and JavaScript files, allowing the downloaded project to run immediately after extraction.

---

# 📱 Responsive Design

The interface is designed to work on different screen sizes.

- Desktop
- Laptop
- Tablet
- Mobile (basic support)

---

# 🔮 Future Improvements

Some possible future enhancements include:

- 🌙 Dark / Light Mode
- 📁 Open Existing Project
- 📄 Multiple Files Support
- 🔍 Search & Replace
- 🌈 Theme Selection
- 🖋️ Font Size Controls
- 📤 Shareable Project Links
- ☁️ Cloud Storage
- 🔄 Auto Formatting (Prettier)
- 🔥 Console Output Panel
- 📋 Copy Project to Clipboard
- 🧩 Additional Language Support (TypeScript, SCSS, Markdown)

---

# 🤝 Contributing

Contributions are welcome!

1. Fork the repository.
2. Create a new branch.

```bash
git checkout -b feature-name
```

3. Commit your changes.

```bash
git commit -m "Added new feature"
```

4. Push to GitHub.

```bash
git push origin feature-name
```

5. Open a Pull Request.

---

# 🐞 Known Limitations

- Browser security restrictions apply to code executed inside the preview iframe.
- JavaScript errors written by the user will appear in the browser console.
- Very large projects are not intended to run inside this lightweight editor.

---

# 📄 License

This project is only for educational pursose.

---

# 👨‍💻 Author

**Shuvom Dhar**

GitHub: https://github.com/shuvomdhar

LinkedIn: https://linkedin.com/in/shuvom-dhar

---

## ⭐ If you found this project useful, consider giving it a Star on GitHub!