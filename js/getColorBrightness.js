function getColorBrightness(color) {
    // Get separate HEX values from the color
    const redHEX = color.substring(0, 2);
    const greenHEX = color.substring(2, 4);
    const blueHEX = color.substring(4, 6);

    // Convert HEX values to RGB
    const redRGB = parseInt(redHEX, 16);
    const blueRGB = parseInt(blueHEX, 16);
    const greenRGB = parseInt(greenHEX, 16);

    // Create an average of all RGB values
    const rgbRGB = redRGB + blueRGB + greenRGB;
    const avgRGB = Math.round(rgbRGB / 3);

    // Get color brightness from the average of RGB values
    const brightness = Math.round(avgRGB / 25.5);

    generatePalette(color, brightness)
}