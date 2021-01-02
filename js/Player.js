class Player{


    constructor()
    {
        // add properties of the player object ( name, index,distance)
        this.name=null;
        this.index=null;
        this.distance=0;

    }
    getCount() //getting the playercount from the database( update the playerCount for each browser)
    {
 
        /*var playercountref = database.ref("PlayerCount");
        playercountref.on("value", function(data){
            PlayerCount = data.val();*/
            var playercountref = database.ref("PlayerCount");
        playercountref.on("value", (data)=>{
            PlayerCount = data.val();
        })

        

    }
   
   
    updateCount(count) //updating the playercount to database
    {
    
        database.ref('/').update({
        PlayerCount: count
        

        });
       
        
    }



    
    update() // updating name (using index of the player update name and distance to the database change the reference of the database to Players/Player)
    
    {
      /*var playerIndex = "Player"+PlayerCount;
      
      database.ref(playerIndex).set({
          name:name*/
          var playerIndex = "Players/Player"+this.index;
          console.log("playerIndex"+playerIndex)
      
      database.ref(playerIndex).set({
          name:this.name,
          distance:this.distance


      });

}

static getPlayerInfo() // refer to the database and listen to the changes in the details of each players and update it in allPlayers
{
var playerInfoRef=database.ref('Players');
playerInfoRef.on("value",(data)=>{
    allPlayers=data.val();
})

}




}