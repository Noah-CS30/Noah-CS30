// car car car
// Noah
// Date
//

let eastbound = [];
let westbound = [];
let trafficL;

function setup() {
  createCanvas(800, 400);
  rectMode(CENTER);

  trafficL = new TrafficL();
  for ( let i = 0; i < 20; i++){
    eastbound.push(new Cars(random(width), random(80, 180), 1));
    westbound.push(new Cars(random(width), random(220, 320), 0));
  }
}
function draw() {
  drawR();
  trafficL.update();
  trafficL.display();

  for (let k of eastbound){
    k.action(trafficL.isRed);
  }

  for ( let k of westbound){
    k.action(trafficL.isRed);
  }  
}

function mousePressed(){
  if(keyIsDown(SHIFT)){
    westbound.push(new Cars(mouseX, mouseY, 0));
  }
  else{
    eastbound.push(new Cars(mouseX, mouseY, 1));
  }
}
function drawR(){
  background(50);
  stroke(255);

  // Dashed white line
  for (let i = 0; i < width; i+= 40){
    line(i, height / 2, i + 20, height / 2);
  }
}
function keyPressed(){
  if ( key === ' '){
    trafficL.turnRed();
  }
}
  class Cars{
    constructor(x,y,direction){
      this.x = x;
      this.y = y;
      this.direction = direction;
      this.type = floor(random(2));
      this.c = color(random(255), random(255), random(255));

      if ( this.direction === 1){
        this.xSpeed = random(2, 5);
      } else{
      this.xSpeed = random(-5, -2);
      }
    }
    display() {
      fill(this.c);
      noStroke();
      if(this.type === 0){
        rect(this.x , this.y, 40, 20, 5);
      }
      else{
        rect(this.x, this.y, 60, 30, 2);
      }
    }

    
    move(){
      this.x += this.xSpeed;
      if(this.x > width + 50) this.x = -50;
      if(this.x < -50) this.x = width + 50;
    }

    speedUp(){
      if ( this.direction === 1 && this.xSpeed < 15) this.xSpeed += 0.2;
      if ( this.direction === 0 && this.xSpeed > -15) this.xSpeed -= 0.2;
    }
    
    speedDown(){
      if ( this.direction === 1 && this.xSpeed < - 0.5) this.xSpeed += 0.2;
      if ( this.direction === 0 && this.xSpeed > 0.5) this.xSpeed -= 0.2;
    }

    changeC(){
      this.c = color(random(255), random(255), random(255));
    }

    action(isRed) {
      if(!isRed){
        this.move();
        if ( random(100) < 1) this.speedUp();
        if ( random(100) < 1) this.speedDown();
        if ( random(100) < 1) this.changeC();
      }
      this.display();
    }
  }
  class TrafficL{
    constructor(){
      this.isRed = false;
      this.timer = 0;
    }
    turnRed(){
      this.isRed = true;
      this.timer = 120;
    }
    update(){
      if(this.isRed){
        this.timer--;
        if(this.timer <= 0){
          this.isRed = false;
        }
      }
    }
  display(){
    push();
    translate(width - 50, 60);
    fill(30);
    rect(0,0,40,80,5);

    // red light 
    if(this.isRed === true){
      fill(255,0,0);
    }
    else{
      fill(50,0,0);
    }
    ellipse(0,-15, 25);

    // green light
    if(this.isRed !== true){
      fill(0,255,0);
    }
    else{
      fill(0,50,0);
    }
    ellipse(0,15, 25);

    pop();

  }      
}
