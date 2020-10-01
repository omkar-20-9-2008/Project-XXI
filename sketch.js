var bullet;
var wall;
var speed;
var weight;
var thickness;
var damage;

function setup() {
  createCanvas(1600,400);

speed = random(223,321);
weight = random(30,52);
thickness = random(22,83);
damage = (0.5*weight*speed*speed/(thickness*thickness*thickness));

bullet = createSprite(50,200,80,10);
bullet.shapeColor="white";
bullet.velocityX=speed;
wall = createSprite(1200,200,thickness,height/2);
wall.shapeColor = rgb(80,80,80);

 }

function draw() {
  background(0,0,0); 
 
hasCollided();

  drawSprites();
}

function hasCollided(){
  if(bullet.x-wall.x<bullet.width/2+wall.width/2 && wall.x-bullet.x<wall.width/2+bullet.width/2 && bullet.x-wall.x<bullet.height/2+wall.height/2 && wall.x-bullet.x<wall.height/2+bullet.height/2){
    bullet.velocityX=0;
if(damage<10){
wall.shapeColor=rgb(0,255,0);
} else if(damage>10){
  wall.shapeColor=rgb(255,0,0);
}
}
}