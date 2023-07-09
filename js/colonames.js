function getColonamesLink(color) {
    const button = document.getElementById("colonamescheckbutton");
    const nocolor = document.getElementById("unavailableoncolonames")
    const yescolor = document.getElementById("availableoncolonames")

    fetch('https://colonames.by.kanshen.click/' + color)
  .then(response => {
      if (response.status === 404) {
          button.classList.add("COLONAMESmatchnotfound");
          nocolor.classList.add("valid");
      } else {
          button.classList.add("COLONAMESmatchfound");
          yescolor.classList.add("valid");
    }
  })
  .catch(error => {
    console.log('An error occurred while accessing the website.');
  });

}