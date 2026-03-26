// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let myPlanet;

function setup() {
  createCanvas(windowWidth, windowHeight);
  angleMode(DEGREES);
  myPlanet = new Planet(width/2, height/2);
}

function draw() {
  background(220);
  myPlanet.display();
}

function mousePressed(){
    myPlanet.createMoon();
    if(keyIsPressed && keyCode === SHIFT){
      myPlanet = new Planet(width /2, height /2);
    }
}

function keyPressed(){
  if(keyCode !== SHIFT){
    myPlanet.x = mouseX;
    myPlanet.y = mouseY;
  }
}

class Planet{
  //constructor
  constructor(x,y){
    this.x = x;
    this.y = y;
    this.s = 100;
    this.moons = [];
  }

  // class methods
  createMoon(){
    this.moons.push(new Moon());
  }
  display(){
    //draw the planet + all of its moons
    circle(this.x, this.y, this.s);

    for(let m of this.moons){
      m.update(this.x,this.y);
    }

  }
}

class Moon{
  constructor(){
    this.speed = random(1,5);
    this.angle = 0;
    this.orbitRadius = random(100,200);
    this.s = random(10,50);
  }
  
  move(){
    this.angle += this.speed;
  }

  display(x,y){
    push();
    translate(x,y);
    rotate(this.angle);
    circle(this.orbitRadius,0,this.s);
    pop();
  }

  update(x,y){
    //helper method to handle all internal
    //method calls
    this.move();
    this.display(x,y);

  }
}