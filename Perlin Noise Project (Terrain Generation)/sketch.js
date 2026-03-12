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
  let totalH = 0;
  let ave = 0; // average height 
  let count = 0;
  for(let x = 0; x < width; x += rectWidth){

    // smooth movement 
    let h = noise(xOffset) * height;

    // draw rect 
    fill(0);
    rect(x, height, rectWidth, -h);

    if(height - h < highestY){
      highestY = height - h;
      peakX = x + rectWidth / 2; 
    }
    totalH += h;
    count++;
    xOffset += 0.02; // "Step" into the next bit of noise
  }
// Draw the Flag at the peak 
  fill(255,0,0);
  rect(peakX , highestY - 20, 15, 10);
  line(peakX, highestY, peakX, highestY - 20);
  
// Draw the Average line
  stroke(0,0, 255);
  let avg = totalH / count;
  line(0, height - avg, width, height - avg);
  noStroke();

  startOffSet += 0.01; // Pan the terrain for the next frame
}
function keyPressed(){ // modify the size of the rect by using specific key. 
  if(keyCode === LEFT_ARROW) {
    rectWidth -= 2;
  }
  if(keyCode === RIGHT_ARROW){
    rectWidth += 2;
  }
}
