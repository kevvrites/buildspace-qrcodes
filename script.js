function changeBackgroundColor(color) {
  document.body.style.backgroundColor = color;
}

function generateQRCode() {
  var titleInput = document.getElementById("titleInput").value;
  var descriptionInput = document.getElementById("descriptionInput").value;
  var linkInput = document.getElementById("linkInput").value;

  var textContainer = document.getElementById("textContainer");
  textContainer.innerHTML =
    "<h2>" + titleInput + "</h2>" + "<p>" + descriptionInput + "</p>";

  var qrCodeContainer = document.getElementById("qrCodeContainer");
  qrCodeContainer.innerHTML = "";

  var qrText = linkInput;

  var qr = new QRCode(qrCodeContainer, {
    text: qrText,
    width: 200,
    height: 200,
  });

  var downloadLink = document.getElementById("downloadLink");
  downloadLink.href = qrCodeContainer.firstChild.toDataURL("image/png");
}
