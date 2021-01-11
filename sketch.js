
const e = Matter.Engine;
const w = Matter.World;
const Bodies = Matter.Bodies;
const b = Matter.Body;
const c=Matter.Constraint;
var myEngine,myWorld,ball1,ball2,ball3,ball4,ball5,thread1,thread2,thread3,thread4,thread5,ceiling;

function setup() {
	createCanvas(400, 400);
	myEngine=e.create();
	myWorld=myEngine.world;
	ceiling=new roof(200,50);
	ball1=new ball(140,200);
	thread1=new thread(ball1.body,{x:140,y:50});	
	ball2=new ball(170,200);
	thread2=new thread(ball2.body,{x:170,y:50});
	ball3=new ball(200,200);
	thread3=new thread(ball3.body,{x:200,y:50});
	ball4=new ball(230,200);
	thread4=new thread(ball4.body,{x:230,y:50});
	ball5=new ball(260,200);
	thread5=new thread(ball5.body,{x:260,y:50});
}

function draw() {
  rectMode(CENTER);
  background("green");
  Matter.Engine.update(myEngine);
  ceiling.display();
  ball1.display();
  thread1.display();
  ball2.display();
  thread2.display();
  ball3.display();
  thread3.display();
  ball4.display();
  thread4.display();
  ball5.display();
  thread5.display();
}

function keyPressed()  {
  if(keyCode == LEFT_ARROW)  {
    Matter.Body.applyForce(ball1.body,ball1.body.position,{x:-200,y:-50});
  }
}



