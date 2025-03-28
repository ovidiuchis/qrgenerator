# 📷 QR Code Generator

A simple and lightweight QR Code generator built with HTML and JavaScript. It generates a QR code based on query string parameters — no backend, no build step, just drop it in and go!

**[QR Codes](https://en.wikipedia.org/wiki/QR_code) are a smart way** of encoding and making data accessible, see <a href="https://github.com/zxing/zxing/wiki/Barcode-Contents" target="_blank">this wiki </a> for information about how to format data (like a contact card, map address and others). Some examples are featured bellow

[![MIT License](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)

---

## 🔗 Live Demo

👉 <a href="https://ovidiuchis.github.io/qrgenerator/" target="_blank">View Live</a>

---

## ⚙️ How It Works

This tool reads the `content` and optional `size` parameters from the URL to generate a QR code dynamically.
Sans providing the size, a image of 200px x 200 px will be generated.

### ✅ TODO

- [ ] UI for inputting different formats (wifi, vcard)
- [ ] Method to generate QR image "api" style
