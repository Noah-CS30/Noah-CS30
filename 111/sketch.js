function setup() {
  createCanvas(200,200);
}

function drawRect1()
{
  let x = frameCount * 1;
  translate(x, 0);
  // for(let i = 0; i < 20)
  rect(0,0,20,20);
}


function draw() {
  background(220);
  drawRect();
}
