const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
var engine,world;
var ground;
var box1;

function setup(){
    createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;
    
   box1 = new box (200,200,50,50);
  
ground = new Ground(200,390,400,20);
   

}
function draw(){
    background("black");
    Engine.update(engine);
    box1.display();
    ground.display();

   

    
}