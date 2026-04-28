

let pixel = [];
let myImage;

function preload(){
  myImage = loadImage("assets/nuit.jpg");
}

function setup() {
  createCanvas(650, 650);
}

function draw() {
  background(220);
  image(myImage,0,0);
  loadPixels();
  for(let i = 0; i < pixels.length; i += 4){
    
  }
}
