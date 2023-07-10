function getColonamesLink(searchedColor) {
  const button = document.getElementById("colonamescheckbutton");
  const buttontext = document.getElementById("colorsmatchlistCOLONAMES");
  const buttonlink = document.getElementById("colonamesbuttonlink")

    fetch('js/colors.json')
    .then(response => response.json())
    .then(data => {
      const colorNames = Object.keys(data); // Get all color names
      const matches = colorNames.filter(color => data[color] === "#" + searchedColor.toUpperCase()); // Find matches

      if (matches.length > 0) {
        const matchesString = matches.join(' • ');
        button.removeAttribute("disabled");
        buttontext.textContent = matchesString;
        buttonlink.setAttribute("href", "https://colonames.by.kanshen.click/" + searchedColor)
      } else {
      }
    })
    .catch(error => console.error('Error:', error));

}