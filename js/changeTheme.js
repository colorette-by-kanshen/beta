function changeTheme(color) {
  var formField = document.getElementById("hex-input");
  var button = document.querySelector("form");
  var logo = document.getElementById("logo");
  const paths = logo.querySelectorAll('path');

  formField.style.backgroundColor = "#" + color;
  button.style.backgroundColor = "#" + color;
  paths.forEach(path => { path.style.fill = "#" + color; });
  updateLogoColor(color);
  updateFavicon(color)
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

function updateFavicon(color) {
  // get the SVG code
  const svgCode = '<svg version="1.0" xmlns="http://www.w3.org/2000/svg" width="500.000000pt" height="500.000000pt" viewBox="0 0 500.000000 500.000000" preserveAspectRatio="xMidYMid meet"><g transform="translate(0.000000,500.000000) scale(0.100000,-0.100000) fill="#' + color + '" stroke="none"><path d="M2265 4989 c-577 -56 -1113 -308 -1526 -719 -394 -391 -628 -859 -716 -1430 -21 -142 -24 -509 -5 -645 117 -816 552 -1466 1247 -1866 650 -373 1443 -431 2144 -157 195 76 427 206 596 333 88 66 247 205 252 220 2 6 -239 252 -536 549 l-538 538 -84 -66 c-126 -100 -282 -170 -437 -197 -95 -17 -331 -6 -412 19 -298 89 -523 286 -637 554 -60 143 -67 185 -67 378 0 193 7 235 68 379 111 264 349 472 631 553 70 20 102 23 255 23 153 0 185 -3 255 -23 117 -34 248 -102 343 -178 l84 -67 541 542 542 542 -70 65 c-518 478 -1232 720 -1930 653z"/></g></svg>';

  // set the src attribute to the SVG code
  const faviconDataCode = 'data:image/svg+xml;base64,' + btoa(svgCode);

  // get the favicon link element
  const favicon = document.querySelector('link[rel="icon"]');

  // set the href attribute to the canvas data URL
  favicon.href = faviconDataCode;
}
