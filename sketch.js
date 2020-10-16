
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var dustbinObj, paperObject,groundObject	
var world;


function setup() {
	createCanvas(1600, 700);
	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;
	
	paperObject=new paper(400,450,70);
	groundObject=new ground(width/2,670,width,20);
	dustbinObj=new dustbin(1300,690);
	//Create a Ground
	

	
  
}


function draw() {
  rectMode(CENTER);
  background(230);
 Engine.update(engine);
  
  paperObject.display();
  groundObject.display();
  dustbinObj.display();

  
  
 
  
  
 
}

function keyPressed() {
  	if (keyCode === UP_ARROW) {

    	Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:130,y:-145});

    
  	}
}





