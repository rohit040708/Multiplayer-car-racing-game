class Game {
    constructor(){

    }

    getGameState() {
        database.ref('gameState').on("value", function(data){
            gameState= data.val();
        })
    }

    updateGameState(state) {
        database.ref('/').update({
            gameState: state
        })
    }

    async start() {
        if(gameState==0){
            background(carbg);
            player=new Player();
            var playerCountref=await database.ref('playerCount').once("value");
            if(playerCountref.exists()){
              playerCount=playerCountref.val();
              player.getCount();
            }
            form= new Form();
            form.display();
            
        }
        car1=createSprite(100,200);
        car1.addImage(car1Image);
        car2=createSprite(300,200);
        car2.addImage(car2Image);
        car3=createSprite(500,200);
        car3.addImage(car3Image);
        car4=createSprite(700,200);
        car4.addImage(car4Image);
        cars=[car1,car2,car3,car4];
    }

    play() {
        form.hide();
        Player.getPlayerInfo();
        player.getcarsatend();

        if(allPlayers !== undefined){
          background(70,70,70);
          image(track,0,-height*4,width,height*5);
          var x=175;
          var y=0;
          var index=0;
            for(var plr in allPlayers){
              index=index+1;
              x=x+200;
              y=height-allPlayers[plr].distance;
              cars[index-1].x=x;
              cars[index-1].y=y;
              if (index ===  player.index){
                fill("red");
                ellipse(x,y,60,60)
                camera.position.x=width/2;
                camera.position.y=cars[index-1].y;}
             
            }
          }
      
          if(keyIsDown(UP_ARROW) && player.index !== null){
            player.distance +=50
            player.update();
          }
          if(player.distance>2700){
            gameState=2;
            player.rank+=1;
            Player.updateCarsatend(player.rank)
          }
          console.log(player.distance)
        drawSprites();
    }
    end(){
      console.log ("game ended") 
      textSize(30);
      rectMode(CENTER);
      fill("white")
      rect(width/2,cars[player.index-1].y-100,500,300);
      fill("red")
      text("BOOYAH TIME!!",width/2-70,cars[player.index-1].y-100)
      text(player.name+' rank is: '+player.rank,width/2-70,cars[player.index-1].y-50);
    }

}