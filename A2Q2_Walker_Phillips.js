function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
fill("red")
  push(); 
  translate(width / 2, height / 2);
  beginShape();
  for (let i = 0; i < 8; i++) {
    let angle = i * TWO_PI / 8; 
    let x = sin(angle) * 100; 
    let y = cos(angle) * 100; 
    vertex(x, y); 
    angle += TWO_PI / 16; 
    x = sin(angle) * 50; 
    y = cos(angle) * 50; 
    vertex(x, y); 
  }
  endShape(CLOSE); 
  pop(); 
}
