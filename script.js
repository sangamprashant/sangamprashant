// script.js
const converter = new showdown.Converter();
fetch('./README.md')
  .then(response => response.text())
  .then(markdown => {
    const html = converter.makeHtml(markdown);
    document.getElementById('readme-content').innerHTML = html;
  });
