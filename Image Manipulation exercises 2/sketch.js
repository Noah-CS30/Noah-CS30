// Project Title

let pixel = [];
let myImage;

function preload(){
  myImage = loadImage("assets/race.jpg");
}

function setup() {
  createCanvas(myImage.width, myImage.height);
  noLoop();
}

function draw() {
  background(220);
  image(myImage, 0,0);
  loadPixels();
  for(let i = 0; i < myImage.width; x++){
    for(let k = 0; k < myImage.height; k++){
      if ( i >= width / 2){
        let index = ( i + k * width) * 4;
        pixels[index + 1] = 0;
      }
    }
  }

  myImage.updatePixels();



}
