var bg,bgImg,player,playerImg,alien1,alien2,alien1Img,alien2Img,ufo,ufoImg,bulletImg,alien3,alien4,shelter,shelterImg
var alienGroup,bulletGroup,shelterGroup
var edges;




function preload(){
   bgImg = loadImage("wallpaper.jpg")
   playerImg=loadImage("player.png")
   alien1Img=loadImage("alien.png")
   alien2Img=loadImage("alien_on_spaceship.png")
   ufoImg=loadImage("ufo.png")
   bulletImg=loadImage("bullet.png")
   shelterImg=loadImage("shelter.png")
}



function setup(){
   createCanvas(1500,900);
   bg=createSprite(750,450);
   bg.addImage(bgImg);

   player=createSprite(750,850);
   player.addImage(playerImg);
   player.scale=0.2;

   alienGroup=createGroup();
   shelterGroup=createGroup();
   bulletGroup=createGroup();
   
   for(var i=100; i<1450 ; i=i+100){
      alien1=createSprite(i,100);
      alien1.addImage(alien1Img);
      alien1.scale=0.1;
      alienGroup.add(alien1);

      ufo=createSprite(i,300)
      ufo.addImage(ufoImg)
      ufo.scale=0.05
      alienGroup.add(ufo)

      alien3=createSprite(i,400);
      alien3.addImage(alien1Img);
      alien3.scale=0.1;
      alienGroup.add(alien3);
      
   }
   
   for(var i=50; i<1450; i=i+100){
      alien2=createSprite(i,200);
      alien2.addImage(alien2Img);
      alien2.scale=0.1;
      alienGroup.add(alien2)

      alien4=createSprite(i,500);
      alien4.addImage(alien2Img);
      alien4.scale=0.1;
      alienGroup.add(alien4)
   }
   alienGroup.setVelocityXEach(2)
   edges=createEdgeSprites();
   

   for(var i=150 ; i<1450; i=i + 300){
      shelter=createSprite(i,700)
      shelter.addImage(shelterImg)
      shelter.scale=0.6;
      shelterGroup.add(shelter);

   }


}


function draw(){

   background('BLACK')
   drawSprites();

   textSize(50);
   fill(rgb(random(0,255),random(0,255),random(0,255)));
   text ("SPACE INVADERS", 550,50);

   if(keyDown(LEFT_ARROW)){
      player.x = player.x-5
   }

   if(keyDown(RIGHT_ARROW)){
      player.x = player.x+5
   }

   if(keyWentDown("space")){
      shoot()
   }

   //when the bullet hits the enemy (use them as groups) then that enemy  gets delete.
   for(var i=0; i<alienGroup.length ; i++){
      for(var j=0; j<bulletGroup.length ; j++){
         if(bulletGroup[j].isTouching(alienGroup[i])){
            alienGroup[i].destroy();
            bulletGroup[j].destroy();
         }
      }
   }

   //when the bulletgroup touches the sheltergroup, bullet gets destroy.
   for(var b=0; b<bulletGroup.length;b++){
      for(var a=0 ;a<shelterGroup.length-1; a++){ 
         if(bulletGroup[b].isTouching(shelterGroup[a])){
            bulletGroup[b].destroy();
         }
      }
   }

  

   
}

function shoot(){

   var bullet=createSprite(player.x,player.y,10,20)
   bullet.addImage(bulletImg)
   bullet.scale=0.02
   bullet.velocityY= -30
   bulletGroup.add(bullet)

}






