function formCheck() {
  var hex = document.getElementById("hex-input").value;
  // Check if input only contains 0-9 and a-f (both lowercase and uppercase)
  if (!/^[0-9a-fA-F]*$/.test(hex)) {
    alert("Please only use characters 0-9 and a-f (or A-F) for the color code");
    return;
  }
  
  // Check if input is exactly 6 hexadecimal characters
  if (!/^[0-9a-fA-F]{6}$/.test(hex)) {
    alert("Please enter a valid 6-digit hexadecimal color code");
    return;
  }
  
  setColor();
}
