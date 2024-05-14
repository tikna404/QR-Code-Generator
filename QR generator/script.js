document.querySelector('.qr-input').addEventListener('keydown', function() {
    let qr_data = this.value;
    let qr_color = "#000";
    let qr_display = document.querySelector('.qr-code');
    let qr_chars = document.querySelector('.qr-chars');

    qr_chars.innerText = qr_data.length + " characters";

    (qr_data.length <= 0) ? qr_display.style.display = "none": qr_display.style.display = "flex";
    (qr_data.length <= 0) ? qr_chars.style.display = "none": qr_chars.style.display = "block";

    qr_display.innerHTML = "";
    qrcode = new QRCode(qr_display, {
        text: qr_data,
        width: 128,
        height: 128,
        colorDark: qr_color,
        colorLight: "#ffffff",
        correctLevel: QRCode.CorrectLevel.H,
    });

});