var ball = {
  x: 20,
  y:20,
  radius:25,
  velocityx:-0,
  velocityy:0,
  colour:["violet", "red", "blue", "green"],
}
function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  fill(ball.colour[2]);
  circle(ball.x, ball.y, ball.radius);
  ball.velocityx = 2
  //f(ball.x >0 && ball.x<400 ){
    ball.x = ball.x+ball.velocityx;
 // }

  

  if(ball.x > 400 ){
   ball.x = 20
  }


  
}