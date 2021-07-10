
var wall1, wall2, wall3, wall4, wall5, wall6, wall7, wall8, wall9, wall10,wall11,wall12;
var wall13,wall14,wall15,wall16,wall17,wall18,wall19,wall20,wall21,wall22,wall23,wall24;
var wall25,wall26,wall27,wall28,wall29,wall30,wall31,wall32,wall33,wall34,wall35,wall36;
var wall37,wall38,wall39,wall40;
var itemBox1,itemBox2,itemBox3
var player;
var torch1,torch2,torch3,torch4, torchImg;
var enemy1,enemy2,enemy3,enemyleftimg,enemyrightimg;

var redKey,redKeyIMG;
var redDoor,redDoorIMG,jumpingimg;
function preload(){

  stickmanimg=loadAnimation("player/frame0right.gif","player/frame1right.gif","player/frame2right.gif",
  "player/frame3right.gif","player/frame4right.gif")

   leftmanimg=loadAnimation("leftman/frame0left.gif","leftman/frame1left.gif","leftman/frame2left.gif","leftman/frame3left.gif","leftman/frame4left.gif")

   redKeyIMG=loadImage("redkey-nobackground.gif")
   
   standingImg=loadImage("standing.png")

   redDoorImg= loadImage("red door.png")

   torchImg= loadImage("torch.png")

   jumpingimg=loadAnimation("jumping/frame0jump.gif","jumping/frame1jump.gif","jumping/frame2jump.gif","jumping/frame3jump.gif","jumping/frame4jump.gif","jumping/frame5jump.gif","jumping/frame6jump.gif","jumping/frame7jump.gif","jumping/frame8jump.gif","jumping/frame9jump.gif","jumping/frame10jump.gif")

   enemyleftimg=loadImage("fire left.png")
   enemyrightimg=loadImage("fire right.png")
  }



function setup() {
  createCanvas(displayWidth,displayHeight);

 
 
 itemBox1 = createSprite(50,100,55,55)
 itemBox1.shapeColor="red"

 itemBox2 = createSprite(150,100,55,55)
 itemBox2.shapeColor="green"

 itembox1 = createSprite(50,200,55,55)
 itembox1.shapeColor="blue"

 wall1= createSprite(10, 10, 505, 10);
 wall1.shapeColor="black" 

 wall2= createSprite(10, 60, 500, 10);
 wall2.shapeColor="black"

 wall3= createSprite(100, 10, 500, 10);
 wall3.shapeColor="black"

 wall4= createSprite(350, 130, 10, 250);
 wall4.shapeColor="black"

 wall5= createSprite(300, 380, 10, 300); 
 wall5.shapeColor="black"

 wall6=createSprite(255,160,10,200)
 wall6.shapeColor="black"

 wall7=createSprite(300,330,200,10)
 wall7.shapeColor="black"
 
 wall8=createSprite(10,260,500,10)
 wall8.shapeColor="black"
 
 wall9=createSprite(10,405,20,300)
 wall9.shapeColor="black"

 wall10= createSprite(160,450,200,10)
 wall10.shapeColor="black"
 
 wall11= createSprite(800,10,900,10)
 wall11.shapeColor="black"

 wall12= createSprite(400,360,10,200)
 wall12.shapeColor="black"

 wall13= createSprite(445,260,100,10)
 wall13.shapeColor="black"

 wall14= createSprite(445,210,10,100)
 wall14.shapeColor="black"

 wall15= createSprite(500,240,10,160)
 wall15.shapeColor="black"

 wall16= createSprite(530,260,100,10)
 wall16.shapeColor="black"

 wall17= createSprite(530,320,100,10)
 wall17.shapeColor="black"

 wall18= createSprite(580,365,10,100)
 wall18.shapeColor="black"

 wall19= createSprite(1000,142,300,10)
 wall19.shapeColor="black"

 wall20= createSprite(400,540,100,10)
 wall20.shapeColor="black"

 wall21= createSprite(200,520,10,150)
 wall21.shapeColor="black"

 wall22= createSprite(530,380,100,10)
 wall22.shapeColor="black"

 wall23= createSprite(400,540,100,10)
 wall23.shapeColor="black"

 wall24= createSprite(400,540,100,10)
 wall24.shapeColor="black"

 wall25= createSprite(150,590,100,10)
 wall25.shapeColor="black"

 wall26= createSprite(200,590,100,10)
 wall26.shapeColor="black"

 wall27= createSprite(535,420,100,10)
 wall27.shapeColor="black"

 wall28= createSprite(510,520,10,100)
 wall28.shapeColor="black"

 wall29= createSprite(710,310,150,10)
 wall29.shapeColor="black"

 wall30= createSprite(740,160,10,300)
 wall30.shapeColor="black"

 wall31= createSprite(740,660,100,10)
 wall31.shapeColor="black"

 wall32=createSprite(850,187,10,100)
 wall32.shapeColor="black"

 wall33= createSprite(830,160,40,10)
 wall33.shapeColor="black"

 wall34= createSprite(760,190,40,10)
 wall34.shapeColor="black"
 
 player=createSprite(50,35,5,5)
 player.addAnimation("running",stickmanimg)
 player.addAnimation("walking",leftmanimg)
 player.addAnimation("jumping",jumpingimg)
 player.scale=0.15

 torch1=createSprite(300,150,5,5)
 torch1.addImage(torchImg)
 torch1.scale=0.14

 redKey=createSprite(560,350,5,5)
 redKey.addImage(redKeyIMG)
 redKey.scale=0.15

 redDoor= createSprite(1000,75,5,5)
 redDoor.addImage(redDoorImg)
 redDoor.scale=0.5

 enemy1 = createSprite(200,100,10,10)
 enemy1.addImage(enemyleftimg)
 enemy1.scale=0.2
}

function draw() {
  background("white"); 

  

  if(redKey.collide(player)){
   redKey.x=50;
   redKey.y=100
   redKey.scale=0.16
  }
  
  
  if(keyDown("right")){
    player.changeAnimation("running",stickmanimg)
    player.x=player.x+2
    //player.velocityX=2
    }

    if(keyDown("up")){
      player.y=player.y-2
      //player.velocityX=2
      player.changeAnimation("jumping",jumpingimg)
      }

 if(redKey.isTouching(player)){
  }

 if(keyDown("left")){
   player.changeAnimation("walking",leftmanimg)
   player.x=player.x-2
 }
 if(keyDown("down")){
   player.y=player.y+2
  // player.changeAnimation("jumping",jumpingimg)
 }
//if(player.velocityX (0)){
// player.changeAnimation("standing",standingImg)
//}

 player.collide(wall2)
 player.collide(wall4)
 player.collide(wall3)
 player.collide(wall5)
 player.collide(wall6)
 player.collide(wall7)
 player.collide(wall8)
 player.collide(wall9)
 player.collide(wall10)
 player.collide(redDoor)

  drawSprites();
}