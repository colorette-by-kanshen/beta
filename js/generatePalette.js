function generatePalette(defColor, defBrightness) {
    // Get separate HEX values from the color
    const redHEX = defColor.substring(0, 2);
    const greenHEX = defColor.substring(2, 4);
    const blueHEX = defColor.substring(4, 6);

    // Convert HEX values to RGB
    const redRGB = parseInt(redHEX, 16);
    const blueRGB = parseInt(blueHEX, 16);
    const greenRGB = parseInt(greenHEX, 16);

    // Calculate the color0
    let color0;
    if (defBrightness === 0) {
        color0 = {
            red: Math.round(redRGB),
            green: Math.round(greenRGB),
            blue: Math.round(blueRGB)
        };
    } else {
        color0 = {
            red: Math.round(redRGB + Math.round((0 - defBrightness) * (255 / 9))),
            green: Math.round(greenRGB + Math.round((0 - defBrightness) * (255 / 9))),
            blue: Math.round(blueRGB + Math.round((0 - defBrightness) * (255 / 9)))
        }
    }

    // Calculate the color1
    let color1;
    if (defBrightness === 1) {
        color1 = {
            red: Math.round(redRGB),
            green: Math.round(greenRGB),
            blue: Math.round(blueRGB)
        };
    } else {
        color1 = {
            red: Math.round(redRGB + Math.round((1 - defBrightness) * (255 / 9))),
            green: Math.round(greenRGB + Math.round((1 - defBrightness) * (255 / 9))),
            blue: Math.round(blueRGB + Math.round((1 - defBrightness) * (255 / 9)))
        }
    }

    // Calculate the color2
    let color2;
    if (defBrightness === 2) {
        color2 = {
            red: Math.round(redRGB),
            green: Math.round(greenRGB),
            blue: Math.round(blueRGB)
        };
    } else {
        color2 = {
            red: Math.round(redRGB + Math.round((2 - defBrightness) * (255 / 9))),
            green: Math.round(greenRGB + Math.round((2 - defBrightness) * (255 / 9))),
            blue: Math.round(blueRGB + Math.round((2 - defBrightness) * (255 / 9)))
        }
    }

    // Calculate the color3
    let color3;
    if (defBrightness === 3) {
        color3 = {
            red: Math.round(redRGB),
            green: Math.round(greenRGB),
            blue: Math.round(blueRGB)
        };
    } else {
        color3 = {
            red: Math.round(redRGB + Math.round((3 - defBrightness) * (255 / 9))),
            green: Math.round(greenRGB + Math.round((3 - defBrightness) * (255 / 9))),
            blue: Math.round(blueRGB + Math.round((3 - defBrightness) * (255 / 9)))
        }
    }

    // Calculate the color4
    let color4;
    if (defBrightness === 4) {
        color4 = {
            red: Math.round(redRGB),
            green: Math.round(greenRGB),
            blue: Math.round(blueRGB)
        };
    } else {
        color4 = {
            red: Math.round(redRGB + Math.round((4 - defBrightness) * (255 / 9))),
            green: Math.round(greenRGB + Math.round((4 - defBrightness) * (255 / 9))),
            blue: Math.round(blueRGB + Math.round((4 - defBrightness) * (255 / 9)))
        }
    }

    // Calculate the color5
    let color5;
    if (defBrightness === 5) {
        color5 = {
            red: Math.round(redRGB),
            green: Math.round(greenRGB),
            blue: Math.round(blueRGB)
        };
    } else {
        color5 = {
            red: Math.round(redRGB + Math.round((5 - defBrightness) * (255 / 9))),
            green: Math.round(greenRGB + Math.round((5 - defBrightness) * (255 / 9))),
            blue: Math.round(blueRGB + Math.round((5 - defBrightness) * (255 / 9)))
        }
    }

    // Calculate the color6
    let color6;
    if (defBrightness === 6) {
        color6 = {
            red: Math.round(redRGB),
            green: Math.round(greenRGB),
            blue: Math.round(blueRGB)
        };
    } else {
        color6 = {
            red: Math.round(redRGB + Math.round((6 - defBrightness) * (255 / 9))),
            green: Math.round(greenRGB + Math.round((6 - defBrightness) * (255 / 9))),
            blue: Math.round(blueRGB + Math.round((6 - defBrightness) * (255 / 9)))
        }
    }

    // Calculate the color7
    let color7;
    if (defBrightness === 7) {
        color7 = {
            red: Math.round(redRGB),
            green: Math.round(greenRGB),
            blue: Math.round(blueRGB)
        };
    } else {
        color7 = {
            red: Math.round(redRGB + Math.round((7 - defBrightness) * (255 / 9))),
            green: Math.round(greenRGB + Math.round((7 - defBrightness) * (255 / 9))),
            blue: Math.round(blueRGB + Math.round((7 - defBrightness) * (255 / 9)))
        }
    }

    // Calculate the color8
    let color8;
    if (defBrightness === 8) {
        color8 = {
            red: Math.round(redRGB),
            green: Math.round(greenRGB),
            blue: Math.round(blueRGB)
        };
    } else {
        color8 = {
            red: Math.round(redRGB + Math.round((8 - defBrightness) * (255 / 9))),
            green: Math.round(greenRGB + Math.round((8 - defBrightness) * (255 / 9))),
            blue: Math.round(blueRGB + Math.round((8 - defBrightness) * (255 / 9)))
        }
    }

    // Calculate the color9
    let color9;
    if (defBrightness === 9) {
        color9 = {
            red: Math.round(redRGB),
            green: Math.round(greenRGB),
            blue: Math.round(blueRGB)
        };
    } else {
        color9 = {
            red: Math.round(redRGB + Math.round((9 - defBrightness) * (255 / 9))),
            green: Math.round(greenRGB + Math.round((9 - defBrightness) * (255 / 9))),
            blue: Math.round(blueRGB + Math.round((9 - defBrightness) * (255 / 9)))
        }
    }

    // Calculate the color10
    let color10;
    if (defBrightness === 10) {
        color10 = {
            red: Math.round(redRGB),
            green: Math.round(greenRGB),
            blue: Math.round(blueRGB)
        };
    } else {
        color10 = {
            red: Math.round(redRGB + Math.round((10 - defBrightness) * (255 / 9))),
            green: Math.round(greenRGB + Math.round((10 - defBrightness) * (255 / 9))),
            blue: Math.round(blueRGB + Math.round((10 - defBrightness) * (255 / 9)))
        }
    }

    console.log(color0, color1, color2, color3, color4, color5, color6, color7, color8, color9, color10);
    validateColors(color0, color1, color2, color3, color4, color5, color6, color7, color8, color9, color10, defBrightness)
}

