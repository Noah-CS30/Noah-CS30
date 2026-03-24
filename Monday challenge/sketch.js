// Monday challenge 
// Your Name

let items = [];
let provinces = new map();
let currentP = "SK";

function setup() {
  createCanvas(200, 200);

  for (let i = 0; i < 20; i++){
    let item = {
      x: random(width - 60),
      y: random(height),
      speedY: random(1,3),
      basePrice : random(10,100),
      name : "Item" + i
    };
    items.push(item);
  provinces.set("SK", {tax: 1.11});
  provinces.set("AB", {tax: 1.05});
  provinces.set("ON", {tax: 1.13})
  }
}

function draw(){
  background(230);

  let rules = provinces.get(currentP);

  for( let i = 0; i < items.length; i++){
    items[i].y += items[i].speedY;
    items[i].y = 0;
  }

  fill(255);
  rect(items[i].x, items[i].y, 60, 40)

  fill(0);
  textAlign(CENTER, CENTER);
  text(items[i].name, items[i].x + 30, items[i].y + 30);
  let totalP = items[i].basePrice * rules.tax;
  
}

function keyPressed() { 
  if(key === '1'){
    currentP = "SK";
  }
  else if(key === '2'){
    currentP = "AB";
  }
  else if(key === '3'){
    currentP = "ON";
  }
}