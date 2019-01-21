let grid, cols, rows, input, canvas, solid;
let res = 30;
var start = null;
var end = null;

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  canvas = canvas.elt;
  canvas.oncontextmenu = () => false;
  input = new Input();

  cols = ceil(windowWidth / res)
  rows = ceil(windowHeight / res)
  grid = array2D(cols, rows);
  for (let i = 0; i < cols; i++) {
    for (let j = 0; j < rows; j++ ) {
      grid[i][j] = new Box(i * res, j * res, res);
    }
  }
}

function draw() {

  input.handleMouse();

  for (let i = 0; i < cols; i++) {
    for (let j = 0; j < rows; j++ ) {
      grid[i][j].render();
    }
  }
}

function keyReleased() {
  input.handleKeys(key)
}