function validateColors(color0, color1, color2, color3, color4, color5, color6, color7, color8, color9, color10, defBrightness) {
    // Validate color0
    if (color0.red > 255) {
        color0.red = 255;
    }
    else if (color0.red < 0) {
        color0.red = 0
    }
    if (color0.green > 255) {
        color0.green = 255;
    }
    else if (color0.green < 0) {
        color0.green = 0
    }
    if (color0.blue > 255) {
        color0.blue = 255;
    }
    else if (color0.blue < 0) {
        color0.blue = 0
    }

    // Validate color1
    if (color1.red > 255) {
        color1.red = 255;
    }
    else if (color1.red < 0) {
        color1.red = 0
    }
    if (color1.green > 255) {
        color1.green = 255;
    }
    else if (color1.green < 0) {
        color1.green = 0
    }
    if (color1.blue > 255) {
        color1.blue = 255;
    }
    else if (color1.blue < 0) {
        color1.blue = 0
    }

    // Validate color2
    if (color2.red > 255) {
        color2.red = 255;
    }
    else if (color2.red < 0) {
        color2.red = 0
    }
    if (color2.green > 255) {
        color2.green = 255;
    }
    else if (color2.green < 0) {
        color2.green = 0
    }
    if (color2.blue > 255) {
        color2.blue = 255;
    }
    else if (color2.blue < 0) {
        color2.blue = 0
    }

    // Validate color3
    if (color3.red > 255) {
        color3.red = 255;
    }
    else if (color3.red < 0) {
        color3.red = 0
    }
    if (color3.green > 255) {
        color3.green = 255;
    }
    else if (color3.green < 0) {
        color3.green = 0
    }
    if (color3.blue > 255) {
        color3.blue = 255;
    }
    else if (color3.blue < 0) {
        color3.blue = 0
    }
        // Validate color4
    if (color4.red > 255) {
        color4.red = 255;
    }
    else if (color4.red < 0) {
        color4.red = 0
    }
    if (color4.green > 255) {
        color4.green = 255;
    }
    else if (color4.green < 0) {
        color4.green = 0
    }
    if (color4.blue > 255) {
        color4.blue = 255;
    }
    else if (color4.blue < 0) {
        color4.blue = 0
    }

    // Validate color5
    if (color5.red > 255) {
        color5.red = 255;
    }
    else if (color5.red < 0) {
        color5.red = 0
    }
    if (color5.green > 255) {
        color5.green = 255;
    }
    else if (color5.green < 0) {
        color5.green = 0
    }
    if (color5.blue > 255) {
        color5.blue = 255;
    }
    else if (color5.blue < 0) {
        color5.blue = 0
    }

    // Validate color6
    if (color6.red > 255) {
        color6.red = 255;
    }
    else if (color6.red < 0) {
        color6.red = 0
    }
    if (color6.green > 255) {
        color6.green = 255;
    }
    else if (color6.green < 0) {
        color6.green = 0
    }
    if (color6.blue > 255) {
        color6.blue = 255;
    }
    else if (color6.blue < 0) {
        color6.blue = 0
    }

    // Validate color7
    if (color7.red > 255) {
        color7.red = 255;
    }
    else if (color7.red < 0) {
        color7.red = 0
    }
    if (color7.green > 255) {
        color7.green = 255;
    }
    else if (color7.green < 0) {
        color7.green = 0
    }
    if (color7.blue > 255) {
        color7.blue = 255;
    }
    else if (color7.blue < 0) {
        color7.blue = 0
    }

    // Validate color8
    if (color8.red > 255) {
        color8.red = 255;
    }
    else if (color8.red < 0) {
        color8.red = 0
    }
    if (color8.green > 255) {
        color8.green = 255;
    }
    else if (color8.green < 0) {
        color8.green = 0
    }
    if (color8.blue > 255) {
        color8.blue = 255;
    }
    else if (color8.blue < 0) {
        color8.blue = 0
    }

    // Validate color9
    if (color9.red > 255) {
        color9.red = 255;
    }
    else if (color9.red < 0) {
        color9.red = 0
    }
    if (color9.green > 255) {
        color9.green = 255;
    }
    else if (color9.green < 0) {
        color9.green = 0
    }
    if (color9.blue > 255) {
        color9.blue = 255;
    }
    else if (color9.blue < 0) {
        color9.blue = 0
    }

    // Validate color10
    if (color10.red > 255) {
        color10.red = 255;
    }
    else if (color10.red < 0) {
        color10.red = 0
    }
    if (color10.green > 255) {
        color10.green = 255;
    }
    else if (color10.green < 0) {
        color10.green = 0
    }
    if (color10.blue > 255) {
        color10.blue = 255;
    }
    else if (color10.blue < 0) {
        color10.blue = 0
    }
    compilePalette(color0, color1, color2, color3, color4, color5, color6, color7, color8, color9, color10, defBrightness)
}

