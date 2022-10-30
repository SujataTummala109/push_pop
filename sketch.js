
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

let engine;
let world;
var ground;
function setup()
{
  createCanvas(400,400);
  engine = Engine.create();
  world = engine.world;

  ground = Bodies.rectangle(200,380,400,10, {isStatic: true})
  World.add(world, ground);
  console.log(ground);

ball = Bodies.circle(100,20,40,{restitution: 0.4, frictionAir: 0.58})
  World.add(world, ball);
ground = new Ground (200, 380, 400,10);
   rectMode(CENTER);
   ellipseMode(RADIUS);
}

function draw() 
{
  background(51);
  
 
  Engine.update(engine)
 ground.display()
 ellipse(ball.position.x, ball.position.y, 30)
}

