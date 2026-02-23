// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

//global variable section
let textShade = 225;
let textScale = 40;
let bgcolor = "grey";


function setup() {
  createCanvas(windowWidth, windowHeight);
}

function displayMouse(){
  // this function will report some
  // system variables related to mouse
  // onto the screen via text()

  // mouseX, mouseY -> sotre current mouse pos
  // mouseIsPressed + boolen : button pressed?
  //          good for mouseHELD events ...

  // try using mouseIsPressed to change size
  // because draw() runs 60 time/s, usually 
  // mouseIsPressed will be checked 4~10 times
  // per click event. 

  if(mouseIsPressed){
    textScale = int(random(10,100)); // 10~99

  }


  textSize(textScale);
  fill(textShade);
  text(mouseX + "." + mouseY + "." + mouseIsPressed + "." + mouseButton, mouseX, mouseY);
}

function mousePressed(){
  // this is a p5 function
  // automatically called exactly ONCE
  // 
  textShade = int(random(0,225));
}

function displayKeyboard(){
  // we will use this funciton to inspect
  // some of p5's keyboard capabilities
  //
  // keyIsPressed -> is a keyboard button press?
  // key          -> last pressed key (non-coded)
  // keyCode      -> last pressed coded key

  if(keyIsPressed){
    //something was pressed, Next, check which key/keycode
    if(key === ""){
      bgcolor = color(random(225),random(225),random(225));
    }
  }


  textSize(30);
  textAlign(CENTER, CENTER);
  let t = keyIsPressed + "," + key + "," + keyCode;
  text(t, width/2, height/2);
}

function keyPressed(){
  //called automatically ONCE per keydown event
  if(keyCode === 65){
    bgcolor = color(random(225),random(225),random(225));
  }
}


function draw() {
  // goal : keep draw() tidy!
  background(bgcolor);
  displayMouse();

}
