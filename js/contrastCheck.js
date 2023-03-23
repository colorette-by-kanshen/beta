function checkContrast(color) {
    const defaultColorContrastBox = document.querySelectorAll(".contrastcheck.contrasttop");
    Array.from(defaultColorContrastBox).forEach(box => box.style.backgroundColor = color);

    // Convert the input color to its RGB components
    const redHEX = color.substring(0, 2);
    const greenHEX = color.substring(2, 4);
    const blueHEX = color.substring(4, 6);

    // Convert HEX values to RGB
    const redRGB = parseInt(redHEX, 16);
    const blueRGB = parseInt(blueHEX, 16);
    const greenRGB = parseInt(greenHEX, 16);

    // Calculate the ContrastIndex
    const contrastIndex = ((redRGB + greenRGB + blueRGB) / 3 / 2.55 + (((redRGB + greenRGB + blueRGB) / 3 / 2.55) - 100)).toFixed(1)

    console.log(contrastIndex)
}
