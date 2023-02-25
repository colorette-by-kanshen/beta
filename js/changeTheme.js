function changeTheme() {
    var input = document.getElementById("hex-input").value;
    var formField = document.getElementById("hex-input");
    var button = document.querySelector("form");
    var logo = document.getElementById("logo")
  
    formField.style.backgroundColor = "#" + input;
    button.style.backgroundColor = "#" + input;
    logo.style.backgroundColor = "#" + input;
}