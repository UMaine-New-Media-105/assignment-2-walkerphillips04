function setup() {
  createCanvas(400, 400);
}

function draw() {
  //background
  background("grey");
  strokeWeight(0);
  
addRow1();
  
addRow2();
  
addRow3();
  
addRow4();
  
addRow5();
}
function addRow1(){
//row 1
fill("hsla(3,100%,40%,1)");
rect(0, 0, 80, 80);
rect(80, 0, 80, 80);
rect(160, 0, 80, 80);
rect(240, 0, 80, 80);
rect(320, 0, 80, 80);
}
function addRow2(){  
//row 2 black
fill("black");
rect(0, 80, 80, 80);
rect(320, 80, 80, 80);  
// row 2 red
fill("hsla(3,100%,35%,1)");
rect(80, 80, 80, 80);
rect(160, 80, 80, 80);
rect(240, 80, 80, 80);
}
function addRow3(){  
//row 3 black
fill("black");
rect(0, 160, 80, 80);
rect(160, 160, 80, 80);
rect(320, 160, 80, 80);
//row 3 red
fill("hsla(3,100%,30%,1)");
rect(80, 160, 80, 80);
rect(240, 160, 80, 80);
}
function addRow4(){
//row 4 black
fill("black");
rect(0, 240, 80, 80);
rect(160, 240, 80, 80);
rect(320, 240, 80, 80);
//row 4 red
fill("hsla(3,100%,25%,1)");
rect(80, 240, 80, 80);
rect(240, 240, 80, 80);
}
function addRow5(){
//row 5 black
fill("black");
rect(80, 320, 80, 80);
rect(240, 320, 80, 80);
//row 5 red
fill("hsla(3,100%,20%,1)");
rect(0, 320, 80, 80);
rect(160, 320, 80, 80);
rect(320, 320, 80, 80);
}
