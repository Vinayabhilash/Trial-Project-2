
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var tree, treeImg;
var boy, boyImg;
var stone1;

function preload(){
treeImg = loadImage("tree.png");
boyImg = loadImage("boy.png");

}
function setup() {
  createCanvas(800, 700);
	engine = Engine.create();
	world = engine.world;
 
  tree = createSprite(500, 400, 30, 60);
  tree.addImage("treeImage", treeImg);
  tree.scale = 0.5;

  boy = createSprite(100, 600, 30, 60);
  boy.addImage("boyImage", boyImg);
  boy.scale = 0.15;

  stone1 = new Stone(boy.body,{x:200, y:20});
}


function draw() {
  rectMode(CENTER);
  background(0);
  stone1.display();
  drawSprites();
 
}
function mouseDragged(){
  Matter.Body.setPosition(boy.body, {x:mouseX, y:mouseY})
}

function mouseReleased(){
  stone1.fly()
}


