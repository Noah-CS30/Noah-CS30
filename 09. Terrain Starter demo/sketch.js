// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let rectWidth = 5;
function setup() {
  createCanvas(windowWidth, windowHeight);
  fill(0);
}

function generateTerrain(){
  // using a loop, construct a number
  // of side by side rectangles of
  // random height, to be 2D terrain
  for(let x = 0; x < width; x += rectWidth){
    // generate random() (negative) height
    // eventually replace this with using noise()
    let rectHeight = random(0, height * 0.75);
    
    
    rect(x, height, rectWidth, -rectHeight);
  }  
}

function draw() {
  background(220);
  generateTerrain();
}
