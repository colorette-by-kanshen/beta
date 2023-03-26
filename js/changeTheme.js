function changeTheme(color) {
    var formField = document.getElementById("hex-input");
    var button = document.querySelector("form");
    var logo = document.getElementById("logo");
    const paths = logo.querySelectorAll('path');
  
    formField.style.backgroundColor = "#" + color;
    button.style.backgroundColor = "#" + color;
    paths.forEach(path => {path.style.fill = "#" + color;});
    updateLogoColor(color);
}

function updateLogoColor(color) {
  var formField = document.getElementById("hex-input");
  var header = document.querySelector("header");

  formField.style.background = "#" + color;

  var r = parseInt(color.substring(0, 2), 16);
  var g = parseInt(color.substring(2, 4), 16);
  var b = parseInt(color.substring(4, 6), 16);

  // test if all color channels are at least 150
  if (r >= 150 && g >= 150 && b >= 150) {
    header.style.backgroundColor = "#000000";
    formField.style.color = "#000000"
  } else {
    header.style.backgroundColor = "#FFFFFF";
    formField.style.color = "#FFFFFF"
  }
  updateToggleSwitch(color)
}

function updateToggleSwitch(color) {
  const toggleSwitchButton = document.querySelector("span#slidercircle")
  const toggleswitchcss = document.querySelector("#contrastcheckboxstyle")
  var r = parseInt(color.substring(0, 2), 16);
  var g = parseInt(color.substring(2, 4), 16);
  var b = parseInt(color.substring(4, 6), 16);

  if (r >= 150 && g >= 150 && b >= 150) {
    // set logo to black version and header background to black
    toggleSwitchButton.style.backgroundColor = "#000000"
  } else {
    // set logo to white version and header background to white
    toggleSwitchButton.style.backgroundColor = "#FFFFFF"
  }
  toggleswitchcss.innerHTML = 'input:checked+.slider {background-color: #' + color + ';} input:focus+.slider {box-shadow: 0 0 1px #' + color + ';}'
}
