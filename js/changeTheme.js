function changeTheme(color) {
    var formField = document.getElementById("hex-input");
    var button = document.querySelector("form");
    var logo = document.getElementById("logo")
  
    formField.style.backgroundColor = "#" + color;
    button.style.backgroundColor = "#" + color;
    logo.style.backgroundColor = "#" + color;
    updateLogoColor(color);
}

function updateLogoColor(color) {
  var formField = document.getElementById("hex-input");
  var logo = document.getElementById("logo");
  var header = document.querySelector("header");

  formField.style.background = "#" + color;
  logo.style.background = "#" + color;

  var r = parseInt(color.substring(0, 2), 16);
  var g = parseInt(color.substring(2, 4), 16);
  var b = parseInt(color.substring(4, 6), 16);

  // test if all color channels are at least 150
  if (r >= 150 && g >= 150 && b >= 150) {
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

function updateAltCSSColor(color) {
  const AlternateCSSDIV = getElementById("alternatenames")
  const placeholderOneSpan = document.getElementById('placeholderone');
  const placeholderTwoSpan = document.getElementById('placeholdertwo');
  // test if all color channels are at least 150
  if (r >= 150 && g >= 150 && b >= 150) {
    // set AlternateCSSDIV Color to Dark Mode
    AlternateCSSDIV.backgroundColor = "#000000";
    placeholderOneSpan.color = "#FFFFFF";
    placeholderTwoSpan.color = "#FFFFFF"
  } else {
    // set AlternateCSSDIV Color to Light Mode
    AlternateCSSDIV.backgroundColor = "#FFFFFF";
    placeholderOneSpan.color = "#000000";
    placeholderTwoSpan.color = "#000000"
  }
}
