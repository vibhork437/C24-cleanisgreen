const Engine = Matter.Engine
const World = Matter.World
const Bodies = Matter.Bodies

var engine,world
var ball

function setup() {
 canvas = createCanvas(1200,800);
 engine =   Engine.create();
 world = engine.world;

 paper = new Paper(200,720,30);
 ground = new Ground(750,750,1700,20);
dustbin1 = new Dustbin(750,730,200,20)
dustbin2 = new Dustbin(650,690,20,100)
dustbin3 = new Dustbin(850,690,20,100)
 

}

function draw(){
    background(0);
    Engine.update(engine);
    rectMode(CENTER);
    paper.display();
    ground.display();
    dustbin1.display();
    dustbin2.display();
    dustbin3.display();
}

function keyPressed(){
if(keyCode === UP_ARROW){
    Matter.Body.applyForce(paper.body,paper.body.position,{x:145,y:-125});
}

}