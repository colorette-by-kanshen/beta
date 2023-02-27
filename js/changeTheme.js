function changeTheme() {
    var urlParams = new URLSearchParams(window.location.search);
    var color = urlParams.get("color");
    var formField = document.getElementById("hex-input");
    var button = document.querySelector("form");
    var logo = document.getElementById("logo")
  
    formField.style.backgroundColor = "#" + color;
    button.style.backgroundColor = "#" + color;
    logo.style.backgroundColor = "#" + color;
    updateLogoColor();

}

function updateLogoColor() {
  var formField = document.getElementById("hex-input");
  var button = document.querySelector("button");
  var logo = document.getElementById("logo");
  var header = document.querySelector("header");

  formField.value = color;
  formField.style.background = "#" + color;
  button.style.background = "#" + color;
  logo.style.background = "#" + color;

  var r = parseInt(color.substring(0,2), 16);
  var g = parseInt(color.substring(2,4), 16);
  var b = parseInt(color.substring(4,6), 16);

  // test if all color channels are at least 150
  if (redValue >= 150 && greenValue >= 150 && blueValue >= 150) {
    // set logo to black version and header background to black
    logo.src = "img/logo-black.png";
    header.style.backgroundColor = "#000000";
    formField.style.color = "#000000"
  } else {
    // set logo to white version and header background to white
    logo.src = "img/logo-white.png";
    header.style.backgroundColor = "#FFFFFF";
    formField.style.color = "#FFFFFF"
  }
}