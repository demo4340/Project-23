const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var canvas;
var playerBaseObject, playerObject;
var computerBaseObject, computerPlayerObject;

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  
   //Initialising Engine
  engine = Engine.create();
  world = engine.world;
	
   //Create Player Base and Computer Base Object
  playerBaseObject = new PlayerBase(300, random(450, height - 300), 180, 150);
  playerObject = new Player (285, playerBaseObject.body.position.y - 153, 50, 180);

  computerBaseObject = new ComputerBase (1200, random(450, height - 300), 180, 150);
  computerPlayerObject = new ComputerPlayer (1185, computerBaseObject.body.position.y -153, 50, 180);

 }

function draw() {

  background(180);

  Engine.update(engine);

  // Title
  fill("#FFFF");
  textAlign("center");
  textSize(40);
  text("EPIC ARCHERY", width / 2, 100);

   //Display Playerbase and computer base 
  playerBaseObject.display();
  computerBaseObject.display();

   //display Player and computerplayer
  playerObject.display();
  computerPlayerObject.display();

}
