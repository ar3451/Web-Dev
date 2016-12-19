var posX = 0;
var posY = 0;
var dirY= 5;
var dirX = 2;

function setup() {
  createCanvas(400, 400);
}

function mousePressed() {
  background(random(255), random(255), random(255));
  
  fill(random(255), random(255), random(255));
}

function draw() {
  posX = posX + dirX;
  posY = posY + dirY;

  if (posX > width-25) {
    dirX = dirX* -1;
  }

  else if (posX < 0) {
    dirX = dirX* -1;
  }

  else if (posY > height-25) {
    dirY= dirY* -1;
  }
  
  else if (posY < 0) {
    dirY= dirY*-1;
  }

ellipse(posX,posY,50,50);
}