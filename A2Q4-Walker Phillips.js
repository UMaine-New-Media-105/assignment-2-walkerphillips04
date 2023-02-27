function setup() {
  createCanvas(600, 400);
}

function draw() {
  background(220);

  fill("white");
  rect(0, 133.33, 600, 133.33);
  fill("green");
  rect(0, 0, 600, 133.33);
  fill("black");
  rect(0, 266.66, 600, 133.33);
  //these create the palestine part of the flag.

  fill("yellow");
  triangle(0, 0, 0, 400, 300, 200);

  fill("lightBlue");
  triangle(0, 50, 0, 350, 230, 200);
  // I took this color scheme from the Washington state flag and replaced the red triangle on the Palestine flag.
}
