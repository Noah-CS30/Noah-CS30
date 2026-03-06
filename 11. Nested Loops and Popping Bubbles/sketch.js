// Nested Loops
// Noah J
// Date
//

let bubblesSize = 20;
let bubbles = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  populateArrary();
}

function draw() {
  background(50);
  drawBubbles();
}


function drawBubbles(){
  // through through our arrary and display
  // a bubble at each pos
  // possible delete, if mouse is close
  // loop by index bc we want to be able to delete
  for(let i = 0; i < bubbles.length; i++){
    let b = bubbles[i];
    circle(b.x, b.y, bubblesSize);
    textAlign(CENTER, CENTER);
    let d = eDist(b.x, b.y, mouseX, mouseY)
    text(d, b.x, b.y);
    // where in the arrary is b???
    // check if we are overtop of the current
    // bubbles, and then delete if so:
    if(d < bubblesSize / 2) {
      // to delete from array, use,

    }
    
  }
}

function eDist(x1,y1,x2,y2){
  // calculate the straight-line distance
  let a = x1 - x2;    let b = y1 - y2;
  let c = sqrt(pow(a,2) + pow(b,2));
  return c.toFixed(1); // keep 1 dec. place

}

function populateArrary(){
  //simple nested loop test to make
  //ordered pairs :

  for(let x = 0; x <= width; x+= bubblesSize){
  // x: 0, 30, 60  <- right edge
    for(let y = 0; y <= 60; y += 30){
      // y : 0, 30, 60 <- botom edge
      let b = {x:x, y:y};
      bubbles.push(b);

    }
  }

}