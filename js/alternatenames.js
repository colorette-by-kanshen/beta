function alternateNames(color) {
    // Load the json file
    const colornames = require('json/colornames.json');

    // Compare the color parameter to all hex values in the objects of the json file
    for (let i = 0; i < colornames.length; i++) {
        if (colornames[i].hex === color) {
            return colornames[i].name;
        }
    }
    // If no match is found, return null
    return null;
}