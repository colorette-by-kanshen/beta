function setColor() {
  var input = document.getElementById("hex-input").value;
  var url = new URL(window.location.href);
  url.searchParams.set("color", input);
  url.searchParams.delete("random");
  window.location.href = url.href;
}
