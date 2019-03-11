let grid, cols, rows, input, canvas;
var solid = [];
let res = 30;
var start = null;
var end = null;
let tests = [];

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  canvas = canvas.elt;
  canvas.oncontextmenu = () => false;
  input = new Input();
  for (let i = 1; i <= 10; i++) {
    tests.push(new PathFinder(330, 245));
  }

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

  clear();
  //test.ray(mouseX, mouseY);
  for (let test of tests) {
    test.move(mouseX, mouseY);
    test.fireRays(60);
  }

  stroke(0);
  input.handleMouse();

  for (let i = 0; i < cols; i++) {
    for (let j = 0; j < rows; j++ ) {
      grid[i][j].render();
    }
  }
  // for (let box of solid) {
  //   box.showEdges();
  // }

}

function keyReleased() {
  input.handleKeys(key)
}
