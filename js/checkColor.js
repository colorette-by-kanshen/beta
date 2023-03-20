function checkColor() {
  const urlParams = new URLSearchParams(window.location.search);
  const color = urlParams.get('color');
  const random = urlParams.get('random');
  if (color) {
    document.getElementById('hex-input').value = color;
    changeTheme(color);
    document.getElementById('color0').style.display = "flex";
    document.getElementById('color1').style.display = "flex";
    document.getElementById('color2').style.display = "flex";
    document.getElementById('color3').style.display = "flex";
    document.getElementById('color4').style.display = "flex";
    document.getElementById('color5').style.display = "flex";
    document.getElementById('color6').style.display = "flex";
    document.getElementById('color7').style.display = "flex";
    document.getElementById('color8').style.display = "flex";
    document.getElementById('color9').style.display = "flex";
    document.getElementById('color10').style.display = "flex";
    document.getElementById('maincolorpalletteholder').style.display = "flex";
    document.getElementById('contrastcheckbox').style.display = "flex";
    getColorBrightness(color);
  };
  if (random === "true") {
    document.getElementById("randomcolorinfo").style.display = "block";
  };
}