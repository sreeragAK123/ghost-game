var place,placeImage;
var ground;
var ghost,ghostImage;
var rock,rockImage;
var ground,groundImage;
var score,scoreImage;
var restart;
var gameOver,gameOverImage;
var sc = 0

function preload(){
  placeImage = loadImage("place (2).jpg");
  ghostImage = loadImage("ghost1.png");
  rockImage = loadImage("rock.png");
  scoreImage = loadImage("score.png");
  gameOverImage = loadImage("gameOver.png");
}

function setup() {
  createCanvas(600, 450);
  place = createSprite(200,200,10,10);
  place.addImage(placeImage);
  place.scale=0.8;
  place.velocityX = -5;
  
  ground = createSprite(150,385,100,10);
  ground.visible = false;
  
  ghost = createSprite(150,300,100,10);
  ghost.addImage(ghostImage);
  ghost.scale=0.1;
  ghost.bounceOff = ground;
  
  
  score = createSprite(300,50,20,20);
  score.addImage(scoreImage); 
  score.scale = 0.2
  
  ground = createSprite(300,400,500,20);
  ground.visible = false;
  
  gameOver = createSprite(300,200,20,20);
  gameOver.addImage(gameOverImage);
  gameOver.scale = 1.2;
  gameOver.visible = false;
  
   rockGroup = new Group();
  
  
}

function draw() {
  background(220);
  
  if (place.x<200){
    place.x = 300
  }
  
  spownGhost();
  sc = sc + Math.round(getFrameRate()/60);
  
  
  if (ghost.isTouching(rockGroup)||ghost.y>450){
    gameOver.visible = true;
    ghost.destroy();
    place.velocityX = 0;
    rockGroup.setVelocityXEach(0);
    rockGroup.destroyEach();
    sc = 0;
    rockGroup.visible = false;
  }
  
drawSprites();
  text("score = "+sc,300,50);
}

function spownGhost(){                                          
 
if (keyDown("space")){
    ghost.velocityY = -4;
  }
     if (frameCount%200===0){
       
         
   
      
    rock = createSprite (500,350,10,10);
    rock2 = createSprite (500,100,10,10);
    rock2.addImage(rockImage);
    rock.addImage(rockImage);
    rock2.velocityX = -5;
    rock2.scale = 0.1
    rock.scale = 0.1;
    rock.velocityX=-10;
    rock.lifetime = 200;
    
   rockGroup.add(rock);
   rockGroup.add(rock2);
   
 }
  
 if(keyDown("space")&& ghost.y >= 140) {
        ghost.velocityY = -18;
 }
ghost.velocityY = ghost.velocityY + 0.8 
}