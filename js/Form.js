class Form{

constructor(){
// define input, button and greeting element for each object
this.input= createInput("name");
this.button= createButton("Play");
 this.greeting= createElement("h3");
 this.title= createElement("h2");
}
hide(){
    this.button.hide();
    this.input.hide();
    this.greeting.hide();
    this.title.hide();
    
}
display(){


    // create the title of the game
 
 this.title.html("Car Racing Game");
 this.title.position(displayWidth/2-50,0);


// position the input and the button
 
 this.input.position(displayWidth/2,displayHeight/2-80);
 this.button.position(displayWidth/2+30,displayHeight/2);



 this.button.mousePressed(()=>{
    this.button.hide();
    this.input.hide();


    player.name = this.input.value();
    PlayerCount = PlayerCount+1; 
    player.index=PlayerCount;
    player.update();
   
    player.updateCount(PlayerCount)
    this.greeting.html("Hello "+player.name);
    this.greeting.position(displayWidth/2-70,displayHeight/4);

    /* when the mouse is pressed then 
     1. hide the button and the input
     2. take input in the name variable
     3. increment the playercount and update the player name and playerCount
     4.Create the greeting */

 });


}



}