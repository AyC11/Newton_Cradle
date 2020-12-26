const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var roof;
var bob1,bob2,bob3,bob4,bob5;
var rope1,rope2,rope3,roper4,rope5;
var bobDiameter=900;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	roof=new Roof(370,70,560,50);
  bob1=new Bob(164,600,90);
	bob2=new Bob(254,600,90);
	bob3=new Bob(344,600,90);
	bob4=new Bob(434,600,90);
	bob5=new Bob(524,600,90);
	rope1=new Rope(bob1.body,roof.body,-100*2,12);
	rope2=new Rope(bob2.body,roof.body,-55*2,12);
	rope3=new Rope(bob3.body,roof.body,-12*2,12);
	rope4=new Rope(bob4.body,roof.body,35*2,12);
	rope5=new Rope(bob5.body,roof.body,80*2,12);
	Engine.run(engine);
  var render = Matter.Render.create({
	  element: document.body,
	  engine: engine,
	  options: {
	    width: 800,
	    height: 700,
	  }
	});
}


function draw() {
  rectMode(CENTER);
  background(rgb(230,230,230));
  Engine.update(engine);
  roof.display();
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
  //keyPressed();
  drawSprites();
 

}
function keyPressed() {
  if (keyCode === UP_ARROW) {
    Matter.Body.applyForce(bob5.body, bob5.body.position,{x:15,y:-5});
   }
 }

