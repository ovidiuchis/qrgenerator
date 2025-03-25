# 📷 QR Code Generator

A simple and lightweight QR Code generator built with HTML and JavaScript. It generates a QR code based on query string parameters — no backend, no build step, just drop it in and go!

[![MIT License](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)

---

## 🔗 Live Demo

👉 <a href="https://ovidiuchis.github.io/qrgenerator/?content=Hello%20World" target="_blank">View Live</a>

---

## ⚙️ How It Works

This tool reads the `content` and optional `size` parameters from the URL to generate a QR code dynamically.
Sans providing the size, a image of 200px x 200 px will be generated.

### ✅ Examples

👉 <a href="https://ovidiuchis.github.io/qrgenerator/?content=this%20is%20some%20encoded%20text" target="_blank">Simple text</a>
👉 <a href="https://ovidiuchis.github.io/qrgenerator/?content=https://www.decathlon.ro/&size=350" target="_blank">URL</a>