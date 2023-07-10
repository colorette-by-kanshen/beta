function getColonamesLink(searchedColor) {
  const button = document.getElementById("colonamescheckbutton");
  const buttontext = document.getElementById("colorsmatchlistCOLONAMES")

    fetch('js/colors.json')
    .then(response => response.json())
    .then(data => {
      const colorNames = Object.keys(data); // Get all color names
      const matches = colorNames.filter(color => data[color] === "#" + searchedColor.toUpperCase()); // Find matches

      if (matches.length > 0) {
        const matchesString = matches.join(' • ');
        button.removeAttribute("disabled");
        buttontext.textContent = matchesString;
      } else {
      }
    })
    .catch(error => console.error('Error:', error));

}