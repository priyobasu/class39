var form, player,game;
var gameState=0;
var PlayerCount=0;
var database;
var allPlayers;
var distance=0;
var car1,car2,car3,car4,cars;
var carImg1,carImg2,carImg3,carImg4,ground,track;
var ground;
function preload(){
  car1Img=loadImage("images/car1.png");
  car2Img=loadImage("images/car2.png");
  car3Img=loadImage("images/car3.png");
  car4Img=loadImage("images/car4.png");
  ground=loadImage("images/ground.png");
  track=loadImage("images/track.jpg");

  

}

function setup()
{
  database=firebase.database();
  createCanvas(displayWidth-20,displayHeight-30);
  
  game = new Game();
  game.getState();
  game.start();
  // call the game object and the functions getState and start
}
function draw(){
 
  if(PlayerCount===4){
    game.update(1);
  }
  if(gameState===1){
    clear();
    game.play();
  }
  if(gameState===2){
    game.end();
  }

}