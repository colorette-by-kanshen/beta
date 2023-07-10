function getColonamesLink(searchedColor) {

    fetch('js/colors.json')
    .then(response => response.json())
    .then(data => {
      const colorNames = Object.keys(data); // Get all color names
      const matches = colorNames.filter(color => data[color] === searchedColor); // Find matches

      if (matches.length > 0) {
        const matchesString = matches.join(' • ');
        console.log('Matching color names:', matchesString);
      } else {
        console.log('No matching color names found.');
      }
    })
    .catch(error => console.error('Error:', error));

}