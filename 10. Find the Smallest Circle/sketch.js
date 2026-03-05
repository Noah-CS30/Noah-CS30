// Find the Smallest Circle
// Noah J
// March 5

let NUM_CIRCLES = 10;
let circles = [];



function setup() {
  createCanvas(windowWidth, windowHeight);
}


function mcircles(){
  let count = 0;
  while(count < NUM_CIRCLES){
    let x_ = random(0, width);
    let y_ = random(0, height);
    let s_ = random(10, 150);
  //circle(x,y,s);
    let c = {x:x_, y:y_, s:s_};
    circles.push(c);  
    count++;

  }

}

function renderCircle(){
  let smallest = circles[0].s;
  let smallestY = circles[0].y ;
  for (let c of circles){
    noFill();
    mcircles(c.x, c.y, c.s);
  }
  if(c.s < smallest){
    smallest = c.s;
    smallestY = c.y;
  }
fill(0);
stroke(0,255,255); strokeweight(5);
line(0,smallestY, width, smallestY);
text

}

function draw() {
  background(220);
  circle();
  renderCircle();
}
