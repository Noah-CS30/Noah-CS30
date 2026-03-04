// PERLIN NOISE PROJECT
// Noah J
// 

let noiseStep = 0.05;
let startOffSet = 0;
let rectWidth = 24;
function setup() {
  createCanvas(windowWidth, windowHeight);

}


function draw() {
  background(220);

  let xOffset = startOffSet; // let it able to move 
  let highestY = height;
  let peakX = 0;
  let ave = 0; // average height 
  let count = 0;
  for(let x = 0; x < width; x += rectWidth){

    // smooth movement 
    let h = noise(xOffset) * height;

    // draw rect 
    fill(0);
    rect(x, height, rectWidth, -h);

    if(height - h < highestY){

      
    }

  }
}


function keyPressed(){ // modify the size of the rect by using specific key. 
 // if() <- increase 
 // if() <- decrease 
}
