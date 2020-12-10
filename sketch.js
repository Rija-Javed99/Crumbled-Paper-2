
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;


var world;


function setup() {
	createCanvas(1600, 700);
	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;
	
	
	//Create a Ground, dustbin, paper
	

	//var render = Render.create
	
	Engine.run(engine);
	Render.run(render);
  
}


function draw() {
  rectMode(CENTER);
  background(230);
 
  
  //display ojects
  
  
 
}

function keyPressed() {
  	if (keyCode === UP_ARROW) {

    	Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:130,y:-145});

    
  	}
}





