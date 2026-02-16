// add steering
// patterns used in simulations:
// acc = 0
// acc += forces 
// vel += acc
// pos += vel

// let x, y;
// let vx, vy;
// let ax, ay; //acceleration variables
let pos, vel, acc;

let maxSpeed = 2;
let maxForce = 0.5;//how strongly we can steer each frame
//force mroe than gravity 

function setup() {
  createCanvas(600, 600);
  
  // x = width * 0.2;
  // y = height * 0.3;
  
  pos = createVector(width * 0.3,height * 0.2);
  
  // velocity is constant here (no forces);
//   vx = 3;
//   vy = 1;
  vel = createVector(2, 0);
  
  //acceleration is also constant
  // ax = 0.03;
  // ay = 0.02;
  acc = createVector(0,0);
  
  
}

function draw() {
  background(63, 71, 232);
  
  // reset acceleration for each frame
  acc.mult(0);

  //steering force
  let target = createVector(mouseX, mouseY);
  
  //desired velocity: direction to target at max speed
  let desired = p5.Vector.sub(target, pos);
  desired.setMag(maxSpeed);
  
  //steering force : how to change current velocity to become desired velocity
  let steer = p5.Vector.sub(desired,vel);
  steer.limit(maxForce);
  
  //add steer to acceleration
  acc.add(steer);
  
  //add forces into acceleration
  let gravity = createVector(0, 0.01);
  let wind = createVector(0.2, 0.2);
  
  acc.add(gravity);
  acc.add(wind);

  // add friction, opposes velocity
  let friction = vel.copy();
  
  
  if (friction.mag() > 1){
  friction.normalize(0.05); //we get direciton only
  friction.mult(10); //reverses directionand sets strength
  acc.add(friction); //friciton is just another force
  //avoid normalizing a near zero vector, just causes problems
  }
  

  //velocity remembers acceleration
//   vx += ax;
//   vy += ay;
  vel.add(acc);
  vel.limit(maxSpeed);
  
  //position remembers velocity
  // x += vx;
  // y += vy;
  pos.add(vel);
  
  // simple bounce
  if (pos.x > width - 20 || pos.x < 20){
    vel.x *= -10;
  }
  if (pos.y > height -20 || pos.y < 20){
    vel.y *= -10;
  }
  
  //draw line from target to object
  stroke(255,0 ,0);
  line(pos.x, pos.y, target.x, target.y);
  noStroke();
  
  fill(260);
  noStroke();
  circle(pos.x,pos.y,24);
  
}