function compilePalette(color0, color1, color2, color3, color4, color5, color6, color7, color8, color9, color10, defBrightness) {
    // Get HEX Code for color0
    const red0HEX = color0.red.toString(16).padStart(2, '0');
    const green0HEX = color0.green.toString(16).padStart(2, '0');
    const blue0HEX = color0.blue.toString(16).padStart(2, '0');
    const color0HEX = red0HEX + green0HEX + blue0HEX;

    // Get HEX Code for color1
    const red1HEX = color1.red.toString(16).padStart(2, '0');
    const green1HEX = color1.green.toString(16).padStart(2, '0');
    const blue1HEX = color1.blue.toString(16).padStart(2, '0');
    const color1HEX = red1HEX + green1HEX + blue1HEX;

    // Get HEX Code for color2
    const red2HEX = color2.red.toString(16).padStart(2, '0');
    const green2HEX = color2.green.toString(16).padStart(2, '0');
    const blue2HEX = color2.blue.toString(16).padStart(2, '0');
    const color2HEX = red2HEX + green2HEX + blue2HEX;

    // Get HEX Code for color3
    const red3HEX = color3.red.toString(16).padStart(2, '0');
    const green3HEX = color3.green.toString(16).padStart(2, '0');
    const blue3HEX = color3.blue.toString(16).padStart(2, '0');
    const color3HEX = red3HEX + green3HEX + blue3HEX;

    // Get HEX Code for color4
    const red4HEX = color4.red.toString(16).padStart(2, '0');
    const green4HEX = color4.green.toString(16).padStart(2, '0');
    const blue4HEX = color4.blue.toString(16).padStart(2, '0');
    const color4HEX = red4HEX + green4HEX + blue4HEX;

    // Get HEX Code for color5
    const red5HEX = color5.red.toString(16).padStart(2, '0');
    const green5HEX = color5.green.toString(16).padStart(2, '0');
    const blue5HEX = color5.blue.toString(16).padStart(2, '0');
    const color5HEX = red5HEX + green5HEX + blue5HEX;

    // Get HEX Code for color6
    const red6HEX = color6.red.toString(16).padStart(2, '0');
    const green6HEX = color6.green.toString(16).padStart(2, '0');
    const blue6HEX = color6.blue.toString(16).padStart(2, '0');
    const color6HEX = red6HEX + green6HEX + blue6HEX;

    // Get HEX Code for color7
    const red7HEX = color7.red.toString(16).padStart(2, '0');
    const green7HEX = color7.green.toString(16).padStart(2, '0');
    const blue7HEX = color7.blue.toString(16).padStart(2, '0');
    const color7HEX = red7HEX + green7HEX + blue7HEX;

    // Get HEX Code for color8
    const red8HEX = color8.red.toString(16).padStart(2, '0');
    const green8HEX = color8.green.toString(16).padStart(2, '0');
    const blue8HEX = color8.blue.toString(16).padStart(2, '0');
    const color8HEX = red8HEX + green8HEX + blue8HEX;

    // Get HEX Code for color9
    const red9HEX = color9.red.toString(16).padStart(2, '0');
    const green9HEX = color9.green.toString(16).padStart(2, '0');
    const blue9HEX = color9.blue.toString(16).padStart(2, '0');
    const color9HEX = red9HEX + green9HEX + blue9HEX;

    // Get HEX Code for color10
    const red10HEX = color10.red.toString(16).padStart(2, '0');
    const green10HEX = color10.green.toString(16).padStart(2, '0');
    const blue10HEX = color10.blue.toString(16).padStart(2, '0');
    const color10HEX = red10HEX + green10HEX + blue10HEX;

    // Show The Palette Onto the Website
    setPalette(color0HEX, color1HEX, color2HEX, color3HEX, color4HEX, color5HEX, color6HEX, color7HEX, color8HEX, color9HEX, color10HEX, defBrightness)
}

