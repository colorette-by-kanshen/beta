function checkContrast(color) {
    const ColorContrastBox = document.querySelectorAll("#contrastwhite, #contrastblack");
    Array.from(ColorContrastBox).forEach(box => box.style.color = color);

    // Convert the input color to its RGB components
    const redHEX = color.substring(0, 2);
    const greenHEX = color.substring(2, 4);
    const blueHEX = color.substring(4, 6);

    // Convert HEX values to RGB
    const redRGB = parseInt(redHEX, 16);
    const blueRGB = parseInt(blueHEX, 16);
    const greenRGB = parseInt(greenHEX, 16);

    // Calculate the ContrastIndex
    const contrastIndex = ((redRGB + greenRGB + blueRGB) / 3 / 2.55 + (((redRGB + greenRGB + blueRGB) / 3 / 2.55) - 100))

    // Set Elements Constants and Values
    const whiteContrastBox = document.querySelector("#contrastWhite")
    const blackContrastBox = document.querySelector("#contrastblack")
    whiteContrastBox.textContent = contrastIndex.toFixed(1)
    blackContrastBox.textContent = "ON A SCALE FROM -100 TO 100"
}
