const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint
var block = []

function preload() 
{

} 

function setup() 
{
  createCanvas(1200, 800);
  engine = Engine.create();
	world = engine.world;
  superman = new SuperMan(200,200,150,150,-PI/2)
  ground = new Ground(500,500,1000,20)
  monster = new Monster(800,400,150,150)
  block1 = new Block(450,490,30,30)
  block2 = new Block(450,460,30,30)
  block3 = new Block(450,430,30,30)
  block4 = new Block(450,400,30,30)
  block18 = new Block(450,370,30,30)
  block19 = new Block(450,340,30,30)
  block20 = new Block(450,310,30,30)
  block21 = new Block(450,280,30,30)
  block5 = new Block(510,490,30,30)
  block6 = new Block(510,460,30,30)
  block7 = new Block(510,330,30,30)
  block8 = new Block(510,370,30,30)
  block9 = new Block(510,340,30,30)
  block10 = new Block(510,310,30,30)
  block11 = new Block(510,280,30,30)
  block22 = new Block(510,250,30,30)
  block23 = new Block(510,220,30,30)
  block24 = new Block(510,210,30,30)
  block25 = new Block(510,190,30,30)
  block12 = new Block(570,490,30,30)
  block13 = new Block(570,440,30,30)
  block14 = new Block(570,390,30,30)
  block15 = new Block(570,340,30,30)
  block16 = new Block(570,290,30,30)
  block17 = new Block(570,240,30,30)
  block26 = new Block(630,490,30,30)
  block27 = new Block(630,460,30,30)
  block28 = new Block(630,330,30,30)
  block29 = new Block(630,370,30,30)
  block30 = new Block(630,340,30,30)
  block31 = new Block(630,310,30,30)
  block32 = new Block(630,280,30,30)
  block33 = new Block(630,250,30,30)
  block34 = new Block(630,220,30,30)
  block35 = new Block(630,210,30,30)
  block36 = new Block(630,190,30,30)
  block37 = new Block(630,210,30,30)
  block38 = new Block(630,190,30,30)
  

  //for(var z = 510 ; z <= 700 ; z = z+0)
  //{
  //block.push(new Block(450,z,50,50))
  //}

  Engine.run(engine);
}

function draw() 
{
  background(60,200,255);
  superman.display()
  ground.display()
  monster.display();

  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();
  block8.display();
  block9.display();
  block10.display();
  block11.display();
  block12.display();
  block13.display();
  block14.display();
  block15.display();
  block16.display();
  block17.display();
  block18.display();
  block19.display();
  block20.display();
  block21.display();
  block22.display();
  block23.display();
  block24.display();
  block25.display();
  block26.display();
  block27.display();
  block28.display();
  block29.display();
  block30.display();
  block31.display();
  block32.display();
  block33.display();
  block34.display();
  block35.display();
  block36.display();
  block37.display();
  block38.display();

  //for(var z = 0;z < block.length;z++)
  // {
   //  block[z].display();
   // }

}

function mouseDragged()
{
  Matter.Body.setPosition(superman.body,{x: mouseX , y: mouseY})
}

