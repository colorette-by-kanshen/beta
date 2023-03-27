function setMetaTags(color) {

    const themeColorMetaTag = document.querySelector('meta[property="theme-color"]');
    themeColorMetaTag.setAttribute('content', "#" + color);
}