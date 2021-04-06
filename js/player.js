class Player {
    constructor(){
     this.name=null;
     this.distance=0;
     this.index=null;
     this.rank=0;
    }

    updateCount(Count){
        database.ref('/').update({
            playerCount:Count
        })
    }
    getCount(){
        database.ref('playerCount').on("value",(data)=>{
         playerCount=data.val();
        })
    }
   static updateCarsatend(rank){
        database.ref('/').update({
            carsatend:rank
        })
    }
    getcarsatend(){
        database.ref('carsatend').on("value",(data)=>{
         this.rank=data.val();
        })
    }
    update(){
        database.ref("players/player" + this.index).update({
            name: this.name,
            distance: this.distance
        })
    }

    static getPlayerInfo(){
    database.ref("players").on("value",(data)=>{
        allPlayers=data.val();
    })
    }
}