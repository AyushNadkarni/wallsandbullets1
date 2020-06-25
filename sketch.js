var wall,thickness;
var bullet, speed,weight;


function setup() {
  createCanvas(1600,400);
 

  bullet = createSprite(100,200,50,20);
  speed = random(223,321);
  bullet.velocityX = speed;
  weight = random(30,52);
  bullet.shapeColor = ("white");

  thickness=random(22,83);
wall = createSprite(1200,200,thickness,height/2);
fill(80,80,80);
}

function draw() {
  background("blue"); 

  function hasCollided(bullet,wall)
{

  bulletRightEdge = bullet.x + bullet.width;
  wallLeftEdge = wall.x;
  if (bulletRightEdge>=wallLeftEdge)
  {
    return  true
  }
  return false;
}

if(hasCollided(bullet,wall))
{
bullet.velocityX = 0;
var damage = 0.5 * weight * speed /(thickness *thickness *thickness);

if(damage > 10)
{
  wall.shapeColor = color(255,0,0);
}

if (damage < 10)
{
  wall.shapeColor = color(0,255,0);
}
}

drawSprites();
}

