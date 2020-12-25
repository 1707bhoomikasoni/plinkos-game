var plinkos=[]
 var particles=[]
var ground1,ground2,ground3,ground4,ground5;
var ground6,ground7,ground8,ground9;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
 

function setup() {
	createCanvas(570, 700);
  
  engine = Engine.create();
	world = engine.world;

	for(var j = 75; j<=width; j=j+50)
  {
   plinkos.push(new Plinko(j,75))
  }

  for(var j = 50; j <=width-10; j=j+50)
  {
   plinkos.push(new Plinko(j,175))
  }

  for(var j=75; j <=width; j=j+50)
  {
   plinkos.push(new Plinko(j,275))
  }

  for(var j = 50; j <=width-10; j=j+50)
  {
   plinkos.push(new Plinko(j,375))
  }

  Engine.run(engine);
  ground1=new Ground(550,690,1500,10)
  ground2=new Ground(0,540,10,300)
  ground3=new Ground(80,540,10,300)
  ground4=new Ground(160,540,10,300)
  ground5=new Ground(240,540,10,300)
  ground6=new Ground(320,540,10,300)
  ground7=new Ground(400,540,10,300)
  ground8=new Ground(480,540,10,300)
  ground9=new Ground(565,540,10,300)

  
  
}


function draw() {
  rectMode(CENTER);
  background("black");
  drawSprites();
  
  for (var i = 0; i < plinkos.length; i++){
  plinkos[i].display()
  }


if(frameCount%60===0){
  particles.push(new Particle(random(width/2-10 ,width/2+10),10,10))
}

for(var j=0; j < particles.length; j++){
  particles[j].display()
}


ground1.display()
  ground2.display()
  ground3.display()
  ground4.display()
  ground5.display()
  ground6.display()
  ground7.display()
  ground8.display()
  ground9.display()
  
}