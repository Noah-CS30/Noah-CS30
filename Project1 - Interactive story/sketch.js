// Interactive story
// Noah Jeong
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"


function setup() {
  createCanvas(700, 500);
  
}
function sky(){
  noStroke();
  fill("white");
  circle(50, 50, 45);
  circle(40, 40, 45);
  circle(20, 50, 45);
  circle(250, 70, 45);
  circle(240, 60, 45);
  circle(220, 70, 45);
  circle(400, 120, 45);
  circle(390, 110, 55);
  circle(370, 120, 45);
  circle(550, 160, 45);
  circle(540, 150, 55);
  circle(520, 160, 45);
}


function objectBody(){
  let a = 35; // size of the main object's body
  let b = 20;
  fill("orange"); // object's color
  rect(mouseX - 10, mouseY - 10, a, 25); // object is moved by the mouse
  fill("#bdcdd0");
  circle(mouseX + 25, mouseY - 10, b);
  circle(mouseX -13, mouseY - 10, b);

}

function background1(){
  fill("green"); // mountain's color
  // mountains
  //noStroke();
  triangle(320, 750, 600, 200, 880, 750);
  triangle(160, 650, 440, 100, 720, 650);
  triangle(-100, 650, 180, 100, 460, 650);
  triangle(-360, 450, -80, -100, 200, 650);
  fill("yellow");
  circle(550, 30, 150);
}

function background2(){

  
}

function draw() {
  background("skyblue");
  background1();
  sky();
  objectBody();
}
