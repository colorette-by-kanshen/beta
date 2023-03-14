if (window.parent !== window) {
  const parentOrigin = new URL(window.parent.location.href).origin;
  if (parentOrigin === 'https://www.kanshen.click') {
    const colorParam = new URLSearchParams(window.location.search).get('color');
    if (colorParam) {
      window.parent.postMessage({ color: colorParam }, 'https://www.kanshen.click');
    }
  }
}
