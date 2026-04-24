// Image Manipulation Exercises

let pixel = [];
let myImage;

function preload(){
  myImage = loadImage("assets/chip.jpg")
}
function setup() {
  createCanvas(650, 650);
}

function draw() {
  background(220);
  image(myImage,0,0);
  loadPixels();
  for(let i = 0; i < pixels.length; i += 4 ){
    let r = pixels[i];
    let g = pixels[i+1];
    let b = pixels[i+2];
 
  if(r > g && r > b){  // red value > green value and blue value
    pixels[i] = 255;
    pixels[i+1] = 0;
    pixels[i+2] = 0;

  }
  else if(g > b){ // greem va;ie > blue value
    pixels[i] = 0;
    pixels[i+1] = 255;
    pixels[i+2] = 0;

  }
  else{ // blue has heighest value
    pixels[i] = 0;
    pixels[i + 1] = 0;
    pixels[i + 2] = 255;
  }
}

  updatePixels();
}
