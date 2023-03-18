function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = "";
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    setRandomColor(color)
}

function setRandomColor(randomColor) {
    var url = new URL(window.location.href);
    url.searchParams.set("color", randomColor);
    url.searchParams.set("random", true)
    window.location.href = url.href;
}