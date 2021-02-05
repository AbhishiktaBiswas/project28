
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint=Matter.Constraint;
var treeObj, stoneObj,groundObject, slingshot;
var mango1,mango2,mango3,mango4,mango5,mango6,mango7;
var world,boy;


function preload(){
	boy=loadImage("images/boy.png");
  }

function setup() {
	createCanvas(1300, 600);
	engine = Engine.create();
	world = engine.world;

	mango1=new mango(1100,50,30);
	mango2=new mango(1190,200,30);
	mango3=new mango(999,250,30);
	mango4=new mango(1025,99,30);
	mango5=new mango(1107,150,30);
	mango6=new mango(1150,108,30);
	mango7=new mango(950,200,30);

	treeObj=new tree(1050,580);
	groundObject=new ground(width/2,600,width,20);
	stoneObj=new stone(240,410,20);

  slingshot = new Slingshot(stoneObj.body,{x:240,y:400});
   

	Engine.run(engine);

}

function draw() {

  background(230);
  //Add code for displaying text here!
  text ("Press Space to get a second Chance to Play!!", 100,100);

  image(boy ,200,340,200,300);
  
  treeObj.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();

  stoneObj.display();
  slingshot.display();
  groundObject.display();

detectCollision(stoneObj,mango1);
detectCollision(stoneObj,mango2);
detectCollision(stoneObj,mango3);
detectCollision(stoneObj,mango4);
detectCollision(stoneObj,mango5);
detectCollision(stoneObj,mango6);
detectCollision(stoneObj,mango7);
}

function detectCollision(stone,mango){
  mangoBodyPosition = mango.body.position;
  stoneBodyPosition = stone.body.position;

  var distance=dist(stoneBodyPosition.x,stoneBodyPosition.y,mangoBodyPosition.x,mangoBodyPosition.y)
  if(distance<=mango.r+stone.r){
    Matter.Body.setStatic(mango.body,false);

  }
}

function mouseDragged(){
  Matter.Body.setPosition(stoneObj.body,{x:mouseX,y:mouseY});
}

function mouseReleased(){
  slingshot.fly();
}

function keyPressed(){
  if (keyCode === 32){
    Matter.Body.setPosition(stoneObj.body,{x:235,y:420});
    slingshot.attach(stoneObj.body);
  }
}

