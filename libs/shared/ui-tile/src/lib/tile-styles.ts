const style = document.createElement('style');
style.textContent = `
bghoard-grid {
  display: flex;
  flex-flow: wrap;
  justify-content: space-evenly;
}

bghoard-tile {
  border: solid 1px #ccc;
  border-radius: 5px;
  overflow: hidden;
  display: block;
  min-width: 200px;
  color: inherit;
  text-decoration: none;
  margin: 0.5em;
}
bghoard-tile:hover {
  border-color: #5159ea;
}

bghoard-image-wrapper {
  width: 200px;
  height: 200px;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  border-bottom: solid 1px #ccc;
}
bghoard-image-wrapper > img {
  max-width: 100%;
  min-height: 100%;
}

bghoard-tile-title {
  display: block;
  margin: 1em 0;
  text-align: center;
  font-weight: bold;
  font-size: 125%;
}

bghoard-tile-left-corner {
  display: block;
  float: left;
  margin: -0.5em 0 1em 0.5em;
}

bghoard-tile-right-corner {
  display: block;
  float: right;
  margin: -0.5em 0.5em 1em 0;
}
`;
document.body.appendChild(style);