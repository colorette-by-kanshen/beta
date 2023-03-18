function setColor() {
  var input = document.getElementById("hex-input").value;
  var url = new URL(window.location.href);
  url.searchParams.set("color", input);
  window.location.href = url.href;
}

function setRandomColor(randomColor) {
  var url = new URL(window.location.href);
  url.searchParams.set("color", randomColor);
  url.searchParams.set("random", true)
  window.location.href = url.href;
}