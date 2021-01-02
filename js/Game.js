class Game{

    constructor(){


    }
   
   
   
      getState() // read the game State from Database
   
    { 
   
        var gamestateref = database.ref("gameState");
        gamestateref.on("value",function(data){
           gameState = data.val();

        })

    }
    
    
    update(state) // update the gameState from the database
    {

      database.ref('/').update({
        gameState:state

        });
        
    

    }
    async start() // start the game when the gamestate is zero and display the  form on the screen
    {
    

      if(gameState === 0){

        player = new Player();
        var playerCountRef=await database.ref("PlayerCount").once("value");
        if(playerCountRef.exists()){
          PlayerCount=playerCountRef.val();
          player.getCount();
        }
        form = new Form();
        form.display();

      }
      car1=createSprite(100,200);
      car1.addImage(car1Img);
      car2=createSprite(300,200);
      car2.addImage(car2Img);
      car3=createSprite(500,200);
      car3.addImage(car3Img);
      car4=createSprite(700,200);
      car4.addImage(car4Img);
      cars=[car1,car2,car3,car4];
    }

      play() //when gameState reaches 1 the form will be hidden and the game will start
      {
        form.hide();
        textSize(30);
        text("Game Start",120,100);
        Player.getPlayerInfo(); // get playerinfo
        //console.log(allPlayers);
        
        if(allPlayers!=undefined){
          background("#4a4a4a");
          var index=0;
          var x=175;
          var y=0;
          image(track,0,-displayHeight*4,displayWidth,displayHeight*5);
          console.log("distance"+player.distance)
             if(player.distance===3400){
               
               gameState=2;
             }
        
          for(var plr in allPlayers){
            index=index+1;
            x=x+200;
            y=displayHeight-allPlayers[plr].distance;
            cars[index-1].x=x;
            cars[index-1].y=y;
          
            
            if(index===player.index){
            cars[index-1].shapeColor="lime";
            console.log(camera.position.y);
            camera.position.x=displayWidth/2;
            camera.position.y=cars[index-1].y;
          }
        }
        if(keyIsDown(UP_ARROW) && player.index!==null && player.distance!=3400)
        {
          player.distance+=50;
          player.update();
        }
        drawSprites();
        }
      }
      end(){
        console.log("game ends");
      }
    }
  