function setPalette(c0, c1, c2, c3, c4, c5, c6, c7, c8, c9, c10, defBrightness) {
    // Set Function Constants
    const paletteBox0 = document.getElementById("color0");
    const paletteBox1 = document.getElementById("color1");
    const paletteBox2 = document.getElementById("color2");
    const paletteBox3 = document.getElementById("color3");
    const paletteBox4 = document.getElementById("color4");
    const paletteBox5 = document.getElementById("color5");
    const paletteBox6 = document.getElementById("color6");
    const paletteBox7 = document.getElementById("color7");
    const paletteBox8 = document.getElementById("color8");
    const paletteBox9 = document.getElementById("color9");
    const paletteBox10 = document.getElementById("color10");
    const defaultPaletteBox = document.getElementById(`color${defBrightness}`);
    const defaultColorSPAN = defaultPaletteBox.querySelector(".hex")

    // Show The Palette Onto the Website
    paletteBox0.style.backgroundColor = "#" + c0;
    paletteBox1.style.backgroundColor = "#" + c1;
    paletteBox2.style.backgroundColor = "#" + c2;
    paletteBox3.style.backgroundColor = "#" + c3;
    paletteBox4.style.backgroundColor = "#" + c4;
    paletteBox5.style.backgroundColor = "#" + c5;
    paletteBox6.style.backgroundColor = "#" + c6;
    paletteBox7.style.backgroundColor = "#" + c7;
    paletteBox8.style.backgroundColor = "#" + c8;
    paletteBox9.style.backgroundColor = "#" + c9;
    paletteBox10.style.backgroundColor = "#" + c10;

    // Insert color codes into the elements
    paletteBox0.querySelector(".hex").textContent = "#" + c0;
    paletteBox1.querySelector(".hex").textContent = "#" + c1;
    paletteBox2.querySelector(".hex").textContent = "#" + c2;
    paletteBox3.querySelector(".hex").textContent = "#" + c3;
    paletteBox4.querySelector(".hex").textContent = "#" + c4;
    paletteBox5.querySelector(".hex").textContent = "#" + c5;
    paletteBox6.querySelector(".hex").textContent = "#" + c6;
    paletteBox7.querySelector(".hex").textContent = "#" + c7;
    paletteBox8.querySelector(".hex").textContent = "#" + c8;
    paletteBox9.querySelector(".hex").textContent = "#" + c9;
    paletteBox10.querySelector(".hex").textContent = "#" + c10;

    // Add .default class to the default brightness
    defaultPaletteBox.classList.add('default');
    // Add text styling to default brightness box
    defaultColorSPAN.style.color = "#" + window["c" + defBrightness];

}
