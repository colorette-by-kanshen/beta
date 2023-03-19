const urlParams = new URLSearchParams(window.location.search);
const colorParam = urlParams.get('color');
const colors = fetch('json/colornames.json').then(response => response.json());

const colorsArray = Object.values(colors);

let matchingColors = colorsArray.filter(color => color.hex.toUpperCase() === colorParam.toUpperCase());

const alternateNamesDiv = document.getElementById('alternatenames');

if (matchingColors.length === 0) {
    alternateNamesDiv.style.display = 'none';
} else if (matchingColors.length === 1) {
    alternateNamesDiv.style.display = 'flex';
    const placeholderOneSpan = document.getElementById('placeholderone');
    placeholderOneSpan.textContent = 'Did you know that ';
    const hexSpan = document.getElementById('hex');
    hexSpan.style.color = colorParam;
    hexSpan.textContent = colorParam;
    const placeholderTwoSpan = document.getElementById('placeholdertwo');
    placeholderTwoSpan.textContent = ' can also be interpreted as ';
    const alternativeNamesSpan = document.getElementById('alternativenames');
    alternativeNamesSpan.style.color = colorParam;
    alternativeNamesSpan.textContent = matchingColors[0].name;
} else {
    alternateNamesDiv.style.display = 'flex';
    const placeholderOneSpan = document.getElementById('placeholderone');
    placeholderOneSpan.textContent = 'Did you know that ';
    const hexSpan = document.getElementById('hex');
    hexSpan.style.color = colorParam;
    hexSpan.textContent = colorParam;
    const placeholderTwoSpan = document.getElementById('placeholdertwo');
    placeholderTwoSpan.textContent = ' can also be interpreted as ';
    const alternativeNamesSpan = document.getElementById('alternativenames');
    alternativeNamesSpan.style.color = colorParam;
    alternativeNamesSpan.textContent = matchingColors.map(color => color.codeName).join(' | ');
}