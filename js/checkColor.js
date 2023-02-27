function checkColor() {
  const urlParams = new URLSearchParams(window.location.search);
  const color = urlParams.get('color');
  if (color) {
    document.getElementById('hex-input').value = color;
    changeTheme();
  }
}
