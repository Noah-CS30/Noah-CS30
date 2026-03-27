let eastbound = [];
let westbound = [];

function setup() {
  createCanvas(800, 400);
  
  // Populate Eastbound Vehicles (Top Lane)
  for (let i = 0; i < 20; i++) {
    eastbound.push(new Vehicle(random(width), random(50, 180), 1));
  }
  
  // Populate Westbound Vehicles (Bottom Lane)
  for (let i = 0; i < 20; i++) {
    westbound.push(new Vehicle(random(width), random(220, 350), 0));
  }
}

function draw() {
  drawRoad();

  // Process Eastbound
  for (let v of eastbound) {
    v.action();
  }

  // Process Westbound
  for (let v of westbound) {
    v.action();
  }
}

function drawRoad() {
  background(50); // Asphalt
  stroke(255);
  strokeWeight(4);
  
  // Dashed white line
  for (let i = 0; i < width; i += 40) {
    line(i, height / 2, i + 20, height / 2);
  }
}

class Vehicle {
  constructor(x, y, direction) {
    this.x = x;
    this.y = y;
    this.direction = direction; // 0 for Left, 1 for Right
    this.type = floor(random(2)); // 0: Car, 1: Truck
    this.c = color(random(255), random(255), random(255));
    
    // Set initial speed based on direction
    this.xSpeed = (this.direction === 1) ? random(2, 5) : random(-5, -2);
  }

  display() {
    noStroke();
    fill(this.c);
    if (this.type === 0) {
      // Draw Car (Simple Rectangle)
      rect(this.x, this.y, 40, 20);
      fill(0); rect(this.x + 5, this.y - 2, 10, 5); // Wheels
    } else {
      // Draw Truck (Two Rectangles)
      rect(this.x, this.y, 60, 25);
      rect(this.x + 40, this.y - 10, 20, 20); // Cab
    }
  }

  move() {
    this.x += this.xSpeed;

    // Wrap around logic
    if (this.x > width) this.x = -60;
    if (this.x < -60) this.x = width;
  }

  speedUp() {
    if (this.direction === 1 && this.xSpeed < 15) {
      this.xSpeed += 0.2;
    } else if (this.direction === 0 && this.xSpeed > -15) {
      this.xSpeed -= 0.2;
    }
  }

  speedDown() {
    if (this.direction === 1 && this.xSpeed > 0.5) {
      this.xSpeed -= 0.2;
    } else if (this.direction === 0 && this.xSpeed < -0.5) {
      this.xSpeed += 0.2;
    }
  }

  changeColor() {
    this.c = color(random(255), random(255), random(255));
  }

  action() {
    this.move();
    
    // 1% chances (0.01)
    if (random(1) < 0.01) this.speedUp();
    if (random(1) < 0.01) this.speedDown();
    if (random(1) < 0.01) this.changeColor();
    
    this.display();
  }
}