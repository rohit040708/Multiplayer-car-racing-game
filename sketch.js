var gameState=0;
var playerCount;
var database;
var form, game, player;
var allPlayers;
var carbg;
var car1,car2,car3,car4,cars;
var car1Image,car2Image,car3Image,car4Image,track;

function preload(){
    carbg=loadImage("Images/CAR BG.jpg") ;
    car1Image=loadImage("Images/car1.png") ;
    car2Image=loadImage("Images/car2.png") ;
    car3Image=loadImage("Images/car3.png") ;
    car4Image=loadImage("Images/car4.png") ;
    track=loadImage("Images/track.jpg") ;
}




function setup(){
    database=firebase.database();
    createCanvas(displayWidth-60,displayHeight-210);

    game= new Game();
    game.getGameState();
    game.start();


}




function draw(){
   // background("white");

    if(playerCount===4){
        game.updateGameState(1);

    }
    if(gameState===1){
        clear();
        game.play();

    }
    if(gameState===2){
        game.end();
    }
   
}

