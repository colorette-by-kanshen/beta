function getColonamesLink(color) {
    const button = document.getElementById("colonamescheckbutton");

    fetch('https://colonames.by.kanshen.click/' + color)
  .then(response => {
      if (response.status === 404) {
          button.classList.add("COLONAMESmatchnotfound");
          button.getElementById("unavailableoncolonames").classList.add("valid");
      } else {
          button.classList.add("COLONAMESmatchfound");
          button.getElementById("availableoncolonames").classList.add("valid");
    }
  })
  .catch(error => {
    console.log('An error occurred while accessing the website.');
  });

}