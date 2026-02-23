// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"


function setup() {
  createCanvas(windowWidth, windowHeight);
}

function drawBody(){

  noStroke();
  fill(173,235,179);
  circle(200,100,150);

}
function drawBody2(){
  noStroke();
  fill(173,235,179);
  square(125, 90, 150);

}
function drawlegs(){
  noStroke();
  rect(123, 200, 25, 70);
  rect(250, 200, 25, 70 );

}
function drawFace(){
  noStroke();
  fill("black");
  circle(160,120,20);
  circle(240,120,20);
  rect(161, 160, 85, 5, 30);

}
function draw() {
  background(220);
  drawBody();
  drawBody2();
  drawlegs();
  drawFace();
}
