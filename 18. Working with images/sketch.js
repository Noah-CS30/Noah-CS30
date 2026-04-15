// Project Title
// Noah
// April 14 2026
// How to load Images
// How to play animations

let lionL, lionR;
let dir = "left"
let pinImages = [];
let current = 0; // pinwheel curr index

async function loadAssets() {
  //load lions
  lionL = loadImage("assets/lion-left.png");
  lionR = loadImage("assets/lion-right.png");

  //pinwheel images
  for(let i = 0; i <=8; i++){
    pinImages.push(loadImage("assets/pin-0"+i+".png"));
  }
  pinImages.push(loadImage("assets/pin00,png"));
  pinImages.push(loadImage("assets/pin01,png"));
  pinImages.push(loadImage("assets/pin02,png"));
  pinImages.push(loadImage("assets/pin03,png"));
  pinImages.push(loadImage("assets/pin04,png"));
  pinImages.push(loadImage("assets/pin05,png"));
  pinImages.push(loadImage("assets/pin06,png"));
  pinImages.push(loadImage("assets/pin07,png"));
  pinImages.push(loadImage("assets/pin08,png"));

  
}

async function setup() {
  createCanvas(windowWidth, windowHeight);
  await loadAssets();
  imageMode(CENTER); // center referenced images
  noCursor();
}

function draw() {
  background(220);
  lion();
  pinwheel();

}
function pinwheel(){

  image(pinImages[current], width/2, height*0.7);
  if(frameCount %3 === 0){
    current = (current + 1) % 9;
  }
//  for(let i = 0; i <=8; i++){
//    image(pinImages[i], width /2 , height * 0.7);
//  }
}
function lion(){
    // update state variable based on mouse mvement
  if(movedX < 0)
    {
      dir = "left";
    }
      
    else if(movedX > 0){
      dir = "right";
    }
    
    // interpreting the state variable
    
    if(dir === "left"){
      image(lionL,mouseX, mouseY, lionL.width /2 , lionL.height / 2);
    }
    else{
      image(lionL,mouseX, mouseY, lionL.width /2 , lionL.height / 2);
    }
      
}