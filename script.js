function getQueryParam(param) {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get(param);
}

// Add event listeners for color inputs
document.addEventListener("DOMContentLoaded", function () {
  const qrColor = document.getElementById("qrColor");
  const qrColorText = document.getElementById("qrColorText");
  const bgColor = document.getElementById("bgColor");
  const bgColorText = document.getElementById("bgColorText");

  // Sync color picker with text input
  qrColor.addEventListener("input", function () {
    qrColorText.value = this.value;
  });

  bgColor.addEventListener("input", function () {
    bgColorText.value = this.value;
  });

  // Sync text input with color picker
  qrColorText.addEventListener("input", function () {
    if (this.value.match(/^#[0-9A-Fa-f]{6}$/)) {
      qrColor.value = this.value;
    }
  });

  bgColorText.addEventListener("input", function () {
    if (this.value.match(/^#[0-9A-Fa-f]{6}$/)) {
      bgColor.value = this.value;
    }
  });
});

function generateQR() {
  const content = document.getElementById("content").value;
  const size = parseInt(document.getElementById("size").value) || 200;
  const qrColor = document.getElementById("qrColor").value;
  const bgColor = document.getElementById("bgColor").value;

  if (!content) {
    document.getElementById("qrcode").innerHTML =
      '<p class="error">Please enter some content</p>';
    document.getElementById("download-container").innerHTML = "";
    return;
  }

  // Clear previous QR code and download button
  document.getElementById("qrcode").innerHTML = "";
  document.getElementById("download-container").innerHTML = "";

  // Generate new QR code
  const qrcodeElement = document.getElementById("qrcode");
  new QRCode(qrcodeElement, {
    text: content,
    width: size,
    height: size,
    colorDark: qrColor,
    colorLight: bgColor,
    correctLevel: QRCode.CorrectLevel.H,
  });

  // Wait for the QR code to be generated
  setTimeout(() => {
    const qrImage = qrcodeElement.querySelector("img");
    if (qrImage) {
      // Add download button
      const downloadContainer = document.getElementById("download-container");
      const downloadButton = document.createElement("a");
      downloadButton.className = "download-button";
      downloadButton.innerHTML = "Download QR Code";
      downloadButton.download = "qr-code.png";
      downloadButton.href = qrImage.src;
      downloadContainer.appendChild(downloadButton);
    } else {
      document.getElementById("qrcode").innerHTML =
        '<p class="error">Error: Failed to generate QR code</p>';
    }
  }, 100);
}

// Generate QR code from URL parameters if they exist
const contentParam = getQueryParam("content");
const sizeParam = parseInt(getQueryParam("size")) || 200;

if (contentParam) {
  document.getElementById("content").value = decodeURIComponent(contentParam);
  document.getElementById("size").value = sizeParam;
  generateQR();
}
