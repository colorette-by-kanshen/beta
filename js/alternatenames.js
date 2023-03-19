async function loadColors() {
    let colorsData = {};

    fetch('json/colornames.json')
        .then(response => response.json())
        .then(data => colorsData = data);
    const colorsJson = await response.json();
    const colorsObject = {};
    colorsJson.forEach(color => {
        colorsObject[color.hex] = color;
    });
    const colors = await loadColors();
    const color = urlParams.get('color');
    const matchingColor = colors[colorHex];
    if (matchingColor) {
        console.log(matchingColor.name);
    }
}
