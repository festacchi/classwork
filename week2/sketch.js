//define ball
let circleX;
let circleY;
let circleColor;
let squareX;
let squareY;
let squareColor;

//rules
//if the X position of the circle is less than 100 a square must appear
//if the sketch runs for more than 100 frames you're too slow
 

function setup() {
  createCanvas(400, 400);
  
  setPositionAndColor(); //sets position and        color of ball
}

function setPositionAndColor(){
  //randomness for position and color
  circleX = random(0, width);
  circleY = random(0, height);
  circleColor = color(random(1, 256), random(1, 256),random(1, 256));
  
  squareX = random(0, 250);
  squareY = random(0, 250)
  squareColor =color(random(1, 256), random(1, 256),random(1, 256));
}

function draw() {
  background(10);
   fill(circleColor);
  circle(circleX, circleY, 100);
  
  if (circleX <= 100 ){
    square(squareX, squareY, 50);
    fill(squareColor);
    squareX = (squareY + 1) % height
    squareX = frameCount
  } 
  
  if (frameCount >= 100){
    fill('red');
    text('too slow!', 200, 200);
  }
  
  } // end for draw

function mousePressed() {
  setPositionAndColor();
}