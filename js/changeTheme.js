function changeTheme() {
    var input = document.getElementById("hex-input").value;
    var formField = document.getElementById("hex-input");
    var button = document.querySelector("form");
    var logo = document.getElementById("logo")
  
    formField.style.backgroundColor = "#" + input;
    button.style.backgroundColor = "#" + input;
    logo.style.backgroundColor = "#" + input;
    updateLogoColor;

}

function updateLogoColor() {
  var logo = document.getElementById("logo");
  var header = document.querySelector("header");
  var computedStyle = getComputedStyle(logo);
  var backgroundColor = computedStyle.backgroundColor;
  var colorValues = backgroundColor.match(/\d+/g).map(Number);
  var isLight = colorValues.every(function(value) {
    return value >= 150;
  });
  if (isLight) {
    logo.src = "img/logo-black.png";
    header.style.backgroundColor = "#000000";
  } else {
    logo.src = "img/logo-white.png";
    header.style.backgroundColor = "#FFFFFF";
  }
}
