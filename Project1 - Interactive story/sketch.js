// Interactive story project
// Noah Jeong
// 
// 
//
// Extra for Experts:
// 

let currentBack = 0; // 4 - state background variable
let sizeFactor = 1; // controls size of main object

function setup() {
  createCanvas(700, 500);
}
// cloulds
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
  let a = 35 * sizeFactor; // size of the main object's body
  let b = 20 * sizeFactor;
  fill("orange"); // object's color
  rect(mouseX - 10, mouseY - 10, a, 25 * sizeFactor); // object is moved by the mouse
  fill("#bdcdd0");
  circle(mouseX + 25 * sizeFactor, mouseY - 10, b);
  circle(mouseX - 13 * sizeFactor, mouseY - 10, b);

}

function background1(){
  fill("green"); 
  triangle(320, 750, 600, 200, 880, 750);
  triangle(160, 650, 440, 100, 720, 650);
  triangle(-100, 650, 180, 100, 460, 650);
  triangle(-360, 450, -80, -100, 200, 650);
  fill("yellow");
  circle(550, 30, 150);
}

function background2(){
  fill("white");

  circle(100, 100, 5);
  circle(200, 50, 5);
  circle(400, 120, 5);
  circle(600, 80, 5);

  fill(230);
  circle(550, 80, 100);
}
function background3(){
  fill("white");
  rect(0, 350, width, 150);

  fill(150);
  circle(200, 400, 60);
  circle(400, 420, 40);
}
function background4(){

  fill(180);
  rect(0, 350, width, 150);
  fill(150);
  circle(200, 400, 60);
  circle(400, 420, 40);
}

//      Draw Loop  
function draw() {

  if(currentBack === 0){
    background("skyblue");
    background1();
  }
  else if(currentBack === 1){
    background(20,30,80);
    background2();
  }
  else if(currentBack === 2){
    background(180, 220, 255);
    background3();
  }
  else if(currentBack === 3){
    background(100);
    background4();
  }
  sky();
  objectBody();
  // Artist name
  fill("black");
  textSize(18);
  text("Noah Jeong", 10, height - 10);
  
}

function mousePressed(){

// middle click -> change background
  if(mouseButton === CENTER){
    currentBack++;
    if(currentBack > 3){
      currentBack = 0;
    }
  }

  // left click -> grow
  if(mouseButton === LEFT){
    sizeFactor += 0.1;
  }
  // right click -> shrink
  if(mouseButton === RIGHT){
    sizeFactor -= 0.1;
  }
  // limit size
  if(sizeFactor < 0.5){
    sizeFactor = 0.5;
  }
  if(sizeFactor > 2){
    sizeFactor = 2;
  }
}
// clickable name
  if(mouseX < 150 && mouseY > height - 30){
    window.open("https://www.youtube.com/watch?v=dQw4w9WgXcQ");
  }

// keyboard
  function keyPressed(){
    // press any r to reset background
    if(key === 'r' || key === 'R'){
      currentBack = 0;
    }
  }
