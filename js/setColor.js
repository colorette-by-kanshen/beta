function setColor() {
  var input = document.getElementById("hex-input").value;
  var inputUpperCase = input.toUpperCase();
  var url = new URL(window.location.href);
  url.searchParams.set("color", inputUpperCase);
  url.searchParams.delete("random");
  window.location.href = url.href;
}
