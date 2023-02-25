function changeTheme() {
    var input = document.getElementById("color-input").value;
    var formField = document.getElementById("color-input");
    var button = document.querySelector("button");
    var logo = document.getElementById("logo")
  
    formField.style.backgroundColor = "#" + input;
    button.style.backgroundColor = "#" + input;
    logo.style.backgroundColor = "#" + input;
}