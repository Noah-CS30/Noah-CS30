// image manipulation
// noah
// April 22, 2026

// Working with Images
// translation b/w 2D and 1D indices
let pixel = [];
let myImage;
let myVideo;

function preload(){
  //called BEFORE setup. Won't conclude
  //untill all loads are complete.
  myImage = loadImage("assets/aviator.png");
}
function setup() {
  createCanvas(640, 480);
  myVideo = createCapture(VIDEO);
  pixelDensity(1);
}

function draw() {
  background(220);
  image(myVideo,0,0);

  // access and modify pixels on the Canvas
  loadPixels();   // dumps data from canvas into array
  background(0);
  textImage();
//boost();

//  for(let i = 0; i < 500; i+=4){
//    pixel[i] = 255;
//  }
//  updatePixels();
}


function textImage(){
  fill(255);
  let scaleAmount = 2;
  textSize(scaleAmount);

  for(let x = 0; x < width; x += scaleAmount){
    for(let y = 0; y < height; y += scaleAmount){
      let avg = getAvg(x,y); // 0~255
      if(avg > 210) text("%",x,y);
      else if(avg > 170) text("T",x,y);
      else if(avg > 130) text("x",x,y);
      else if(avg > 90) text(":",x,y);
      else if(avg > 45) text(".",x,y);


    }
  }
}
function boost(){
  //brightening filter
  let boostAmount = map(mouseX, 0, width, -100, 100); 
  for(let i = 0; i<pixels.length; i+=4){
    let r = pixels[i] + boostAmount;
    let g = pixels[i+1] + boostAmount;
    let b = pixels[i+2] + boostAmount;
    setPixelOneD(i,r,g,b);
  }

}

function getAvg(x,y){
  // return average intensity of rgb
  // at (x,y).
  let index = (y*width + x);
  let r = pixels[index];
  let g = pixels[index+1];
  let b = pixels[index+2];
  return (r+g+b) / 3
}

function greyscale(){
  // use the average intensity of each pixel
  // to represent it as a shade of grey
  for(let x = 0; x < width; x++){
    for(let y = 0; y < height; y++){
      let avg = getAvg(x,y);
      setPixel(x,y,avg,avg,avg);
    }
  }
}

function setPixel(x,y,r,g,b){
  // x,y -> pixel location
  // r, g, b -> color values
  let index = (y*width) + x;
  setPixelOneD(index,r,g,b);
}

function setPixelOneD(pos, r, g, b){
  // po -> 1D location of the pixel's red component
  //r,g,b -> new color values (0~255) for the pixel 
  pixels[pos] = r;
  pixels[pos+1] = g;
  pixels[pos+2] = b;
}
