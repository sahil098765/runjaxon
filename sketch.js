
function preload(){
  //pre-load images
  platform = loadImage("path.png")
  runnerer = loadAnimation("Runner-1.png","Runner-2.png")
  points = loadImage("coin.png")

}

function setup(){
  createCanvas(400,400);
  //create sprites here 
 path = createSprite(200,1,20,20)
  runner = createSprite(200,300,1,1)
  path.addImage("ground", platform)
  runner.addAnimation("run", runnerer)
  
 

}

function draw() {
  background(0);
  runner.x = World.mouseX
  if (keyDown ("space")){
  path.velocityY = 5
  }
  if(path.y < 0){
  path.y = 400
  }
  
  
  spawncoin(); 
  drawSprites();
}

function spawncoin();
{
  if  (frameCount === 0) {
  console.log(frameCount)
  coin = createSprite(200,1,10,10)
  coin.addImage(points)
  coin.y = math.round(random(10,60))
  coin.scale = 0.4
  coin.velocityY = -3
  }
}
