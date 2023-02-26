function changeTheme() {
    var input = document.getElementById("hex-input").value;
    var formField = document.getElementById("hex-input");
    var button = document.querySelector("form");
    var logo = document.getElementById("logo")
  
    formField.style.backgroundColor = "#" + input;
    button.style.backgroundColor = "#" + input;
    logo.style.backgroundColor = "#" + input;
    updateLogoColor();

}

function updateLogoColor() {
  var logo = document.getElementById("logo");
  var header = document.querySelector("header");
  var computedStyle = getComputedStyle(logo);
  var backgroundColor = computedStyle.backgroundColor;
  var formField = document.getElementById("hex-input");
  
  // extract red, green, and blue values from background color
  var rgbValues = backgroundColor.match(/\d+/g).map(Number);
  var redValue = rgbValues[0];
  var greenValue = rgbValues[1];
  var blueValue = rgbValues[2];

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