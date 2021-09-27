
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var boyImage;
var groundObj;
var stoneObj;
var mangoObj1,mangoObj2,mangoObj3,mangoObj4,mangoObj5,mangoObj6,mangoObj7,mangoObj8,mangoObj9,mangoObj10;
var treeObj;
var launcherObj;
var mangoBodyPosition;
var stoneBodyPosition;
function preload()

{
	boyImage=loadImage("images/boy.png");
}

function setup() {
	createCanvas(1300, 600);
	

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	groundObj=new Ground(width/2,600,width,20);
	treeObj=new Tree(800,300)
	stoneObj=new Stone(235, 420, 30);
	mangoObj1=new Mango(1100,100,30);
	mangoObj2=new Mango(1170,130,30);
	mangoObj3=new Mango(1000,70,30);
	mangoObj4=new Mango(1100,70,30);
	mangoObj5=new Mango(1140,150,30);
	mangoObj6=new Mango(900,230,40);
	mangoObj7=new Mango(1100,230,40);
	mangoObj8=new Mango(1170,300,40);
	mangoObj9=new Mango(1120,50,40);
	mangoObj10=new Mango(900,160,40);
	launcherObj=new Launcher(stoneObj.body,{x:235,y:420})
	detectCollision(stoneObj,mangoObj1);
	detectCollision(stoneObj,mangoObj2);
	detectCollision(stoneObj,mangoObj3);
	detectCollision(stoneObj,mangoObj4);
	detectCollision(stoneObj,mangoObj5);
	detectCollision(stoneObj,mangoObj6);
	detectCollision(stoneObj,mangoObj7);
	detectCollision(stoneObj,mangoObj8);
	detectCollision(stoneObj,mangoObj9);
	detectCollision(stoneObj,mangoObj10);
}


function draw() {

  rectMode(CENTER);
  background(230);
  groundObj.display();
  image (boyImage,200,340,200,300)
  stoneObj.display();
  treeObj.display();
  mangoObj1.display();
  mangoObj2.display();
  mangoObj3.display();
  mangoObj4.display();
  mangoObj5.display();
  mangoObj6.display();
  mangoObj7.display();
  mangoObj8.display();
  mangoObj9.display();
  mangoObj10.display();
  launcherObj.display();
  drawSprites();
 
}
function mouseDragged(){
	Matter.Body.setPosition(stoneObj.body,{x:mouseX,y:mouseY})
}

function mouseReleased(){
	launcherObj.fly();

}
function keyPressed(){
	if(keyCode===32){
		Matter.Body.setPosition(stoneObj.body,{x:235,y:420})
		launcherObj.attach(stoneObj.body)
	}
}
function detectCollision(lStone,lMango){
	mangoBodyPosition=lMango.body.position
	stoneBodyPosition=lStone.body.position
	var distance=dist(stoneBodyPosition.x,stoneBodyPosition.y,mangoBodyPosition.x,mangoBodyPosition.y)
		if(distance<=lMango.r+lStone.r){
			Matter.Body.setStatic(lMango.body,false)
		}
	
}
