
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(1500, 750);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	roof= new Roof(width/2,170,width,20)
	bobObject1= new Bob(370,350);
	bobObject2= new Bob(370,620);
	bobObject3= new Bob(370,640);
	bobObject4= new Bob(370,660);
	bobObject5= new Bob(370,680);
	rope1= new Rope(bobObject1.body,roof.body,-bobDiameter*2,0);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(230);
  roof.display();
  bobObject1.display();
  bobObject2.display();
  bobObject3.display();
  bobObject4.display();
  bobObject5.display(); 
  rope1.display();
  drawSprites();
 
}



