// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"


function setup() {
  createCanvas(400, 400);
}

function drawCircle(){
  for(let i = 0; i <= 400; i++){
    circle(i,i,20);
    circle(i, 400-i, 20);
  }
}


function draw() {
  drawCircle();
  background(220);
}
