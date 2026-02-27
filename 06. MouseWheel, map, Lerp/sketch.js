// MouseWheel, Map, Lerp
// Noah
// Feb 26

let x, y;
let diameter = 50;


function setup() {
  createCanvas(windowWidth, windowHeight);
  x = width/2; y = height/2;
  noFill();
  strokeWeight(2);



}

function draw() {
  background(220, 20);

  x = lerp(x, mouseX, 0.15);
  y = lerp(y, mouseY, 0.15);
  line(x,y,mouseX,mouseY);
  

// x = lerp(0, width, 0.15);

  let r = map(x,0, width, 0, 255);
  let g = map(y,0, height, 0, 255);
  let b = 120;
  stroke(r,g,b);

  circle(x,y,diameter);
  triangle();

}

function mouseWheel(event){
  // negative : scroll up -100, -200, -300
  // postive : scroll down 100, 200, 300
  print(event.delta);
  if(event.delta < 0){ // UP
    diameter += 5;
  }
  else{    // DOWN
    diameter = max(10, diameter-5);
  }

}