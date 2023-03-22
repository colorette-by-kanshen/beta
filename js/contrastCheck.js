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

    // Calculate the relative luminance of the input color
    const luminance = (0.2126 * redRGB + 0.7152 * greenRGB + 0.0722 * blueRGB) / 255;

    // Calculate the contrast ratios against black and white
    const whiteContrast = (luminance + 0.05) / 1.05;
    const blackContrast = 1.05 / (luminance + 0.05);
    const whiteContrastPercentage = whiteContrast * 100;
    const blackContrastPercentage = blackContrast * 100;

    const woc = document.querySelector(".contrastcheck.contrastwhite.contrasttop")
    const boc = document.querySelector(".contrastcheck.contrastblack.contrasttop")
    const cow = document.querySelector(".contrastcheck.contrastwhite.contrastbottom")
    const cob = document.querySelector(".contrastcheck.contrastblack.contrastbottom")

    woc.textContent = whiteContrastPercentage;
    cow.textContent = "out of 100 points";
    boc.textContent = blackContrastPercentage;
    cob.textContent = "out of 100 points";
}
