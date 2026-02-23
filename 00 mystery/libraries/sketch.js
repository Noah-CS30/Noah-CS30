// Bascis of Coordinate Systems
// Your Name
// In python, we wrote "run-to-completion"
//         ( Start at top, end at the bottom)
//
//  In p5.js we write "interactive"
//  setup() -> run once, at the start
//  draw() -> runs over and over(after setup)
//                     targeting 60 times per second
//
// ---------- glboal variable section -----------------
// we can decleare variables here
// we can initialize variables with
//          simple data types 
//          screen is updated at bottom of draw
let circleX = 200;

function setup() {
  createCanvas(500, 400);
}

function draw() {
  // repeats over and over (automatically) 60fps
  background(0); //wipes the screen
 // drawTwoCirvles();
  fiveCircles();
//       x        y   dia

//      R    G    B
  fill(200, 100, 20);
  stroke("#FF04")
  circle(circleX, 100, 50);
 

}

function fiveCircles(){
  circle(10,20,30);
  rect(100,160,100,30);


}

function drawTwoCircles(){
  fill("red");
  stroke("#FF04")
  circle(circleX, 100, 50);
  circle( width/2, height/2, 200);
 
}