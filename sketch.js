
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint;
const Mouse = Matter.Mouse;


const MouseConstraint = Matter.MouseConstraint;
var world, engine, canvas;
var mConstraint;


function setup() {
	canvas = createCanvas(windowWidth / 2, windowHeight / 1.5);
  engine = Engine.create();
  world = engine.world;

  let canvasmouse = Mouse.create(canvas.elt);
  canvasmouse.pixelRatio = pixelDensity();
  let options = {
    mouse: canvasmouse
  };
  mConstraint = MouseConstraint.create(engine, options);
  World.add(world, mConstraint);
	//Create the Bodies Here.

bob1=new Pendulum(340,400,"red");
bob2=new Pendulum(380,400,"purple");
bob3=new Pendulum(420,400,"blue");
bob4=new Pendulum(460,400,"black");
bob5=new Pendulum(500,400,"yellow");

rope1=new Sling(bob1.body,{x:340,y:180});
rope2=new Sling(bob2.body,{x:380,y:180});
rope3=new Sling(bob3.body,{x:420,y:180});
rope4=new Sling(bob4.body,{x:460,y:180});
rope5=new Sling(bob5.body,{x:500,y:180});


	
  
}


function draw() {
  rectMode(CENTER);
  background("yellow");
  Engine.update(engine);
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
  
 
}
/*function mouseDragged() {
 Body.setPosition(bob1.body, { x: mouseX, y: mouseY });
}*/


