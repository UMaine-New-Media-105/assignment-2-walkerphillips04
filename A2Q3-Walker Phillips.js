function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(100);
 //Main Star
  drawStar(50, 30, 0.9);
  //small star
  drawStar(0, 0, 0.2);
}
function drawStar(x, y, size) {
  push();
  translate(x, y);
  scale(size);
  fill("red");
  beginShape();
  angleMode(DEGREES);
  noStroke();
  rect(140, 100, 130);
  rotate(45);
  rect(190, -100, 140);

  pop();
}
