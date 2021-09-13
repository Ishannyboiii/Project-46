var ground;
var groundIMG
var ball;
var ballIMG
var player;
var playerAni;
var player2;
var player2Ani;
var playerStill;
var player2Still;
var invisGoal1;
var invisGoal2;
var Player1Score;
var Player2Score;



function preload()
  {
   ballIMG = loadImage("Pictures/soccerball.png");
   groundIMG = loadImage("Pictures/soccerField.jpg");
   playerAni = loadAnimation("Pictures/Soccer1.png","Pictures/Soccer2.png","Pictures/Soccer3.png","Pictures/Soccer4.png","Pictures/Soccer5.png","Pictures/Soccer6.png");
   player2Ani = loadAnimation("Pictures/dude2.png","Pictures/dude3.png","Pictures/dude4.png","Pictures/dude5.png");
   player2Still = loadImage("Pictures/dude2.png");
   playerStill = loadImage("Pictures/Soccer1.png");
   player2Ani = loadAnimation("Pictures/Soccer1.png","Pictures/Soccer2.png","Pictures/Soccer3.png","Pictures/Soccer4.png","Pictures/Soccer5.png","Pictures/Soccer6.png");
  }




function setup() {
  createCanvas(windowWidth,windowHeight);
  ball = createSprite(width/2, height/2, 50, 50);
  ball.addImage("ball image", ballIMG);
  ball.scale = 0.01
  // ground = createSprite(400,220,800,400);
  // ground.addImage("ground image", groundIMG);
  // ground.scale = 1.5;
  player = createSprite(200,height/2,50,50);
  player.addImage(playerStill);
  player.scale = 0.5;

  player2 = createSprite(width-200,height/2,50,50);
  player2.addImage(player2Still);
  player2.scale = 0.5;

  invisGoal1 = createSprite(windowWidth/8,100,100,50)
  invisGoal1.visible = false;

  

}
function draw() {
  background(groundIMG);  

  edges = createEdgeSprites();

   

  


  //calling serve function
  if(keyDown("space"))
  {
    serve();

  }

  //MOVE!
  if(keyDown("w"))
  {
     player.y = player.y-5
  }
  if(keyDown("s"))
  {
     player.y = player.y+5
  }  
  if(keyDown("a"))
  {
     player.x = player.x-5
  }  
  if(keyDown("d"))
  {
     player.x = player.x+5
  }  

  if(keyDown("up"))
  {
     player2.y = player2.y-5
  }
  if(keyDown("down"))
  {
     player2.y = player2.y+5
  }  
  if(keyDown("left"))
  {
     player2.x = player2.x-5
  }  
  if(keyDown("right"))
  {
     player2.x = player2.x+5
  } 






  ball.bounceOff(edges);
  player.collide(edges);
  player2.collide(edges);


  drawSprites();
}


function serve()
{
  
  ball.velocityX = Math.round(random([-15,-10,-5,5,10,15]))
  ball.velocityY = Math.round(random([-15,-10,-5,5,10,15]))

}