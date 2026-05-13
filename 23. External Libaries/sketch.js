// External Libraries
// May 8, 2025

let gui, b;

function setup() {
  createCanvas(windowWidth, windowHeight);
  gui = createGui();
  b = createButton("myButton", 50, 50);
}

function draw() {
  background(220);
  drawGui();
  if(b.isPressed){
    print(b.label + " is pressed.");
  }
}
