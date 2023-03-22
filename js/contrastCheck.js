function checkContrast(color) {
    const defaultColorContrastBox = document.querySelectorAll(".contrastcheck.contrasttop");
    Array.from(defaultColorContrastBox).forEach(box => box.style.backgroundColor = color);

}