const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var myEngine, myWorld;
var ground;
var ball;
function setup() {
  createCanvas(400,400);

  myEngine = Engine.create();    //myEngine.world
  myWorld = myEngine.world;

  var options ={
    isStatic: true
  }
  
  ground = Bodies.rectangle(200,390,400,20, options);
  World.add(myWorld, ground);
 
  var  balloptions ={
    restitution:1
  }
  ball = Bodies.circle(200,0,20,balloptions);
  World.add(myWorld,ball);
}

function draw() {
  background(0);  
  Engine.update(myEngine);
  fill("brown");

  rectMode(CENTER);
  rect(ground.position.x, ground.position.y,400,20);
  fill("yellow");
  ellipseMode(RADIUS);
  ellipse(ball.position.x,ball.position.y,20,20);
  drawSprites();
}