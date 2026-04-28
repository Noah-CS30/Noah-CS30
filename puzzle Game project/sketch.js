// Project Title
// Noah
// basic variables
let grid = [];
let cols = 5;
let rows = 5;
let cellS;


function setup() {
  createCanvas(500, 500);
  // intialize the board( zero = black )
  cellS = width / cols;
  for (let i = 0; i < cols; i++){
    grid[i] = [];
      for (let k = 0; k < rows; k++){
        grid = [i][j] = 0
      }
}

function draw() {
  background(220);
}
