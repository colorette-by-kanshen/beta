function getColonamesLink(searchedColor) {
  const button = document.getElementById("colonamescheckbutton");
  const buttontext = document.getElementById("colorsmatchlistCOLONAMES");

    fetch('js/colors.json')
    .then(response => response.json())
    .then(data => {
      const colorNames = Object.keys(data); // Get all color names
      const matches = colorNames.filter(color => data[color] === "#" + searchedColor.toUpperCase()); // Find matches

      if (matches.length > 0) {
        const matchesString = matches.join(' • ');
        const matchesStringAlt = matches.join(' or ');
        button.removeAttribute("disabled");
        buttontext.textContent = matchesString;
        button.setAttribute("onclick", "location.href='https://colonames.by.kanshen.click/" + searchedColor + "'");
        button.setAttribute("title", "#" + searchedColor + " is also known as " + matchesStringAlt + ".");
      } else {
        button.setAttribute("title", "#" + searchedColor + " has no valid color name.");
      }
    })
    .catch(error => console.error('Error:', error));

}