
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;


var ground;
var divisions=[];
var particles=[];
var plinkos=[];
var divisionheight=300;

function setup() {
	createCanvas(480, 800);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	
	ground= new Ground(240,800,480,20);
	for (var k=0;k<=width;k=k+80){
		divisions.push(new Divisions(k,height-divisionheight/2,10,divisionheight))
	}

	Engine.run(engine);

	
for(var j=40;j<=width;j=j+50){

	plinkos.push(new Plinko(j,75));
}

for(var j=15;j<=width-10;j=j+50){

	plinkos.push(new Plinko(j,175));
}

for(var j=40;j<=width;j=j+50){

	plinkos.push(new Plinko(j,275));
}	

for(var j=15;j<=width-10;j=j+50){

	plinkos.push(new Plinko(j,375));
}

if(frameCount%60===0){
	particles.push(new Particle(random(width/2-10,width/2+10),10,10))
}
}



  



function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();

  for (var k = 0; k < divisions.length; k++) {
	  divisions[k].display();
 }

 for (var i = 0; i < plinkos.length; i++) {
	  plinkos[i].display();
	 }

	 for (var j = 0; j < particles.length; j++){
	   particles[j].display(); 
	}

 ground.display();

}

