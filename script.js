function getQueryParam(param) {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get(param);
}

function generateQR() {
  const content = document.getElementById('content').value;
  const size = parseInt(document.getElementById('size').value) || 200;
  
  if (!content) {
    document.getElementById('qrcode').innerHTML = '<p class="error">Please enter some content</p>';
    document.getElementById('download-container').innerHTML = '';
    return;
  }

  // Clear previous QR code and download button
  document.getElementById('qrcode').innerHTML = '';
  document.getElementById('download-container').innerHTML = '';
  
  // Generate new QR code
  const qrcodeElement = document.getElementById('qrcode');
  new QRCode(qrcodeElement, {
    text: content,
    width: size,
    height: size
  });

  // Add download button after a short delay to ensure QR code is rendered
  setTimeout(() => {
    const downloadContainer = document.getElementById('download-container');
    const downloadButton = document.createElement('a');
    downloadButton.className = 'download-button';
    downloadButton.innerHTML = 'Download QR Code';
    downloadButton.download = 'qr-code.png';
    
    // Get the QR code image
    const qrImage = qrcodeElement.querySelector('img');
    if (qrImage) {
      downloadButton.href = qrImage.src;
      downloadContainer.appendChild(downloadButton);
    }
  }, 100);
}

// Generate QR code from URL parameters if they exist
const contentParam = getQueryParam('content');
const sizeParam = parseInt(getQueryParam('size')) || 200;

if (contentParam) {
  document.getElementById('content').value = decodeURIComponent(contentParam);
  document.getElementById('size').value = sizeParam;
  generateQR();
} 